<template>
  <div class="left-panel" :class="{ collapsed: isCollapsed }">
    <!-- Panel Header -->
    <div class="panel-header">
      <button class="collapse-btn" @click="toggleCollapse">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path v-if="isCollapsed" d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path v-else d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <h3 class="panel-title">Template Gallery</h3>
    </div>

    <!-- Panel Content -->
    <div v-if="!isCollapsed" class="panel-content">
      <!-- Category Tabs -->
      <div class="category-tabs">
        <button
          v-for="category in categories"
          :key="category.id"
          class="category-tab"
          :class="{ active: activeCategory === category.id }"
          @click="activeCategory = category.id"
        >
          {{ category.name }}
        </button>
      </div>

      <!-- Search & Filter -->
      <div class="search-section">
        <div class="search-input-wrapper">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="search-icon">
            <circle cx="6" cy="6" r="5" stroke="currentColor" stroke-width="1.5"/>
            <path d="M10 10L13 13" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search templates..."
            class="search-input"
            @input="onSearch"
          />
        </div>
      </div>

      <!-- Template Grid -->
      <div class="template-grid">
        <div
          v-for="template in filteredTemplates"
          :key="template.id"
          class="template-item"
          :class="{ active: selectedTemplate?.id === template.id }"
          @click="selectTemplate(template)"
        >
          <div class="template-thumbnail">
            <div class="template-preview">
              <!-- Simple box preview -->
              <div class="box-preview">
                <div class="box-front"></div>
                <div class="box-top"></div>
                <div class="box-side"></div>
              </div>
            </div>
            <div v-if="template.isPremium" class="premium-badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="currentColor" stroke="currentColor" stroke-width="0.5"/>
              </svg>
            </div>
          </div>
          <div class="template-info">
            <h4 class="template-name">{{ template.name }}</h4>
            <p class="template-dimensions">{{ template.dimensions }}</p>
            <div class="template-tags">
              <span v-for="tag in template.tags.slice(0, 2)" :key="tag" class="template-tag">
                {{ tag }}
              </span>
              <span v-if="template.tags.length > 2" class="template-tag-more">
                +{{ template.tags.length - 2 }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredTemplates.length === 0" class="empty-state">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="empty-icon">
          <rect x="8" y="8" width="32" height="32" rx="2" stroke="currentColor" stroke-width="2"/>
          <path d="M16 16H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M16 24H32" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          <path d="M16 32H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <p class="empty-text">No templates found</p>
        <p class="empty-subtext">Try a different search term</p>
      </div>
    </div>

    <!-- Collapsed State -->
    <div v-else class="collapsed-content">
      <button class="expand-btn" @click="toggleCollapse" title="Expand panel">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="collapsed-label">Templates</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Category } from './types'
import { defaultTemplates } from '../../templates/defaults'

// Props
const props = defineProps<{
  selectedTemplate?: Template
}>()

// Emits
const emit = defineEmits<{
  'select-template': [template: Template]
}>()

// State
const isCollapsed = ref(false)
const activeCategory = ref('all')
const searchQuery = ref('')

// Categories
const categories: Category[] = [
  { id: 'all', name: 'All' },
  { id: 'boxes', name: 'Boxes' },
  { id: 'bottles', name: 'Bottles' },
  { id: 'bags', name: 'Bags' },
  { id: 'tubes', name: 'Tubes' },
  { id: 'custom', name: 'Custom' }
]

// Real templates from defaults
const templates = defaultTemplates.map(t => ({
  ...t,
  dimensions: t.geometry?.dimensions 
    ? `${t.geometry.dimensions.width || t.geometry.dimensions.radiusTop || '?'}×${t.geometry.dimensions.height}×${t.geometry.dimensions.depth || t.geometry.dimensions.radiusBottom || '?'} cm`
    : '',
  tags: t.tags || [],
  isPremium: false
}))

// Computed
const filteredTemplates = computed(() => {
  let filtered = templates

  // Filter by category
  if (activeCategory.value !== 'all') {
    filtered = filtered.filter(t => t.category === activeCategory.value)
  }

  // Filter by search query
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(t => 
      t.name.toLowerCase().includes(query) ||
      t.tags.some(tag => tag.toLowerCase().includes(query))
    )
  }

  return filtered
})

// Methods
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
}

const selectTemplate = (template: Template) => {
  emit('select-template', template)
}

const onSearch = () => {
  // Search logic handled in computed property
}
</script>

<style scoped>
@reference "tailwindcss";

.left-panel {
  @apply flex flex-col w-72 h-full bg-gray-900 border-r border-gray-800 transition-all duration-300;
}

.left-panel.collapsed {
  @apply w-12;
}

.panel-header {
  @apply flex items-center h-12 px-4 border-b border-gray-800;
}

.collapse-btn {
  @apply flex items-center justify-center w-6 h-6 text-gray-400 hover:text-white 
         hover:bg-gray-800 rounded transition-colors duration-200 mr-2;
}

.panel-title {
  @apply text-white font-medium text-sm;
}

.panel-content {
  @apply flex-1 overflow-y-auto p-4;
}

.category-tabs {
  @apply flex flex-wrap gap-1 mb-4;
}

.category-tab {
  @apply px-3 py-1.5 text-xs font-medium rounded-lg transition-colors duration-200
         text-gray-400 hover:text-white hover:bg-gray-800;
}

.category-tab.active {
  @apply text-violet-500 bg-gray-800;
}

.search-section {
  @apply mb-4;
}

.search-input-wrapper {
  @apply relative;
}

.search-icon {
  @apply absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500;
}

.search-input {
  @apply w-full pl-9 pr-3 py-2 bg-gray-800 border border-gray-700 rounded-lg
         text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-2 
         focus:ring-violet-500 focus:border-transparent transition-all duration-200;
}

.template-grid {
  @apply grid grid-cols-2 gap-3;
}

.template-item {
  @apply bg-gray-800 rounded-lg p-3 cursor-pointer transition-all duration-200
         hover:bg-gray-700 hover:shadow-lg border border-transparent;
}

.template-item.active {
  @apply bg-gray-700 border-violet-500 shadow-lg;
}

.template-thumbnail {
  @apply relative mb-3;
}

.template-preview {
  @apply aspect-square bg-gray-900 rounded flex items-center justify-center;
}

.box-preview {
  @apply relative w-16 h-16;
}

.box-front {
  @apply absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 rounded-sm;
}

.box-top {
  @apply absolute top-0 left-0 w-12 h-4 bg-gradient-to-b from-gray-600 to-gray-700 
         transform -translate-y-1 -translate-x-1 rotate-45 origin-bottom-left rounded-sm;
}

.box-side {
  @apply absolute bottom-0 right-0 w-4 h-12 bg-gradient-to-r from-gray-600 to-gray-700 
         transform translate-y-1 translate-x-1 -rotate-45 origin-top-left rounded-sm;
}

.premium-badge {
  @apply absolute top-1 right-1 text-yellow-500;
}

.template-info {
  @apply space-y-1;
}

.template-name {
  @apply text-white font-medium text-sm truncate;
}

.template-dimensions {
  @apply text-gray-400 text-xs;
}

.template-tags {
  @apply flex flex-wrap gap-1 mt-1;
}

.template-tag {
  @apply px-1.5 py-0.5 bg-gray-900 text-gray-400 text-xs rounded;
}

.template-tag-more {
  @apply px-1.5 py-0.5 text-gray-500 text-xs;
}

.empty-state {
  @apply flex flex-col items-center justify-center py-12 text-center;
}

.empty-icon {
  @apply text-gray-700 mb-4;
}

.empty-text {
  @apply text-white font-medium mb-1;
}

.empty-subtext {
  @apply text-gray-500 text-sm;
}

.collapsed-content {
  @apply flex flex-col items-center py-4;
}

.expand-btn {
  @apply flex items-center justify-center w-8 h-8 text-gray-400 hover:text-white 
         hover:bg-gray-800 rounded transition-colors duration-200 mb-2;
}

.collapsed-label {
  @apply text-gray-500 text-xs -rotate-90 whitespace-nowrap mt-4;
}
</style>