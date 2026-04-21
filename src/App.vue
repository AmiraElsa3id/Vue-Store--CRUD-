<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from './stores/useProductStore'
import Nav from '@/components/layout/Nav.vue'
import Footer from '@/components/layout/Footer.vue'
import Loading from '@/components/shared/Loading.vue'
import { RouterView } from 'vue-router'

const store = useProductStore()
const { isLoading, error } = storeToRefs(store)

onMounted(() => store.getAllProducts())
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
    <Nav />

    <!-- Loading State -->
    <div v-if="isLoading" class="flex justify-center items-center min-h-screen animate-fade-in">
      <div class="text-center space-y-4">
        <Loading />
        <p class="text-base-content/70 animate-pulse">Loading amazing products...</p>
      </div>
    </div>

    <!-- Error State -->
    <div v-else-if="error" class="flex justify-center items-center min-h-screen animate-fade-in">
      <div class="text-center space-y-4 p-8 bg-error/10 rounded-2xl border border-error/20">
        <svg class="w-16 h-16 mx-auto text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
        </svg>
        <h2 class="text-2xl font-bold text-error">Oops! Something went wrong</h2>
        <p class="text-base-content/70">{{ error }}</p>
        <button @click="store.getAllProducts()" class="btn btn-primary">
          Try Again
        </button>
      </div>
    </div>

    <!-- Main Content -->
    <main v-else class="animate-fade-in">
      <RouterView v-slot="{ Component }">
        <transition name="page" mode="out-in">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>