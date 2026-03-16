import { defineStore } from 'pinia'
import { ref } from 'vue'

export type BoxFace = 'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'

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
  textures: Map<BoxFace, TextureData>
  colors: Map<BoxFace, string>
  opacity: Map<BoxFace, number>
  selectedFace: BoxFace | null
}

export const useMockupStore = defineStore('mockup', () => {
  const dimensions = ref({
    width: 2,
    height: 3,
    depth: 1.5
  })

  const textures = ref<Map<BoxFace, TextureData>>(new Map())
  const colors = ref<Map<BoxFace, string>>(new Map())
  const opacity = ref<Map<BoxFace, number>>(new Map())
  const selectedFace = ref<BoxFace | null>('front')

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
    colors.value.set(face as BoxFace, color)
    opacity.value.set(face as BoxFace, 1)
  })

  const setDimensions = (width: number, height: number, depth: number) => {
    dimensions.value = { width, height, depth }
  }

  const setTexture = (face: BoxFace, texture: TextureData) => {
    textures.value.set(face, texture)
  }

  const removeTexture = (face: BoxFace) => {
    textures.value.delete(face)
  }

  const setColor = (face: BoxFace, color: string) => {
    colors.value.set(face, color)
  }

  const setOpacity = (face: BoxFace, opacityValue: number) => {
    opacity.value.set(face, opacityValue)
  }

  const setSelectedFace = (face: BoxFace | null) => {
    selectedFace.value = face
  }

  const getTexture = (face: BoxFace): TextureData | undefined => {
    return textures.value.get(face)
  }

  const getColor = (face: BoxFace): string => {
    return colors.value.get(face) || '#ffffff'
  }

  const getOpacity = (face: BoxFace): number => {
    return opacity.value.get(face) || 1
  }

  const reset = () => {
    dimensions.value = { width: 2, height: 3, depth: 1.5 }
    textures.value.clear()
    colors.value.clear()
    opacity.value.clear()
    selectedFace.value = 'front'
    
    Object.entries(defaultColors).forEach(([face, color]) => {
      colors.value.set(face as BoxFace, color)
      opacity.value.set(face as BoxFace, 1)
    })
  }

  return {
    dimensions,
    textures,
    colors,
    opacity,
    selectedFace,
    
    setDimensions,
    setTexture,
    removeTexture,
    setColor,
    setOpacity,
    setSelectedFace,
    getTexture,
    getColor,
    getOpacity,
    reset
  }
})