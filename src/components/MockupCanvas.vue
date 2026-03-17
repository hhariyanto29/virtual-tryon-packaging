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
import { defaultTemplates } from '../templates/defaults'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const loading = ref(true)
const textureLoading = ref(false)

let sceneManager: SceneManager | null = null

const props = defineProps<{
  lightingPreset?: LightingPreset
  cameraPreset?: CameraPreset
  showGrid?: boolean
  autoRotate?: boolean
}>()

const emit = defineEmits<{
  loaded: []
  error: [error: Error]
}>()

onMounted(async () => {
  if (!canvasRef.value) return
  
  try {
    sceneManager = new SceneManager(canvasRef.value)
    
    // Load first template by default
    if (defaultTemplates.length > 0) {
      await sceneManager.loadTemplate(defaultTemplates[0])
    }
    
    if (props.lightingPreset) sceneManager.setLightingPreset(props.lightingPreset)
    if (props.cameraPreset) sceneManager.setCameraPreset(props.cameraPreset)
    if (props.showGrid !== undefined) sceneManager.toggleGridHelper(props.showGrid)
    if (props.autoRotate !== undefined) sceneManager.setAutoRotate(props.autoRotate)
    
    sceneManager.startAnimation()
    loading.value = false
    emit('loaded')
  } catch (error) {
    console.error('Failed to initialize 3D scene:', error)
    loading.value = false
    emit('error', error as Error)
  }
})

watch(() => props.lightingPreset, (v) => { if (sceneManager && v) sceneManager.setLightingPreset(v) })
watch(() => props.cameraPreset, (v) => { if (sceneManager && v) sceneManager.setCameraPreset(v) })
watch(() => props.showGrid, (v) => { if (sceneManager && v !== undefined) sceneManager.toggleGridHelper(v) })
watch(() => props.autoRotate, (v) => { if (sceneManager && v !== undefined) sceneManager.setAutoRotate(v) })

onUnmounted(() => {
  if (sceneManager) sceneManager.dispose()
})

defineExpose({
  // Texture methods — now through SceneManager's currentGeometry
  applyTexture: async (face: string, imageUrl: string) => {
    if (!sceneManager) return Promise.reject('Scene not initialized')
    textureLoading.value = true
    try {
      await sceneManager.applyTextureToFace(face, imageUrl)
    } finally {
      textureLoading.value = false
    }
  },
  
  applyTextureToAll: async (imageUrl: string) => {
    if (!sceneManager) return Promise.reject('Scene not initialized')
    const geo = sceneManager.getCurrentGeometry()
    if (!geo) return
    textureLoading.value = true
    try {
      const faces = geo.getTextureableFaces()
      for (const f of faces) {
        await geo.applyTexture(f.id, imageUrl)
      }
    } finally {
      textureLoading.value = false
    }
  },
  
  clearTexture: (face: string) => {
    if (sceneManager) sceneManager.clearTextureFromFace(face)
  },
  
  resetTextures: () => {
    const geo = sceneManager?.getCurrentGeometry()
    if (geo) {
      const faces = geo.getTextureableFaces()
      faces.forEach(f => geo.clearTexture(f.id))
    }
  },
  
  setMaterialType: (type: string) => {
    if (sceneManager) sceneManager.setMaterialType(type as any)
  },
  
  setLightingPreset: (preset: LightingPreset) => {
    if (sceneManager) sceneManager.setLightingPreset(preset)
  },
  
  setCameraPreset: (preset: CameraPreset, duration?: number) => {
    if (sceneManager) sceneManager.setCameraPreset(preset, duration)
  },
  
  toggleGridHelper: (visible: boolean) => {
    if (sceneManager) sceneManager.toggleGridHelper(visible)
  },
  
  setAutoRotate: (enabled: boolean, speed?: number) => {
    if (sceneManager) sceneManager.setAutoRotate(enabled, speed)
  },
  
  getSceneManager: () => sceneManager,
  
  getFPS: () => sceneManager?.getFPS() || 0
})
</script>

<style scoped>
canvas {
  display: block;
  outline: none;
}
</style>