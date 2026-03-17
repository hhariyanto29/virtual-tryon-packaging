<template>
  <div class="dual-uploader">
    <div class="uploader-header">
      <h3 class="text-lg font-semibold text-gray-800">Front & Back Design</h3>
      <p class="text-sm text-gray-500 mt-1">
        Upload designs for front and back panels
      </p>
    </div>

    <div class="upload-grid">
      <!-- Front Panel -->
      <div class="upload-panel">
        <div class="panel-header">
          <div class="panel-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="panel-title">Front Design</h4>
        </div>

        <div
          class="drop-zone"
          :class="{ 'drag-over': frontDragOver, 'has-file': frontFile }"
          @dragover.prevent="handleFrontDragOver"
          @dragleave.prevent="handleFrontDragLeave"
          @drop.prevent="handleFrontDrop"
        >
          <div class="upload-icon">
            <svg v-if="!frontFile" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <img v-else :src="frontPreviewUrl" alt="Front preview" class="preview-thumbnail" />
          </div>

          <div class="upload-text">
            <p class="text-sm font-medium text-gray-800">
              {{ frontFile ? frontFile.name : 'Drag & drop front design' }}
            </p>
            <p class="text-xs text-gray-500 mt-1">
              {{ frontFile ? 'Click to change' : 'or click to browse' }}
            </p>
          </div>

          <input
            ref="frontInputRef"
            type="file"
            class="hidden"
            accept=".png,.jpg,.jpeg,.svg,.webp"
            @change="handleFrontFileSelect"
          />

          <button
            type="button"
            class="browse-btn"
            @click="triggerFrontInput"
          >
            {{ frontFile ? 'Change' : 'Browse' }}
          </button>
        </div>

        <div v-if="frontFile" class="panel-actions">
          <button
            type="button"
            class="action-btn apply-btn"
            @click="applyToFront"
            :disabled="isApplyingFront"
          >
            <svg v-if="!isApplyingFront" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div v-else class="loading-spinner-small"></div>
            {{ isApplyingFront ? 'Applying...' : 'Apply to Front' }}
          </button>

          <button
            type="button"
            class="action-btn clear-btn"
            @click="clearFrontFile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Clear
          </button>
        </div>
      </div>

      <!-- Back Panel -->
      <div class="upload-panel">
        <div class="panel-header">
          <div class="panel-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
            </svg>
          </div>
          <h4 class="panel-title">Back Design</h4>
        </div>

        <div
          class="drop-zone"
          :class="{ 'drag-over': backDragOver, 'has-file': backFile }"
          @dragover.prevent="handleBackDragOver"
          @dragleave.prevent="handleBackDragLeave"
          @drop.prevent="handleBackDrop"
        >
          <div class="upload-icon">
            <svg v-if="!backFile" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <img v-else :src="backPreviewUrl" alt="Back preview" class="preview-thumbnail" />
          </div>

          <div class="upload-text">
            <p class="text-sm font-medium text-gray-800">
              {{ backFile ? backFile.name : 'Drag & drop back design' }}
            </p>
            <p class="text-xs text-gray-500 mt-1">
              {{ backFile ? 'Click to change' : 'or click to browse' }}
            </p>
          </div>

          <input
            ref="backInputRef"
            type="file"
            class="hidden"
            accept=".png,.jpg,.jpeg,.svg,.webp"
            @change="handleBackFileSelect"
          />

          <button
            type="button"
            class="browse-btn"
            @click="triggerBackInput"
          >
            {{ backFile ? 'Change' : 'Browse' }}
          </button>
        </div>

        <div v-if="backFile" class="panel-actions">
          <button
            type="button"
            class="action-btn apply-btn"
            @click="applyToBack"
            :disabled="isApplyingBack"
          >
            <svg v-if="!isApplyingBack" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <div v-else class="loading-spinner-small"></div>
            {{ isApplyingBack ? 'Applying...' : 'Apply to Back' }}
          </button>

          <button
            type="button"
            class="action-btn clear-btn"
            @click="clearBackFile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
            </svg>
            Clear
          </button>
        </div>
      </div>
    </div>

    <!-- Error Messages -->
    <div v-if="frontErrorMessage" class="error-message">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span class="text-sm font-medium text-red-700">Front: {{ frontErrorMessage }}</span>
      </div>
    </div>

    <div v-if="backErrorMessage" class="error-message">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span class="text-sm font-medium text-red-700">Back: {{ backErrorMessage }}</span>
      </div>
    </div>

    <!-- Apply Both Button -->
    <div v-if="frontFile && backFile" class="apply-both-section">
      <button
        type="button"
        class="apply-both-btn"
        @click="applyBoth"
        :disabled="isApplyingBoth"
      >
        <svg v-if="!isApplyingBoth" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
        </svg>
        <div v-else class="loading-spinner-small"></div>
        {{ isApplyingBoth ? 'Applying Both...' : 'Apply Both Designs' }}
      </button>
      <p class="apply-hint text-xs text-gray-500 mt-2 text-center">
        Apply front and back designs simultaneously
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import type { TextureFit } from './types'

interface Emits {
  (e: 'upload-front', file: File): void
  (e: 'upload-back', file: File): void
  (e: 'apply-front', data: { file: File; fit: TextureFit }): void
  (e: 'apply-back', data: { file: File; fit: TextureFit }): void
  (e: 'apply-both', data: { frontFile: File; backFile: File; fit: TextureFit }): void
  (e: 'clear-front'): void
  (e: 'clear-back'): void
}

const emit = defineEmits<Emits>()

// Refs
const frontInputRef = ref<HTMLInputElement | null>(null)
const backInputRef = ref<HTMLInputElement | null>(null)

const frontDragOver = ref(false)
const backDragOver = ref(false)

const frontFile = ref<File | null>(null)
const backFile = ref<File | null>(null)

const frontPreviewUrl = ref<string | null>(null)
const backPreviewUrl = ref<string | null>(null)

const frontErrorMessage = ref<string | null>(null)
const backErrorMessage = ref<string | null>(null)

const isApplyingFront = ref(false)
const isApplyingBack = ref(false)
const isApplyingBoth = ref(false)

// Constants
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp']

// Methods
const validateFile = (file: File): boolean => {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return false
  }

  // Check file type
  if (!ALLOWED_TYPES.includes(file.type)) {
    return false
  }

  return true
}

const handleFrontFile = (file: File) => {
  if (!validateFile(file)) {
    frontErrorMessage.value = 'Invalid file. Max 10MB, PNG/JPG/JPEG/SVG/WebP only.'
    return
  }

  frontErrorMessage.value = null
  frontFile.value = file
  
  if (frontPreviewUrl.value) {
    URL.revokeObjectURL(frontPreviewUrl.value)
  }
  frontPreviewUrl.value = URL.createObjectURL(file)
  
  emit('upload-front', file)
}

const handleBackFile = (file: File) => {
  if (!validateFile(file)) {
    backErrorMessage.value = 'Invalid file. Max 10MB, PNG/JPG/JPEG/SVG/WebP only.'
    return
  }

  backErrorMessage.value = null
  backFile.value = file
  
  if (backPreviewUrl.value) {
    URL.revokeObjectURL(backPreviewUrl.value)
  }
  backPreviewUrl.value = URL.createObjectURL(file)
  
  emit('upload-back', file)
}

// Front handlers
const handleFrontDragOver = (event: DragEvent) => {
  event.preventDefault()
  frontDragOver.value = true
}

const handleFrontDragLeave = (event: DragEvent) => {
  event.preventDefault()
  frontDragOver.value = false
}

const handleFrontDrop = (event: DragEvent) => {
  event.preventDefault()
  frontDragOver.value = false

  const files = event.dataTransfer?.files
  if (!files?.length) return

  const file = files[0]
  handleFrontFile(file)
}

const handleFrontFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  handleFrontFile(file)
  input.value = ''
}

const triggerFrontInput = () => {
  frontInputRef.value?.click()
}

// Back handlers
const handleBackDragOver = (event: DragEvent) => {
  event.preventDefault()
  backDragOver.value = true
}

const handleBackDragLeave = (event: DragEvent) => {
  event.preventDefault()
  backDragOver.value = false
}

const handleBackDrop = (event: DragEvent) => {
  event.preventDefault()
  backDragOver.value = false

  const files = event.dataTransfer?.files
  if (!files?.length) return

  const file = files[0]
  handleBackFile(file)
}

const handleBackFileSelect = (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  if (!file) return

  handleBackFile(file)
  input.value = ''
}

const triggerBackInput = () => {
  backInputRef.value?.click()
}

// Clear handlers
const clearFrontFile = () => {
  if (frontPreviewUrl.value) {
    URL.revokeObjectURL(frontPreviewUrl.value)
    frontPreviewUrl.value = null
  }
  
  frontFile.value = null
  frontErrorMessage.value = null
  
  emit('clear-front')
}

const clearBackFile = () => {
  if (backPreviewUrl.value) {
    URL.revokeObjectURL(backPreviewUrl.value)
    backPreviewUrl.value = null
  }
  
  backFile.value = null
  backErrorMessage.value = null
  
  emit('clear-back')
}

// Apply handlers
const applyToFront = async () => {
  if (!frontFile.value) return
  
  isApplyingFront.value = true
  
  try {
    emit('apply-front', {
      file: frontFile.value,
      fit: 'fit' as TextureFit
    })
  } catch (error) {
    console.error('Failed to apply front design:', error)
    frontErrorMessage.value = 'Failed to apply design. Please try again.'
  } finally {
    isApplyingFront.value = false
  }
}

const applyToBack = async () => {
  if (!backFile.value) return
  
  isApplyingBack.value = true
  
  try {
    emit('apply-back', {
      file: backFile.value,
      fit: 'fit' as TextureFit
    })
  } catch (error) {
    console.error('Failed to apply back design:', error)
    backErrorMessage.value = 'Failed to apply design. Please try again.'
  } finally {
    isApplyingBack.value = false
  }
}

const applyBoth = async () => {
  if (!frontFile.value || !backFile.value) return
  
  isApplyingBoth.value = true
  
  try {
    emit('apply-both', {
      frontFile: frontFile.value,
      backFile: backFile.value,
      fit: 'fit' as TextureFit
    })
  } catch (error) {
    console.error('Failed to apply both designs:', error)
    frontErrorMessage.value = 'Failed to apply designs. Please try again.'
    backErrorMessage.value = 'Failed to apply designs. Please try again.'
  } finally {
    isApplyingBoth.value = false
  }
}

// Cleanup
onUnmounted(() => {
  if (frontPreviewUrl.value) {
    URL.revokeObjectURL(frontPreviewUrl.value)
  }
  if (backPreviewUrl.value) {
    URL.revokeObjectURL(backPreviewUrl.value)
  }
})
</script>

<style scoped>
@reference "tailwindcss";
.dual-uploader {
  @apply flex flex-col gap-4;
}

.uploader-header {
  @apply text-center;
}

.upload-grid {
  @apply grid grid-cols-2 gap-4;
}

.upload-panel {
  @apply flex flex-col gap-3;
}

.panel-header {
  @apply flex items-center gap-2;
}

.panel-icon {
  @apply text-indigo-600;
}

.panel-title {
  @apply text-sm font-medium text-gray-800;
}

.drop-zone {
  @apply relative border-2 border-dashed border-gray-300 rounded-lg p-4 text-center transition-all duration-200 cursor-pointer;
  @apply hover:border-indigo-400 hover:bg-indigo-50;
  min-height: 150px;
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
  @apply text-gray-400 mb-2;
}

.preview-thumbnail {
  @apply w-12 h-12 object-cover rounded;
}

.upload-text {
  @apply mb-3;
}

.browse-btn {
  @apply px-4 py-1.5 bg-indigo-600 text-white text-sm font-medium rounded-lg transition-all duration-200;
  @apply hover:bg-indigo-700;
  @apply focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;
}

.panel-actions {
  @apply flex gap-2;
}

.action-btn {
  @apply flex items-center justify-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 flex-1;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.apply-btn {
  @apply bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500;
}

.clear-btn {
  @apply bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500;
}

.action-btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.error-message {
  @apply p-2 bg-red-50 border border-red-200 rounded-lg;
}

.apply-both-section {
  @apply flex flex-col items-center pt-4 border-t border-gray-200;
}

.apply-both-btn {
  @apply flex items-center justify-center gap-2 px-6 py-3 bg-gray-800 text-white font-medium rounded-lg transition-all duration-200 w-full;
  @apply hover:bg-gray-900 hover:shadow-md;
  @apply focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2;
  @apply disabled:opacity-50 disabled:cursor-not-allowed;
}

.loading-spinner-small {
  @apply w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin;
}

.apply-hint {
  @apply text-center;
}
</style>