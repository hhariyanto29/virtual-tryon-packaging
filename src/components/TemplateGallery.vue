<template>
  <div class="template-gallery">
    <div class="gallery-header">
      <h3 class="gallery-title">Template Packaging</h3>
      <p class="gallery-subtitle">Pilih template untuk memulai desain kemasan Anda</p>
      
      <div class="category-tabs">
        <button
          v-for="category in categoryFilters"
          :key="category.id"
          class="category-tab"
          :class="{ active: selectedCategory === category.id }"
          @click="selectCategory(category.id)"
        >
          {{ category.name }}
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
          <div class="thumbnail-placeholder" :style="getThumbnailStyle(template)">
            <span class="template-name">{{ getTemplateInitials(template.name) }}</span>
          </div>
          <div class="category-badge" :class="template.category">
            {{ getCategoryLabel(template.category) }}
          </div>
          <div v-if="activeTemplateId === template.id" class="active-indicator">
            <div class="active-dot"></div>
          </div>
        </div>
        
        <div class="template-content">
          <h4 class="template-title">{{ template.name }}</h4>
          <p class="template-description" :title="template.description">
            {{ truncateDescription(template.description || '') }}
          </p>
          
          <div class="template-tags">
            <span
              v-for="tag in (template.tags || [])"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>

    <div v-if="filteredTemplates.length === 0" class="empty-state">
      <div class="empty-icon">📦</div>
      <p class="empty-text">Tidak ada template ditemukan untuk kategori ini.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { 
  getAllTemplates, 
  getTemplatesByCategory, 
  PackagingCategory 
} from '../templates/registry'
import { useMockupStore } from '../stores/mockupStore'

const mockupStore = useMockupStore()

const templates = ref(getAllTemplates())
const selectedCategory = ref<string>('all')
const activeTemplateId = ref<string | null>(null)

// Category mapping for filtering
const categoryFilters = [
  { id: 'all', name: 'Semua' },
  { id: 'minuman', name: 'Minuman' },
  { id: 'makanan', name: 'Makanan' },
  { id: 'kemasan', name: 'Kemasan' },
  { id: 'aksesoris', name: 'Aksesoris' }
]

// Category mapping for display
const categoryLabels: Record<PackagingCategory, string> = {
  box: 'Kotak',
  bottle: 'Botol',
  pouch: 'Pouch',
  tube: 'Tube',
  bag: 'Tas',
  cup: 'Gelas',
  container: 'Wadah',
  bowl: 'Mangkok',
  takeaway: 'Takeaway',
  perfume: 'Parfum'
}

// Category colors for badges
const categoryColors: Record<PackagingCategory, string> = {
  box: '#3b82f6',
  bottle: '#10b981',
  pouch: '#8b5cf6',
  tube: '#f59e0b',
  bag: '#ef4444',
  cup: '#06b6d4',
  container: '#84cc16',
  bowl: '#f97316',
  takeaway: '#6366f1',
  perfume: '#ec4899'
}

// Category to filter mapping
const categoryToFilter = (category: PackagingCategory): string => {
  // Minuman: Gelas Plastik, Perfume Bottle
  if (category === 'cup' || category === 'perfume') return 'minuman'
  // Makanan: Food Container, Paper Bowl, Takeaway Box
  if (category === 'container' || category === 'bowl' || category === 'takeaway') return 'makanan'
  // Kemasan: Paper Bag, Custom Packaging
  if (category === 'bag' || category === 'pouch') return 'kemasan'
  // Default to aksesoris
  return 'aksesoris'
}

const filteredTemplates = computed(() => {
  if (selectedCategory.value === 'all') {
    return templates.value
  }
  
  return templates.value.filter(template => 
    categoryToFilter(template.category) === selectedCategory.value
  )
})

const getCategoryLabel = (category: PackagingCategory): string => {
  return categoryLabels[category] || category
}

const getThumbnailStyle = (template: any) => {
  const color = categoryColors[template.category] || '#6b7280'
  return {
    background: `linear-gradient(135deg, ${color}20 0%, ${color}40 100%)`,
    borderColor: `${color}30`
  }
}

const getTemplateInitials = (name: string): string => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase().substring(0, 2)
}

const truncateDescription = (description: string): string => {
  if (description.length <= 60) return description
  return description.substring(0, 57) + '...'
}

const selectCategory = (category: string) => {
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
@reference "tailwindcss";

.template-gallery {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.gallery-header {
  margin-bottom: 24px;
}

.gallery-title {
  margin: 0 0 4px 0;
  font-size: 20px;
  font-weight: 600;
  color: #1f2937;
}

.gallery-subtitle {
  margin: 0 0 16px 0;
  font-size: 14px;
  color: #6b7280;
}

.category-tabs {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.category-tab {
  padding: 8px 16px;
  border: 1px solid #e5e7eb;
  border-radius: 20px;
  background: white;
  color: #6b7280;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.category-tab:hover {
  border-color: #3b82f6;
  color: #3b82f6;
  background: #eff6ff;
}

.category-tab.active {
  background: #3b82f6;
  border-color: #3b82f6;
  color: white;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
  flex: 1;
  overflow-y: auto;
  padding-right: 4px;
}

.template-card {
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  background: white;
  display: flex;
  flex-direction: column;
}

.template-card:hover {
  border-color: #3b82f6;
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(59, 130, 246, 0.15);
}

.template-card.active {
  border-color: #3b82f6;
  background: linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%);
}

.template-thumbnail {
  position: relative;
  aspect-ratio: 16/9;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.thumbnail-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
}

.template-name {
  font-size: 32px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.3);
}

.category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.category-badge.box { background: #3b82f6; }
.category-badge.bottle { background: #10b981; }
.category-badge.pouch { background: #8b5cf6; }
.category-badge.tube { background: #f59e0b; }
.category-badge.bag { background: #ef4444; }
.category-badge.cup { background: #06b6d4; }
.category-badge.container { background: #84cc16; }
.category-badge.bowl { background: #f97316; }
.category-badge.takeaway { background: #6366f1; }
.category-badge.perfume { background: #ec4899; }

.active-indicator {
  position: absolute;
  top: 12px;
  right: 12px;
}

.active-dot {
  width: 12px;
  height: 12px;
  background: #10b981;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.template-content {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.template-title {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  color: #1f2937;
  line-height: 1.4;
}

.template-description {
  margin: 0 0 12px 0;
  font-size: 13px;
  color: #6b7280;
  line-height: 1.5;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.template-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}

.tag {
  padding: 3px 8px;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  font-size: 11px;
  color: #6b7280;
  background: #f9fafb;
}

.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.empty-icon {
  font-size: 48px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.empty-text {
  color: #9ca3af;
  font-size: 14px;
  text-align: center;
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

/* Responsive adjustments */
@media (max-width: 1024px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 768px) {
  .gallery-grid {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    gap: 12px;
  }
  
  .template-gallery {
    padding: 16px;
  }
}
</style>