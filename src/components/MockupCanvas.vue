<template>
  <div class="relative w-full h-full">
    <canvas ref="canvasRef" class="w-full h-full rounded-lg shadow-lg"></canvas>
    <div v-if="loading" class="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
      <div class="text-white">Loading 3D scene...</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { SceneManager } from '../engine/SceneManager'
import { BoxMockup } from '../engine/BoxMockup'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const loading = ref(true)

let sceneManager: SceneManager | null = null
let boxMockup: BoxMockup | null = null

onMounted(() => {
  if (!canvasRef.value) return
  
  try {
    // Initialize scene
    sceneManager = new SceneManager(canvasRef.value)
    
    // Create box mockup
    boxMockup = new BoxMockup()
    sceneManager.getScene().add(boxMockup.getMesh())
    
    // Start animation
    sceneManager.startAnimation()
    
    loading.value = false
  } catch (error) {
    console.error('Failed to initialize 3D scene:', error)
    loading.value = false
  }
})

onUnmounted(() => {
  if (boxMockup) {
    boxMockup.dispose()
  }
  
  if (sceneManager) {
    sceneManager.dispose()
  }
})

// Expose methods for parent component
defineExpose({
  applyTexture: (face: string, imageUrl: string) => {
    if (boxMockup) {
      return boxMockup.applyTexture(face as any, imageUrl)
    }
    return Promise.reject('Box mockup not initialized')
  },
  setColor: (face: string, color: number | string) => {
    if (boxMockup) {
      boxMockup.setColor(face as any, color)
    }
  },
  clearTexture: (face: string) => {
    if (boxMockup) {
      boxMockup.clearTexture(face as any)
    }
  }
})
</script>