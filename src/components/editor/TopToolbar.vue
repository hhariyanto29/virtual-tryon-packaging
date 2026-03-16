<template>
  <div class="top-toolbar">
    <!-- Logo & Title -->
    <div class="logo-section">
      <div class="logo-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 3H21V21H3V3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3 9H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M9 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M15 3V21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M3 15H21" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </div>
      <h1 class="title">Virtual Try-On Packaging</h1>
    </div>

    <!-- Toolbar Controls -->
    <div class="toolbar-controls">
      <!-- Undo/Redo Group -->
      <div class="toolbar-group">
        <button class="toolbar-btn" :disabled="true" title="Undo (Ctrl+Z)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L2 8L4 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 8H10C11.6569 8 13 9.34315 13 11C13 12.6569 11.6569 14 10 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <button class="toolbar-btn" :disabled="true" title="Redo (Ctrl+Y)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 6L14 8L12 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14 8H6C4.34315 8 3 9.34315 3 11C3 12.6569 4.34315 14 6 14H8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <!-- Zoom Controls -->
      <div class="toolbar-group">
        <button class="toolbar-btn" @click="$emit('zoom-out')" title="Zoom Out (-)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
        <div class="zoom-display">
          <span class="zoom-value">{{ zoom }}%</span>
        </div>
        <button class="toolbar-btn" @click="$emit('zoom-in')" title="Zoom In (+)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 3V13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 8H13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
        <button class="toolbar-btn" @click="$emit('zoom-fit')" title="Fit to Screen (Space)">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 5L3 3M5 11L3 13M11 5L13 3M11 11L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <rect x="4" y="4" width="8" height="8" rx="1" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <!-- View Presets -->
      <div class="toolbar-group">
        <button 
          class="toolbar-btn" 
          :class="{ active: viewPreset === 'front' }"
          @click="$emit('view-preset', 'front')"
          title="Front View (1)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 3V13" stroke="currentColor" stroke-width="1.5"/>
            <path d="M3 8H13" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
        <button 
          class="toolbar-btn" 
          :class="{ active: viewPreset === 'back' }"
          @click="$emit('view-preset', 'back')"
          title="Back View (2)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 3V13" stroke="currentColor" stroke-width="1.5"/>
            <path d="M3 8H13" stroke="currentColor" stroke-width="1.5"/>
            <circle cx="8" cy="8" r="1" fill="currentColor"/>
          </svg>
        </button>
        <button 
          class="toolbar-btn" 
          :class="{ active: viewPreset === 'top' }"
          @click="$emit('view-preset', 'top')"
          title="Top View (3)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="10" height="10" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 3V13" stroke="currentColor" stroke-width="1.5"/>
            <path d="M3 8H13" stroke="currentColor" stroke-width="1.5"/>
            <path d="M5 5L11 11" stroke="currentColor" stroke-width="1.5"/>
            <path d="M5 11L11 5" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
        <button 
          class="toolbar-btn" 
          :class="{ active: viewPreset === 'isometric' }"
          @click="$emit('view-preset', 'isometric')"
          title="Isometric View (4)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org2000/svg">
            <path d="M3 13L8 3L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 13H13" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 3V13" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <!-- Toggle Controls -->
      <div class="toolbar-group">
        <button 
          class="toolbar-btn" 
          :class="{ active: autoRotate }"
          @click="$emit('toggle-auto-rotate')"
          title="Auto Rotate (R)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 3V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M13 8H11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 13V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3 8H5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
        <button 
          class="toolbar-btn" 
          :class="{ active: showGrid }"
          @click="$emit('toggle-grid')"
          title="Toggle Grid (G)"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 2V14" stroke="currentColor" stroke-width="1.5"/>
            <path d="M2 8H14" stroke="currentColor" stroke-width="1.5"/>
          </svg>
        </button>
      </div>

      <div class="toolbar-divider"></div>

      <!-- Theme Toggle -->
      <div class="toolbar-group">
        <button 
          class="toolbar-btn" 
          @click="$emit('toggle-theme')"
          :title="isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'"
        >
          <svg v-if="isDark" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="4" fill="currentColor"/>
            <path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="currentColor" stroke-width="1.5"/>
            <path d="M8 2V3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M8 13V14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M2 8H3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M13 8H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3.5 3.5L4.2 4.2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.8 11.8L12.5 12.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M3.5 12.5L4.2 11.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M11.8 4.2L12.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  zoom: number
  viewPreset: string
  autoRotate: boolean
  showGrid: boolean
  isDark: boolean
}>()

defineEmits<{
  'zoom-in': []
  'zoom-out': []
  'zoom-fit': []
  'view-preset': [preset: string]
  'toggle-auto-rotate': []
  'toggle-grid': []
  'toggle-theme': []
}>()
</script>

<style scoped>
@reference "tailwindcss";

.top-toolbar {
  @apply flex items-center justify-between h-12 px-4 bg-gray-900 border-b border-gray-800;
}

.logo-section {
  @apply flex items-center gap-3;
}

.logo-icon {
  @apply text-violet-500;
}

.title {
  @apply text-white font-semibold text-sm;
}

.toolbar-controls {
  @apply flex items-center gap-2;
}

.toolbar-group {
  @apply flex items-center gap-1;
}

.toolbar-btn {
  @apply flex items-center justify-center w-8 h-8 rounded text-gray-400 hover:text-white hover:bg-gray-800 
         transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed;
}

.toolbar-btn.active {
  @apply text-violet-500 bg-gray-800;
}

.toolbar-divider {
  @apply w-px h-6 bg-gray-700 mx-1;
}

.zoom-display {
  @apply px-2 min-w-12 text-center text-sm text-gray-300 font-medium;
}

.zoom-value {
  @apply font-mono;
}
</style>