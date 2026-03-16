<template>
  <div class="accordion-section">
    <button class="accordion-header" @click="$emit('toggle')">
      <div class="accordion-title">
        <slot name="icon">
          <div class="default-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="12" height="12" rx="1" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
        </slot>
        <span class="title-text">{{ title }}</span>
      </div>
      <div class="accordion-chevron" :class="{ rotated: !isExpanded }">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </button>
    
    <transition name="accordion">
      <div v-if="isExpanded" class="accordion-content">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  isExpanded: boolean
}>()

defineEmits<{
  toggle: []
}>()
</script>

<style scoped>
@reference "tailwindcss";

.accordion-section {
  @apply bg-gray-800 rounded-lg overflow-hidden;
}

.accordion-header {
  @apply flex items-center justify-between w-full px-4 py-3 text-left
         hover:bg-gray-700 transition-colors duration-200;
}

.accordion-title {
  @apply flex items-center gap-3;
}

.default-icon {
  @apply text-gray-400;
}

.title-text {
  @apply text-sm font-medium text-white;
}

.accordion-chevron {
  @apply text-gray-400 transition-transform duration-200;
}

.accordion-chevron.rotated {
  @apply transform -rotate-90;
}

.accordion-content {
  @apply px-4 pb-4 pt-2;
}

/* Transition animations */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>