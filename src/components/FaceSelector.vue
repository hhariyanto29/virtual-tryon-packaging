<template>
  <div class="face-selector">
    <!-- Header -->
    <div class="selector-header">
      <h3 class="text-lg font-semibold text-gray-800">Face Selection</h3>
      <div class="text-sm text-gray-500">
        {{ selectedFace ? `Selected: ${selectedFace}` : 'Click a face to select' }}
      </div>
    </div>

    <!-- 3D Box Diagram -->
    <div class="box-diagram">
      <!-- Top Face -->
      <div class="face-row top-row">
        <div class="face-placeholder"></div>
        <FaceButton
          face="top"
          :is-selected="selectedFace === 'top'"
          :texture-url="getTextureUrl('top')"
          @click="selectFace('top')"
        />
        <div class="face-placeholder"></div>
      </div>

      <!-- Middle Row: Left, Front, Right, Back -->
      <div class="face-row middle-row">
        <FaceButton
          face="left"
          :is-selected="selectedFace === 'left'"
          :texture-url="getTextureUrl('left')"
          @click="selectFace('left')"
        />
        
        <div class="middle-faces">
          <FaceButton
            face="front"
            :is-selected="selectedFace === 'front'"
            :texture-url="getTextureUrl('front')"
            @click="selectFace('front')"
          />
          
          <FaceButton
            face="back"
            :is-selected="selectedFace === 'back'"
            :texture-url="getTextureUrl('back')"
            @click="selectFace('back')"
          />
        </div>
        
        <FaceButton
          face="right"
          :is-selected="selectedFace === 'right'"
          :texture-url="getTextureUrl('right')"
          @click="selectFace('right')"
        />
      </div>

      <!-- Bottom Face -->
      <div class="face-row bottom-row">
        <div class="face-placeholder"></div>
        <FaceButton
          face="bottom"
          :is-selected="selectedFace === 'bottom'"
          :texture-url="getTextureUrl('bottom')"
          @click="selectFace('bottom')"
        />
        <div class="face-placeholder"></div>
      </div>
    </div>

    <!-- Face Thumbnails Grid -->
    <div class="thumbnails-grid">
      <div
        v-for="face in allFaces"
        :key="face"
        class="thumbnail-item"
        :class="{ 'selected': selectedFace === face }"
        @click="selectFace(face)"
      >
        <div class="thumbnail-container">
          <!-- Texture Preview -->
          <div v-if="getTextureUrl(face)" class="texture-preview">
            <img
              :src="getTextureUrl(face)!"
              :alt="`${face} texture`"
              class="thumbnail-image"
            />
            <div class="thumbnail-overlay">
              <button
                type="button"
                class="remove-btn"
                @click.stop="removeTexture(face)"
                title="Remove texture"
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
          
          <!-- Empty State -->
          <div v-else class="empty-thumbnail">
            <div class="empty-icon">
              {{ getFaceIcon(face) }}
            </div>
          </div>
          
          <!-- Face Label -->
          <div class="face-label">
            <span class="label-text">{{ face.charAt(0).toUpperCase() + face.slice(1) }}</span>
            <span v-if="getTextureUrl(face)" class="texture-indicator">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Face Actions -->
    <div v-if="selectedFace" class="face-actions">
      <div class="actions-header">
        <h4 class="font-medium text-gray-800">
          {{ selectedFace.charAt(0).toUpperCase() + selectedFace.slice(1) }} Face Actions
        </h4>
      </div>
      
      <div class="action-buttons">
        <button
          type="button"
          class="action-btn reset-face"
          :disabled="!getTextureUrl(selectedFace)"
          @click="removeTexture(selectedFace)"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
          </svg>
          Clear Texture
        </button>
        
        <button
          type="button"
          class="action-btn copy-face"
          :disabled="!getTextureUrl(selectedFace)"
          @click="copyToOtherFaces"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" />
            <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z" />
          </svg>
          Copy to Others
        </button>
      </div>
      
      <div class="global-actions">
        <button
          type="button"
          class="global-btn reset-all"
          @click="resetAllTextures"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
          </svg>
          Reset All Textures
        </button>
      </div>
    </div>

    <!-- Texture Summary -->
    <div class="texture-summary">
      <div class="summary-item">
        <span class="summary-label">Textured Faces:</span>
        <span class="summary-value">
          {{ texturedFacesCount }} / {{ allFaces.length }}
        </span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Selected Face:</span>
        <span class="summary-value">
          {{ selectedFace ? selectedFace.charAt(0).toUpperCase() + selectedFace.slice(1) : 'None' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import FaceButton from './FaceButton.vue'
import type { BoxFace } from '../stores/mockupStore'

interface Props {
  selectedFace?: BoxFace | null
  textures?: Record<BoxFace, string | null>
}

interface Emits {
  (e: 'select', face: BoxFace): void
  (e: 'remove-texture', face: BoxFace): void
  (e: 'copy-to-others', sourceFace: BoxFace): void
  (e: 'reset-all'): void
}

const props = withDefaults(defineProps<Props>(), {
  selectedFace: null,
  textures: () => ({
    front: null,
    back: null,
    left: null,
    right: null,
    top: null,
    bottom: null
  })
})

const emit = defineEmits<Emits>()

// Constants
const allFaces: BoxFace[] = ['front', 'back', 'left', 'right', 'top', 'bottom']

// Computed
const texturedFacesCount = computed(() => {
  return allFaces.filter(face => props.textures[face]).length
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

const getTextureUrl = (face: BoxFace): string | null => {
  return props.textures[face] || null
}

const selectFace = (face: BoxFace) => {
  emit('select', face)
}

const removeTexture = (face: BoxFace) => {
  emit('remove-texture', face)
}

const copyToOtherFaces = () => {
  if (props.selectedFace) {
    emit('copy-to-others', props.selectedFace)
  }
}

const resetAllTextures = () => {
  emit('reset-all')
}
</script>

<style scoped>
@reference "tailwindcss";
.face-selector {
  @apply flex flex-col gap-6;
}

.selector-header {
  @apply flex items-center justify-between;
}

.box-diagram {
  @apply bg-gray-50 border border-gray-200 rounded-xl p-4;
}

.face-row {
  @apply flex items-center justify-center gap-4;
}

.top-row, .bottom-row {
  @apply mb-4;
}

.middle-row {
  @apply mb-4;
}

.middle-faces {
  @apply flex gap-4;
}

.face-placeholder {
  @apply w-16 h-16;
}

.thumbnails-grid {
  @apply grid grid-cols-3 gap-3;
}

.thumbnail-item {
  @apply cursor-pointer transition-all duration-200;
}

.thumbnail-item:hover {
  @apply transform scale-105;
}

.thumbnail-item.selected {
  @apply ring-2 ring-indigo-500 ring-offset-2;
}

.thumbnail-container {
  @apply bg-white border border-gray-200 rounded-lg overflow-hidden;
}

.texture-preview {
  @apply relative aspect-square;
}

.thumbnail-image {
  @apply w-full h-full object-cover;
}

.thumbnail-overlay {
  @apply absolute inset-0 bg-black/0 hover:bg-black/30 transition-all duration-200 flex items-center justify-center;
}

.remove-btn {
  @apply p-1 bg-white/80 rounded-full text-gray-700 hover:text-red-600 hover:bg-white transition-colors;
  opacity: 0;
}

.texture-preview:hover .remove-btn {
  opacity: 1;
}

.empty-thumbnail {
  @apply aspect-square bg-gray-100 flex items-center justify-center;
}

.empty-icon {
  @apply text-2xl;
}

.face-label {
  @apply px-3 py-2 border-t border-gray-100 flex items-center justify-between;
}

.label-text {
  @apply text-sm font-medium text-gray-700;
}

.texture-indicator {
  @apply flex items-center;
}

.face-actions {
  @apply bg-gray-50 border border-gray-200 rounded-xl p-4;
}

.actions-header {
  @apply mb-4;
}

.action-buttons {
  @apply grid grid-cols-2 gap-3 mb-4;
}

.action-btn {
  @apply flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.action-btn:disabled {
  @apply opacity-50 cursor-not-allowed;
}

.reset-face {
  @apply bg-red-100 text-red-700 hover:bg-red-200 focus:ring-red-500;
}

.copy-face {
  @apply bg-blue-100 text-blue-700 hover:bg-blue-200 focus:ring-blue-500;
}

.global-actions {
  @apply pt-4 border-t border-gray-200;
}

.global-btn {
  @apply w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200;
  @apply focus:outline-none focus:ring-2 focus:ring-offset-2;
}

.reset-all {
  @apply bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500;
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