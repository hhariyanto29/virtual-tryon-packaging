<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <h1 class="text-3xl font-bold text-gray-900">Nemu Mockup Tool</h1>
        <p class="text-gray-600">Create professional packaging mockups in 3D</p>
      </div>
    </header>
    
    <main class="max-w-7xl mx-auto px-4 py-8">
      <EditorView />
    </main>
    
    <footer class="bg-white border-t mt-8">
      <div class="max-w-7xl mx-auto px-4 py-6 text-center text-gray-500">
        <p>© 2024 Nemu Mockup Tool. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import EditorView from './views/EditorView.vue'
</script>