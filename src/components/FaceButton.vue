<template>
  <button
    type="button"
    class="face-button"
    :class="{
      'selected': isSelected,
      'has-texture': textureUrl,
      [face]: true
    }"
    @click="$emit('click')"
    :title="`${face.charAt(0).toUpperCase() + face.slice(1)} Face`"
  >
    <!-- Texture Preview -->
    <div v-if="textureUrl" class="texture-preview">
      <img
        :src="textureUrl"
        :alt="`${face} texture`"
        class="texture-image"
      />
      <div class="texture-overlay">
        <span class="texture-label">{{ getFaceLabel() }}</span>
      </div>
    </div>
    
    <!-- Empty State -->
    <div v-else class="empty-face">
      <div class="face-icon">
        {{ getFaceIcon() }}
      </div>
      <div class="face-label">
        {{ getFaceLabel() }}
      </div>
    </div>
    
    <!-- Selection Indicator -->
    <div v-if="isSelected" class="selection-indicator">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
      </svg>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { BoxFace } from '../stores/mockupStore'

interface Props {
  face: BoxFace
  isSelected: boolean
  textureUrl?: string | null
}

interface Emits {
  (e: 'click'): void
}

defineProps<Props>()
defineEmits<Emits>()

// Methods
const getFaceIcon = (): string => {
  const icons: Record<BoxFace, string> = {
    front: '⬆️',
    back: '⬇️',
    left: '⬅️',
    right: '➡️',
    top: '🔺',
    bottom: '🔻'
  }
  return icons[props.face]
}

const getFaceLabel = (): string => {
  return props.face.charAt(0).toUpperCase() + props.face.slice(1)
}
</script>

<style scoped>
.face-button {
  @apply relative w-16 h-16 border-2 border-gray-300 rounded-lg transition-all duration-200;
  @apply hover:border-indigo-400 hover:shadow-md;
  @apply focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;
  overflow: hidden;
}

.face-button.selected {
  @apply border-indigo-500 ring-2 ring-indigo-500 ring-offset-2;
}

.face-button.has-texture {
  @apply border-gray-400;
}

.face-button.has-texture.selected {
  @apply border-indigo-600;
}

/* Face-specific styles */
.face-button.front {
  @apply bg-blue-50;
}

.face-button.back {
  @apply bg-blue-50;
}

.face-button.left {
  @apply bg-green-50;
}

.face-button.right {
  @apply bg-green-50;
}

.face-button.top {
  @apply bg-purple-50;
}

.face-button.bottom {
  @apply bg-purple-50;
}

.texture-preview {
  @apply absolute inset-0;
}

.texture-image {
  @apply w-full h-full object-cover;
}

.texture-overlay {
  @apply absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center;
}

.texture-label {
  @apply text-xs font-bold text-white bg-black bg-opacity-50 px-2 py-1 rounded;
}

.empty-face {
  @apply w-full h-full flex flex-col items-center justify-center;
}

.face-icon {
  @apply text-2xl mb-1;
}

.face-label {
  @apply text-xs font-medium text-gray-700;
}

.selection-indicator {
  @apply absolute -top-2 -right-2 bg-indigo-600 text-white rounded-full p-1 shadow-lg;
}
</style>