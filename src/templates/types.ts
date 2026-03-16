// Type definitions for packaging templates

export type PackagingCategory = 'box' | 'bottle' | 'pouch' | 'tube' | 'bag'

export interface GeometryConfig {
  type: PackagingCategory
  dimensions: {
    width: number
    height: number
    depth: number
    radius?: number // For cylindrical shapes
    segments?: number // For smoothness
  }
}

export interface MaterialConfig {
  type: 'matte' | 'glossy' | 'metallic'
  color: string
  roughness: number
  metalness: number
}

export interface FaceConfig {
  id: string
  name: string
  uvIndex: number
  textureSize: { width: number; height: number }
  canReceiveTexture: boolean
}

export interface PackagingTemplate {
  id: string
  name: string
  category: PackagingCategory
  thumbnail: string  // path ke preview image
  geometry: GeometryConfig
  defaultMaterial: MaterialConfig
  faces: FaceConfig[]
  description?: string
}