import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface BoxGeometryConfig {
  width: number
  height: number
  depth: number
  color?: string
}

export class BoxGeometry extends BaseGeometry {
  private config: BoxGeometryConfig

  constructor(config: BoxGeometryConfig) {
    super()
    this.config = config
    this.generateGeometry(config)
  }

  public generateGeometry(config: BoxGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create box geometry
    const geometry = new THREE.BoxGeometry(
      config.width,
      config.height,
      config.depth
    )

    // Define face configurations
    this.faceConfigs = [
      { id: 'front', name: 'Front', uvIndex: 4, textureSize: { width: config.width, height: config.height }, canReceiveTexture: true },
      { id: 'back', name: 'Back', uvIndex: 5, textureSize: { width: config.width, height: config.height }, canReceiveTexture: true },
      { id: 'left', name: 'Left', uvIndex: 0, textureSize: { width: config.depth, height: config.height }, canReceiveTexture: true },
      { id: 'right', name: 'Right', uvIndex: 1, textureSize: { width: config.depth, height: config.height }, canReceiveTexture: true },
      { id: 'top', name: 'Top', uvIndex: 2, textureSize: { width: config.width, height: config.depth }, canReceiveTexture: true },
      { id: 'bottom', name: 'Bottom', uvIndex: 3, textureSize: { width: config.width, height: config.depth }, canReceiveTexture: true }
    ]

    // Create separate meshes for each face for individual texturing
    const faceGeometries = this.createFaceGeometries(geometry)

    this.faceConfigs.forEach((faceConfig, index) => {
      const faceGeometry = faceGeometries[index]
      const material = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
      
      const mesh = new THREE.Mesh(faceGeometry, material)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.name = faceConfig.id
      
      this.faces.set(faceConfig.id, mesh)
      this.group.add(mesh)
    })

    // Add edges overlay
    this.addEdgesOverlay(geometry)
  }

  private createFaceGeometries(_boxGeometry: THREE.BoxGeometry): THREE.PlaneGeometry[] {
    // Extract individual faces from box geometry
    const faces: THREE.PlaneGeometry[] = []
    
    // For simplicity, we'll create plane geometries for each face
    // In a more advanced implementation, we could extract faces from the box geometry
    const { width, height, depth } = this.config
    
    // Front/Back (width x height)
    faces.push(new THREE.PlaneGeometry(width, height))
    faces.push(new THREE.PlaneGeometry(width, height))
    
    // Left/Right (depth x height)
    faces.push(new THREE.PlaneGeometry(depth, height))
    faces.push(new THREE.PlaneGeometry(depth, height))
    
    // Top/Bottom (width x depth)
    faces.push(new THREE.PlaneGeometry(width, depth))
    faces.push(new THREE.PlaneGeometry(width, depth))
    
    // Position and rotate each face
    const positions = [
      { position: [0, 0, depth/2], rotation: [0, 0, 0] }, // Front
      { position: [0, 0, -depth/2], rotation: [0, Math.PI, 0] }, // Back
      { position: [-width/2, 0, 0], rotation: [0, Math.PI/2, 0] }, // Left
      { position: [width/2, 0, 0], rotation: [0, -Math.PI/2, 0] }, // Right
      { position: [0, height/2, 0], rotation: [-Math.PI/2, 0, 0] }, // Top
      { position: [0, -height/2, 0], rotation: [Math.PI/2, 0, 0] } // Bottom
    ]
    
    positions.forEach((pos, index) => {
      const face = faces[index]
      face.translate(pos.position[0], pos.position[1], pos.position[2])
      face.rotateX(pos.rotation[0])
      face.rotateY(pos.rotation[1])
      face.rotateZ(pos.rotation[2])
    })
    
    return faces
  }

  private addEdgesOverlay(geometry: THREE.BoxGeometry): void {
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x000000, 
      linewidth: 1,
      transparent: true,
      opacity: 0.3
    })
    
    const edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    this.group.add(edgesMesh)
  }

  public resize(width: number, height: number, depth: number): void {
    this.config = { ...this.config, width, height, depth }
    this.generateGeometry(this.config)
  }
}