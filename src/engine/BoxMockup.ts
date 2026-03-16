import * as THREE from 'three'

export type BoxFace = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'
export type MaterialType = 'matte' | 'glossy' | 'metallic'

export class BoxMockup {
  private mesh: THREE.Mesh
  private materials: Map<BoxFace, THREE.MeshStandardMaterial>
  private textureLoader: THREE.TextureLoader
  private edgesMesh: THREE.LineSegments | null = null
  private geometry: THREE.BoxGeometry
  private defaultMaterials: Map<BoxFace, THREE.MeshStandardMaterial>
  private _currentMaterialType: MaterialType = 'matte'
  private renderer: THREE.WebGLRenderer | null = null

  constructor(width: number = 2.5, height: number = 3.5, depth: number = 2) {
    this.textureLoader = new THREE.TextureLoader()
    
    // Create geometry with proper packaging proportions
    this.geometry = new THREE.BoxGeometry(width, height, depth)
    
    // Create default materials for each face
    this.materials = new Map()
    this.defaultMaterials = new Map()
    const defaultColor = 0xffffff
    
    const faceNames: BoxFace[] = ['right', 'left', 'top', 'bottom', 'front', 'back']
    
    faceNames.forEach((face) => {
      const material = this.createMaterial('matte', defaultColor)
      material.name = face
      this.materials.set(face, material)
      
      // Store default material for reset
      const defaultMaterial = this.createMaterial('matte', defaultColor)
      defaultMaterial.name = `${face}_default`
      this.defaultMaterials.set(face, defaultMaterial)
    })
    
    // Create mesh with array of materials
    const materialArray = Array.from(this.materials.values())
    this.mesh = new THREE.Mesh(this.geometry, materialArray)
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
    
    // Add rounded edges visualization (wireframe overlay)
    this.createEdgesOverlay()
  }

  private createMaterial(type: MaterialType, color: number | string = 0xffffff): THREE.MeshStandardMaterial {
    const material = new THREE.MeshStandardMaterial({ color })
    
    switch (type) {
      case 'matte':
        material.roughness = 0.8
        material.metalness = 0.2
        break
      case 'glossy':
        material.roughness = 0.2
        material.metalness = 0.1
        break
      case 'metallic':
        material.roughness = 0.4
        material.metalness = 0.8
        break
    }
    
    return material
  }

  private createEdgesOverlay(): void {
    const edgesGeometry = new THREE.EdgesGeometry(this.geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x000000, 
      linewidth: 1,
      transparent: true,
      opacity: 0.3
    })
    
    this.edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    this.mesh.add(this.edgesMesh)
  }

  public getMesh(): THREE.Mesh {
    return this.mesh
  }

  public async applyTexture(face: BoxFace, imageUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        imageUrl,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace
          texture.anisotropy = this.renderer ? this.renderer.capabilities.getMaxAnisotropy() : 1
          const material = this.materials.get(face)
          if (material) {
            material.map = texture
            material.needsUpdate = true
          }
          resolve()
        },
        undefined,
        (error) => {
          console.error(`Failed to load texture for ${face}:`, error)
          reject(error)
        }
      )
    })
  }

  public async applyTextureToAll(imageUrl: string): Promise<void> {
    const promises: Promise<void>[] = []
    const faceNames: BoxFace[] = ['front', 'back', 'left', 'right', 'top', 'bottom']
    
    faceNames.forEach(face => {
      promises.push(this.applyTexture(face, imageUrl))
    })
    
    await Promise.all(promises)
  }

  public clearTexture(face: BoxFace): void {
    const material = this.materials.get(face)
    if (material) {
      if (material.map) {
        material.map.dispose()
      }
      material.map = null
      material.needsUpdate = true
    }
  }

  public resetTextures(): void {
    const faceNames: BoxFace[] = ['front', 'back', 'left', 'right', 'top', 'bottom']
    
    faceNames.forEach(face => {
      const currentMaterial = this.materials.get(face)
      const defaultMaterial = this.defaultMaterials.get(face)
      
      if (currentMaterial && defaultMaterial) {
        // Dispose current texture if exists
        if (currentMaterial.map) {
          currentMaterial.map.dispose()
        }
        
        // Copy properties from default material
        currentMaterial.color.copy(defaultMaterial.color)
        currentMaterial.roughness = defaultMaterial.roughness
        currentMaterial.metalness = defaultMaterial.metalness
        currentMaterial.map = null
        currentMaterial.needsUpdate = true
      }
    })
  }

  public setColor(face: BoxFace, color: number | string): void {
    const material = this.materials.get(face)
    if (material) {
      material.color.set(color)
      material.needsUpdate = true
    }
  }

  public getMaterialType(): MaterialType {
    return this._currentMaterialType
  }

  public setMaterialType(type: MaterialType): void {
    this._currentMaterialType = type
    const faceNames: BoxFace[] = ['front', 'back', 'left', 'right', 'top', 'bottom']
    
    faceNames.forEach(face => {
      const material = this.materials.get(face)
      if (material) {
        switch (type) {
          case 'matte':
            material.roughness = 0.8
            material.metalness = 0.2
            break
          case 'glossy':
            material.roughness = 0.2
            material.metalness = 0.1
            break
          case 'metallic':
            material.roughness = 0.4
            material.metalness = 0.8
            break
        }
        material.needsUpdate = true
      }
    })
  }

  public setOpacity(face: BoxFace, opacity: number): void {
    const material = this.materials.get(face)
    if (material) {
      material.transparent = opacity < 1
      material.opacity = opacity
      material.needsUpdate = true
    }
  }

  public toggleEdgesOverlay(visible: boolean): void {
    if (this.edgesMesh) {
      this.edgesMesh.visible = visible
    }
  }

  public resize(width: number, height: number, depth: number): void {
    // Dispose old geometry
    this.geometry.dispose()
    if (this.edgesMesh) {
      this.edgesMesh.geometry.dispose()
    }
    
    // Create new geometry
    this.geometry = new THREE.BoxGeometry(width, height, depth)
    this.mesh.geometry = this.geometry
    
    // Recreate edges overlay
    if (this.edgesMesh) {
      const edgesGeometry = new THREE.EdgesGeometry(this.geometry)
      this.edgesMesh.geometry = edgesGeometry
    }
  }

  public dispose(): void {
    // Dispose materials
    this.materials.forEach(material => {
      if (material.map) {
        material.map.dispose()
      }
      material.dispose()
    })
    
    this.defaultMaterials.forEach(material => {
      material.dispose()
    })
    
    // Dispose geometry
    this.geometry.dispose()
    
    // Dispose edges mesh
    if (this.edgesMesh) {
      this.edgesMesh.geometry.dispose()
      const material = this.edgesMesh.material as THREE.Material
      material.dispose()
    }
  }
}