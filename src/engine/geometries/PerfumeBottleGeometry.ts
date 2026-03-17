import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface PerfumeBottleGeometryConfig {
  baseRadius: number
  neckRadius: number
  bodyRadius: number
  totalHeight: number
  neckHeight: number
  segments?: number
  color?: string
}

export class PerfumeBottleGeometry extends BaseGeometry {
  private config!: PerfumeBottleGeometryConfig
  private capMesh!: THREE.Mesh

  constructor(config: PerfumeBottleGeometryConfig) {
    super()
    this.generateGeometry(config)
  }

  public getConfig(): PerfumeBottleGeometryConfig {
    return this.config
  }

  public generateGeometry(config: PerfumeBottleGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create elegant bottle profile curve for LatheGeometry
    const points: THREE.Vector2[] = []
    const segments = config.segments || 32
    const bodyHeight = config.totalHeight - config.neckHeight
    
    // Create bottle profile: flat base → wide body → narrow neck
    points.push(new THREE.Vector2(config.baseRadius, -config.totalHeight / 2)) // Bottom center
    points.push(new THREE.Vector2(config.baseRadius * 0.95, -config.totalHeight / 2 + config.totalHeight * 0.02)) // Base curve
    
    // Body curve (wide part)
    points.push(new THREE.Vector2(config.bodyRadius * 0.8, -config.totalHeight / 2 + bodyHeight * 0.2))
    points.push(new THREE.Vector2(config.bodyRadius, -config.totalHeight / 2 + bodyHeight * 0.5)) // Widest point
    points.push(new THREE.Vector2(config.bodyRadius * 0.9, -config.totalHeight / 2 + bodyHeight * 0.8))
    
    // Shoulder curve (transition to neck)
    points.push(new THREE.Vector2(config.neckRadius * 1.5, -config.totalHeight / 2 + bodyHeight * 0.9))
    points.push(new THREE.Vector2(config.neckRadius * 1.2, -config.totalHeight / 2 + bodyHeight * 0.95))
    
    // Neck
    points.push(new THREE.Vector2(config.neckRadius, -config.totalHeight / 2 + bodyHeight))
    points.push(new THREE.Vector2(config.neckRadius, -config.totalHeight / 2 + bodyHeight + config.neckHeight * 0.8))
    
    // Lip/opening
    points.push(new THREE.Vector2(config.neckRadius * 1.1, -config.totalHeight / 2 + bodyHeight + config.neckHeight * 0.9))
    points.push(new THREE.Vector2(config.neckRadius * 0.9, -config.totalHeight / 2 + bodyHeight + config.neckHeight)) // Top edge

    // Create bottle geometry using LatheGeometry
    const bottleGeometry = new THREE.LatheGeometry(
      points,
      segments,
      0,
      Math.PI * 2
    )

    // Create bottle mesh with glass/crystal look
    const bottleMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.color || '#ffffff'),
      roughness: 0.05,
      metalness: 0.1,
      transparent: true,
      opacity: 0.3,
      side: THREE.DoubleSide,
      envMapIntensity: 1.0
    })
    
    const bottleMesh = new THREE.Mesh(bottleGeometry, bottleMaterial)
    bottleMesh.castShadow = true
    bottleMesh.receiveShadow = true
    bottleMesh.name = 'body'
    
    this.faces.set('body', bottleMesh)
    this.group.add(bottleMesh)

    // Create label area on body (rectangular texture region)
    const labelHeight = bodyHeight * 0.6
    const labelWidth = Math.PI * 2 * config.bodyRadius * 0.7 // 70% of circumference
    
    const labelGeometry = new THREE.CylinderGeometry(
      config.bodyRadius * 1.02,
      config.bodyRadius * 1.02,
      labelHeight,
      segments,
      1,
      true,
      0,
      Math.PI * 2 // Full wrap around bottle
    )
    
    const labelMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.3,
      metalness: 0.0,
      side: THREE.FrontSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    })
    const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial)
    labelMesh.position.y = -config.totalHeight / 2 + bodyHeight * 0.5
    labelMesh.castShadow = true
    labelMesh.receiveShadow = true
    labelMesh.name = 'label'
    labelMesh.renderOrder = 1
    
    this.faces.set('label', labelMesh)
    this.group.add(labelMesh)

    // Create cap (CylinderGeometry on top)
    const capGeometry = new THREE.CylinderGeometry(
      config.neckRadius * 1.5,
      config.neckRadius * 1.3,
      config.totalHeight * 0.15,
      segments,
      1
    )
    
    const capMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#f0f0f0'),
      roughness: 0.3,
      metalness: 0.5,
      side: THREE.DoubleSide
    })
    
    this.capMesh = new THREE.Mesh(capGeometry, capMaterial)
    this.capMesh.position.y = config.totalHeight / 2 - config.totalHeight * 0.075
    this.capMesh.castShadow = true
    this.capMesh.receiveShadow = true
    
    this.group.add(this.capMesh)

    // Add decorative ring between cap and neck
    const ringGeometry = new THREE.TorusGeometry(
      config.neckRadius * 1.1,
      config.totalHeight * 0.01,
      8,
      segments,
      Math.PI * 2
    )
    
    const ringMaterial = this.createMaterial('metallic', '#d4af37') // Gold color
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
    ringMesh.position.y = config.totalHeight / 2 - config.totalHeight * 0.15
    ringMesh.rotation.x = Math.PI / 2
    ringMesh.castShadow = true
    ringMesh.receiveShadow = true
    
    this.group.add(ringMesh)

    // Define face configurations
    this.faceConfigs = [
      { 
        id: 'label', 
        name: 'Label Area', 
        uvIndex: 0, 
        textureSize: { 
          width: labelWidth,
          height: labelHeight 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'body', 
        name: 'Bottle Body', 
        uvIndex: 1, 
        textureSize: { 
          width: Math.PI * 2 * config.bodyRadius,
          height: config.totalHeight 
        }, 
        canReceiveTexture: false 
      }
    ]

    // Add liquid inside bottle
    this.addLiquidContent(config, bodyHeight)

    // Add embossed brand/text on cap
    this.addCapDetails(config)

    // Add refractive/caustic effects
    this.addOpticalEffects(config)

    // Add edges overlay
    this.addCrystalEdges(bottleGeometry)
  }

  private addLiquidContent(config: PerfumeBottleGeometryConfig, bodyHeight: number): void {
    // Create liquid inside bottle
    const liquidPoints: THREE.Vector2[] = []
    const liquidHeight = bodyHeight * 0.7
    const liquidRadius = config.bodyRadius * 0.85
    
    liquidPoints.push(new THREE.Vector2(liquidRadius * 0.2, -config.totalHeight / 2 + config.totalHeight * 0.05))
    liquidPoints.push(new THREE.Vector2(liquidRadius, -config.totalHeight / 2 + config.totalHeight * 0.1))
    liquidPoints.push(new THREE.Vector2(liquidRadius * 0.95, -config.totalHeight / 2 + liquidHeight * 0.5))
    liquidPoints.push(new THREE.Vector2(liquidRadius * 0.7, -config.totalHeight / 2 + liquidHeight))
    liquidPoints.push(new THREE.Vector2(liquidRadius * 0.3, -config.totalHeight / 2 + liquidHeight * 1.05))
    
    const liquidGeometry = new THREE.LatheGeometry(
      liquidPoints,
      config.segments || 32,
      0,
      Math.PI * 2
    )
    
    const liquidMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#e6f7ff'), // Light blue perfume color
      transmission: 0.9,
      roughness: 0.1,
      thickness: 0.5,
      ior: 1.33, // Water-like index of refraction
      side: THREE.DoubleSide
    })
    
    const liquidMesh = new THREE.Mesh(liquidGeometry, liquidMaterial)
    liquidMesh.position.y = -config.totalHeight / 2 + liquidHeight * 0.5
    liquidMesh.castShadow = true
    liquidMesh.receiveShadow = true
    
    this.group.add(liquidMesh)
  }

  private addCapDetails(config: PerfumeBottleGeometryConfig): void {
    // Add embossed text/logo on cap
    const detailGeometry = new THREE.CylinderGeometry(
      config.neckRadius * 1.4,
      config.neckRadius * 1.4,
      config.totalHeight * 0.02,
      config.segments || 32,
      1
    )
    
    const detailMaterial = this.createMaterial('metallic', '#c0c0c0')
    
    const detailMesh = new THREE.Mesh(detailGeometry, detailMaterial)
    detailMesh.position.y = config.totalHeight / 2 - config.totalHeight * 0.04
    detailMesh.castShadow = true
    detailMesh.receiveShadow = true
    
    this.group.add(detailMesh)

    // Add spray mechanism
    const sprayGeometry = new THREE.CylinderGeometry(
      config.neckRadius * 0.3,
      config.neckRadius * 0.2,
      config.totalHeight * 0.08,
      8,
      1
    )
    
    const sprayMaterial = this.createMaterial('metallic', '#a0a0a0')
    
    const sprayMesh = new THREE.Mesh(sprayGeometry, sprayMaterial)
    sprayMesh.position.y = config.totalHeight / 2 + config.totalHeight * 0.04
    sprayMesh.castShadow = true
    sprayMesh.receiveShadow = true
    
    this.group.add(sprayMesh)
  }

  private addOpticalEffects(config: PerfumeBottleGeometryConfig): void {
    // Add light refraction/caustic effect particles
    const particleCount = 20
    const particleGeometry = new THREE.SphereGeometry(config.totalHeight * 0.01, 4, 4)
    
    for (let i = 0; i < particleCount; i++) {
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.1 + Math.random() * 0.1
      })
      
      const particleMesh = new THREE.Mesh(particleGeometry, particleMaterial)
      
      // Random position within bottle body
      const angle = Math.random() * Math.PI * 2
      const radius = config.bodyRadius * 0.7 * Math.random()
      const height = -config.totalHeight / 2 + config.totalHeight * 0.3 + Math.random() * config.totalHeight * 0.4
      
      particleMesh.position.x = Math.cos(angle) * radius
      particleMesh.position.y = height
      particleMesh.position.z = Math.sin(angle) * radius
      
      this.group.add(particleMesh)
    }
  }

  private addCrystalEdges(geometry: THREE.BufferGeometry): void {
    // Create sharp, crystal-like edges
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      linewidth: 1,
      transparent: true,
      opacity: 0.2
    })
    
    const edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    this.group.add(edgesMesh)
  }

  // Method to remove cap
  public setCapRemoved(removed: boolean): void {
    if (this.capMesh) {
      this.capMesh.visible = !removed
    }
  }
}