import * as THREE from 'three'
import { BaseGeometry } from './BaseGeometry'

export interface PouchGeometryConfig {
  width: number
  height: number
  depth: number
  curveHeight: number
  segments?: number
  color?: string
}

export class PouchGeometry extends BaseGeometry {
  private config: PouchGeometryConfig

  constructor(config: PouchGeometryConfig) {
    super()
    this.config = {
      segments: 32,
      ...config
    }
    this.generateGeometry(this.config)
  }

  public generateGeometry(config: PouchGeometryConfig): void {
    this.config = config
    
    // Clear existing geometry
    this.dispose()
    this.group.clear()
    this.faces.clear()

    // Create curved pouch shape using CatmullRomCurve3
    const curve = this.createPouchCurve(config)
    
    // Create geometry by extruding along the curve
    const shape = new THREE.Shape()
    shape.moveTo(0, 0)
    shape.lineTo(config.width, 0)
    shape.lineTo(config.width, config.depth)
    shape.lineTo(0, config.depth)
    shape.lineTo(0, 0)
    
    const extrudeSettings = {
      steps: config.segments || 32,
      bevelEnabled: false,
      extrudePath: curve
    }
    
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
    
    // Rotate to stand upright
    geometry.rotateX(Math.PI / 2)
    geometry.rotateY(Math.PI / 2)
    
    // Create main pouch mesh
    const pouchMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const pouchMesh = new THREE.Mesh(geometry, pouchMaterial)
    pouchMesh.castShadow = true
    pouchMesh.receiveShadow = true
    pouchMesh.name = 'front'
    
    this.faces.set('front', pouchMesh)
    this.group.add(pouchMesh)

    // Create back face (simple plane)
    const backGeometry = new THREE.PlaneGeometry(config.width, config.height)
    const backMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    const backMesh = new THREE.Mesh(backGeometry, backMaterial)
    backMesh.position.z = -config.depth * 0.5
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
      }
    ]

    // Add side gussets
    this.addSideGussets(config)

    // Add top seal area
    this.addTopSeal(config)

    // Add edges overlay
    this.addEdgesOverlay(geometry)
  }

  private createPouchCurve(config: PouchGeometryConfig): THREE.CatmullRomCurve3 {
    const points: THREE.Vector3[] = []
    
    // Create a gentle curve for standing pouch
    const curveHeight = config.curveHeight || config.height * 0.1
    
    points.push(new THREE.Vector3(0, -config.height / 2, 0)) // Bottom
    points.push(new THREE.Vector3(0, -config.height / 4, curveHeight * 0.3)) // Lower curve
    points.push(new THREE.Vector3(0, 0, curveHeight)) // Middle (most curved)
    points.push(new THREE.Vector3(0, config.height / 4, curveHeight * 0.3)) // Upper curve
    points.push(new THREE.Vector3(0, config.height / 2, 0)) // Top
    
    return new THREE.CatmullRomCurve3(points)
  }

  private addSideGussets(config: PouchGeometryConfig): void {
    // Create side gussets (triangular folds)
    const gussetGeometry = new THREE.BoxGeometry(
      config.depth * 0.3,
      config.height * 0.8,
      0.05
    )
    
    const gussetMaterial = this.createMaterial(this.currentMaterialType, config.color || '#ffffff')
    
    // Left gusset
    const leftGusset = new THREE.Mesh(gussetGeometry, gussetMaterial)
    leftGusset.position.x = -config.width / 2 - config.depth * 0.15
    leftGusset.position.y = 0
    leftGusset.rotation.z = Math.PI / 4
    leftGusset.castShadow = true
    leftGusset.receiveShadow = true
    
    // Right gusset
    const rightGusset = new THREE.Mesh(gussetGeometry, gussetMaterial)
    rightGusset.position.x = config.width / 2 + config.depth * 0.15
    rightGusset.position.y = 0
    rightGusset.rotation.z = -Math.PI / 4
    rightGusset.castShadow = true
    rightGusset.receiveShadow = true
    
    this.group.add(leftGusset)
    this.group.add(rightGusset)
  }

  private addTopSeal(config: PouchGeometryConfig): void {
    // Create top seal area
    const sealGeometry = new THREE.BoxGeometry(
      config.width * 1.1,
      config.height * 0.1,
      config.depth * 0.5
    )
    
    const sealMaterial = this.createMaterial(this.currentMaterialType, '#888888')
    
    const sealMesh = new THREE.Mesh(sealGeometry, sealMaterial)
    sealMesh.position.y = config.height / 2 + config.height * 0.05
    sealMesh.castShadow = true
    sealMesh.receiveShadow = true
    
    this.group.add(sealMesh)
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
}