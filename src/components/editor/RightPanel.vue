<template>
  <div class="right-panel" :class="{ collapsed: isCollapsed }">
    <!-- Panel Header -->
    <div class="panel-header">
      <h3 class="panel-title">Properties</h3>
      <button class="collapse-btn" @click="toggleCollapse">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path v-if="isCollapsed" d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path v-else d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Panel Content -->
    <div v-if="!isCollapsed" class="panel-content">
      <!-- Accordion Sections -->
      <div class="accordion">
        <!-- Upload Design -->
        <AccordionSection
          title="Upload Design"
          :is-expanded="expandedSections.upload"
          @toggle="toggleSection('upload')"
        >
          <!-- Dynamic Uploader based on template category -->
          <WrapUploader
            v-if="uploadMode === 'wrap'"
            :template-name="currentTemplateName"
            @upload="handleDesignUpload"
            @apply="handleWrapApply"
            @clear="handleClearUpload"
          />
          
          <DualUploader
            v-else-if="uploadMode === 'dual'"
            @upload-front="handleFrontUpload"
            @upload-back="handleBackUpload"
            @apply-front="handleFrontApply"
            @apply-back="handleBackApply"
            @apply-both="handleBothApply"
            @clear-front="handleClearFront"
            @clear-back="handleClearBack"
          />
          
          <MultiFaceUploader
            v-else-if="uploadMode === 'multiface'"
            :faces="availableFaces"
            :face-textures="faceTextures"
            @upload="handleMultiFaceUpload"
            @apply="handleMultiFaceApply"
            @clear="handleMultiFaceClear"
          />
          
          <!-- Fallback to original DesignUploader for unknown modes -->
          <DesignUploader
            v-else
            :selected-face="selectedFace"
            @upload="handleDesignUpload"
            @apply-to-face="handleApplyToFace"
            @apply-to-all="handleApplyToAll"
            @clear="handleClearUpload"
          />
        </AccordionSection>

        <!-- Face Selector -->
        <AccordionSection
          title="Face Selector"
          :is-expanded="expandedSections.face"
          @toggle="toggleSection('face')"
        >
          <FaceSelector
            :selected-face="selectedFace"
            :textures="textureUrls"
            @select="selectFace"
            @remove-texture="handleRemoveTexture"
            @copy-to-others="handleCopyToOthers"
            @reset-all="handleResetAllTextures"
          />
        </AccordionSection>

        <!-- Material -->
        <AccordionSection
          title="Material"
          :is-expanded="expandedSections.material"
          @toggle="toggleSection('material')"
        >
          <div class="material-options">
            <div class="material-presets">
              <button
                v-for="type in materialTypes"
                :key="type"
                class="material-preset"
                :class="{ active: currentMaterialType === type }"
                @click="setMaterialType(type)"
              >
                <div class="material-icon">
                  <svg v-if="type === 'matte'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
                    <circle cx="10" cy="10" r="4" fill="currentColor" fill-opacity="0.3"/>
                  </svg>
                  <svg v-else-if="type === 'glossy'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M10 6L12 10L10 14L8 10L10 6Z" fill="currentColor" fill-opacity="0.5"/>
                    <circle cx="10" cy="10" r="2" fill="currentColor"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2" width="16" height="16" rx="2" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M6 6L14 14" stroke="currentColor" stroke-width="1.5"/>
                    <path d="M6 14L14 6" stroke="currentColor" stroke-width="1.5"/>
                  </svg>
                </div>
                <span class="material-label">{{ type }}</span>
              </button>
            </div>
          </div>
        </AccordionSection>

        <!-- Lighting -->
        <AccordionSection
          title="Lighting"
          :is-expanded="expandedSections.lighting"
          @toggle="toggleSection('lighting')"
        >
          <div class="lighting-options">
            <!-- Presets -->
            <div class="lighting-presets">
              <button
                v-for="preset in lightingPresets"
                :key="preset"
                class="lighting-preset"
                :class="{ active: currentLightingPreset === preset }"
                @click="setLightingPreset(preset)"
              >
                <div class="lighting-icon">
                  <svg v-if="preset === 'studio'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="4" fill="currentColor" fill-opacity="0.3"/>
                    <path d="M10 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M10 16V18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2 10H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M16 10H18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg v-else-if="preset === 'outdoor'" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="4" fill="currentColor" fill-opacity="0.3"/>
                    <path d="M10 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M15 5L13.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M18 10L16 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M15 15L13.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="10" cy="10" r="4" fill="currentColor" fill-opacity="0.3"/>
                    <path d="M10 2V4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M5 5L6.5 6.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M2 10H4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M5 15L6.5 13.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                  </svg>
                </div>
                <span class="lighting-label">{{ preset }}</span>
              </button>
            </div>

            <!-- Brightness Slider -->
            <div class="brightness-control">
              <label class="control-label">Brightness</label>
              <div class="slider-container">
                <input
                  v-model="brightness"
                  type="range"
                  min="0"
                  max="100"
                  step="1"
                  class="slider"
                  @input="updateBrightness"
                />
                <span class="slider-value">{{ brightness }}%</span>
              </div>
            </div>
          </div>
        </AccordionSection>

        <!-- Box Dimensions -->
        <AccordionSection
          title="Box Dimensions"
          :is-expanded="expandedSections.dimensions"
          @toggle="toggleSection('dimensions')"
        >
          <div class="dimensions-controls">
            <div class="dimension-input">
              <label class="dimension-label">
                <span>Width</span>
                <span class="dimension-unit">cm</span>
              </label>
              <input
                v-model="dimensions.width"
                type="number"
                step="0.1"
                min="0.5"
                max="10"
                class="dimension-field"
                @change="updateDimensions"
              />
            </div>
            <div class="dimension-input">
              <label class="dimension-label">
                <span>Height</span>
                <span class="dimension-unit">cm</span>
              </label>
              <input
                v-model="dimensions.height"
                type="number"
                step="0.1"
                min="0.5"
                max="10"
                class="dimension-field"
                @change="updateDimensions"
              />
            </div>
            <div class="dimension-input">
              <label class="dimension-label">
                <span>Depth</span>
                <span class="dimension-unit">cm</span>
              </label>
              <input
                v-model="dimensions.depth"
                type="number"
                step="0.1"
                min="0.5"
                max="10"
                class="dimension-field"
                @change="updateDimensions"
              />
            </div>
          </div>
        </AccordionSection>

        <!-- Export -->
        <AccordionSection
          title="Export"
          :is-expanded="expandedSections.export"
          @toggle="toggleSection('export')"
        >
          <ExportPanel
            :template-name="currentTemplateName"
            :scene-manager="sceneManager"
            @export="handleExport"
            @batchExport="handleBatchExport"
            @error="handleExportError"
          />
        </AccordionSection>
      </div>
    </div>

    <!-- Collapsed State -->
    <div v-else class="collapsed-content">
      <button class="expand-btn" @click="toggleCollapse" title="Expand panel">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="collapsed-label">Properties</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import DesignUploader from '../DesignUploader.vue'
import FaceSelector from '../FaceSelector.vue'
import ExportPanel from '../ExportPanel.vue'
import AccordionSection from './AccordionSection.vue'
import WrapUploader from './WrapUploader.vue'
import DualUploader from './DualUploader.vue'
import MultiFaceUploader from './MultiFaceUploader.vue'
import type { BoxFace } from '../../stores/mockupStore'
import type { MaterialType } from '../../engine/BoxMockup'
import type { LightingPreset, CameraPreset } from '../../engine/SceneManager'
import type { TextureFit } from './types'

// Props
const props = defineProps<{
  selectedFace: BoxFace
  textureUrls: Record<BoxFace, string | null>
  currentMaterialType: MaterialType
  currentLightingPreset: LightingPreset
  dimensions: { width: number; height: number; depth: number }
  sceneManager: any
  currentTemplateName: string
  currentTemplateCategory?: string
}>()

// Upload mode based on template category
const uploadMode = computed(() => {
  const cat = props.currentTemplateCategory
  if (['cup', 'perfume', 'bowl', 'bottle'].includes(cat || '')) return 'wrap'
  if (['pouch', 'bag'].includes(cat || '')) return 'dual'
  return 'multiface'
})

// Dynamic faces from current geometry
const availableFaces = computed(() => {
  if (!props.sceneManager) return []
  const geo = props.sceneManager.getCurrentGeometry()
  if (!geo) return []
  return geo.getTextureableFaces().map((f: any) => ({
    ...f,
    canReceiveTexture: true
  }))
})

const faceTextures = ref<Record<string, string | null>>({})

const handleMultiFaceUpload = () => {}
const handleMultiFaceApply = async (data: { faceId: string; file: File; fit: string }) => {
  await applyTextureToFace(data.faceId, data.file)
  faceTextures.value[data.faceId] = URL.createObjectURL(data.file)
}
const handleMultiFaceClear = (faceId: string) => {
  const geo = props.sceneManager?.getCurrentGeometry()
  if (geo) geo.clearTexture(faceId)
  faceTextures.value[faceId] = null
}

// Helper to apply texture to geometry
const applyTextureToFace = async (faceId: string, file: File) => {
  if (!props.sceneManager) { console.error('No sceneManager'); return }
  const geo = props.sceneManager.getCurrentGeometry()
  if (!geo) { console.error('No currentGeometry'); return }
  const url = URL.createObjectURL(file)
  console.log(`Applying texture to face: ${faceId}`, url)
  await geo.applyTexture(faceId, url)
}

// Wrap upload handlers — emits { file, fit }
const handleWrapApply = async (data: { file: File; fit: string }) => {
  if (!props.sceneManager) return
  const geo = props.sceneManager.getCurrentGeometry()
  if (!geo) return
  const faces = geo.getTextureableFaces()
  const labelFace = faces.find((f: any) => f.id === 'label') || faces.find((f: any) => f.id === 'body') || faces[0]
  if (labelFace) await applyTextureToFace(labelFace.id, data.file)
}

const handleClearUpload = () => {
  if (!props.sceneManager) return
  const geo = props.sceneManager.getCurrentGeometry()
  if (!geo) return
  const faces = geo.getTextureableFaces()
  faces.forEach((f: any) => geo.clearTexture(f.id))
}

// Dual upload handlers — emits { file, fit }
const handleFrontUpload = () => {}
const handleBackUpload = () => {}
const handleFrontApply = async (data: { file: File; fit: string }) => {
  await applyTextureToFace('front', data.file)
}
const handleBackApply = async (data: { file: File; fit: string }) => {
  await applyTextureToFace('back', data.file)
}
const handleBothApply = async (data: { frontFile: File; backFile: File; fit: string }) => {
  await applyTextureToFace('front', data.frontFile)
  await applyTextureToFace('back', data.backFile)
}
const handleClearFront = () => {
  const geo = props.sceneManager?.getCurrentGeometry()
  if (geo) geo.clearTexture('front')
}
const handleClearBack = () => {
  const geo = props.sceneManager?.getCurrentGeometry()
  if (geo) geo.clearTexture('back')
}

// MultiFace handlers — emits { faceId, file, fit }
const handleFaceApply = async (data: { faceId: string; file: File; fit: string }) => {
  await applyTextureToFace(data.faceId, data.file)
}
const handleFaceClear = (faceId: string) => {
  const geo = props.sceneManager?.getCurrentGeometry()
  if (geo) geo.clearTexture(faceId)
}

// Emits
const emit = defineEmits<{
  'select-face': [face: BoxFace]
  'set-material-type': [type: MaterialType]
  'set-lighting-preset': [preset: LightingPreset]
  'update-dimensions': []
  'design-upload': [file: File]
  'apply-to-face': [data: { face: BoxFace; file: File; fit: TextureFit }]
  'apply-to-all': [data: { file: File; fit: TextureFit }]
  'clear-upload': []
  'remove-texture': [face: BoxFace]
  'copy-to-others': [sourceFace: BoxFace]
  'reset-all-textures': []
  'export': [blob: Blob, filename: string]
  'batch-export': [blobs: Blob[], filenames: string[]]
  'export-error': [error: Error]
}>()

// State
const isCollapsed = ref(false)
const brightness = ref(75)

const expandedSections = reactive({
  upload: true,
  face: true,
  material: false,
  lighting: false,
  dimensions: false,
  export: false
})

const materialTypes: MaterialType[] = ['matte', 'glossy', 'metallic']
const lightingPresets: LightingPreset[] = ['studio', 'outdoor', 'dramatic']

// Methods
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const toggleSection = (section: keyof typeof expandedSections) => {
  expandedSections[section] = !expandedSections[section]
}

const selectFace = (face: BoxFace) => {
  emit('select-face', face)
}

const setMaterialType = (type: MaterialType) => {
  emit('set-material-type', type)
}

const setLightingPreset = (preset: LightingPreset) => {
  emit('set-lighting-preset', preset)
}

const updateBrightness = () => {
  // Emit brightness change if needed
  console.log('Brightness updated:', brightness.value)
}

const updateDimensions = () => {
  emit('update-dimensions')
}

const handleDesignUpload = (file: File) => {
  emit('design-upload', file)
}

const handleExport = (blob: Blob, filename: string) => {
  emit('export', blob, filename)
}

const handleExportError = (error: Error) => {
  emit('export-error', error)
}
</script>

<style scoped>
@reference "tailwindcss";

.right-panel {
  @apply flex flex-col w-80 h-full bg-gray-900 border-l border-gray-800 transition-all duration-300;
}

.right-panel.collapsed {
  @apply w-12;
}

.panel-header {
  @apply flex items-center justify-between h-12 px-4 border-b border-gray-800;
}

.panel-title {
  @apply text-white font-medium text-sm;
}

.collapse-btn {
  @apply flex items-center justify-center w-6 h-6 text-gray-400 hover:text-white 
         hover:bg-gray-800 rounded transition-colors duration-200;
}

.panel-content {
  @apply flex-1 overflow-y-auto p-4;
}

.accordion {
  @apply space-y-2;
}

.material-options {
  @apply space-y-4;
}

.material-presets {
  @apply grid grid-cols-3 gap-2;
}

.material-preset {
  @apply flex flex-col items-center p-3 bg-gray-800 rounded-lg transition-all duration-200
         hover:bg-gray-700 border border-transparent;
}

.material-preset.active {
  @apply bg-gray-700 border-violet-500;
}

.material-icon {
  @apply text-gray-400 mb-2;
}

.material-preset.active .material-icon {
  @apply text-violet-500;
}

.material-label {
  @apply text-xs text-gray-300 capitalize;
}

.lighting-options {
  @apply space-y-4;
}

.lighting-presets {
  @apply grid grid-cols-3 gap-2;
}

.lighting-preset {
  @apply flex flex-col items-center p-3 bg-gray-800 rounded-lg transition-all duration-200
         hover:bg-gray-700 border border-transparent;
}

.lighting-preset.active {
  @apply bg-gray-700 border-violet-500;
}

.lighting-icon {
  @apply text-gray-400 mb-2;
}

.lighting-preset.active .lighting-icon {
  @apply text-violet-500;
}

.lighting-label {
  @apply text-xs text-gray-300 capitalize;
}

.brightness-control {
  @apply space-y-2;
}

.control-label {
  @apply block text-sm text-gray-400;
}

.slider-container {
  @apply flex items-center gap-3;
}

.slider {
  @apply flex-1 h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer;
}

.slider::-webkit-slider-thumb {
  @apply appearance-none w-4 h-4 bg-violet-500 rounded-full cursor-pointer;
}

.slider::-moz-range-thumb {
  @apply w-4 h-4 bg-violet-500 rounded-full cursor-pointer border-0;
}

.slider-value {
  @apply text-xs text-gray-300 font-mono min-w-10 text-right;
}

.dimensions-controls {
  @apply space-y-3;
}

.dimension-input {
  @apply space-y-1;
}

.dimension-label {
  @apply flex justify-between text-sm text-gray-400;
}

.dimension-unit {
  @apply text-xs text-gray-500;
}

.dimension-field {
  @apply w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg
         text-sm text-white focus:outline-none focus:ring-2 
         focus:ring-violet-500 focus:border-transparent transition-all duration-200;
}

.collapsed-content {
  @apply flex flex-col items-center py-4;
}

.expand-btn {
  @apply flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white 
         hover:bg-gray-800 rounded transition-colors duration-200 mb-2;
}

.collapsed-label {
  @apply text-gray-500 text-xs rotate-90 whitespace-nowrap mt-4;
}
</style>