import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface PaperBowlGeometryConfig {
  radiusTop: number
  radiusBottom: number
  height: number
  thickness?: number
  segments?: number
  withLid?: boolean
  color?: string
}

export class PaperBowlGeometry extends BaseGeometry {
  private config!: PaperBowlGeometryConfig
  private lidMesh?: THREE.Mesh

  constructor(config: PaperBowlGeometryConfig) {
    super()
    this.generateGeometry(config)
  }

  public getConfig(): PaperBowlGeometryConfig {
    return this.config
  }

  public generateGeometry(config: PaperBowlGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create bowl profile curve for LatheGeometry
    const points: THREE.Vector2[] = []
    const segments = config.segments || 32
    const thickness = config.thickness || config.height * 0.05
    
    // Create smooth bowl profile: wide top, narrow bottom, rounded
    points.push(new THREE.Vector2(config.radiusBottom, -config.height / 2)) // Bottom center
    points.push(new THREE.Vector2(config.radiusBottom + thickness, -config.height / 2 + thickness)) // Bottom curve start
    
    // Middle curve points for smooth bowl shape
    const midHeight = -config.height / 4
    const midRadius = (config.radiusBottom + config.radiusTop) / 2
    points.push(new THREE.Vector2(midRadius * 0.8, midHeight))
    points.push(new THREE.Vector2(midRadius * 0.9, midHeight + config.height * 0.1))
    
    // Top rim
    points.push(new THREE.Vector2(config.radiusTop - thickness, config.height / 2 - thickness))
    points.push(new THREE.Vector2(config.radiusTop, config.height / 2)) // Top edge
    
    // Create bowl geometry using LatheGeometry
    const bowlGeometry = new THREE.LatheGeometry(
      points,
      segments,
      0,
      Math.PI * 2
    )

    // Create bowl mesh with matte paper look
    const bowlMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.color || '#f5f5f5'),
      roughness: 0.8,
      metalness: 0,
      side: THREE.DoubleSide
    })
    
    const bowlMesh = new THREE.Mesh(bowlGeometry, bowlMaterial)
    bowlMesh.castShadow = true
    bowlMesh.receiveShadow = true
    bowlMesh.name = 'body'
    
    this.faces.set('body', bowlMesh)
    this.group.add(bowlMesh)

    // Create outer wrap area for texturing (slightly outside the bowl surface)
    const wrapPoints: THREE.Vector2[] = []
    const wrapHeight = config.height * 0.8
    const wrapTopRadius = config.radiusTop * 1.02
    const wrapBottomRadius = config.radiusBottom * 1.02
    
    wrapPoints.push(new THREE.Vector2(wrapBottomRadius, -wrapHeight / 2))
    wrapPoints.push(new THREE.Vector2(wrapBottomRadius * 1.1, -wrapHeight / 2 + wrapHeight * 0.1))
    wrapPoints.push(new THREE.Vector2((wrapBottomRadius + wrapTopRadius) / 2, 0))
    wrapPoints.push(new THREE.Vector2(wrapTopRadius * 0.95, wrapHeight / 2 - wrapHeight * 0.1))
    wrapPoints.push(new THREE.Vector2(wrapTopRadius, wrapHeight / 2))
    
    const wrapGeometry = new THREE.LatheGeometry(
      wrapPoints,
      segments,
      0,
      Math.PI * 2
    )
    
    const wrapMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.6,
      metalness: 0.0,
      side: THREE.FrontSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    })
    const wrapMesh = new THREE.Mesh(wrapGeometry, wrapMaterial)
    wrapMesh.name = 'wrap'
    wrapMesh.renderOrder = 1
    
    this.faces.set('wrap', wrapMesh)
    this.group.add(wrapMesh)

    // Add optional lid
    if (config.withLid) {
      this.addLid(config)
    }

    // Define face configurations
    this.faceConfigs = [
      { 
        id: 'wrap', 
        name: 'Outer Wrap', 
        uvIndex: 0, 
        textureSize: { 
          width: Math.PI * 2 * ((wrapTopRadius + wrapBottomRadius) / 2), // Circumference
          height: wrapHeight 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'body', 
        name: 'Bowl Body', 
        uvIndex: 1, 
        textureSize: { 
          width: Math.PI * 2 * ((config.radiusTop + config.radiusBottom) / 2),
          height: config.height 
        }, 
        canReceiveTexture: false 
      }
    ]

    // Add rim reinforcement
    this.addRimReinforcement(config, thickness)

    // Add bottom grip pattern
    this.addBottomGrip(config)

    // Add edges overlay
    this.addEdgesOverlay(bowlGeometry)
  }

  private addLid(config: PaperBowlGeometryConfig): void {
    // Create flat disc lid
    const lidGeometry = new THREE.CylinderGeometry(
      config.radiusTop * 1.05,
      config.radiusTop * 1.05,
      config.height * 0.05,
      config.segments || 32,
      1
    )
    
    const lidMaterial = this.createMaterial(this.currentMaterialType, config.color || '#f0f0f0')
    this.lidMesh = new THREE.Mesh(lidGeometry, lidMaterial)
    this.lidMesh.position.y = config.height / 2 + config.height * 0.025
    this.lidMesh.castShadow = true
    this.lidMesh.receiveShadow = true
    
    this.group.add(this.lidMesh)

    // Add handle to lid
    const handleGeometry = new THREE.CylinderGeometry(
      config.radiusTop * 0.1,
      config.radiusTop * 0.1,
      config.height * 0.1,
      8,
      1
    )
    
    const handleMaterial = this.createMaterial(this.currentMaterialType, '#cccccc')
    const handleMesh = new THREE.Mesh(handleGeometry, handleMaterial)
    handleMesh.position.y = config.height / 2 + config.height * 0.1
    handleMesh.castShadow = true
    handleMesh.receiveShadow = true
    
    this.group.add(handleMesh)
  }

  private addRimReinforcement(config: PaperBowlGeometryConfig, thickness: number): void {
    // Create reinforced rim around top edge
    const rimGeometry = new THREE.TorusGeometry(
      config.radiusTop,
      thickness * 1.5,
      8,
      config.segments || 32,
      Math.PI * 2
    )
    
    const rimMaterial = this.createMaterial(this.currentMaterialType, '#e8e8e8')
    
    const rimMesh = new THREE.Mesh(rimGeometry, rimMaterial)
    rimMesh.position.y = config.height / 2
    rimMesh.rotation.x = Math.PI / 2
    rimMesh.castShadow = true
    rimMesh.receiveShadow = true
    
    this.group.add(rimMesh)
  }

  private addBottomGrip(config: PaperBowlGeometryConfig): void {
    // Add grip pattern on bottom for stability
    const gripCount = 6
    for (let i = 0; i < gripCount; i++) {
      const angle = (i / gripCount) * Math.PI * 2
      const gripGeometry = new THREE.BoxGeometry(
        config.radiusBottom * 0.3,
        config.height * 0.02,
        config.radiusBottom * 0.1
      )
      
      const gripMaterial = this.createMaterial(this.currentMaterialType, '#d0d0d0')
      
      const gripMesh = new THREE.Mesh(gripGeometry, gripMaterial)
      gripMesh.position.y = -config.height / 2 - config.height * 0.01
      gripMesh.position.x = Math.cos(angle) * config.radiusBottom * 0.5
      gripMesh.position.z = Math.sin(angle) * config.radiusBottom * 0.5
      gripMesh.rotation.y = angle
      gripMesh.castShadow = true
      gripMesh.receiveShadow = true
      
      this.group.add(gripMesh)
    }
  }

  private addEdgesOverlay(geometry: THREE.BufferGeometry): void {
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x000000, 
      linewidth: 1,
      transparent: true,
      opacity: 0.15
    })
    
    const edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    this.group.add(edgesMesh)
  }

  // Optional: Method to show/hide lid
  public setLidVisible(visible: boolean): void {
    if (this.lidMesh) {
      this.lidMesh.visible = visible
    }
  }
}