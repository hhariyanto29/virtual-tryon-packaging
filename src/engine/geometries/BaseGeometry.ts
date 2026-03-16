import * as THREE from 'three'
import { FaceConfig } from '../../templates/types'

export type MaterialType = 'matte' | 'glossy' | 'metallic'

export abstract class BaseGeometry {
  protected group: THREE.Group
  protected textureLoader: THREE.TextureLoader
  protected faces: Map<string, THREE.Mesh> = new Map()
  protected faceConfigs: FaceConfig[] = []
  protected currentMaterialType: MaterialType = 'matte'

  constructor() {
    this.group = new THREE.Group()
    this.textureLoader = new THREE.TextureLoader()
  }

  public abstract generateGeometry(config: any): void

  public getMesh(): THREE.Group {
    return this.group
  }

  public getTextureableFaces(): FaceConfig[] {
    return this.faceConfigs.filter(face => face.canReceiveTexture)
  }

  public async applyTexture(faceId: string, textureUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const mesh = this.faces.get(faceId)
      if (!mesh) {
        reject(new Error(`Face ${faceId} not found`))
        return
      }

      this.textureLoader.load(
        textureUrl,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace
          texture.anisotropy = 4 // Default anisotropy value
          
          const material = mesh.material as THREE.MeshStandardMaterial
          if (material) {
            if (material.map) {
              material.map.dispose()
            }
            material.map = texture
            material.needsUpdate = true
          }
          resolve()
        },
        undefined,
        (error) => {
          console.error(`Failed to load texture for ${faceId}:`, error)
          reject(error)
        }
      )
    })
  }

  public clearTexture(faceId: string): void {
    const mesh = this.faces.get(faceId)
    if (mesh) {
      const material = mesh.material as THREE.MeshStandardMaterial
      if (material && material.map) {
        material.map.dispose()
        material.map = null
        material.needsUpdate = true
      }
    }
  }

  public setMaterial(type: MaterialType): void {
    this.currentMaterialType = type
    
    this.faces.forEach(mesh => {
      const material = mesh.material as THREE.MeshStandardMaterial
      if (material) {
        switch (type) {
          case 'matte':
            material.roughness = 0.8
            material.metalness = 0.2
            break
          case 'glossy':
            material.roughness = 0.2
            material.metalness = 0.1
            break
          case 'metallic':
            material.roughness = 0.4
            material.metalness = 0.8
            break
        }
        material.needsUpdate = true
      }
    })
  }

  protected createMaterial(type: MaterialType, color: string = '#ffffff'): THREE.MeshStandardMaterial {
    const material = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color(color),
      side: THREE.DoubleSide
    })
    
    switch (type) {
      case 'matte':
        material.roughness = 0.8
        material.metalness = 0.2
        break
      case 'glossy':
        material.roughness = 0.2
        material.metalness = 0.1
        break
      case 'metallic':
        material.roughness = 0.4
        material.metalness = 0.8
        break
    }
    
    return material
  }

  public dispose(): void {
    this.faces.forEach(mesh => {
      const material = mesh.material as THREE.Material
      if (material) {
        if (material instanceof THREE.MeshStandardMaterial && material.map) {
          material.map.dispose()
        }
        material.dispose()
      }
      mesh.geometry.dispose()
    })
    
    this.group.clear()
    this.faces.clear()
  }
}