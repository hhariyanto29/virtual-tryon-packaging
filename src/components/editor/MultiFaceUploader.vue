<template>
  <div class="multiface-uploader">
    <div class="uploader-header">
      <h3 class="text-lg font-semibold text-gray-800">Multi-Face Design</h3>
      <p class="text-sm text-gray-500 mt-1">
        Upload designs for each available face
      </p>
    </div>

    <!-- Face Selection Grid -->
    <div class="face-selection">
      <div class="face-grid">
        <div
          v-for="face in availableFaces"
          :key="face.id"
          class="face-item"
          :class="{ 'selected': selectedFaceId === face.id, 'has-texture': getFaceTexture(face.id) }"
          @click="selectFace(face.id)"
        >
          <div class="face-icon">
            <svg v-if="!getFaceTexture(face.id)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
            <img v-else :src="getFaceTexture(face.id)" :alt="`${face.name} texture`" class="face-texture-preview" />
          </div>
          <div class="face-label">
            <span class="face-name">{{ face.name }}</span>
            <span v-if="getFaceTexture(face.id)" class="texture-indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Upload Section for Selected Face -->
    <div v-if="selectedFace" class="upload-section">
      <div class="selected-face-header">
        <h4 class="text-sm font-medium text-gray-800">
          {{ selectedFace.name }}
        </h4>
        <div class="face-dimensions">
          <span class="text-xs text-gray-500">
            {{ selectedFace.textureSize.width }} × {{ selectedFace.textureSize.height }} units
          </span>
        </div>
      </div>

      <div
        class="drop-zone"
        :class="{ 'drag-over': isDragOver, 'has-file': uploadedFile }"
        @dragover.prevent="handleDragOver"
        @dragleave.prevent="handleDragLeave"
        @drop.prevent="handleDrop"
      >
        <div class="upload-icon">
          <svg v-if="!uploadedFile" xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <img v-else :src="previewUrl" alt="Preview" class="preview-image" />
        </div>

        <div class="upload-text">
          <p class="text-sm font-medium text-gray-800">
            {{ uploadedFile ? uploadedFile.name : `Upload design for ${selectedFace.name}` }}
          </p>
          <p class="text-xs text-gray-500 mt-1">
            {{ uploadedFile ? 'Click to change or drop another file' : 'Drag & drop or click to browse' }}
          </p>
        </div>

        <input
          ref="fileInputRef"
          type="file"
          class="hidden"
          accept=".png,.jpg,.jpeg,.svg,.webp"
          @change="handleFileSelect"
        />

        <button
          type="button"
          class="browse-btn"
          @click="triggerFileInput"
        >
          {{ uploadedFile ? 'Change' : 'Browse' }}
        </button>
      </div>

      <!-- Error Message -->
      <div v-if="errorMessage" class="error-message">
        <div class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium text-red-700">{{ errorMessage }}</span>
        </div>
      </div>

      <!-- Apply Button -->
      <div v-if="uploadedFile" class="apply-section">
        <button
          type="button"
          class="apply-btn"
          @click="applyToSelectedFace"
          :disabled="isApplying"
        >
          <svg v-if="!isApplying" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
          <div v-else class="loading-spinner-small"></div>
          {{ isApplying ? 'Applying...' : `Apply to ${selectedFace.name}` }}
        </button>
      </div>
    </div>

    <!-- Texture Summary -->
    <div class="texture-summary">
      <div class="summary-item">
        <span class="summary-label">Textured Faces:</span>
        <span class="summary-value">
          {{ texturedFacesCount }} / {{ availableFaces.length }}
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Selected:</span>
        <span class="summary-value">
          {{ selectedFace ? selectedFace.name : 'None' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onUnmounted } from 'vue'
import type { TextureFit } from './types'

interface FaceConfig {
  id: string
  name: string
  uvIndex: number
  textureSize: { width: number; height: number }
  canReceiveTexture: boolean
}

interface Props {
  faces: FaceConfig[]
  faceTextures?: Record<string, string>
}

interface Emits {
  (e: 'upload', data: { faceId: string; file: File }): void
  (e: 'apply', data: { faceId: string; file: File; fit: TextureFit }): void
  (e: 'clear', faceId: string): void
}

const props = withDefaults(defineProps<Props>(), {
  faces: () => [],
  faceTextures: () => ({})
})

const emit = defineEmits<Emits>()

// Refs
const fileInputRef = ref<HTMLInputElement | null>(null)
const isDragOver = ref(false)
const uploadedFile = ref<File | null>(null)
const previewUrl = ref<string | null>(null)
const errorMessage = ref<string | null>(null)
const isApplying = ref(false)
const selectedFaceId = ref<string | null>(null)

// Computed
const availableFaces = computed(() => {
  return props.faces.filter(face => face.canReceiveTexture)
})

const selectedFace = computed(() => {
  if (!selectedFaceId.value) return null
  return availableFaces.value.find(face => face.id === selectedFaceId.value) || null
})

const texturedFacesCount = computed(() => {
  return availableFaces.value.filter(face => props.faceTextures[face.id]).length
})

// Methods
const selectFace = (faceId: string) => {
  selectedFaceId.value = faceId
  // Clear current upload when switching faces
  clearFile()
}

const getFaceTexture = (faceId: string): string | null => {
  return props.faceTextures[faceId] || null
}

const validateFile = (file: File): boolean => {
  const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
  const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp']

  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    errorMessage.value = `File too large. Maximum size is 10MB.`
    return false
  }

  // Check file type
  if (!ALLOWED_TYPES.includes(file.type)) {
    errorMessage.value = 'Invalid file type. Please upload PNG, JPG, JPEG, SVG, or WebP.'
    return false
  }

  errorMessage.value = null
  return true
}

const handleFile = (file: File) => {
  if (!selectedFace.value) return
  if (!validateFile(file)) return

  uploadedFile.value = file
  
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
  }
  previewUrl.value = URL.createObjectURL(file)
  
  emit('upload', {
    faceId: selectedFace.value.id,
    file
  })
}

const handleDragOver = (event: DragEvent) => {
  event.preventDefault()
  isDragOver.value = true
}

const handleDragLeave = (event: DragEvent) => {
  event.preventDefault()
  isDragOver.value = false
}

const handleDrop = (event: DragEvent) => {
  event.preventDefault()
  isDragOver.value = false

  const files = event.dataTransfer?.files
  if (!files?.length) return

  const file = files[0]
  handleFile(file)
}

const handleFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  handleFile(file)
  input.value = ''
}

const triggerFileInput = () => {
  fileInputRef.value?.click()
}

const clearFile = () => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
    previewUrl.value = null
  }
  
  uploadedFile.value = null
  errorMessage.value = null
}

const applyToSelectedFace = async () => {
  if (!selectedFace.value || !uploadedFile.value) return
  
  isApplying.value = true
  
  try {
    emit('apply', {
      faceId: selectedFace.value.id,
      file: uploadedFile.value,
      fit: 'fit' as TextureFit
    })
  } catch (error) {
    console.error('Failed to apply design:', error)
    errorMessage.value = 'Failed to apply design. Please try again.'
  } finally {
    isApplying.value = false
  }
}

// Initialize with first available face
if (availableFaces.value.length > 0 && !selectedFaceId.value) {
  selectedFaceId.value = availableFaces.value[0].id
}

// Cleanup
onUnmounted(() => {
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
  }
})
</script>

<style scoped>
@reference "tailwindcss";
.multiface-uploader {
  @apply flex flex-col gap-4;
}

.uploader-header {
  @apply text-center;
}

.face-selection {
  @apply bg-gray-50 border border-gray-200 rounded-xl p-4;
}

.face-grid {
  @apply grid grid-cols-2 sm:grid-cols-3 gap-3;
}

.face-item {
  @apply flex flex-col items-center p-3 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200;
  @apply hover:border-indigo-400 hover:bg-indigo-50;
}

.face-item.selected {
  @apply border-indigo-500 bg-indigo-100 ring-2 ring-indigo-500 ring-offset-2;
}

.face-item.has-texture {
  @apply border-green-300 bg-green-50;
}

.face-icon {
  @apply w-12 h-12 flex items-center justify-center mb-2;
}

.face-texture-preview {
  @apply w-full h-full object-cover rounded;
}

.face-label {
  @apply flex items-center gap-1;
}

.face-name {
  @apply text-xs font-medium text-gray-700;
}

.texture-indicator {
  @apply flex items-center;
}

.upload-section {
  @apply flex flex-col gap-3;
}

.selected-face-header {
  @apply flex items-center justify-between;
}

.face-dimensions {
  @apply text-xs text-gray-500;
}

.drop-zone {
  @apply relative border-2 border-dashed border-gray-300 rounded-lg p-6 text-center transition-all duration-200 cursor-pointer;
  @apply hover:border-indigo-400 hover:bg-indigo-50;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.drop-zone.drag-over {
  @apply border-indigo-500 bg-indigo-100 border-solid;
}

.drop-zone.has-file {
  @apply border-indigo-300 bg-indigo-50;
}

.upload-icon {
  @apply text-gray-400 mb-3;
}

.preview-image {
  @apply w-16 h-16 object-cover rounded;
}

.upload-text {
  @apply mb-4;
}

.browse-btn {
  @apply px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg transition-all duration-200;
  @apply hover:bg-indigo-700;
  @apply focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;
}

.error-message {
  @apply p-2 bg-red-50 border border-red-200 rounded-lg;
}

.apply-section {
  @apply flex flex-col items-center;
}

.apply-btn {
  @apply flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg transition-all duration-200 w-full;
  @apply hover:bg-indigo-700 hover:shadow-md;
  @apply focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.loading-spinner-small {
  @apply w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin;
}

.texture-summary {
  @apply bg-white border border-gray-200 rounded-xl p-4;
}

.summary-item {
  @apply flex items-center justify-between py-2;
}

.summary-item:not(:last-child) {
  @apply border-b border-gray-100;
}

.summary-label {
  @apply text-sm text-gray-600;
}

.summary-value {
  @apply text-sm font-medium text-gray-800;
}
</style>