import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface TakeawayBoxGeometryConfig {
  width: number
  height: number
  depth: number
  lidThickness?: number
  hingeAngle?: number
  color?: string
}

export class TakeawayBoxGeometry extends BaseGeometry {
  private config!: TakeawayBoxGeometryConfig
  private lidMesh!: THREE.Mesh

  constructor(config: TakeawayBoxGeometryConfig) {
    super()
    this.generateGeometry(config)
  }

  public getConfig(): TakeawayBoxGeometryConfig {
    return this.config
  }

  public generateGeometry(config: TakeawayBoxGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create main box body
    const boxGeometry = new THREE.BoxGeometry(
      config.width,
      config.height,
      config.depth
    )

    // Create box body mesh with cardboard look
    const boxMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(config.color || '#f5f5dc'),
      roughness: 0.85,
      metalness: 0,
      side: THREE.DoubleSide
    })
    
    const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
    boxMesh.castShadow = true
    boxMesh.receiveShadow = true
    boxMesh.name = 'body'
    
    this.faces.set('body', boxMesh)
    this.group.add(boxMesh)

    // Create flip-top lid (hinged, separate mesh)
    const lidThickness = config.lidThickness || config.height * 0.1
    const lidGeometry = new THREE.BoxGeometry(
      config.width * 1.02, // Slightly larger than box
      lidThickness,
      config.depth * 1.02
    )
    
    const lidMaterial = this.createMaterial(this.currentMaterialType, config.color || '#f8f8f0')
    this.lidMesh = new THREE.Mesh(lidGeometry, lidMaterial)
    
    // Position lid at top with hinge rotation (~15° open)
    const hingeAngle = config.hingeAngle || 15 * (Math.PI / 180) // 15 degrees in radians
    this.lidMesh.position.y = config.height / 2 + lidThickness / 2
    this.lidMesh.position.x = -config.width / 2 // Hinge on left side
    this.lidMesh.rotation.z = hingeAngle
    
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

    // Add hinge mechanism
    this.addHingeMechanism(config, lidThickness)

    // Add latch/clip for closing
    this.addLatchMechanism(config, lidThickness)

    // Add ventilation holes
    this.addVentilationHoles(config)

    // Add edges overlay (cardboard texture effect)
    this.addCardboardEdges(boxGeometry)
  }

  private addHingeMechanism(config: TakeawayBoxGeometryConfig, lidThickness: number): void {
    // Create hinge on left side
    const hingeGeometry = new THREE.CylinderGeometry(
      config.height * 0.05,
      config.height * 0.05,
      lidThickness * 1.5,
      8,
      1
    )
    
    const hingeMaterial = this.createMaterial(this.currentMaterialType, '#888888')
    
    const hingeMesh = new THREE.Mesh(hingeGeometry, hingeMaterial)
    hingeMesh.position.x = -config.width / 2
    hingeMesh.position.y = config.height / 2
    hingeMesh.rotation.z = Math.PI / 2
    hingeMesh.castShadow = true
    hingeMesh.receiveShadow = true
    
    this.group.add(hingeMesh)

    // Add hinge pin
    const hingePinGeometry = new THREE.CylinderGeometry(
      config.height * 0.02,
      config.height * 0.02,
      config.depth * 0.8,
      8,
      1
    )
    
    const hingePinMaterial = this.createMaterial(this.currentMaterialType, '#666666')
    
    const hingePinMesh = new THREE.Mesh(hingePinGeometry, hingePinMaterial)
    hingePinMesh.position.x = -config.width / 2
    hingePinMesh.position.y = config.height / 2
    hingePinMesh.rotation.x = Math.PI / 2
    hingePinMesh.castShadow = true
    hingePinMesh.receiveShadow = true
    
    this.group.add(hingePinMesh)
  }

  private addLatchMechanism(config: TakeawayBoxGeometryConfig, lidThickness: number): void {
    // Create latch on right side
    const latchGeometry = new THREE.BoxGeometry(
      config.width * 0.1,
      lidThickness * 0.8,
      config.depth * 0.1
    )
    
    const latchMaterial = this.createMaterial(this.currentMaterialType, '#aaaaaa')
    
    const latchMesh = new THREE.Mesh(latchGeometry, latchMaterial)
    latchMesh.position.x = config.width / 2 - config.width * 0.05
    latchMesh.position.y = config.height / 2 + lidThickness * 0.4
    latchMesh.position.z = config.depth * 0.3
    latchMesh.castShadow = true
    latchMesh.receiveShadow = true
    
    this.group.add(latchMesh)

    // Create corresponding catch on box
    const catchGeometry = new THREE.BoxGeometry(
      config.width * 0.12,
      config.height * 0.05,
      config.depth * 0.12
    )
    
    const catchMaterial = this.createMaterial(this.currentMaterialType, '#999999')
    
    const catchMesh = new THREE.Mesh(catchGeometry, catchMaterial)
    catchMesh.position.x = config.width / 2 - config.width * 0.06
    catchMesh.position.y = config.height / 2 - config.height * 0.025
    catchMesh.position.z = config.depth * 0.3
    catchMesh.castShadow = true
    catchMesh.receiveShadow = true
    
    this.group.add(catchMesh)
  }

  private addVentilationHoles(config: TakeawayBoxGeometryConfig): void {
    // Add ventilation holes on lid
    const holeCount = 6
    const holeSpacing = config.width * 0.8 / (holeCount + 1)
    
    for (let i = 1; i <= holeCount; i++) {
      const holeGeometry = new THREE.CylinderGeometry(
        config.height * 0.02,
        config.height * 0.02,
        config.height * 0.01,
        8,
        1
      )
      
      const holeMaterial = new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.3
      })
      
      const holeMesh = new THREE.Mesh(holeGeometry, holeMaterial)
      holeMesh.position.x = -config.width / 2 + config.width * 0.1 + i * holeSpacing
      holeMesh.position.y = config.height / 2 + (config.lidThickness || config.height * 0.1) * 0.6
      holeMesh.position.z = 0
      holeMesh.rotation.x = Math.PI / 2
      
      this.group.add(holeMesh)
    }
  }

  private addCardboardEdges(geometry: THREE.BufferGeometry): void {
    // Create thicker edges for cardboard look
    const edgesGeometry = new THREE.EdgesGeometry(geometry)
    const edgesMaterial = new THREE.LineBasicMaterial({ 
      color: 0x8b7355, // Brown cardboard color
      linewidth: 2,
      transparent: true,
      opacity: 0.3
    })
    
    const edgesMesh = new THREE.LineSegments(edgesGeometry, edgesMaterial)
    this.group.add(edgesMesh)

    // Add corrugated texture effect
    const corrugatedGeometry = new THREE.BoxGeometry(
      this.config.width * 0.98,
      this.config.height * 0.01,
      this.config.depth * 0.98
    )
    
    const corrugatedMaterial = new THREE.MeshBasicMaterial({
      color: 0xa0522d,
      transparent: true,
      opacity: 0.1,
      side: THREE.DoubleSide
    })
    
    const corrugatedMesh = new THREE.Mesh(corrugatedGeometry, corrugatedMaterial)
    corrugatedMesh.position.y = -this.config.height / 2 + this.config.height * 0.02
    
    this.group.add(corrugatedMesh)
  }

  // Method to open/close lid
  public setLidOpen(open: boolean): void {
    if (this.lidMesh) {
      const hingeAngle = open ? 45 * (Math.PI / 180) : 15 * (Math.PI / 180)
      this.lidMesh.rotation.z = hingeAngle
    }
  }
}