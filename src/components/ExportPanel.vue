<template>
  <div class="bg-white rounded-xl shadow-lg p-6">
    <h2 class="text-xl font-semibold mb-4 text-gray-800">Export Settings</h2>
    
    <div class="space-y-6">
      <!-- Format Selection -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">Format</label>
        <div class="grid grid-cols-2 gap-3">
          <button
            v-for="format in formats"
            :key="format"
            @click="selectedFormat = format"
            :class="[
              'px-4 py-3 rounded-lg border-2 transition-all duration-200 font-medium',
              selectedFormat === format
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 hover:border-gray-300 text-gray-700 hover:bg-gray-50'
            ]"
          >
            {{ format.toUpperCase() }}
          </button>
        </div>
      </div>

      <!-- Resolution Selection -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">Resolution</label>
        <div class="grid grid-cols-3 gap-3">
          <button
            v-for="resolution in resolutions"
            :key="resolution.value"
            @click="selectedResolution = resolution.value"
            :class="[
              'px-3 py-3 rounded-lg border-2 transition-all duration-200',
              selectedResolution === resolution.value
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            ]"
          >
            <div class="text-center">
              <div class="font-medium text-gray-800">{{ resolution.label }}</div>
              <div class="text-xs text-gray-500 mt-1">{{ resolution.dimensions }}</div>
            </div>
          </button>
        </div>
      </div>

      <!-- Quality Slider (for JPG only) -->
      <div v-if="selectedFormat === 'jpg'">
        <div class="flex items-center justify-between mb-2">
          <label class="text-sm font-medium text-gray-700">Quality</label>
          <span class="text-sm font-medium text-indigo-600">{{ quality }}%</span>
        </div>
        <input
          v-model="quality"
          type="range"
          min="50"
          max="100"
          step="5"
          class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div class="flex justify-between text-xs text-gray-500 mt-1">
          <span>Low</span>
          <span>Medium</span>
          <span>High</span>
        </div>
      </div>

      <!-- Background Options -->
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-3">Background</label>
        <div class="grid grid-cols-3 gap-3 mb-4">
          <button
            v-for="bg in backgroundOptions"
            :key="bg.value"
            @click="selectedBackground = bg.value"
            :class="[
              'px-3 py-3 rounded-lg border-2 transition-all duration-200 flex flex-col items-center justify-center',
              selectedBackground === bg.value
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
            ]"
          >
            <div
              class="w-8 h-8 rounded-full mb-2 border border-gray-300"
              :style="{
                backgroundColor: bg.value === 'transparent' ? 'transparent' : 
                              bg.value === 'white' ? '#ffffff' : bg.value,
                backgroundImage: bg.value === 'transparent' ? 'linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb), linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb)' : 'none',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px'
              }"
            />
            <span class="text-xs font-medium text-gray-700">{{ bg.label }}</span>
          </button>
        </div>

        <!-- Custom Color Picker -->
        <div v-if="selectedBackground === 'custom'" class="mt-4">
          <label class="block text-sm font-medium text-gray-700 mb-2">Custom Color</label>
          <div class="flex items-center gap-3">
            <input
              v-model="customColor"
              type="color"
              class="w-12 h-12 cursor-pointer rounded-lg border border-gray-300"
            />
            <input
              v-model="customColor"
              type="text"
              placeholder="#RRGGBB"
              class="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              @input="validateColor"
            />
          </div>
          <div class="mt-2 text-xs text-gray-500">
            Enter hex color code or use the color picker
          </div>
        </div>
      </div>

      <!-- Preview -->
      <div class="border-t border-gray-200 pt-6">
        <h3 class="text-sm font-medium text-gray-700 mb-3">Preview</h3>
        <div class="bg-gray-50 rounded-lg p-4">
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">File name:</span>
            <span class="text-sm font-medium text-gray-800">{{ previewFilename }}</span>
          </div>
          <div class="flex items-center justify-between mb-2">
            <span class="text-sm text-gray-600">Dimensions:</span>
            <span class="text-sm font-medium text-gray-800">{{ previewDimensions }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-sm text-gray-600">Size:</span>
            <span class="text-sm font-medium text-gray-800">{{ previewSize }}</span>
          </div>
        </div>
      </div>

      <!-- Export Buttons -->
      <div class="space-y-3">
        <!-- Single Export -->
        <button
          @click="exportSingle"
          :disabled="isExporting"
          :class="[
            'w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2',
            isExporting
              ? 'bg-indigo-400 cursor-not-allowed'
              : 'bg-indigo-600 hover:bg-indigo-700 text-white'
          ]"
        >
          <svg
            v-if="isExporting"
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          {{ isExporting ? 'Exporting...' : 'Export Image' }}
        </button>

        <!-- Batch Export -->
        <button
          @click="exportBatch"
          :disabled="isExporting"
          :class="[
            'w-full px-4 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2',
            isExporting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gray-600 hover:bg-gray-700 text-white'
          ]"
        >
          <svg
            v-if="isExporting"
            class="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            />
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <svg
            v-else
            class="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          {{ isExporting ? 'Exporting...' : 'Export All Angles (ZIP)' }}
        </button>

        <!-- Export Status -->
        <div v-if="exportStatus" class="mt-3 p-3 rounded-lg" :class="exportStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'">
          <div class="flex items-center gap-2">
            <svg
              v-if="exportStatus.type === 'success'"
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span class="text-sm font-medium">{{ exportStatus.message }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { ExportService, type ExportOptions, type BatchExportOptions } from '../engine/ExportService'

interface Props {
  templateName?: string
  sceneManager?: any // Will be typed properly when integrated
}

const props = withDefaults(defineProps<Props>(), {
  templateName: 'mockup'
})

const emit = defineEmits<{
  export: [blob: Blob, filename: string]
  batchExport: [blobs: Blob[], filenames: string[]]
  error: [error: Error]
}>()

// Format options
const formats = ['png', 'jpg'] as const
const selectedFormat = ref<'png' | 'jpg'>('png')

// Resolution options
const resolutions = [
  { label: 'Standard', value: 1, dimensions: '1920×1080' },
  { label: 'HD', value: 2, dimensions: '3840×2160' },
  { label: 'Ultra', value: 4, dimensions: '7680×4320' }
] as const
const selectedResolution = ref<1 | 2 | 4>(1)

// Quality (for JPG only)
const quality = ref(90)

// Background options
const backgroundOptions = [
  { label: 'Transparent', value: 'transparent' },
  { label: 'White', value: 'white' },
  { label: 'Custom', value: 'custom' }
] as const
const selectedBackground = ref<'transparent' | 'white' | 'custom'>('transparent')
const customColor = ref('#3b82f6') // Default to indigo

// Export state
const isExporting = ref(false)
const exportStatus = ref<{ type: 'success' | 'error', message: string } | null>(null)

// Preview computed values
const previewDimensions = computed(() => {
  const baseWidth = 1920
  const baseHeight = 1080
  const multiplier = selectedResolution.value
  return `${baseWidth * multiplier}×${baseHeight * multiplier}`
})

const previewFilename = computed(() => {
  return ExportService.generateFilename(props.templateName, selectedFormat.value)
})

const previewSize = computed(() => {
  const baseSize = selectedFormat.value === 'png' ? '~2-5 MB' : '~0.5-2 MB'
  const multiplier = selectedResolution.value
  if (multiplier === 2) return `~${baseSize} × 2`
  if (multiplier === 4) return `~${baseSize} × 4`
  return baseSize
})

// Methods
const validateColor = () => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  if (!hexRegex.test(customColor.value)) {
    customColor.value = '#3b82f6' // Reset to default if invalid
  }
}

const getBackgroundValue = (): string => {
  if (selectedBackground.value === 'custom') {
    return customColor.value
  }
  return selectedBackground.value
}

const getExportOptions = (): ExportOptions => {
  return {
    format: selectedFormat.value,
    quality: quality.value / 100,
    width: 1920,
    height: 1080,
    background: getBackgroundValue(),
    resolutionMultiplier: selectedResolution.value
  }
}

const getBatchExportOptions = (): BatchExportOptions => {
  return {
    angles: ['front', 'back', 'top', 'isometric'],
    ...getExportOptions()
  }
}

const showStatus = (type: 'success' | 'error', message: string, duration: number = 3000) => {
  exportStatus.value = { type, message }
  setTimeout(() => {
    exportStatus.value = null
  }, duration)
}

const exportSingle = async () => {
  if (isExporting.value || !props.sceneManager) return

  isExporting.value = true
  exportStatus.value = null

  try {
    const renderer = props.sceneManager.getRenderer()
    const scene = props.sceneManager.getScene()
    const camera = props.sceneManager.getCamera()
    
    const options = getExportOptions()
    const blob = await ExportService.captureCanvas(renderer, scene, camera, options)
    
    const filename = ExportService.generateFilename(props.templateName, options.format)
    ExportService.downloadBlob(blob, filename)
    
    emit('export', blob, filename)
    showStatus('success', `Image exported successfully: ${filename}`)
  } catch (error) {
    console.error('Export failed:', error)
    emit('error', error as Error)
    showStatus('error', 'Failed to export image. Please try again.')
  } finally {
    isExporting.value = false
  }
}

const exportBatch = async () => {
  if (isExporting.value || !props.sceneManager) return

  isExporting.value = true
  exportStatus.value = null

  try {
    const renderer = props.sceneManager.getRenderer()
    const scene = props.sceneManager.getScene()
    const camera = props.sceneManager.getCamera()
    
    const options = getBatchExportOptions()
    const blobs = await ExportService.batchExport(renderer, scene, camera, options)
    
    // Generate filenames for each angle
    const filenames = options.angles.map(angle => {
      const timestamp = new Date()
      const dateStr = timestamp.toISOString()
        .replace(/[:.]/g, '-')
        .replace('T', '_')
        .slice(0, 19)
      
      const templateSlug = props.templateName.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')
      
      return `${templateSlug}-${angle}-${dateStr}.${options.format}`
    })
    
    // Create ZIP file
    const zipBlob = await ExportService.createZip(blobs, filenames)
    
    const zipFilename = `${props.templateName}-angles-${new Date().toISOString().slice(0, 10)}.zip`
    ExportService.downloadBlob(zipBlob, zipFilename)
    
    emit('batchExport', blobs, filenames)
    showStatus('success', `Batch exported successfully: ${zipFilename}`)
  } catch (error) {
    console.error('Batch export failed:', error)
    emit('error', error as Error)
    showStatus('error', 'Failed to export batch. Please try again.')
  } finally {
    isExporting.value = false
  }
}

// Watch for format changes
watch(selectedFormat, (newFormat) => {
  if (newFormat === 'png' && selectedBackground.value === 'transparent') {
    // PNG supports transparency, keep as is
  } else if (newFormat === 'jpg' && selectedBackground.value === 'transparent') {
    // JPG doesn't support transparency, switch to white
    selectedBackground.value = 'white'
  }
})

// Watch for background changes
watch(selectedBackground, (newBackground) => {
  if (selectedFormat.value === 'jpg' && newBackground === 'transparent') {
    // JPG doesn't support transparency, switch to white
    selectedBackground.value = 'white'
  }
})
</script>

<style scoped>
@reference "tailwindcss";

/* Custom range slider */
input[type="range"] {
  -webkit-appearance: none;
  appearance: none;
  background: transparent;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-track {
  background: #e5e7eb;
  height: 8px;
  border-radius: 4px;
}

input[type="range"]::-moz-range-track {
  background: #e5e7eb;
  height: 8px;
  border-radius: 4px;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background-color: #4f46e5;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: -6px;
}

input[type="range"]::-moz-range-thumb {
  height: 20px;
  width: 20px;
  background-color: #4f46e5;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Color picker styling */
input[type="color"] {
  -webkit-appearance: none;
  appearance: none;
  border: none;
  padding: 0;
}

input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}

input[type="color"]::-webkit-color-swatch {
  border: 2px solid #d1d5db;
  border-radius: 6px;
}

input[type="color"]::-moz-color-swatch {
  border: 2px solid #d1d5db;
  border-radius: 6px;
}

/* Checkerboard pattern for transparent preview */
.checkerboard {
  background-image: 
    linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb),
    linear-gradient(45deg, #e5e7eb 25%, transparent 25%, transparent 75%, #e5e7eb 75%, #e5e7eb);
  background-size: 20px 20px;
  background-position: 0 0, 10px 10px;
}
</style>