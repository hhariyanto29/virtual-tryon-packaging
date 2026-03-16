<template>
  <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <!-- Left sidebar: Controls -->
    <div class="lg:col-span-1 space-y-6">
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Box Properties</h2>
        
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Dimensions</label>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <label class="block text-xs text-gray-500">Width</label>
                <input 
                  v-model="dimensions.width"
                  type="number" 
                  step="0.1"
                  class="w-full px-3 py-2 border rounded"
                  @change="updateDimensions"
                >
              </div>
              <div>
                <label class="block text-xs text-gray-500">Height</label>
                <input 
                  v-model="dimensions.height"
                  type="number" 
                  step="0.1"
                  class="w-full px-3 py-2 border rounded"
                  @change="updateDimensions"
                >
              </div>
              <div>
                <label class="block text-xs text-gray-500">Depth</label>
                <input 
                  v-model="dimensions.depth"
                  type="number" 
                  step="0.1"
                  class="w-full px-3 py-2 border rounded"
                  @change="updateDimensions"
                >
              </div>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Selected Face</label>
            <div class="grid grid-cols-3 gap-2">
              <button
                v-for="face in faces"
                :key="face"
                @click="selectFace(face)"
                :class="[
                  'px-3 py-2 rounded text-sm font-medium transition',
                  selectedFace === face 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                ]"
              >
                {{ face }}
              </button>
            </div>
          </div>

          <div v-if="selectedFace">
            <label class="block text-sm font-medium text-gray-700 mb-2">
              {{ selectedFace.charAt(0).toUpperCase() + selectedFace.slice(1) }} Face
            </label>
            
            <div class="space-y-4">
              <div>
                <label class="block text-xs text-gray-500 mb-1">Color</label>
                <input 
                  v-model="faceColor"
                  type="color"
                  class="w-full h-10 cursor-pointer"
                  @change="updateFaceColor"
                >
              </div>

              <div>
                <label class="block text-xs text-gray-500 mb-1">Opacity</label>
                <input 
                  v-model="faceOpacity"
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  class="w-full"
                  @input="updateFaceOpacity"
                >
                <div class="text-xs text-gray-500 text-right">{{ faceOpacity }}</div>
              </div>

              <div>
                <label class="block text-xs text-gray-500 mb-1">Texture</label>
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
                    class="flex-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded text-sm"
                  >
                    Upload Image
                  </button>
                  <button
                    v-if="hasTexture(selectedFace)"
                    @click="clearTexture(selectedFace)"
                    class="px-3 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded text-sm"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Templates</h2>
        <div class="space-y-2">
          <button
            v-for="template in templates"
            :key="template.id"
            @click="applyTemplate(template)"
            class="w-full text-left px-4 py-3 rounded border hover:bg-gray-50 transition"
          >
            <div class="font-medium">{{ template.name }}</div>
            <div class="text-sm text-gray-500">{{ template.description }}</div>
          </button>
        </div>
      </div>

      <div class="bg-white p-6 rounded-lg shadow">
        <button
          @click="resetAll"
          class="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded font-medium"
        >
          Reset All
        </button>
      </div>
    </div>

    <!-- Main canvas area -->
    <div class="lg:col-span-2">
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">3D Preview</h2>
        <div class="aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <MockupCanvas 
            ref="canvasRef"
            class="w-full h-full"
          />
        </div>
        
        <div class="mt-4 text-sm text-gray-500">
          <p>• Drag to rotate • Scroll to zoom • Right-click drag to pan</p>
        </div>
      </div>

      <div class="mt-6 bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Export Options</h2>
        <div class="flex gap-4">
          <button class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded">
            Download PNG
          </button>
          <button class="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded">
            Download GLB
          </button>
          <button class="px-4 py-2 border border-gray-300 hover:bg-gray-50 rounded">
            Copy Share Link
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import MockupCanvas from '../components/MockupCanvas.vue'
import { useMockupStore, type BoxFace } from '../stores/mockupStore'
import { templates, type Template } from '../templates'

const store = useMockupStore()
const canvasRef = ref<InstanceType<typeof MockupCanvas> | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)

const faces: BoxFace[] = ['front', 'back', 'left', 'right', 'top', 'bottom']

const dimensions = ref({ ...store.dimensions })
const selectedFace = computed(() => store.selectedFace)
const faceColor = computed(() => store.getColor(selectedFace.value || 'front'))
const faceOpacity = computed(() => store.getOpacity(selectedFace.value || 'front'))

const updateDimensions = () => {
  store.setDimensions(dimensions.value.width, dimensions.value.height, dimensions.value.depth)
}

const selectFace = (face: BoxFace) => {
  store.setSelectedFace(face)
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
    store.setOpacity(selectedFace.value, parseFloat(faceOpacity.value.toString()))
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

const applyTemplate = (template: Template) => {
  dimensions.value = { ...template.dimensions }
  updateDimensions()
}

const resetAll = () => {
  store.reset()
  dimensions.value = { ...store.dimensions }
  
  // Reset canvas
  faces.forEach(face => {
    if (canvasRef.value) {
      canvasRef.value.setColor(face, '#ffffff')
      canvasRef.value.clearTexture(face)
    }
  })
}

// Initialize
onMounted(() => {
  // Set initial colors on canvas
  faces.forEach(face => {
    if (canvasRef.value) {
      canvasRef.value.setColor(face, store.getColor(face))
    }
  })
})
</script>