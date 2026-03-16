<template>
  <div class="template-gallery">
    <div class="gallery-header">
      <h3>Packaging Templates</h3>
      <div class="category-tabs">
        <button
          v-for="category in categories"
          :key="category"
          class="category-tab"
          :class="{ active: selectedCategory === category }"
          @click="selectCategory(category)"
        >
          {{ categoryLabels[category] }}
        </button>
      </div>
    </div>

    <div class="gallery-grid">
      <div
        v-for="template in filteredTemplates"
        :key="template.id"
        class="template-card"
        :class="{ active: activeTemplateId === template.id }"
        @click="selectTemplate(template)"
      >
        <div class="template-thumbnail">
          <div class="thumbnail-placeholder">
            <span class="template-icon">{{ getCategoryIcon(template.category) }}</span>
          </div>
          <div v-if="activeTemplateId === template.id" class="active-indicator">
            <div class="active-dot"></div>
          </div>
        </div>
        <div class="template-info">
          <h4>{{ template.name }}</h4>
          <p class="template-category">{{ categoryLabels[template.category] }}</p>
          <p v-if="template.description" class="template-description">
            {{ template.description }}
          </p>
        </div>
      </div>
    </div>

    <div v-if="filteredTemplates.length === 0" class="empty-state">
      <p>No templates found for this category.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  getAllTemplates, 
  getTemplatesByCategory, 
  getCategories,
  PackagingCategory 
} from '../templates/registry'
import { useMockupStore } from '../stores/mockupStore'

const mockupStore = useMockupStore()

const templates = ref(getAllTemplates())
const categories = ref<PackagingCategory[]>(getCategories())
const selectedCategory = ref<PackagingCategory | 'all'>('all')
const activeTemplateId = ref<string | null>(null)

const categoryLabels: Record<PackagingCategory | 'all', string> = {
  all: 'All',
  box: 'Box',
  bottle: 'Bottle',
  pouch: 'Pouch',
  tube: 'Tube',
  bag: 'Bag'
}

const categoryIcons: Record<PackagingCategory, string> = {
  box: '📦',
  bottle: '🍾',
  pouch: '🧴',
  tube: '🧴',
  bag: '🛍️'
}

const filteredTemplates = computed(() => {
  if (selectedCategory.value === 'all') {
    return templates.value
  }
  return getTemplatesByCategory(selectedCategory.value as PackagingCategory)
})

const getCategoryIcon = (category: PackagingCategory): string => {
  return categoryIcons[category] || '📦'
}

const selectCategory = (category: PackagingCategory | 'all') => {
  selectedCategory.value = category
}

const selectTemplate = (template: any) => {
  activeTemplateId.value = template.id
  // Emit event or call store action
  mockupStore.switchTemplate?.(template.id)
  
  // Dispatch custom event for parent components
  window.dispatchEvent(new CustomEvent('template-selected', { 
    detail: { templateId: template.id } 
  }))
}

// Initialize with first template if none selected
onMounted(() => {
  if (templates.value.length > 0 && !activeTemplateId.value) {
    activeTemplateId.value = templates.value[0].id
  }
})
</script>

<style scoped>
.template-gallery {
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gallery-header {
  margin-bottom: 20px;
}

.gallery-header h3 {
  margin: 0 0 16px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

.category-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.category-tab {
  padding: 8px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  background: white;
  color: #666;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-tab:hover {
  border-color: #4f46e5;
  color: #4f46e5;
}

.category-tab.active {
  background: #4f46e5;
  border-color: #4f46e5;
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 16px;
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}

.template-card {
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  display: flex;
  flex-direction: column;
}

.template-card:hover {
  border-color: #4f46e5;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(79, 70, 229, 0.1);
}

.template-card.active {
  border-color: #4f46e5;
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
}

.template-thumbnail {
  position: relative;
  aspect-ratio: 1;
  background: #f8fafc;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  overflow: hidden;
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.template-icon {
  font-size: 32px;
  opacity: 0.8;
}

.active-indicator {
  position: absolute;
  top: 8px;
  right: 8px;
}

.active-dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.template-info {
  flex: 1;
}

.template-info h4 {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: #333;
}

.template-category {
  margin: 0 0 8px 0;
  font-size: 12px;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.template-description {
  margin: 0;
  font-size: 12px;
  color: #888;
  line-height: 1.4;
}

.empty-state {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  font-size: 14px;
}

/* Scrollbar styling */
.gallery-grid::-webkit-scrollbar {
  width: 6px;
}

.gallery-grid::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.gallery-grid::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

.gallery-grid::-webkit-scrollbar-thumb:hover {
  background: #a1a1a1;
}
</style>