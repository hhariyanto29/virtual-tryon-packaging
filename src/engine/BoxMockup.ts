import * as THREE from 'three'

export type BoxFace = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'

export class BoxMockup {
  private mesh: THREE.Mesh
  private materials: Map<BoxFace, THREE.MeshStandardMaterial>
  private textureLoader: THREE.TextureLoader

  constructor(width: number = 2, height: number = 3, depth: number = 1.5) {
    this.textureLoader = new THREE.TextureLoader()
    
    // Create geometry
    const geometry = new THREE.BoxGeometry(width, height, depth)
    
    // Create materials for each face
    this.materials = new Map()
    const defaultColor = 0xffffff
    
    const faceMaterials = [
      new THREE.MeshStandardMaterial({ color: defaultColor, name: 'right' }),   // +X
      new THREE.MeshStandardMaterial({ color: defaultColor, name: 'left' }),    // -X
      new THREE.MeshStandardMaterial({ color: defaultColor, name: 'top' }),     // +Y
      new THREE.MeshStandardMaterial({ color: defaultColor, name: 'bottom' }),  // -Y
      new THREE.MeshStandardMaterial({ color: defaultColor, name: 'front' }),   // +Z
      new THREE.MeshStandardMaterial({ color: defaultColor, name: 'back' }),    // -Z
    ]
    
    // Map face names to materials
    const faceNames: BoxFace[] = ['right', 'left', 'top', 'bottom', 'front', 'back']
    faceNames.forEach((face, index) => {
      this.materials.set(face, faceMaterials[index])
    })
    
    // Create mesh
    this.mesh = new THREE.Mesh(geometry, faceMaterials)
    this.mesh.castShadow = true
    this.mesh.receiveShadow = true
  }

  public getMesh(): THREE.Mesh {
    return this.mesh
  }

  public async applyTexture(face: BoxFace, imageUrl: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.textureLoader.load(
        imageUrl,
        (texture) => {
          texture.colorSpace = THREE.SRGBColorSpace
          const material = this.materials.get(face)
          if (material) {
            material.map = texture
            material.needsUpdate = true
          }
          resolve()
        },
        undefined,
        (error) => {
          console.error(`Failed to load texture for ${face}:`, error)
          reject(error)
        }
      )
    })
  }

  public clearTexture(face: BoxFace): void {
    const material = this.materials.get(face)
    if (material) {
      material.map = null
      material.needsUpdate = true
    }
  }

  public setColor(face: BoxFace, color: number | string): void {
    const material = this.materials.get(face)
    if (material) {
      material.color.set(color)
      material.needsUpdate = true
    }
  }

  public setOpacity(face: BoxFace, opacity: number): void {
    const material = this.materials.get(face)
    if (material) {
      material.transparent = opacity < 1
      material.opacity = opacity
      material.needsUpdate = true
    }
  }

  public dispose(): void {
    this.materials.forEach(material => {
      if (material.map) {
        material.map.dispose()
      }
      material.dispose()
    })
    this.mesh.geometry.dispose()
  }
}