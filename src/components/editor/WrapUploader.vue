<template>
  <div class="wrap-uploader">
    <!-- Drag & Drop Zone -->
    <div
      ref="dropZoneRef"
      class="drop-zone"
      :class="{ 'drag-over': isDragOver, 'has-file': uploadedFile }"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <!-- Upload Icon -->
      <div class="upload-icon">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      </div>

      <!-- Upload Text -->
      <div class="upload-text">
        <p class="text-lg font-semibold text-gray-800">
          {{ uploadedFile ? uploadedFile.name : 'Upload Label Design' }}
        </p>
        <p class="text-sm text-gray-500 mt-1">
          {{ uploadedFile ? 'Click to change or drop another file' : 'Drag & drop or click to browse' }}
        </p>
        <p class="text-xs text-gray-400 mt-2">
          Supports: PNG, JPG, JPEG, SVG, WebP • Max 10MB
        </p>
      </div>

      <!-- File Input -->
      <input
        ref="fileInputRef"
        type="file"
        class="hidden"
        accept=".png,.jpg,.jpeg,.svg,.webp"
        @change="handleFileSelect"
      />

      <!-- Browse Button -->
      <button
        type="button"
        class="browse-btn"
        @click="triggerFileInput"
      >
        Browse Files
      </button>
    </div>

    <!-- Error Message -->
    <div v-if="errorMessage" class="error-message">
      <div class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
        </svg>
        <span class="text-sm font-medium text-red-700">{{ errorMessage }}</span>
      </div>
    </div>

    <!-- Image Preview -->
    <div v-if="previewUrl" class="image-preview">
      <div class="preview-header">
        <h3 class="text-sm font-medium text-gray-700">Label Preview</h3>
        <button
          type="button"
          class="clear-btn"
          @click="clearFile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      
      <div class="preview-image-container">
        <img
          :src="previewUrl"
          :alt="uploadedFile?.name || 'Preview'"
          class="preview-image"
          @load="handleImageLoad"
          @error="handleImageError"
        />
        
        <!-- Loading Overlay -->
        <div v-if="isImageLoading" class="loading-overlay">
          <div class="loading-spinner"></div>
          <p class="loading-text">Loading preview...</p>
        </div>
        
        <!-- Image Info -->
        <div v-if="imageInfo" class="image-info">
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Size:</span>
              <span class="info-value">{{ formatFileSize(uploadedFile?.size || 0) }}</span>
            </div>
            <div v-if="imageInfo.dimensions" class="info-item">
              <span class="info-label">Dimensions:</span>
              <span class="info-value">{{ imageInfo.dimensions.width }} × {{ imageInfo.dimensions.height }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Type:</span>
              <span class="info-value">{{ uploadedFile?.type || 'Unknown' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Apply Button -->
    <div v-if="previewUrl" class="apply-section">
      <button
        type="button"
        class="apply-btn"
        @click="applyToLabel"
        :disabled="isApplying"
      >
        <svg v-if="!isApplying" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <div v-else class="loading-spinner-small"></div>
        {{ isApplying ? 'Applying...' : 'Apply to Label' }}
      </button>
      
      <p class="apply-hint text-xs text-gray-500 mt-2">
        Label will be wrapped around the {{ templateName.toLowerCase() }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import type { TextureFit } from './types'

interface Props {
  templateName?: string
}

interface Emits {
  (e: 'upload', file: File): void
  (e: 'apply', data: { file: File; fit: TextureFit }): void
  (e: 'clear'): void
}

interface ImageInfo {
  dimensions?: {
    width: number
    height: number
  }
}

const props = withDefaults(defineProps<Props>(), {
  templateName: 'product'
})

const emit = defineEmits<Emits>()

// Refs
const dropZoneRef = ref<HTMLDivElement | null>(null)
const fileInputRef = ref<HTMLInputElement | null>(null)
const isDragOver = ref(false)
const uploadedFile = ref<File | null>(null)
const previewUrl = ref<string | null>(null)
const errorMessage = ref<string | null>(null)
const isImageLoading = ref(false)
const imageInfo = ref<ImageInfo | null>(null)
const isApplying = ref(false)

// Constants
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
const ALLOWED_TYPES = ['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml', 'image/webp']

// Methods
const validateFile = (file: File): boolean => {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    errorMessage.value = `File too large. Maximum size is ${formatFileSize(MAX_FILE_SIZE)}.`
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
  if (!validateFile(file)) {
    return
  }

  uploadedFile.value = file
  
  // Create preview URL
  if (previewUrl.value) {
    URL.revokeObjectURL(previewUrl.value)
  }
  previewUrl.value = URL.createObjectURL(file)
  
  // Reset image info
  imageInfo.value = null
  isImageLoading.value = true
  
  // Emit upload event
  emit('upload', file)
  
  // Auto-apply to label immediately after upload
  setTimeout(() => {
    applyToLabel()
  }, 100)
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
  
  // Reset input to allow selecting the same file again
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
  imageInfo.value = null
  errorMessage.value = null
  
  emit('clear')
}

const handleImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement
  isImageLoading.value = false
  
  imageInfo.value = {
    dimensions: {
      width: img.naturalWidth,
      height: img.naturalHeight
    }
  }
}

const handleImageError = () => {
  isImageLoading.value = false
  errorMessage.value = 'Failed to load image preview.'
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

const applyToLabel = async () => {
  if (!uploadedFile.value) return
  
  isApplying.value = true
  
  try {
    // Emit apply event with default fit for wrap mode
    emit('apply', {
      file: uploadedFile.value,
      fit: 'fit' as TextureFit // Default fit for wrap mode
    })
  } catch (error) {
    console.error('Failed to apply label:', error)
    errorMessage.value = 'Failed to apply label. Please try again.'
  } finally {
    isApplying.value = false
  }
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
.wrap-uploader {
  @apply flex flex-col gap-4;
}

.drop-zone {
  @apply relative border-2 border-dashed border-gray-300 rounded-xl p-8 text-center transition-all duration-200 cursor-pointer;
  @apply hover:border-indigo-400 hover:bg-indigo-50;
  min-height: 200px;
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
  @apply text-gray-400 mb-4;
}

.drop-zone.drag-over .upload-icon {
  @apply text-indigo-500;
}

.drop-zone.has-file .upload-icon {
  @apply text-indigo-400;
}

.upload-text {
  @apply mb-6;
}

.browse-btn {
  @apply px-6 py-2 bg-indigo-600 text-white font-medium rounded-lg transition-all duration-200;
  @apply hover:bg-indigo-700 hover:shadow-md;
  @apply focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;
}

.error-message {
  @apply p-3 bg-red-50 border border-red-200 rounded-lg;
}

.image-preview {
  @apply bg-white border border-gray-200 rounded-xl overflow-hidden;
}

.preview-header {
  @apply px-4 py-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between;
}

.clear-btn {
  @apply p-1 text-gray-400 hover:text-red-500 transition-colors rounded;
  @apply hover:bg-red-50;
}

.preview-image-container {
  @apply relative;
}

.preview-image {
  @apply w-full h-auto max-h-64 object-contain;
}

.loading-overlay {
  @apply absolute inset-0 bg-white/80 flex flex-col items-center justify-center;
}

.loading-spinner {
  @apply w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin mb-2;
}

.loading-spinner-small {
  @apply w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin;
}

.loading-text {
  @apply text-sm text-gray-600;
}

.image-info {
  @apply px-4 py-3 bg-gray-50 border-t border-gray-200;
}

.info-grid {
  @apply grid grid-cols-3 gap-4;
}

.info-item {
  @apply flex flex-col;
}

.info-label {
  @apply text-xs text-gray-500 mb-1;
}

.info-value {
  @apply text-sm font-medium text-gray-700;
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

.apply-hint {
  @apply text-center;
}
</style>