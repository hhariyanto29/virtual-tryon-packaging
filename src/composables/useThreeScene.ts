import { ref, onUnmounted } from 'vue'
import { SceneManager } from '../engine/SceneManager'
import { BoxMockup } from '../engine/BoxMockup'

export function useThreeScene(canvas: HTMLCanvasElement | null) {
  const sceneManager = ref<SceneManager | null>(null)
  const boxMockup = ref<BoxMockup | null>(null)
  const isLoading = ref(true)
  const error = ref<string | null>(null)

  const initialize = () => {
    if (!canvas) {
      error.value = 'Canvas element not found'
      return
    }

    try {
      // Initialize scene manager
      sceneManager.value = new SceneManager(canvas)
      
      // Create box mockup
      boxMockup.value = new BoxMockup()
      sceneManager.value.getScene().add(boxMockup.value.getMesh())
      
      // Start animation
      sceneManager.value.startAnimation()
      
      isLoading.value = false
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'Failed to initialize 3D scene'
      isLoading.value = false
    }
  }

  const applyTexture = async (face: string, imageUrl: string) => {
    if (!boxMockup.value) {
      throw new Error('Box mockup not initialized')
    }
    return boxMockup.value.applyTexture(face as any, imageUrl)
  }

  const setColor = (face: string, color: number | string) => {
    if (boxMockup.value) {
      boxMockup.value.setColor(face as any, color)
    }
  }

  const clearTexture = (face: string) => {
    if (boxMockup.value) {
      boxMockup.value.clearTexture(face as any)
    }
  }

  const dispose = () => {
    if (boxMockup.value) {
      boxMockup.value.dispose()
    }
    
    if (sceneManager.value) {
      sceneManager.value.dispose()
    }
  }

  onUnmounted(() => {
    dispose()
  })

  return {
    sceneManager,
    boxMockup,
    isLoading,
    error,
    initialize,
    applyTexture,
    setColor,
    clearTexture,
    dispose
  }
}