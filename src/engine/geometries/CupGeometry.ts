import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface CupGeometryConfig {
  radiusTop: number
  radiusBottom: number
  height: number
  radialSegments: number
  heightSegments: number
  openTop?: boolean
  color?: string
}

export class CupGeometry extends BaseGeometry {
  private config!: CupGeometryConfig

  constructor(config: CupGeometryConfig) {
    super()
    this.generateGeometry(config)
  }

  public getConfig(): CupGeometryConfig {
    return this.config
  }

  public generateGeometry(config: CupGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create tapered cylinder for cup body
    const cupGeometry = new THREE.CylinderGeometry(
      config.radiusTop,
      config.radiusBottom,
      config.height,
      config.radialSegments,
      config.heightSegments,
      false // open ended
    )

    // Create cup body mesh with semi-transparent plastic look
    const cupMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.color || '#ffffff'),
      roughness: 0.3,
      metalness: 0.1,
      transparent: true,
      opacity: 0.9,
      side: THREE.DoubleSide
    })
    
    const cupMesh = new THREE.Mesh(cupGeometry, cupMaterial)
    cupMesh.castShadow = true
    cupMesh.receiveShadow = true
    cupMesh.name = 'body'
    
    this.faces.set('body', cupMesh)
    this.group.add(cupMesh)

    // Create label wrap area (main texture surface)
    const labelHeight = config.height * 0.7
    const labelGeometry = new THREE.CylinderGeometry(
      config.radiusTop * 1.02,
      config.radiusBottom * 1.02,
      labelHeight,
      config.radialSegments,
      1,
      true // open ended
    )
    
    // Position label area on the outside of cup — printed label look
    const labelMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.5,
      metalness: 0.0,
      side: THREE.FrontSide,
      polygonOffset: true,
      polygonOffsetFactor: -1,
      polygonOffsetUnits: -1
    })
    const labelMesh = new THREE.Mesh(labelGeometry, labelMaterial)
    labelMesh.position.y = 0
    labelMesh.castShadow = true
    labelMesh.receiveShadow = true
    labelMesh.name = 'label'
    labelMesh.renderOrder = 1
    
    this.faces.set('label', labelMesh)
    this.group.add(labelMesh)

    // Add lid ring at the top (optional)
    if (!config.openTop) {
      const lidRingGeometry = new THREE.CylinderGeometry(
        config.radiusTop * 1.05,
        config.radiusTop * 1.05,
        config.height * 0.05,
        config.radialSegments,
        1
      )
      
      const lidRingMaterial = this.createMaterial(this.currentMaterialType, '#cccccc')
      const lidRingMesh = new THREE.Mesh(lidRingGeometry, lidRingMaterial)
      lidRingMesh.position.y = config.height / 2 + config.height * 0.025
      lidRingMesh.castShadow = true
      lidRingMesh.receiveShadow = true
      
      this.group.add(lidRingMesh)
    }

    // Define face configurations
    this.faceConfigs = [
      { 
        id: 'label', 
        name: 'Label Area', 
        uvIndex: 0, 
        textureSize: { 
          width: Math.PI * 2 * ((config.radiusTop + config.radiusBottom) / 2), // Circumference
          height: config.height * 0.7 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'body', 
        name: 'Cup Body', 
        uvIndex: 1, 
        textureSize: { 
          width: Math.PI * 2 * ((config.radiusTop + config.radiusBottom) / 2),
          height: config.height 
        }, 
        canReceiveTexture: false 
      }
    ]

    // Add bottom reinforcement
    this.addBottomReinforcement(config)

    // Add condensation droplets effect
    this.addCondensationEffect(config)

    // Add edges overlay
    this.addEdgesOverlay(cupGeometry)
  }

  private addBottomReinforcement(config: CupGeometryConfig): void {
    // Create reinforced bottom
    const bottomGeometry = new THREE.CylinderGeometry(
      config.radiusBottom * 0.8,
      config.radiusBottom * 0.8,
      config.height * 0.05,
      config.radialSegments,
      1
    )
    
    const bottomMaterial = this.createMaterial(this.currentMaterialType, '#f0f0f0')
    
    const bottomMesh = new THREE.Mesh(bottomGeometry, bottomMaterial)
    bottomMesh.position.y = -config.height / 2 - config.height * 0.025
    bottomMesh.castShadow = true
    bottomMesh.receiveShadow = true
    
    this.group.add(bottomMesh)
  }

  private addCondensationEffect(config: CupGeometryConfig): void {
    // Add some condensation droplets on the cup
    const dropletCount = 8
    for (let i = 0; i < dropletCount; i++) {
      const dropletGeometry = new THREE.SphereGeometry(
        config.height * 0.02,
        4,
        4
      )
      
      const dropletMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.3
      })
      
      const angle = (i / dropletCount) * Math.PI * 2
      const radius = (config.radiusTop + config.radiusBottom) / 2 * 0.9
      const height = -config.height / 2 + config.height * 0.3 + Math.random() * config.height * 0.4
      
      const dropletMesh = new THREE.Mesh(dropletGeometry, dropletMaterial)
      dropletMesh.position.x = Math.cos(angle) * radius
      dropletMesh.position.y = height
      dropletMesh.position.z = Math.sin(angle) * radius
      
      this.group.add(dropletMesh)
    }
  }

  private addEdgesOverlay(geometry: THREE.BufferGeometry): void {
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x000000, 
      linewidth: 1,
      transparent: true,
      opacity: 0.1
    })
    
    const edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    this.group.add(edgesMesh)
  }
}