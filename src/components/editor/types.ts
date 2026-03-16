// Type definitions for editor components
// Re-export types from other modules to avoid duplication

export type { MaterialType } from '../engine/BoxMockup'
export type { LightingPreset, CameraPreset } from '../engine/SceneManager'
export type { BoxFace } from '../../stores/mockupStore'

export type TextureFit = 'stretch' | 'fit' | 'fill' | 'repeat'

export interface Template {
  id: string
  name: string
  dimensions: string
  category: string
  tags: string[]
  isPremium: boolean
}

export interface Category {
  id: string
  name: string
}

export interface TextureData {
  url: string
  name: string
  fit: TextureFit
}