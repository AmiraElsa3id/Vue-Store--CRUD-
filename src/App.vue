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
  <Nav />

  <div v-if="isLoading" class="flex justify-center items-center min-h-screen">
    <Loading />
  </div>

  <div v-else-if="error" class="flex justify-center items-center min-h-screen">
    <p class="text-red-500 text-lg">Something went wrong: {{ error }}</p>
  </div>

  <RouterView v-else />

  <Footer />
</template>