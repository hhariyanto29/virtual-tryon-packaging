import { ref, computed, onUnmounted } from 'vue'
import type { BoxFace } from '../stores/mockupStore'

export type TextureFit = 'stretch' | 'contain' | 'cover'

export interface TextureData {
  url: string
  name: string
  file?: File
  fit: TextureFit
  dimensions?: {
    width: number
    height: number
  }
  objectUrl?: string
}

export interface TextureMapping {
  [key: string]: TextureData | null
}

export interface UseTextureManagerOptions {
  maxCacheSize?: number // in MB
  autoCleanup?: boolean
}

export function useTextureManager(options: UseTextureManagerOptions = {}) {
  const {
    maxCacheSize = 50, // 50MB default cache
    autoCleanup = true
  } = options

  // State
  const textures = ref<TextureMapping>({
    front: null,
    back: null,
    left: null,
    right: null,
    top: null,
    bottom: null
  })

  const selectedFace = ref<BoxFace | null>('front')
  const textureFit = ref<TextureFit>('cover')
  const cacheSize = ref(0)
  const objectUrlCache = ref<Set<string>>(new Set())

  // Computed
  const texturedFaces = computed(() => {
    return Object.entries(textures.value)
      .filter(([_, texture]) => texture !== null)
      .map(([face]) => face as BoxFace)
  })

  const texturedFacesCount = computed(() => {
    return texturedFaces.value.length
  })

  const hasTextures = computed(() => {
    return texturedFacesCount.value > 0
  })

  const cacheSizeMB = computed(() => {
    return (cacheSize.value / (1024 * 1024)).toFixed(2)
  })

  // Methods
  const setTexture = (
    face: BoxFace,
    file: File,
    fit: TextureFit = 'cover'
  ): Promise<TextureData> => {
    return new Promise((resolve) => {
      // Clean up existing texture if any
      removeTexture(face)

      // Create object URL
      const objectUrl = URL.createObjectURL(file)
      objectUrlCache.value.add(objectUrl)

      // Create texture data
      const textureData: TextureData = {
        url: objectUrl,
        name: file.name,
        file,
        fit,
        objectUrl
      }

      // Get image dimensions
      const img = new Image()
      img.onload = () => {
        textureData.dimensions = {
          width: img.width,
          height: img.height
        }
        
        // Update cache size
        cacheSize.value += file.size
        
        // Store texture
        textures.value[face] = textureData
        
        // Auto cleanup if cache is too large
        if (autoCleanup && cacheSize.value > maxCacheSize * 1024 * 1024) {
          cleanupCache()
        }
        
        resolve(textureData)
      }
      
      img.onerror = () => {
        // Still store texture even if we can't get dimensions
        textures.value[face] = textureData
        cacheSize.value += file.size
        resolve(textureData)
      }
      
      img.src = objectUrl
    })
  }

  const setTextureFromUrl = (
    face: BoxFace,
    url: string,
    name: string = 'Texture',
    fit: TextureFit = 'cover'
  ): TextureData => {
    // Clean up existing texture if any
    removeTexture(face)

    const textureData: TextureData = {
      url,
      name,
      fit
    }

    textures.value[face] = textureData
    return textureData
  }

  const removeTexture = (face: BoxFace): void => {
    const texture = textures.value[face]
    if (!texture) return

    // Clean up object URL if it exists
    if (texture.objectUrl) {
      URL.revokeObjectURL(texture.objectUrl)
      objectUrlCache.value.delete(texture.objectUrl)
      
      // Update cache size
      if (texture.file) {
        cacheSize.value -= texture.file.size
      }
    }

    textures.value[face] = null
  }

  const clearAllTextures = (): void => {
    Object.keys(textures.value).forEach(face => {
      removeTexture(face as BoxFace)
    })
  }

  const copyTexture = (sourceFace: BoxFace, targetFace: BoxFace): boolean => {
    const sourceTexture = textures.value[sourceFace]
    if (!sourceTexture) return false

    // Clean up existing texture on target face
    removeTexture(targetFace)

    // Create a copy of the texture data
    const textureCopy: TextureData = {
      ...sourceTexture,
      name: `${sourceTexture.name} (copy)`
    }

    textures.value[targetFace] = textureCopy
    return true
  }

  const copyToAllFaces = (sourceFace: BoxFace): void => {
    const sourceTexture = textures.value[sourceFace]
    if (!sourceTexture) return

    Object.keys(textures.value).forEach(face => {
      if (face !== sourceFace) {
        copyTexture(sourceFace, face as BoxFace)
      }
    })
  }

  const applyToAllFaces = (file: File, fit: TextureFit = 'cover'): Promise<void> => {
    const promises = Object.keys(textures.value).map(face =>
      setTexture(face as BoxFace, file, fit)
    )
    return Promise.all(promises).then(() => {})
  }

  const setTextureFit = (face: BoxFace, fit: TextureFit): void => {
    const texture = textures.value[face]
    if (texture) {
      texture.fit = fit
    }
  }

  const setAllTextureFits = (fit: TextureFit): void => {
    Object.values(textures.value).forEach(texture => {
      if (texture) {
        texture.fit = fit
      }
    })
    textureFit.value = fit
  }

  const getTexture = (face: BoxFace): TextureData | null => {
    return textures.value[face] || null
  }

  const getTextureUrl = (face: BoxFace): string | null => {
    return textures.value[face]?.url || null
  }

  const hasTexture = (face: BoxFace): boolean => {
    return textures.value[face] !== null
  }

  const selectFace = (face: BoxFace | null): void => {
    selectedFace.value = face
  }

  const exportTextureMapping = (): Record<string, any> => {
    const mapping: Record<string, any> = {}
    
    Object.entries(textures.value).forEach(([face, texture]) => {
      if (texture) {
        mapping[face] = {
          name: texture.name,
          fit: texture.fit,
          dimensions: texture.dimensions,
          hasFile: !!texture.file
        }
      }
    })
    
    return mapping
  }

  const importTextureMapping = (
    mapping: Record<string, any>,
    fileMap?: Record<string, File>
  ): void => {
    clearAllTextures()
    
    Object.entries(mapping).forEach(([face, data]) => {
      if (data && data.name) {
        const textureData: TextureData = {
          url: data.url || '',
          name: data.name,
          fit: data.fit || 'cover',
          dimensions: data.dimensions
        }
        
        // If we have a file for this texture, use it
        if (fileMap && fileMap[data.name]) {
          textureData.file = fileMap[data.name]
          textureData.objectUrl = URL.createObjectURL(fileMap[data.name])
          objectUrlCache.value.add(textureData.objectUrl)
        }
        
        textures.value[face as BoxFace] = textureData
      }
    })
  }

  const cleanupCache = (): void => {
    // Simple LRU cache cleanup - remove oldest textures if cache is too large
    const textureEntries = Object.entries(textures.value)
      .filter(([_, texture]) => texture !== null)
      .sort(() => {
        // Simple timestamp-based sorting (we don't have timestamps yet)
        return 0
      })

    while (cacheSize.value > maxCacheSize * 1024 * 1024 && textureEntries.length > 0) {
      const [face, _texture] = textureEntries.shift()!
      removeTexture(face as BoxFace)
    }
  }

  const reset = (): void => {
    clearAllTextures()
    selectedFace.value = 'front'
    textureFit.value = 'cover'
    cacheSize.value = 0
    objectUrlCache.value.clear()
  }

  // Cleanup on unmount
  onUnmounted(() => {
    clearAllTextures()
  })

  return {
    // State
    textures,
    selectedFace,
    textureFit,
    cacheSize,
    
    // Computed
    texturedFaces,
    texturedFacesCount,
    hasTextures,
    cacheSizeMB,
    
    // Methods
    setTexture,
    setTextureFromUrl,
    removeTexture,
    clearAllTextures,
    copyTexture,
    copyToAllFaces,
    applyToAllFaces,
    setTextureFit,
    setAllTextureFits,
    getTexture,
    getTextureUrl,
    hasTexture,
    selectFace,
    exportTextureMapping,
    importTextureMapping,
    cleanupCache,
    reset
  }
}

export type TextureManager = ReturnType<typeof useTextureManager>