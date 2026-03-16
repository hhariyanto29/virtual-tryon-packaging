<template>
  <div class="editor-container" :class="{ 'dark-theme': isDarkTheme }">
    <!-- Top Toolbar -->
    <TopToolbar
      :zoom="zoom"
      :view-preset="currentCameraPreset"
      :auto-rotate="autoRotate"
      :show-grid="showGrid"
      :is-dark="isDarkTheme"
      @zoom-in="handleZoomIn"
      @zoom-out="handleZoomOut"
      @zoom-fit="handleZoomFit"
      @view-preset="setCameraPreset"
      @toggle-auto-rotate="toggleAutoRotate"
      @toggle-grid="toggleGrid"
      @toggle-theme="toggleTheme"
    />

    <!-- Main Editor Area -->
    <div class="editor-main">
      <!-- Left Panel -->
      <LeftPanel
        :selected-template="selectedTemplate"
        @select-template="handleTemplateSelect"
      />

      <!-- Canvas Area -->
      <div class="canvas-area">
        <div class="canvas-container">
          <MockupCanvas 
            ref="canvasRef"
            :lighting-preset="currentLightingPreset"
            :camera-preset="currentCameraPreset"
            :show-grid="showGrid"
            :auto-rotate="autoRotate"
            class="w-full h-full"
            @loaded="onCanvasLoaded"
            @error="onCanvasError"
          />
        </div>
        
        <!-- Canvas Controls Overlay -->
        <div class="canvas-controls">
          <button class="control-btn" @click="resetCamera" title="Reset Camera (Space)">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 4V6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M10 14V16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M4 10H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M14 10H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="10" cy="10" r="4" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </button>
          <div class="canvas-info">
            <span class="info-text">Drag: Rotate • Scroll: Zoom • Right-click: Pan</span>
          </div>
        </div>
      </div>

      <!-- Right Panel -->
      <RightPanel
        :selected-face="selectedFace"
        :texture-urls="textureUrls"
        :current-material-type="currentMaterialType"
        :current-lighting-preset="currentLightingPreset"
        :dimensions="dimensions"
        :scene-manager="sceneManager"
        :current-template-name="currentTemplateName"
        @select-face="selectFace"
        @set-material-type="setMaterialType"
        @set-lighting-preset="setLightingPreset"
        @update-dimensions="updateDimensions"
        @design-upload="handleDesignUpload"
        @apply-to-face="handleApplyToFace"
        @apply-to-all="handleApplyToAll"
        @clear-upload="handleClearUpload"
        @remove-texture="handleRemoveTexture"
        @copy-to-others="handleCopyToOthers"
        @reset-all-textures="handleResetAllTextures"
        @export="handleExport"
        @batch-export="handleBatchExport"
        @export-error="handleExportError"
      />
    </div>

    <!-- Bottom Status Bar -->
    <div class="status-bar">
      <div class="status-left">
        <span class="status-item">
          <span class="status-label">Selected:</span>
          <span class="status-value">
            {{ selectedFace ? selectedFace.charAt(0).toUpperCase() + selectedFace.slice(1) : 'None' }}
          </span>
        </span>
        <span class="status-item">
          <span class="status-label">Textured:</span>
          <span class="status-value">{{ texturedFacesCount }} / 6 faces</span>
        </span>
        <span class="status-item">
          <span class="status-label">Material:</span>
          <span class="status-value">{{ currentMaterialType }}</span>
        </span>
      </div>
      <div class="status-right">
        <span class="status-item">
          <span class="status-label">FPS:</span>
          <span class="status-value">{{ fps.toFixed(1) }}</span>
        </span>
        <span class="status-item">
          <span class="status-label">Memory:</span>
          <span class="status-value">{{ memoryUsage }} MB</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import TopToolbar from '../components/editor/TopToolbar.vue'
import LeftPanel from '../components/editor/LeftPanel.vue'
import RightPanel from '../components/editor/RightPanel.vue'
import MockupCanvas from '../components/MockupCanvas.vue'
import { useMockupStore, type BoxFace } from '../stores/mockupStore'
import { useTextureManager } from '../composables/useTextureManager'
import type { MaterialType } from '../engine/BoxMockup'
import type { LightingPreset, CameraPreset } from '../engine/SceneManager'
import type { TextureFit } from '../components/editor/types'

const store = useMockupStore()
const textureManager = useTextureManager()
const canvasRef = ref<InstanceType<typeof MockupCanvas> | null>(null)

// Theme
const isDarkTheme = ref(true)

// Canvas controls
const zoom = ref(100)
const fps = ref(60)
const memoryUsage = ref(0)

// Scene controls
const currentLightingPreset = ref<LightingPreset>('studio')
const currentCameraPreset = ref<CameraPreset>('isometric')
const currentMaterialType = ref<MaterialType>('matte')
const showGrid = ref(true)
const autoRotate = ref(false)

// Box controls
const faces: BoxFace[] = ['front', 'back', 'left', 'right', 'top', 'bottom']
const selectedFace = ref<BoxFace>('front')
const dimensions = ref({ width: 2.5, height: 3.5, depth: 2 })
const selectedTemplate = ref<any>(null)

// Export controls
const sceneManager = ref<any>(null)
const currentTemplateName = ref('box-mockup')

// Computed
const texturedFacesCount = computed(() => {
  return faces.filter(face => store.getTexture(face) !== undefined).length
})

const textureUrls = computed(() => {
  const urls: Record<BoxFace, string | null> = {
    front: null,
    back: null,
    left: null,
    right: null,
    top: null,
    bottom: null
  }
  
  faces.forEach(face => {
    const texture = store.getTexture(face)
    urls[face] = texture?.url || null
  })
  
  return urls
})

// Methods
const handleZoomIn = () => {
  zoom.value = Math.min(zoom.value + 10, 200)
  if (canvasRef.value) {
    canvasRef.value.zoomIn()
  }
}

const handleZoomOut = () => {
  zoom.value = Math.max(zoom.value - 10, 25)
  if (canvasRef.value) {
    canvasRef.value.zoomOut()
  }
}

const handleZoomFit = () => {
  zoom.value = 100
  if (canvasRef.value) {
    canvasRef.value.fitToScreen()
  }
}

const setCameraPreset = (preset: CameraPreset) => {
  currentCameraPreset.value = preset
  if (canvasRef.value) {
    canvasRef.value.setCameraPreset(preset, 800)
  }
}

const toggleAutoRotate = () => {
  autoRotate.value = !autoRotate.value
  if (canvasRef.value) {
    canvasRef.value.setAutoRotate(autoRotate.value, 0.5)
  }
}

const toggleGrid = () => {
  showGrid.value = !showGrid.value
  if (canvasRef.value) {
    canvasRef.value.toggleGridHelper(showGrid.value)
  }
}

const toggleTheme = () => {
  isDarkTheme.value = !isDarkTheme.value
  localStorage.setItem('editor-theme', isDarkTheme.value ? 'dark' : 'light')
}

const resetCamera = () => {
  setCameraPreset('reset')
}

const updateDimensions = () => {
  if (canvasRef.value) {
    canvasRef.value.resize(
      dimensions.value.width,
      dimensions.value.height,
      dimensions.value.depth
    )
  }
}

const setMaterialType = (type: MaterialType) => {
  currentMaterialType.value = type
  if (canvasRef.value) {
    canvasRef.value.setMaterialType(type)
  }
}

const setLightingPreset = (preset: LightingPreset) => {
  currentLightingPreset.value = preset
  if (canvasRef.value) {
    canvasRef.value.setLightingPreset(preset)
  }
}

const selectFace = (face: BoxFace) => {
  selectedFace.value = face
  store.setSelectedFace(face)
}

const handleTemplateSelect = (template: any) => {
  selectedTemplate.value = template
  console.log('Template selected:', template)
  // Here you would load the template into the canvas
}

const handleDesignUpload = (file: File) => {
  console.log('Design uploaded:', file.name)
}

const handleApplyToFace = async (data: { face: BoxFace; file: File; fit: TextureFit }) => {
  const { face, file, fit } = data
  
  try {
    // Apply texture via texture manager
    const textureData = await textureManager.setTexture(face, file, fit)
    
    // Apply to 3D canvas
    if (canvasRef.value) {
      await canvasRef.value.applyTexture(face, textureData.url)
    }
    
    // Store in mockup store
    store.setTexture(face, {
      url: textureData.url,
      name: file.name
    })
    
    console.log(`Texture applied to ${face} face`)
  } catch (error) {
    console.error('Failed to apply texture:', error)
    alert('Failed to apply texture. Please try another image.')
  }
}

const handleApplyToAll = async (data: { file: File; fit: TextureFit }) => {
  const { file, fit } = data
  
  try {
    // Apply to all faces via texture manager
    await textureManager.applyToAllFaces(file, fit)
    
    // Apply to 3D canvas
    if (canvasRef.value) {
      await canvasRef.value.applyTextureToAll(textureManager.getTextureUrl('front')!)
    }
    
    // Store in mockup store for all faces
    faces.forEach(face => {
      store.setTexture(face, {
        url: textureManager.getTextureUrl(face)!,
        name: file.name
      })
    })
    
    console.log('Texture applied to all faces')
  } catch (error) {
    console.error('Failed to apply texture to all faces:', error)
    alert('Failed to apply texture. Please try another image.')
  }
}

const handleClearUpload = () => {
  console.log('Upload cleared')
}

const handleRemoveTexture = (face: BoxFace) => {
  // Remove from texture manager
  textureManager.removeTexture(face)
  
  // Remove from 3D canvas
  if (canvasRef.value) {
    canvasRef.value.clearTexture(face)
  }
  
  // Remove from store
  store.removeTexture(face)
  
  console.log(`Texture removed from ${face} face`)
}

const handleCopyToOthers = (sourceFace: BoxFace) => {
  const sourceTexture = textureManager.getTexture(sourceFace)
  if (!sourceTexture) return
  
  // Copy to other faces via texture manager
  textureManager.copyToAllFaces(sourceFace)
  
  // Apply to 3D canvas for all other faces
  faces.forEach(face => {
    if (face !== sourceFace) {
      const textureUrl = textureManager.getTextureUrl(face)
      if (textureUrl && canvasRef.value) {
        canvasRef.value.applyTexture(face, textureUrl)
        store.setTexture(face, {
          url: textureUrl,
          name: `${sourceTexture.name} (copy)`
        })
      }
    }
  })
  
  console.log(`Texture copied from ${sourceFace} to all other faces`)
}

const handleResetAllTextures = () => {
  // Reset texture manager
  textureManager.clearAllTextures()
  
  // Reset 3D canvas textures
  if (canvasRef.value) {
    canvasRef.value.resetTextures()
  }
  
  // Reset store textures
  faces.forEach(face => {
    store.removeTexture(face)
  })
  
  console.log('All textures reset')
}

// Export handlers
const handleExport = (blob: Blob, filename: string) => {
  console.log('Export successful:', filename, 'size:', blob.size)
  // Additional export handling can be added here
}

const handleBatchExport = (blobs: Blob[], filenames: string[]) => {
  console.log('Batch export successful:', filenames.length, 'files')
  // Additional batch export handling can be added here
}

const handleExportError = (error: Error) => {
  console.error('Export error:', error)
  alert(`Export failed: ${error.message}`)
}

// Canvas events
const onCanvasLoaded = () => {
  console.log('Canvas loaded successfully')
  // Get scene manager from canvas component
  if (canvasRef.value) {
    sceneManager.value = canvasRef.value.getSceneManager()
  }
  
  // Start performance monitoring
  startPerformanceMonitoring()
}

const onCanvasError = (error: Error) => {
  console.error('Canvas error:', error)
  alert('Failed to initialize 3D canvas. Please refresh the page.')
}

// Performance monitoring
let performanceInterval: number | null = null

const startPerformanceMonitoring = () => {
  if (performanceInterval) clearInterval(performanceInterval)
  
  performanceInterval = window.setInterval(() => {
    // Simulate FPS monitoring
    fps.value = 50 + Math.random() * 20
    
    // Simulate memory usage
    memoryUsage.value = Math.round(100 + Math.random() * 50)
  }, 1000)
}

const stopPerformanceMonitoring = () => {
  if (performanceInterval) {
    clearInterval(performanceInterval)
    performanceInterval = null
  }
}

// Keyboard shortcuts
const handleKeyDown = (event: KeyboardEvent) => {
  // Prevent default behavior for our shortcuts
  if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
    return
  }

  switch (event.key.toLowerCase()) {
    case ' ':
      event.preventDefault()
      resetCamera()
      break
    case 'r':
      event.preventDefault()
      toggleAutoRotate()
      break
    case 'g':
      event.preventDefault()
      toggleGrid()
      break
    case '1':
      event.preventDefault()
      setCameraPreset('front')
      break
    case '2':
      event.preventDefault()
      setCameraPreset('back')
      break
    case '3':
      event.preventDefault()
      setCameraPreset('top')
      break
    case '4':
      event.preventDefault()
      setCameraPreset('isometric')
      break
    case '+':
    case '=':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        handleZoomIn()
      }
      break
    case '-':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        handleZoomOut()
      }
      break
    case '0':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault()
        handleZoomFit()
      }
      break
  }
}

// Initialize
onMounted(() => {
  // Load theme preference
  const savedTheme = localStorage.getItem('editor-theme')
  if (savedTheme) {
    isDarkTheme.value = savedTheme === 'dark'
  }
  
  // Set initial values
  if (canvasRef.value) {
    canvasRef.value.setMaterialType('matte')
    canvasRef.value.toggleGridHelper(true)
  }
  
  // Initialize store colors
  faces.forEach(face => {
    store.setColor(face, '#ffffff')
  })
  
  // Initialize selected face
  store.setSelectedFace('front')
  
  // Add keyboard event listener
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  // Cleanup
  stopPerformanceMonitoring()
  window.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
@reference "tailwindcss";

.editor-container {
  @apply flex flex-col h-screen bg-gray-950 text-gray-100;
}

.editor-main {
  @apply flex flex-1 overflow-hidden;
}

.canvas-area {
  @apply flex-1 flex flex-col relative;
}

.canvas-container {
  @apply flex-1 bg-gray-900;
}

.canvas-controls {
  @apply absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 
         bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-800;
}

.control-btn {
  @apply flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white 
         hover:bg-gray-800 rounded transition-colors duration-200;
}

.canvas-info {
  @apply text-sm text-gray-400;
}

.info-text {
  @apply font-medium;
}

.status-bar {
  @apply flex items-center justify-between h-8 px-4 bg-gray-900 border-t border-gray-800 
         text-xs font-medium;
}

.status-left,
.status-right {
  @apply flex items-center gap-4;
}

.status-item {
  @apply flex items-center gap-1;
}

.status-label {
  @apply text-gray-500;
}

.status-value {
  @apply text-gray-300;
}

/* Responsive styles */
@media (max-width: 1024px) {
  .editor-main {
    @apply flex-col;
  }
  
  .canvas-area {
    @apply order-2;
  }
  
  .left-panel,
  .right-panel {
    @apply w-full h-auto max-h-64;
  }
  
  .left-panel.collapsed,
  .right-panel.collapsed {
    @apply w-full h-12;
  }
}

/* Keyboard shortcut hints */
kbd {
  @apply px-1.5 py-0.5 bg-gray-800 border border-gray-700 rounded text-xs font-mono;
}
</style>