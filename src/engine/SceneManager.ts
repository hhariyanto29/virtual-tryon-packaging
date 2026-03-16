import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { BaseGeometry } from './geometries/BaseGeometry'
import { BoxGeometry } from './geometries/BoxGeometry'
import { BottleGeometry } from './geometries/BottleGeometry'
import { PouchGeometry } from './geometries/PouchGeometry'
import { TubeGeometry } from './geometries/TubeGeometry'
import { PaperBagGeometry } from './geometries/PaperBagGeometry'
import { PackagingTemplate } from '../templates/types'

export type LightingPreset = 'studio' | 'outdoor' | 'dramatic'
export type CameraPreset = 'front' | 'back' | 'top' | 'isometric' | 'reset'

export class SceneManager {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private controls: OrbitControls
  private animationId: number = 0
  private gridHelper: THREE.GridHelper | null = null
  private lights: {
    ambient: THREE.AmbientLight
    keyLight: THREE.DirectionalLight
    fillLight: THREE.DirectionalLight
  }
  private isAutoRotating: boolean = false
  private autoRotateSpeed: number = 0.5
  
  private currentGeometry: BaseGeometry | null = null
  private templateHistory: string[] = []
  private textureMemory: Map<string, Map<string, string>> = new Map() // templateId -> faceId -> textureUrl

  constructor(canvas: HTMLCanvasElement) {
    // Scene with gradient background
    this.scene = new THREE.Scene()
    this.setupGradientBackground()

    // Camera with proper settings
    this.camera = new THREE.PerspectiveCamera(
      45, // FOV 45
      canvas.clientWidth / canvas.clientHeight,
      0.1, // near
      1000 // far
    )
    this.camera.position.set(8, 8, 8)

    // Renderer with advanced settings
    this.renderer = new THREE.WebGLRenderer({ 
      canvas,
      antialias: true,
      alpha: true
    })
    this.renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.0
    this.renderer.outputColorSpace = THREE.SRGBColorSpace

    // Controls with damping and limits
    this.controls = new OrbitControls(this.camera, this.renderer.domElement)
    this.controls.enableDamping = true
    this.controls.dampingFactor = 0.05
    this.controls.minDistance = 2
    this.controls.maxDistance = 50
    this.controls.maxPolarAngle = Math.PI
    this.controls.minPolarAngle = 0

    // Initialize lights
    this.lights = {
      ambient: new THREE.AmbientLight(0xffffff, 0.4),
      keyLight: new THREE.DirectionalLight(0xffffff, 0.8),
      fillLight: new THREE.DirectionalLight(0xffffff, 0.3)
    }

    // Setup lighting with studio preset by default
    this.setLightingPreset('studio')

    // Add grid helper (optional, can be toggled)
    this.addGridHelper()

    // Handle resize
    window.addEventListener('resize', this.handleResize.bind(this))
  }

  private setupGradientBackground(): void {
    // Create gradient background
    const canvas = document.createElement('canvas')
    canvas.width = 256
    canvas.height = 256
    const context = canvas.getContext('2d')
    
    if (context) {
      const gradient = context.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, '#1a1a2e')
      gradient.addColorStop(1, '#16213e')
      context.fillStyle = gradient
      context.fillRect(0, 0, canvas.width, canvas.height)
      
      const texture = new THREE.CanvasTexture(canvas)
      this.scene.background = texture
    }
  }

  private setupLights(preset: LightingPreset = 'studio'): void {
    // Clear existing lights
    if (this.lights.ambient.parent) this.scene.remove(this.lights.ambient)
    if (this.lights.keyLight.parent) this.scene.remove(this.lights.keyLight)
    if (this.lights.fillLight.parent) this.scene.remove(this.lights.fillLight)

    // Configure lights based on preset
    switch (preset) {
      case 'studio':
        this.lights.ambient.intensity = 0.4
        this.lights.ambient.color.set(0xffffff)
        
        this.lights.keyLight.intensity = 0.8
        this.lights.keyLight.position.set(10, 20, 15)
        this.lights.keyLight.color.set(0xffffff)
        this.lights.keyLight.castShadow = true
        
        this.lights.fillLight.intensity = 0.3
        this.lights.fillLight.position.set(-10, 10, -10)
        this.lights.fillLight.color.set(0xffffff)
        break
        
      case 'outdoor':
        this.lights.ambient.intensity = 0.6
        this.lights.ambient.color.set(0x87ceeb) // Sky blue
        
        this.lights.keyLight.intensity = 1.0
        this.lights.keyLight.position.set(50, 100, 50) // Sun-like
        this.lights.keyLight.color.set(0xffeb3b) // Yellow sunlight
        this.lights.keyLight.castShadow = true
        
        this.lights.fillLight.intensity = 0.4
        this.lights.fillLight.position.set(-30, 20, -30)
        this.lights.fillLight.color.set(0x4fc3f7) // Light blue
        break
        
      case 'dramatic':
        this.lights.ambient.intensity = 0.2
        this.lights.ambient.color.set(0x1a1a1a) // Dark
        
        this.lights.keyLight.intensity = 1.2
        this.lights.keyLight.position.set(15, 25, -10) // Side lighting
        this.lights.keyLight.color.set(0xff6b6b) // Reddish
        this.lights.keyLight.castShadow = true
        
        this.lights.fillLight.intensity = 0.1
        this.lights.fillLight.position.set(-5, 5, 15)
        this.lights.fillLight.color.set(0x6b6bff) // Blueish
        break
    }

    // Configure shadows for key light
    this.lights.keyLight.shadow.mapSize.width = 2048
    this.lights.keyLight.shadow.mapSize.height = 2048
    this.lights.keyLight.shadow.camera.near = 0.5
    this.lights.keyLight.shadow.camera.far = 100
    this.lights.keyLight.shadow.camera.left = -30
    this.lights.keyLight.shadow.camera.right = 30
    this.lights.keyLight.shadow.camera.top = 30
    this.lights.keyLight.shadow.camera.bottom = -30
    this.lights.keyLight.shadow.bias = -0.0001

    // Add lights to scene
    this.scene.add(this.lights.ambient)
    this.scene.add(this.lights.keyLight)
    this.scene.add(this.lights.fillLight)
  }

  private addGridHelper(): void {
    this.gridHelper = new THREE.GridHelper(20, 20, 0x444444, 0x222222)
    this.gridHelper.position.y = -0.01 // Slightly below ground to avoid z-fighting
    this.scene.add(this.gridHelper)
  }

  private handleResize(): void {
    const canvas = this.renderer.domElement
    const width = canvas.clientWidth
    const height = canvas.clientHeight
    
    if (width !== canvas.width || height !== canvas.height) {
      this.camera.aspect = width / height
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(width, height, false)
    }
  }

  public getScene(): THREE.Scene {
    return this.scene
  }

  public getCamera(): THREE.PerspectiveCamera {
    return this.camera
  }

  public getRenderer(): THREE.WebGLRenderer {
    return this.renderer
  }

  public getControls(): OrbitControls {
    return this.controls
  }

  public startAnimation(): void {
    const animate = () => {
      this.animationId = requestAnimationFrame(animate)
      
      // Handle auto-rotation
      if (this.isAutoRotating) {
        this.controls.autoRotate = true
        this.controls.autoRotateSpeed = this.autoRotateSpeed
      } else {
        this.controls.autoRotate = false
      }
      
      this.controls.update()
      this.renderer.render(this.scene, this.camera)
    }
    animate()
  }

  public stopAnimation(): void {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId)
    }
  }

  // Lighting preset method
  public setLightingPreset(preset: LightingPreset): void {
    this.setupLights(preset)
  }

  // Camera preset method with smooth transitions
  public setCameraPreset(preset: CameraPreset, duration: number = 1000): void {
    const targetPosition = new THREE.Vector3()
    const targetLookAt = new THREE.Vector3(0, 0, 0)
    
    switch (preset) {
      case 'front':
        targetPosition.set(0, 0, 15)
        break
      case 'back':
        targetPosition.set(0, 0, -15)
        break
      case 'top':
        targetPosition.set(0, 15, 0)
        break
      case 'isometric':
        targetPosition.set(10, 10, 10)
        break
      case 'reset':
        targetPosition.set(8, 8, 8)
        break
    }

    // Smooth transition using lerp
    const startPosition = this.camera.position.clone()
    const startTime = Date.now()
    
    const animateTransition = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2
      
      // Interpolate position
      this.camera.position.lerpVectors(startPosition, targetPosition, easeProgress)
      
      // Look at center
      this.camera.lookAt(targetLookAt)
      this.controls.target.copy(targetLookAt)
      this.controls.update()
      
      if (progress < 1) {
        requestAnimationFrame(animateTransition)
      }
    }
    
    animateTransition()
  }

  // Grid helper toggle
  public toggleGridHelper(visible: boolean): void {
    if (this.gridHelper) {
      this.gridHelper.visible = visible
    }
  }

  // Auto-rotation control
  public setAutoRotate(enabled: boolean, speed: number = 0.5): void {
    this.isAutoRotating = enabled
    this.autoRotateSpeed = speed
  }

  // Load HDRI environment
  public async loadHDRIEnvironment(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const loader = new RGBELoader()
      loader.load(
        url,
        (texture) => {
          texture.mapping = THREE.EquirectangularReflectionMapping
          this.scene.environment = texture
          this.scene.background = texture
          resolve()
        },
        undefined,
        (error) => {
          console.error('Failed to load HDRI:', error)
          reject(error)
        }
      )
    })
  }

  // FPS counter utility
  public getFPS(): number {
    // Simple FPS calculation (could be enhanced with stats.js)
    return this.renderer.info.render.frame / 1000
  }

  // Template management methods
  public async loadTemplate(template: PackagingTemplate): Promise<void> {
    // Save camera position before switching
    const cameraPosition = this.camera.position.clone()
    const cameraTarget = this.controls.target.clone()
    
    // Dispose current geometry
    if (this.currentGeometry) {
      this.currentGeometry.dispose()
      this.currentGeometry = null
    }
    
    // Create new geometry based on template type
    let geometry: BaseGeometry
    
    switch (template.category) {
      case 'box':
        geometry = new BoxGeometry({
          width: template.geometry.dimensions.width,
          height: template.geometry.dimensions.height,
          depth: template.geometry.dimensions.depth,
          color: template.defaultMaterial.color
        })
        break
        
      case 'bottle':
        geometry = new BottleGeometry({
          height: template.geometry.dimensions.height,
          radius: template.geometry.dimensions.radius || 0.5,
          neckHeight: template.geometry.dimensions.height * 0.2,
          neckRadius: (template.geometry.dimensions.radius || 0.5) * 0.4,
          capHeight: template.geometry.dimensions.height * 0.1,
          capRadius: (template.geometry.dimensions.radius || 0.5) * 0.45,
          segments: template.geometry.dimensions.segments,
          color: template.defaultMaterial.color
        })
        break
        
      case 'pouch':
        geometry = new PouchGeometry({
          width: template.geometry.dimensions.width,
          height: template.geometry.dimensions.height,
          depth: template.geometry.dimensions.depth,
          curveHeight: template.geometry.dimensions.height * 0.1,
          segments: template.geometry.dimensions.segments,
          color: template.defaultMaterial.color
        })
        break
        
      case 'tube':
        geometry = new TubeGeometry({
          height: template.geometry.dimensions.height,
          radius: template.geometry.dimensions.radius || 0.5,
          thickness: template.geometry.dimensions.depth,
          capHeight: template.geometry.dimensions.height * 0.1,
          segments: template.geometry.dimensions.segments,
          color: template.defaultMaterial.color
        })
        break
        
      case 'bag':
        geometry = new PaperBagGeometry({
          width: template.geometry.dimensions.width,
          height: template.geometry.dimensions.height,
          depth: template.geometry.dimensions.depth,
          handleRadius: 0.1,
          handleHeight: template.geometry.dimensions.height * 0.3,
          color: template.defaultMaterial.color
        })
        break
        
      default:
        throw new Error(`Unsupported template category: ${template.category}`)
    }
    
    // Set material type
    geometry.setMaterial(template.defaultMaterial.type as any)
    
    // Add to scene
    this.scene.add(geometry.getMesh())
    this.currentGeometry = geometry
    
    // Restore textures from memory if available
    await this.restoreTextures(template.id)
    
    // Restore camera position with smooth transition
    this.animateCameraToPosition(cameraPosition, cameraTarget, 500)
    
    // Add to history
    this.templateHistory.push(template.id)
    if (this.templateHistory.length > 10) {
      this.templateHistory.shift()
    }
  }
  
  private async restoreTextures(templateId: string): Promise<void> {
    if (!this.currentGeometry) return
    
    const textureMap = this.textureMemory.get(templateId)
    if (!textureMap) return
    
    const promises: Promise<void>[] = []
    
    textureMap.forEach((textureUrl, faceId) => {
      promises.push(this.currentGeometry!.applyTexture(faceId, textureUrl))
    })
    
    await Promise.all(promises)
  }
  
  private animateCameraToPosition(
    targetPosition: THREE.Vector3,
    targetLookAt: THREE.Vector3,
    duration: number = 1000
  ): void {
    const startPosition = this.camera.position.clone()
    const startLookAt = this.controls.target.clone()
    const startTime = Date.now()
    
    const animateTransition = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function
      const easeProgress = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2
      
      // Interpolate position
      this.camera.position.lerpVectors(startPosition, targetPosition, easeProgress)
      
      // Interpolate look-at target
      this.controls.target.lerpVectors(startLookAt, targetLookAt, easeProgress)
      this.controls.update()
      
      if (progress < 1) {
        requestAnimationFrame(animateTransition)
      }
    }
    
    animateTransition()
  }
  
  public async applyTextureToFace(faceId: string, textureUrl: string): Promise<void> {
    if (!this.currentGeometry) {
      throw new Error('No template loaded')
    }
    
    await this.currentGeometry.applyTexture(faceId, textureUrl)
    
    // Save to texture memory
    const currentTemplateId = this.templateHistory[this.templateHistory.length - 1]
    if (currentTemplateId) {
      let templateMemory = this.textureMemory.get(currentTemplateId)
      if (!templateMemory) {
        templateMemory = new Map()
        this.textureMemory.set(currentTemplateId, templateMemory)
      }
      templateMemory.set(faceId, textureUrl)
    }
  }
  
  public clearTextureFromFace(faceId: string): void {
    if (!this.currentGeometry) return
    
    this.currentGeometry.clearTexture(faceId)
    
    // Remove from texture memory
    const currentTemplateId = this.templateHistory[this.templateHistory.length - 1]
    if (currentTemplateId) {
      const templateMemory = this.textureMemory.get(currentTemplateId)
      if (templateMemory) {
        templateMemory.delete(faceId)
      }
    }
  }
  
  public setMaterialType(type: 'matte' | 'glossy' | 'metallic'): void {
    if (!this.currentGeometry) return
    
    this.currentGeometry.setMaterial(type)
  }
  
  public getCurrentGeometry(): BaseGeometry | null {
    return this.currentGeometry
  }
  
  public getTextureableFaces(): Array<{ id: string; name: string }> {
    if (!this.currentGeometry) return []
    
    return this.currentGeometry.getTextureableFaces().map(face => ({
      id: face.id,
      name: face.name
    }))
  }

  public dispose(): void {
    this.stopAnimation()
    this.controls.dispose()
    this.renderer.dispose()
    
    // Dispose current geometry
    if (this.currentGeometry) {
      this.currentGeometry.dispose()
    }
    
    // Dispose lights
    this.lights.ambient.dispose()
    this.lights.keyLight.dispose()
    this.lights.fillLight.dispose()
    
    // Dispose grid helper
    if (this.gridHelper) {
      this.gridHelper.geometry.dispose()
      const material = this.gridHelper.material as THREE.Material
      material.dispose()
    }
    
    // Clear texture memory
    this.textureMemory.clear()
    
    window.removeEventListener('resize', this.handleResize.bind(this))
  }
}