<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <header class="mb-8">
        <h1 class="text-3xl md:text-4xl font-bold text-gray-900">Nemu 3D Box Mockup Tool</h1>
        <p class="text-gray-600 mt-2">Professional packaging mockups with realistic rendering</p>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <!-- Left sidebar: Scene Controls -->
        <div class="lg:col-span-1 space-y-6">
          <!-- Scene Settings -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Scene Settings</h2>
            
            <div class="space-y-4">
              <!-- Lighting Preset -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Lighting Preset</label>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="preset in lightingPresets"
                    :key="preset"
                    @click="setLightingPreset(preset)"
                    :class="[
                      'px-3 py-2 rounded text-sm font-medium transition-all duration-200',
                      currentLightingPreset === preset
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
                    ]"
                  >
                    {{ preset }}
                  </button>
                </div>
              </div>

              <!-- Camera Preset -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Camera View</label>
                <div class="grid grid-cols-2 gap-2">
                  <button
                    v-for="preset in cameraPresets"
                    :key="preset"
                    @click="setCameraPreset(preset)"
                    class="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded text-sm font-medium transition"
                  >
                    {{ preset }}
                  </button>
                </div>
              </div>

              <!-- Grid & Auto-rotate -->
              <div class="space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-700">Show Grid</span>
                  <button
                    @click="toggleGrid"
                    :class="[
                      'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                      showGrid ? 'bg-indigo-600' : 'bg-gray-300'
                    ]"
                  >
                    <span
                      :class="[
                        'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                        showGrid ? 'translate-x-6' : 'translate-x-1'
                      ]"
                    />
                  </button>
                </div>

                <div class="flex items-center justify-between">
                  <span class="text-sm font-medium text-gray-700">Auto Rotate</span>
                  <button
                    @click="toggleAutoRotate"
                    :class="[
                      'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                      autoRotate ? 'bg-indigo-600' : 'bg-gray-300'
                    ]"
                  >
                    <span
                      :class="[
                        'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                        autoRotate ? 'translate-x-6' : 'translate-x-1'
                      ]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Box Properties -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Box Properties</h2>
            
            <div class="space-y-4">
              <!-- Dimensions -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Dimensions</label>
                <div class="grid grid-cols-3 gap-2">
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Width</label>
                    <input 
                      v-model="dimensions.width"
                      type="number" 
                      step="0.1"
                      min="0.5"
                      max="10"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      @change="updateDimensions"
                    >
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Height</label>
                    <input 
                      v-model="dimensions.height"
                      type="number" 
                      step="0.1"
                      min="0.5"
                      max="10"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      @change="updateDimensions"
                    >
                  </div>
                  <div>
                    <label class="block text-xs text-gray-500 mb-1">Depth</label>
                    <input 
                      v-model="dimensions.depth"
                      type="number" 
                      step="0.1"
                      min="0.5"
                      max="10"
                      class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                      @change="updateDimensions"
                    >
                  </div>
                </div>
              </div>

              <!-- Material Type -->
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Material Type</label>
                <div class="grid grid-cols-3 gap-2">
                  <button
                    v-for="type in materialTypes"
                    :key="type"
                    @click="setMaterialType(type)"
                    :class="[
                      'px-3 py-2 rounded text-sm font-medium transition-all duration-200',
                      currentMaterialType === type
                        ? 'bg-indigo-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
                    ]"
                  >
                    {{ type }}
                  </button>
                </div>
              </div>

              <!-- Edges Overlay -->
              <div class="flex items-center justify-between">
                <span class="text-sm font-medium text-gray-700">Show Edges</span>
                <button
                  @click="toggleEdges"
                  :class="[
                    'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                    showEdges ? 'bg-indigo-600' : 'bg-gray-300'
                  ]"
                >
                  <span
                    :class="[
                      'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                      showEdges ? 'translate-x-6' : 'translate-x-1'
                    ]"
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Face Selection -->
          <div class="bg-white rounded-xl shadow-lg p-6">
            <h2 class="text-xl font-semibold mb-4 text-gray-800">Face Selection</h2>
            
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="face in faces"
                :key="face"
                @click="selectFace(face)"
                :class="[
                  'px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200 flex flex-col items-center justify-center',
                  selectedFace === face
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow'
                ]"
              >
                <span class="text-lg mb-1">{{ getFaceIcon(face) }}</span>
                <span>{{ face }}</span>
              </button>
            </div>

            <!-- Face Controls -->
            <div v-if="selectedFace" class="mt-6 pt-6 border-t border-gray-200">
              <h3 class="text-lg font-medium text-gray-800 mb-4">
                {{ selectedFace.charAt(0).toUpperCase() + selectedFace.slice(1) }} Face
              </h3>
              
              <div class="space-y-4">
                <!-- Color Picker -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Color</label>
                  <div class="flex items-center gap-3">
                    <input 
                      v-model="faceColor"
                      type="color"
                      class="w-12 h-12 cursor-pointer rounded-lg border border-gray-300"
                      @change="updateFaceColor"
                    >
                    <input 
                      v-model="faceColor"
                      type="text"
                      class="flex-1 px-3 py-2 border border-gray-300 rounded-lg font-mono text-sm"
                      @change="updateFaceColor"
                    >
                  </div>
                </div>

                <!-- Opacity Slider -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Opacity: {{ (faceOpacity * 100).toFixed(0) }}%
                  </label>
                  <input 
                    v-model="faceOpacity"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    @input="updateFaceOpacity"
                  >
                </div>

                <!-- Texture Upload -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Texture</label>
                  <div class="space-y-2">
                    <div class="flex gap-2">
                      <input
                        type="file"
                        ref="fileInput"
                        accept="image/*"
                        class="hidden"
                        @change="handleFileUpload"
                      >
                      <button
                        @click="triggerFileUpload"
                        class="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
                      >
                        Upload Image
                      </button>
                      <button
                        v-if="hasTexture(selectedFace)"
                        @click="clearTexture(selectedFace)"
                        class="px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-medium transition"
                      >
                        Clear
                      </button>
                    </div>
                    
                    <button
                      @click="applyTextureToAll"
                      class="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
                    >
                      Apply to All Faces
                    </button>
                    
                    <button
                      @click="resetTextures"
                      class="w-full px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg font-medium transition"
                    >
                      Reset All Textures
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Canvas Area -->
        <div class="lg:col-span-3">
          <div class="bg-white rounded-xl shadow-lg overflow-hidden">
            <!-- Canvas Header -->
            <div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 class="text-xl font-semibold text-gray-800">3D Preview</h2>
              <div class="flex items-center gap-4">
                <div class="text-sm text-gray-600">
                  <span class="font-medium">Controls:</span> Drag to rotate • Scroll to zoom • Right-click to pan
                </div>
                <button
                  @click="resetCamera"
                  class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium transition"
                >
                  Reset Camera
                </button>
              </div>
            </div>

            <!-- Canvas Container -->
            <div class="relative" style="height: 70vh">
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

            <!-- Quick Actions -->
            <div class="px-6 py-4 border-t border-gray-200">
              <div class="flex flex-wrap gap-3">
                <button
                  @click="downloadPNG"
                  class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
                >
                  Download PNG
                </button>
                <button
                  @click="downloadGLB"
                  class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition"
                >
                  Download GLB
                </button>
                <button
                  @click="copyShareLink"
                  class="px-4 py-2 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition"
                >
                  Copy Share Link
                </button>
                <button
                  @click="resetAll"
                  class="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
                >
                  Reset All
                </button>
              </div>
            </div>
          </div>

          <!-- Status & Info -->
          <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Scene Info</h3>
              <div class="space-y-2 text-sm text-gray-600">
                <div class="flex justify-between">
                  <span>Lighting:</span>
                  <span class="font-medium">{{ currentLightingPreset }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Material:</span>
                  <span class="font-medium">{{ currentMaterialType }}</span>
                </div>
                <div class="flex justify-between">
                  <span>Textured Faces:</span>
                  <span class="font-medium">{{ texturedFacesCount }} / 6</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Quick Templates</h3>
              <div class="space-y-2">
                <button
                  v-for="template in quickTemplates"
                  :key="template.name"
                  @click="applyQuickTemplate(template)"
                  class="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition"
                >
                  <div class="font-medium text-gray-800">{{ template.name }}</div>
                  <div class="text-sm text-gray-500">{{ template.dimensions }}</div>
                </button>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-lg p-6">
              <h3 class="text-lg font-semibold text-gray-800 mb-3">Tips</h3>
              <ul class="space-y-2 text-sm text-gray-600">
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Use high-resolution images for best quality</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Try different lighting presets for various moods</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Metallic material works best with studio lighting</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-indigo-600">•</span>
                  <span>Enable auto-rotate for presentation mode</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>Nemu 3D Box Mockup Tool v1.0 • Powered by Three.js & Vue 3</p>
        <p class="mt-1">Real-time 3D rendering with advanced lighting and material controls</p>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import MockupCanvas from '../components/MockupCanvas.vue'
import { useMockupStore, type BoxFace } from '../stores/mockupStore'
import type { LightingPreset, CameraPreset } from '../engine/SceneManager'
import type { MaterialType } from '../engine/BoxMockup'

const store = useMockupStore()
const canvasRef = ref<InstanceType<typeof MockupCanvas> | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

// Scene controls
const lightingPresets: LightingPreset[] = ['studio', 'outdoor', 'dramatic']
const cameraPresets: CameraPreset[] = ['front', 'back', 'top', 'isometric', 'reset']
const materialTypes: MaterialType[] = ['matte', 'glossy', 'metallic']

const currentLightingPreset = ref<LightingPreset>('studio')
const currentCameraPreset = ref<CameraPreset>('isometric')
const currentMaterialType = ref<MaterialType>('matte')
const showGrid = ref(true)
const showEdges = ref(false)
const autoRotate = ref(false)

// Box controls
const faces: BoxFace[] = ['front', 'back', 'left', 'right', 'top', 'bottom']
const selectedFace = ref<BoxFace>('front')
const dimensions = ref({ width: 2.5, height: 3.5, depth: 2 })
const faceColor = ref('#ffffff')
const faceOpacity = ref(1)

// Quick templates
const quickTemplates = [
  { name: 'Standard Box', dimensions: '2.5 × 3.5 × 2' },
  { name: 'Slim Package', dimensions: '1.5 × 4 × 1' },
  { name: 'Cube', dimensions: '3 × 3 × 3' },
  { name: 'Flat Box', dimensions: '4 × 2 × 0.5' }
]

// Computed
const texturedFacesCount = computed(() => {
  return faces.filter(face => store.getTexture(face) !== undefined).length
})

// Methods
const getFaceIcon = (face: BoxFace): string => {
  const icons: Record<BoxFace, string> = {
    front: '⬆️',
    back: '⬇️',
    left: '⬅️',
    right: '➡️',
    top: '🔺',
    bottom: '🔻'
  }
  return icons[face]
}

const setLightingPreset = (preset: LightingPreset) => {
  currentLightingPreset.value = preset
  if (canvasRef.value) {
    canvasRef.value.setLightingPreset(preset)
  }
}

const setCameraPreset = (preset: CameraPreset) => {
  currentCameraPreset.value = preset
  if (canvasRef.value) {
    canvasRef.value.setCameraPreset(preset, 800)
  }
}

const toggleGrid = () => {
  showGrid.value = !showGrid.value
  if (canvasRef.value) {
    canvasRef.value.toggleGridHelper(showGrid.value)
  }
}

const toggleEdges = () => {
  showEdges.value = !showEdges.value
  if (canvasRef.value) {
    canvasRef.value.toggleEdgesOverlay(showEdges.value)
  }
}

const toggleAutoRotate = () => {
  autoRotate.value = !autoRotate.value
  if (canvasRef.value) {
    canvasRef.value.setAutoRotate(autoRotate.value, 0.5)
  }
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

const selectFace = (face: BoxFace) => {
  selectedFace.value = face
  faceColor.value = store.getColor(face) || '#ffffff'
  faceOpacity.value = store.getOpacity(face) || 1
}

const updateFaceColor = () => {
  if (selectedFace.value) {
    store.setColor(selectedFace.value, faceColor.value)
    if (canvasRef.value) {
      canvasRef.value.setColor(selectedFace.value, faceColor.value)
    }
  }
}

const updateFaceOpacity = () => {
  if (selectedFace.value) {
    store.setOpacity(selectedFace.value, faceOpacity.value)
    if (canvasRef.value) {
      canvasRef.value.setOpacity(selectedFace.value, faceOpacity.value)
    }
  }
}

const hasTexture = (face: BoxFace): boolean => {
  return store.getTexture(face) !== undefined
}

const triggerFileUpload = () => {
  fileInput.value?.click()
}

const handleFileUpload = async (event: Event) => {
  const input = event.target as HTMLInputElement
  if (!input.files?.length || !selectedFace.value) return

  const file = input.files[0]
  const objectUrl = URL.createObjectURL(file)

  try {
    if (canvasRef.value) {
      await canvasRef.value.applyTexture(selectedFace.value, objectUrl)
      store.setTexture(selectedFace.value, {
        url: objectUrl,
        name: file.name
      })
    }
  } catch (error) {
    console.error('Failed to apply texture:', error)
    alert('Failed to load texture. Please try another image.')
  }

  // Clear input
  input.value = ''
}

const clearTexture = (face: BoxFace) => {
  if (canvasRef.value) {
    canvasRef.value.clearTexture(face)
  }
  store.removeTexture(face)
}

const applyTextureToAll = async () => {
  if (!fileInput.value) return
  
  const input = fileInput.value
  if (!input.files?.length) {
    triggerFileUpload()
    return
  }

  const file = input.files[0]
  const objectUrl = URL.createObjectURL(file)

  try {
    if (canvasRef.value) {
      await canvasRef.value.applyTextureToAll(objectUrl)
      
      // Store texture for all faces
      faces.forEach(face => {
        store.setTexture(face, {
          url: objectUrl,
          name: file.name
        })
      })
    }
  } catch (error) {
    console.error('Failed to apply texture to all faces:', error)
    alert('Failed to load texture. Please try another image.')
  }
}

const resetTextures = () => {
  if (canvasRef.value) {
    canvasRef.value.resetTextures()
  }
  faces.forEach(face => {
    store.removeTexture(face)
  })
}

const resetCamera = () => {
  setCameraPreset('reset')
}

const applyQuickTemplate = (template: typeof quickTemplates[0]) => {
  const dims = template.dimensions.split(' × ').map(Number)
  dimensions.value = { width: dims[0], height: dims[1], depth: dims[2] }
  updateDimensions()
}

const downloadPNG = () => {
  alert('PNG download feature coming soon!')
  // Implementation would use renderer.domElement.toDataURL()
}

const downloadGLB = () => {
  alert('GLB export feature coming soon!')
  // Implementation would use GLTFExporter
}

const copyShareLink = () => {
  navigator.clipboard.writeText(window.location.href)
    .then(() => alert('Link copied to clipboard!'))
    .catch(() => alert('Failed to copy link'))
}

const resetAll = () => {
  // Reset scene
  currentLightingPreset.value = 'studio'
  currentCameraPreset.value = 'isometric'
  currentMaterialType.value = 'matte'
  showGrid.value = true
  showEdges.value = false
  autoRotate.value = false
  
  // Reset box
  dimensions.value = { width: 2.5, height: 3.5, depth: 2 }
  selectedFace.value = 'front'
  faceColor.value = '#ffffff'
  faceOpacity.value = 1
  
  // Apply resets
  setLightingPreset('studio')
  setCameraPreset('reset')
  setMaterialType('matte')
  toggleGrid()
  toggleEdges()
  updateDimensions()
  resetTextures()
  
  // Reset store
  store.reset()
  
  // Reset face colors
  faces.forEach(face => {
    if (canvasRef.value) {
      canvasRef.value.setColor(face, '#ffffff')
    }
  })
}

// Canvas events
const onCanvasLoaded = () => {
  console.log('Canvas loaded successfully')
}

const onCanvasError = (error: Error) => {
  console.error('Canvas error:', error)
  alert('Failed to initialize 3D canvas. Please refresh the page.')
}

// Initialize
onMounted(() => {
  // Set initial values
  if (canvasRef.value) {
    canvasRef.value.setMaterialType('matte')
    canvasRef.value.toggleGridHelper(true)
  }
  
  // Initialize store colors
  faces.forEach(face => {
    store.setColor(face, '#ffffff')
  })
})
</script>

<style scoped>
/* Custom range slider */
input[type="range"] {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #4f46e5;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #4f46e5;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}
</style>