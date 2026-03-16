import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface TubeGeometryConfig {
  height: number
  radius: number
  thickness: number
  capHeight: number
  segments?: number
  color?: string
}

export class TubeGeometry extends BaseGeometry {
  private config: TubeGeometryConfig

  constructor(config: TubeGeometryConfig) {
    super()
    this.config = {
      segments: 32,
      ...config
    }
    this.generateGeometry(this.config)
  }

  public generateGeometry(config: TubeGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create tube body (hollow cylinder)
    const tubeGeometry = new THREE.CylinderGeometry(
      config.radius,
      config.radius,
      config.height - config.capHeight,
      config.segments || 32,
      1,
      false,
      0,
      Math.PI * 2
    )
    
    // Create inner cylinder for hollow effect
    const innerRadius = config.radius - config.thickness
    const innerGeometry = new THREE.CylinderGeometry(
      innerRadius,
      innerRadius,
      config.height - config.capHeight,
      config.segments || 32,
      1,
      false,
      0,
      Math.PI * 2
    )
    
    // Create tube body mesh
    const tubeMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const tubeMesh = new THREE.Mesh(tubeGeometry, tubeMaterial)
    tubeMesh.castShadow = true
    tubeMesh.receiveShadow = true
    tubeMesh.name = 'body'
    
    this.faces.set('body', tubeMesh)
    this.group.add(tubeMesh)

    // Create label area (middle section of tube)
    const labelHeight = (config.height - config.capHeight) * 0.6
    const labelGeometry = new THREE.CylinderGeometry(
      config.radius * 1.02,
      config.radius * 1.02,
      labelHeight,
      config.segments || 32,
      1,
      true
    )
    
    const labelMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial)
    labelMesh.position.y = (config.height - config.capHeight - labelHeight) * 0.5
    labelMesh.castShadow = true
    labelMesh.receiveShadow = true
    labelMesh.name = 'label'
    
    this.faces.set('label', labelMesh)
    this.group.add(labelMesh)

    // Define face configurations
    this.faceConfigs = [
      { 
        id: 'label', 
        name: 'Label Area', 
        uvIndex: 0, 
        textureSize: { 
          width: Math.PI * 2 * config.radius, 
          height: labelHeight 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'body', 
        name: 'Tube Body', 
        uvIndex: 1, 
        textureSize: { 
          width: Math.PI * 2 * config.radius, 
          height: config.height - config.capHeight 
        }, 
        canReceiveTexture: false 
      }
    ]

    // Create bottom cap
    const bottomCapGeometry = new THREE.CylinderGeometry(
      config.radius,
      config.radius,
      config.thickness * 2,
      config.segments || 32
    )
    
    const bottomCapMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const bottomCapMesh = new THREE.Mesh(bottomCapGeometry, bottomCapMaterial)
    bottomCapMesh.position.y = -(config.height - config.capHeight) / 2
    bottomCapMesh.castShadow = true
    bottomCapMesh.receiveShadow = true
    bottomCapMesh.name = 'bottom_cap'
    
    this.group.add(bottomCapMesh)

    // Create top cap (screw cap)
    const topCapGeometry = new THREE.CylinderGeometry(
      config.radius * 1.1,
      config.radius * 1.1,
      config.capHeight,
      config.segments || 32
    )
    
    const topCapMaterial = this.createMaterial('metallic', '#cccccc')
    topCapMaterial.roughness = 0.3
    topCapMaterial.metalness = 0.9
    
    const topCapMesh = new THREE.Mesh(topCapGeometry, topCapMaterial)
    topCapMesh.position.y = (config.height - config.capHeight) / 2 + config.capHeight / 2
    topCapMesh.castShadow = true
    topCapMesh.receiveShadow = true
    topCapMesh.name = 'top_cap'
    
    this.group.add(topCapMesh)

    // Add inner surface (visible from top/bottom)
    const innerMaterial = this.createMaterial(this.currentMaterialType, '#666666')
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial)
    innerMesh.position.y = 0
    innerMesh.castShadow = true
    innerMesh.receiveShadow = true
    
    this.group.add(innerMesh)

    // Add edges overlay
    this.addEdgesOverlay(tubeGeometry)
  }

  private addEdgesOverlay(geometry: THREE.BufferGeometry): void {
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x000000, 
      linewidth: 1,
      transparent: true,
      opacity: 0.2
    })
    
    const edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    this.group.add(edgesMesh)
  }

  public setMaterial(type: 'matte' | 'glossy' | 'metallic'): void {
    super.setMaterial(type)
    
    // Update top cap material separately (always metallic)
    const topCapMesh = this.group.getObjectByName('top_cap') as THREE.Mesh
    if (topCapMesh && topCapMesh.material instanceof THREE.MeshStandardMaterial) {
      topCapMesh.material.roughness = 0.3
      topCapMesh.material.metalness = 0.9
      topCapMesh.material.needsUpdate = true
    }
  }
}