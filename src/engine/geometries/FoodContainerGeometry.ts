import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface FoodContainerGeometryConfig {
  width: number
  height: number
  depth: number
  lidThickness?: number
  color?: string
}

export class FoodContainerGeometry extends BaseGeometry {
  private config!: FoodContainerGeometryConfig
  private lidMesh!: THREE.Mesh

  constructor(config: FoodContainerGeometryConfig) {
    super()
    this.generateGeometry(config)
  }

  public getConfig(): FoodContainerGeometryConfig {
    return this.config
  }

  public generateGeometry(config: FoodContainerGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create main container body (low-profile box)
    const containerGeometry = new THREE.BoxGeometry(
      config.width,
      config.height,
      config.depth
    )

    // Create container body mesh with plastic/foam look
    const containerMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.color || '#ffffff'),
      roughness: 0.6,
      metalness: 0.1,
      side: THREE.DoubleSide
    })
    
    const containerMesh = new THREE.Mesh(containerGeometry, containerMaterial)
    containerMesh.castShadow = true
    containerMesh.receiveShadow = true
    containerMesh.name = 'body'
    
    this.faces.set('body', containerMesh)
    this.group.add(containerMesh)

    // Create separate lid mesh (slightly larger box, thin)
    const lidThickness = config.lidThickness || config.height * 0.1
    const lidGeometry = new THREE.BoxGeometry(
      config.width * 1.02, // Slightly larger than container
      lidThickness,
      config.depth * 1.02
    )
    
    const lidMaterial = this.createMaterial(this.currentMaterialType, config.color || '#f5f5f5')
    this.lidMesh = new THREE.Mesh(lidGeometry, lidMaterial)
    this.lidMesh.position.y = config.height / 2 + lidThickness / 2
    this.lidMesh.castShadow = true
    this.lidMesh.receiveShadow = true
    this.lidMesh.name = 'lid'
    
    this.faces.set('lid', this.lidMesh)
    this.group.add(this.lidMesh)

    // Define face configurations
    this.faceConfigs = [
      { 
        id: 'lid', 
        name: 'Top Lid', 
        uvIndex: 0, 
        textureSize: { 
          width: config.width * 1.02, 
          height: config.depth * 1.02 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'front', 
        name: 'Front Panel', 
        uvIndex: 1, 
        textureSize: { 
          width: config.width, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'back', 
        name: 'Back Panel', 
        uvIndex: 2, 
        textureSize: { 
          width: config.width, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'left', 
        name: 'Left Side', 
        uvIndex: 3, 
        textureSize: { 
          width: config.depth, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      },
      { 
        id: 'right', 
        name: 'Right Side', 
        uvIndex: 4, 
        textureSize: { 
          width: config.depth, 
          height: config.height 
        }, 
        canReceiveTexture: true 
      }
    ]

    // Create front panel for texturing
    const frontGeometry = new THREE.PlaneGeometry(config.width, config.height)
    const frontMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const frontMesh = new THREE.Mesh(frontGeometry, frontMaterial)
    frontMesh.position.z = config.depth / 2
    frontMesh.castShadow = true
    frontMesh.receiveShadow = true
    frontMesh.name = 'front'
    
    this.faces.set('front', frontMesh)
    this.group.add(frontMesh)

    // Create back panel
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

    // Create left side panel
    const leftGeometry = new THREE.PlaneGeometry(config.depth, config.height)
    const leftMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const leftMesh = new THREE.Mesh(leftGeometry, leftMaterial)
    leftMesh.position.x = -config.width / 2
    leftMesh.rotation.y = -Math.PI / 2
    leftMesh.castShadow = true
    leftMesh.receiveShadow = true
    leftMesh.name = 'left'
    
    this.faces.set('left', leftMesh)
    this.group.add(leftMesh)

    // Create right side panel
    const rightGeometry = new THREE.PlaneGeometry(config.depth, config.height)
    const rightMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const rightMesh = new THREE.Mesh(rightGeometry, rightMaterial)
    rightMesh.position.x = config.width / 2
    rightMesh.rotation.y = Math.PI / 2
    rightMesh.castShadow = true
    rightMesh.receiveShadow = true
    rightMesh.name = 'right'
    
    this.faces.set('right', rightMesh)
    this.group.add(rightMesh)

    // Add rim around the container opening
    this.addContainerRim(config, lidThickness)

    // Add stacking ridges
    this.addStackingRidges(config)

    // Add edges overlay
    this.addEdgesOverlay(containerGeometry)
  }

  private addContainerRim(config: FoodContainerGeometryConfig, lidThickness: number): void {
    // Create rim around container opening
    const rimGeometry = new THREE.BoxGeometry(
      config.width * 1.05,
      config.height * 0.05,
      config.depth * 1.05
    )
    
    const rimMaterial = this.createMaterial(this.currentMaterialType, '#e0e0e0')
    
    const rimMesh = new THREE.Mesh(rimGeometry, rimMaterial)
    rimMesh.position.y = config.height / 2 - config.height * 0.025
    rimMesh.castShadow = true
    rimMesh.receiveShadow = true
    
    this.group.add(rimMesh)
  }

  private addStackingRidges(config: FoodContainerGeometryConfig): void {
    // Add stacking ridges on bottom for stability
    const ridgeCount = 3
    const ridgeSpacing = config.depth / (ridgeCount + 1)
    
    for (let i = 1; i <= ridgeCount; i++) {
      const ridgeGeometry = new THREE.BoxGeometry(
        config.width * 0.9,
        config.height * 0.03,
        config.depth * 0.05
      )
      
      const ridgeMaterial = this.createMaterial(this.currentMaterialType, '#d0d0d0')
      
      const ridgeMesh = new THREE.Mesh(ridgeGeometry, ridgeMaterial)
      ridgeMesh.position.y = -config.height / 2 - config.height * 0.015
      ridgeMesh.position.z = -config.depth / 2 + i * ridgeSpacing
      ridgeMesh.castShadow = true
      ridgeMesh.receiveShadow = true
      
      this.group.add(ridgeMesh)
    }
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

  // Optional: Method to open/close lid
  public setLidOpen(open: boolean): void {
    if (this.lidMesh) {
      if (open) {
        this.lidMesh.position.y = this.config.height / 2 + this.config.height * 0.2
        this.lidMesh.rotation.x = Math.PI / 6
      } else {
        this.lidMesh.position.y = this.config.height / 2 + (this.config.lidThickness || this.config.height * 0.1) / 2
        this.lidMesh.rotation.x = 0
      }
    }
  }
}