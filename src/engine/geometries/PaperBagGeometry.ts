import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface PaperBagGeometryConfig {
  width: number
  height: number
  depth: number
  handleRadius: number
  handleHeight: number
  color?: string
}

export class PaperBagGeometry extends BaseGeometry {
  private config!: PaperBagGeometryConfig

  constructor(config: PaperBagGeometryConfig) {
    super()
    this.generateGeometry(config)
  }

  public getConfig(): PaperBagGeometryConfig {
    return this.config
  }

  public generateGeometry(config: PaperBagGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create main bag body (wider, thinner box)
    const bagGeometry = new THREE.BoxGeometry(
      config.width,
      config.height,
      config.depth
    )

    // Create bag body mesh
    const bagMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const bagMesh = new THREE.Mesh(bagGeometry, bagMaterial)
    bagMesh.castShadow = true
    bagMesh.receiveShadow = true
    bagMesh.name = 'front'
    
    this.faces.set('front', bagMesh)
    this.group.add(bagMesh)

    // Create back face (separate mesh for texturing)
    const backGeometry = new THREE.PlaneGeometry(config.width, config.height)
    const backMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const backMesh = new THREE.Mesh(backGeometry, backMaterial)
    backMesh.position.z = -config.depth / 2
    backMesh.rotation.y = Math.PI
    backMesh.castShadow = true
    backMesh.receiveShadow = true
    backMesh.name = 'back'
    
    this.faces.set('back', backMesh)
    this.group.add(backMesh)

    // Define face configurations
    this.faceConfigs = [
      { 
        id: 'front', 
        name: 'Front Panel', 
        uvIndex: 0, 
        textureSize: { 
          width: config.width, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'back', 
        name: 'Back Panel', 
        uvIndex: 1, 
        textureSize: { 
          width: config.width, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'left', 
        name: 'Left Side', 
        uvIndex: 2, 
        textureSize: { 
          width: config.depth, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'right', 
        name: 'Right Side', 
        uvIndex: 3, 
        textureSize: { 
          width: config.depth, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      }
    ]

    // Create side panels
    const leftSideGeometry = new THREE.PlaneGeometry(config.depth, config.height)
    const leftSideMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const leftSideMesh = new THREE.Mesh(leftSideGeometry, leftSideMaterial)
    leftSideMesh.position.x = -config.width / 2
    leftSideMesh.position.z = 0
    leftSideMesh.rotation.y = -Math.PI / 2
    leftSideMesh.castShadow = true
    leftSideMesh.receiveShadow = true
    leftSideMesh.name = 'left'
    
    this.faces.set('left', leftSideMesh)
    this.group.add(leftSideMesh)

    const rightSideGeometry = new THREE.PlaneGeometry(config.depth, config.height)
    const rightSideMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const rightSideMesh = new THREE.Mesh(rightSideGeometry, rightSideMaterial)
    rightSideMesh.position.x = config.width / 2
    rightSideMesh.position.z = 0
    rightSideMesh.rotation.y = Math.PI / 2
    rightSideMesh.castShadow = true
    rightSideMesh.receiveShadow = true
    rightSideMesh.name = 'right'
    
    this.faces.set('right', rightSideMesh)
    this.group.add(rightSideMesh)

    // Add handles using TubeGeometry
    this.addHandles(config)

    // Add top fold (crumpled paper effect)
    this.addTopFold(config)

    // Add bottom reinforcement
    this.addBottomReinforcement(config)

    // Add edges overlay
    this.addEdgesOverlay(bagGeometry)
  }

  private addHandles(config: PaperBagGeometryConfig): void {
    // Create handle curve
    const handleCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-config.width * 0.3, config.height / 2, 0),
      new THREE.Vector3(0, config.height / 2 + config.handleHeight, 0),
      new THREE.Vector3(config.width * 0.3, config.height / 2, 0)
    ])
    
    // Create tube geometry for handle
    const handleGeometry = new THREE.TubeGeometry(
      handleCurve,
      20, // tubular segments
      config.handleRadius,
      8, // radial segments
      false // closed
    )
    
    const handleMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    
    // Left handle
    const leftHandle = new THREE.Mesh(handleGeometry, handleMaterial)
    leftHandle.position.z = config.depth * 0.4
    leftHandle.castShadow = true
    leftHandle.receiveShadow = true
    
    // Right handle (mirrored)
    const rightHandle = new THREE.Mesh(handleGeometry, handleMaterial)
    rightHandle.position.z = -config.depth * 0.4
    rightHandle.castShadow = true
    rightHandle.receiveShadow = true
    
    this.group.add(leftHandle)
    this.group.add(rightHandle)
  }

  private addTopFold(config: PaperBagGeometryConfig): void {
    // Create folded top edge
    const foldGeometry = new THREE.BoxGeometry(
      config.width * 1.1,
      config.height * 0.1,
      config.depth * 0.8
    )
    
    const foldMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    
    const foldMesh = new THREE.Mesh(foldGeometry, foldMaterial)
    foldMesh.position.y = config.height / 2 + config.height * 0.05
    foldMesh.rotation.x = Math.PI / 6 // Slight tilt
    foldMesh.castShadow = true
    foldMesh.receiveShadow = true
    
    this.group.add(foldMesh)
  }

  private addBottomReinforcement(config: PaperBagGeometryConfig): void {
    // Create reinforced bottom
    const bottomGeometry = new THREE.BoxGeometry(
      config.width * 0.9,
      config.height * 0.1,
      config.depth * 0.9
    )
    
    const bottomMaterial = this.createMaterial(this.currentMaterialType, '#aaaaaa')
    
    const bottomMesh = new THREE.Mesh(bottomGeometry, bottomMaterial)
    bottomMesh.position.y = -config.height / 2 - config.height * 0.05
    bottomMesh.castShadow = true
    bottomMesh.receiveShadow = true
    
    this.group.add(bottomMesh)
  }

  private addEdgesOverlay(geometry: THREE.BufferGeometry): void {
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
}