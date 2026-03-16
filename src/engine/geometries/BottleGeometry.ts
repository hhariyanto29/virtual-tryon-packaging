import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface BottleGeometryConfig {
  height: number
  radius: number
  neckHeight: number
  neckRadius: number
  capHeight: number
  capRadius: number
  segments?: number
  color?: string
}

export class BottleGeometry extends BaseGeometry {
  private config: BottleGeometryConfig

  constructor(config: BottleGeometryConfig) {
    super()
    this.config = {
      segments: 32,
      ...config
    }
    this.generateGeometry(this.config)
  }

  public generateGeometry(config: BottleGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create bottle profile points for lathe
    const points: THREE.Vector2[] = []
    
    // Bottle body profile
    points.push(new THREE.Vector2(0, 0)) // Bottom center
    points.push(new THREE.Vector2(config.radius * 0.8, 0)) // Bottom edge
    points.push(new THREE.Vector2(config.radius, config.height * 0.2)) // Lower curve
    points.push(new THREE.Vector2(config.radius, config.height * 0.6)) // Straight body
    points.push(new THREE.Vector2(config.radius * 0.9, config.height * 0.8)) // Shoulder
    points.push(new THREE.Vector2(config.neckRadius, config.height * 0.9)) // Neck start
    points.push(new THREE.Vector2(config.neckRadius, config.height - config.capHeight)) // Neck
    points.push(new THREE.Vector2(config.capRadius, config.height - config.capHeight * 0.5)) // Cap base
    points.push(new THREE.Vector2(config.capRadius, config.height)) // Cap top

    // Create lathe geometry for bottle body
    const latheGeometry = new THREE.LatheGeometry(
      points,
      config.segments || 32
    )

    // Create bottle body mesh
    const bodyMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const bodyMesh = new THREE.Mesh(latheGeometry, bodyMaterial)
    bodyMesh.castShadow = true
    bodyMesh.receiveShadow = true
    bodyMesh.name = 'body'
    
    this.faces.set('body', bodyMesh)
    this.group.add(bodyMesh)

    // Create label area (cylindrical section for texture)
    const labelHeight = config.height * 0.4
    const labelGeometry = new THREE.CylinderGeometry(
      config.radius * 0.95,
      config.radius * 0.95,
      labelHeight,
      config.segments || 32,
      1,
      true
    )
    
    const labelMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial)
    labelMesh.position.y = config.height * 0.3
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
        name: 'Bottle Body', 
        uvIndex: 1, 
        textureSize: { 
          width: Math.PI * 2 * config.radius, 
          height: config.height 
        }, 
        canReceiveTexture: false 
      }
    ]

    // Add cap with different material
    const capGeometry = new THREE.CylinderGeometry(
      config.capRadius,
      config.capRadius,
      config.capHeight,
      config.segments || 32
    )
    
    const capMaterial = this.createMaterial('metallic', '#cccccc')
    capMaterial.roughness = 0.3
    capMaterial.metalness = 0.9
    
    const capMesh = new THREE.Mesh(capGeometry, capMaterial)
    capMesh.position.y = config.height - config.capHeight * 0.5
    capMesh.castShadow = true
    capMesh.receiveShadow = true
    capMesh.name = 'cap'
    
    this.group.add(capMesh)

    // Add edges overlay for visual reference
    this.addEdgesOverlay(latheGeometry)
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
    
    // Update cap material separately (always metallic)
    const capMesh = this.group.getObjectByName('cap') as THREE.Mesh
    if (capMesh && capMesh.material instanceof THREE.MeshStandardMaterial) {
      capMesh.material.roughness = 0.3
      capMesh.material.metalness = 0.9
      capMesh.material.needsUpdate = true
    }
  }
}