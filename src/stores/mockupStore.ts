import { defineStore } from 'pinia'
import { ref } from 'vue'
import { PackagingTemplate } from '../templates/types'

export type BoxFace = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'
export type FaceId = string

export interface TextureData {
  url: string
  name: string
}

export interface MockupState {
  dimensions: {
    width: number
    height: number
    depth: number
  }
  textures: Map<FaceId, TextureData>
  colors: Map<FaceId, string>
  opacity: Map<FaceId, number>
  selectedFace: FaceId | null
  activeTemplate: PackagingTemplate | null
  templateTextures: Map<string, Map<FaceId, TextureData>> // templateId -> faceId -> texture
}

export const useMockupStore = defineStore('mockup', () => {
  const dimensions = ref({
    width: 2,
    height: 3,
    depth: 1.5
  })

  const textures = ref<Map<FaceId, TextureData>>(new Map())
  const colors = ref<Map<FaceId, string>>(new Map())
  const opacity = ref<Map<FaceId, number>>(new Map())
  const selectedFace = ref<FaceId | null>('front')
  const activeTemplate = ref<PackagingTemplate | null>(null)
  const templateTextures = ref<Map<string, Map<FaceId, TextureData>>>(new Map())

  // Initialize default colors
  const defaultColors = {
    front: '#ffffff',
    back: '#ffffff',
    left: '#ffffff',
    right: '#ffffff',
    top: '#ffffff',
    bottom: '#ffffff'
  }

  Object.entries(defaultColors).forEach(([face, color]) => {
    colors.value.set(face as FaceId, color)
    opacity.value.set(face as FaceId, 1)
  })

  const setDimensions = (width: number, height: number, depth: number) => {
    dimensions.value = { width, height, depth }
  }

  const setTexture = (face: FaceId, texture: TextureData) => {
    textures.value.set(face, texture)
    
    // Save to template-specific memory
    if (activeTemplate.value) {
      let templateMemory = templateTextures.value.get(activeTemplate.value.id)
      if (!templateMemory) {
        templateMemory = new Map()
        templateTextures.value.set(activeTemplate.value.id, templateMemory)
      }
      templateMemory.set(face, texture)
    }
  }

  const removeTexture = (face: FaceId) => {
    textures.value.delete(face)
    
    // Remove from template-specific memory
    if (activeTemplate.value) {
      const templateMemory = templateTextures.value.get(activeTemplate.value.id)
      if (templateMemory) {
        templateMemory.delete(face)
      }
    }
  }

  const setColor = (face: FaceId, color: string) => {
    colors.value.set(face, color)
  }

  const setOpacity = (face: FaceId, opacityValue: number) => {
    opacity.value.set(face, opacityValue)
  }

  const setSelectedFace = (face: FaceId | null) => {
    selectedFace.value = face
  }

  const switchTemplate = (template: PackagingTemplate) => {
    // Save current textures before switching
    if (activeTemplate.value) {
      const currentTextures = new Map(textures.value)
      templateTextures.value.set(activeTemplate.value.id, currentTextures)
    }
    
    // Switch to new template
    activeTemplate.value = template
    
    // Load template-specific textures if available
    const templateMemory = templateTextures.value.get(template.id)
    if (templateMemory) {
      textures.value = new Map(templateMemory)
    } else {
      textures.value.clear()
    }
    
    // Reset selected face
    selectedFace.value = template.faces.length > 0 ? template.faces[0].id : null
    
    // Update dimensions
    dimensions.value = {
      width: template.geometry.dimensions.width,
      height: template.geometry.dimensions.height,
      depth: template.geometry.dimensions.depth
    }
    
    // Reset colors to template defaults
    colors.value.clear()
    opacity.value.clear()
    
    template.faces.forEach(face => {
      colors.value.set(face.id, template.defaultMaterial.color)
      opacity.value.set(face.id, 1)
    })
  }

  const getTexture = (face: FaceId): TextureData | undefined => {
    return textures.value.get(face)
  }

  const getColor = (face: FaceId): string => {
    return colors.value.get(face) || '#ffffff'
  }

  const getOpacity = (face: FaceId): number => {
    return opacity.value.get(face) || 1
  }

  const getActiveTemplate = (): PackagingTemplate | null => {
    return activeTemplate.value
  }

  const getTemplateTextures = (templateId: string): Map<FaceId, TextureData> | undefined => {
    return templateTextures.value.get(templateId)
  }

  const reset = () => {
    dimensions.value = { width: 2, height: 3, depth: 1.5 }
    textures.value.clear()
    colors.value.clear()
    opacity.value.clear()
    selectedFace.value = 'front'
    activeTemplate.value = null
    
    Object.entries(defaultColors).forEach(([face, color]) => {
      colors.value.set(face as FaceId, color)
      opacity.value.set(face as FaceId, 1)
    })
  }

  return {
    dimensions,
    textures,
    colors,
    opacity,
    selectedFace,
    activeTemplate,
    templateTextures,
    
    setDimensions,
    setTexture,
    removeTexture,
    setColor,
    setOpacity,
    setSelectedFace,
    switchTemplate,
    getTexture,
    getColor,
    getOpacity,
    getActiveTemplate,
    getTemplateTextures,
    reset
  }
})