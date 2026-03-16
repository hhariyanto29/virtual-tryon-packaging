<template>
  <div class="relative w-full h-full">
    <canvas ref="canvasRef" class="w-full h-full"></canvas>
    
    <!-- Loading indicator -->
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-black/50">
      <div class="flex flex-col items-center gap-4">
        <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        <div class="text-white text-lg font-medium">Loading 3D scene...</div>
      </div>
    </div>
    
    <!-- FPS counter (dev mode) -->
    <div v-if="!loading && showFPS" class="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm font-mono">
      FPS: {{ Math.round(fps) }}
    </div>
    
    <!-- Texture loading indicator -->
    <div v-if="textureLoading" class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg">
      <div class="flex items-center gap-2">
        <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>Loading texture...</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { SceneManager, type LightingPreset, type CameraPreset } from '../engine/SceneManager'
import { BoxMockup, type BoxFace, type MaterialType } from '../engine/BoxMockup'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const loading = ref(true)
const textureLoading = ref(false)
const showFPS = ref((import.meta as any).env.MODE === 'development') // Show FPS in dev mode
const fps = ref(0)

let sceneManager: SceneManager | null = null
let boxMockup: BoxMockup | null = null
let frameCount = 0
let lastTime = 0
let fpsInterval: number | null = null

// Props
const props = defineProps<{
  lightingPreset?: LightingPreset
  cameraPreset?: CameraPreset
  showGrid?: boolean
  autoRotate?: boolean
}>()

// Emits
const emit = defineEmits<{
  loaded: []
  error: [error: Error]
}>()

onMounted(() => {
  if (!canvasRef.value) return
  
  try {
    // Initialize scene
    sceneManager = new SceneManager(canvasRef.value)
    
    // Create box mockup
    boxMockup = new BoxMockup()
    sceneManager.getScene().add(boxMockup.getMesh())
    
    // Apply initial props
    if (props.lightingPreset) {
      sceneManager.setLightingPreset(props.lightingPreset)
    }
    
    if (props.cameraPreset) {
      sceneManager.setCameraPreset(props.cameraPreset)
    }
    
    if (props.showGrid !== undefined) {
      sceneManager.toggleGridHelper(props.showGrid)
    }
    
    if (props.autoRotate !== undefined) {
      sceneManager.setAutoRotate(props.autoRotate)
    }
    
    // Start animation
    sceneManager.startAnimation()
    
    // Start FPS counter
    startFPSCounter()
    
    loading.value = false
    emit('loaded')
  } catch (error) {
    console.error('Failed to initialize 3D scene:', error)
    loading.value = false
    emit('error', error as Error)
  }
})

// Watch props changes
watch(() => props.lightingPreset, (newPreset) => {
  if (sceneManager && newPreset) {
    sceneManager.setLightingPreset(newPreset)
  }
})

watch(() => props.cameraPreset, (newPreset) => {
  if (sceneManager && newPreset) {
    sceneManager.setCameraPreset(newPreset)
  }
})

watch(() => props.showGrid, (show) => {
  if (sceneManager && show !== undefined) {
    sceneManager.toggleGridHelper(show)
  }
})

watch(() => props.autoRotate, (enabled) => {
  if (sceneManager && enabled !== undefined) {
    sceneManager.setAutoRotate(enabled)
  }
})

// FPS counter
const startFPSCounter = () => {
  lastTime = performance.now()
  
  const updateFPS = () => {
    frameCount++
    const currentTime = performance.now()
    const delta = currentTime - lastTime
    
    if (delta >= 1000) { // Update every second
      fps.value = (frameCount * 1000) / delta
      frameCount = 0
      lastTime = currentTime
    }
    
    if (showFPS.value) {
      fpsInterval = requestAnimationFrame(updateFPS)
    }
  }
  
  if (showFPS.value) {
    fpsInterval = requestAnimationFrame(updateFPS)
  }
}

onUnmounted(() => {
  // Stop FPS counter
  if (fpsInterval) {
    cancelAnimationFrame(fpsInterval)
  }
  
  // Dispose 3D resources
  if (boxMockup) {
    boxMockup.dispose()
  }
  
  if (sceneManager) {
    sceneManager.dispose()
  }
})

// Expose methods for parent component
defineExpose({
  // Texture methods
  applyTexture: async (face: BoxFace, imageUrl: string) => {
    if (boxMockup) {
      textureLoading.value = true
      try {
        await boxMockup.applyTexture(face, imageUrl)
      } finally {
        textureLoading.value = false
      }
    } else {
      return Promise.reject('Box mockup not initialized')
    }
  },
  
  applyTextureToAll: async (imageUrl: string) => {
    if (boxMockup) {
      textureLoading.value = true
      try {
        await boxMockup.applyTextureToAll(imageUrl)
      } finally {
        textureLoading.value = false
      }
    } else {
      return Promise.reject('Box mockup not initialized')
    }
  },
  
  clearTexture: (face: BoxFace) => {
    if (boxMockup) {
      boxMockup.clearTexture(face)
    }
  },
  
  resetTextures: () => {
    if (boxMockup) {
      boxMockup.resetTextures()
    }
  },
  
  // Material methods
  setColor: (face: BoxFace, color: number | string) => {
    if (boxMockup) {
      boxMockup.setColor(face, color)
    }
  },
  
  setMaterialType: (type: MaterialType) => {
    if (boxMockup) {
      boxMockup.setMaterialType(type)
    }
  },
  
  setOpacity: (face: BoxFace, opacity: number) => {
    if (boxMockup) {
      boxMockup.setOpacity(face, opacity)
    }
  },
  
  toggleEdgesOverlay: (visible: boolean) => {
    if (boxMockup) {
      boxMockup.toggleEdgesOverlay(visible)
    }
  },
  
  resize: (width: number, height: number, depth: number) => {
    if (boxMockup) {
      boxMockup.resize(width, height, depth)
    }
  },
  
  // Scene methods
  setLightingPreset: (preset: LightingPreset) => {
    if (sceneManager) {
      sceneManager.setLightingPreset(preset)
    }
  },
  
  setCameraPreset: (preset: CameraPreset, duration?: number) => {
    if (sceneManager) {
      sceneManager.setCameraPreset(preset, duration)
    }
  },
  
  toggleGridHelper: (visible: boolean) => {
    if (sceneManager) {
      sceneManager.toggleGridHelper(visible)
    }
  },
  
  setAutoRotate: (enabled: boolean, speed?: number) => {
    if (sceneManager) {
      sceneManager.setAutoRotate(enabled, speed)
    }
  },
  
  loadHDRIEnvironment: async (url: string) => {
    if (sceneManager) {
      return sceneManager.loadHDRIEnvironment(url)
    }
    return Promise.reject('Scene manager not initialized')
  },
  
  // Utility methods
  getFPS: () => {
    if (sceneManager) {
      return sceneManager.getFPS()
    }
    return 0
  },
  
  toggleFPS: (show: boolean) => {
    showFPS.value = show
    if (show && !fpsInterval) {
      startFPSCounter()
    } else if (!show && fpsInterval) {
      cancelAnimationFrame(fpsInterval)
      fpsInterval = null
    }
  },
  
  // Export support
  getSceneManager: () => {
    return sceneManager
  }
})
</script>

<style scoped>
canvas {
  display: block;
  outline: none;
}
</style>