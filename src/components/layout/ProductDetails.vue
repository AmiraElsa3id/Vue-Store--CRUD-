<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/useProductStore'
import { useCartStore } from '@/stores/useCartStore'

const route = useRoute()
const store = useProductStore()
const { products } = storeToRefs(store)
const cartStore = useCartStore()

const product = computed(() => {
  const id = route.params.id
  return id
    ? products.value.find(p => p.id == id)
    : products.value[0]
})

const computedPrice = computed(() => {
  if (!product.value) return 0
  const discountedPrice = product.value.price * (1 - product.value.discount / 100)
  return discountedPrice.toFixed(2)
})
</script>

<template>
  <div v-if="product" class="container mx-auto px-4 py-8 animate-fade-in">
    <div class="grid lg:grid-cols-2 gap-8 items-start">
      <!-- Product Image Section -->
      <div class="space-y-4">
        <div class="relative overflow-hidden rounded-2xl shadow-enhanced bg-gradient-to-br from-base-200 to-base-300">
          <img 
            :src="product.image" 
            :alt="product.name" 
            class="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
          />
          
          <!-- Discount Badge -->
          <span v-if="product.discount" 
            class="absolute top-4 right-4 bg-gradient-to-r from-error to-red-600 text-white px-4 py-2 rounded-full text-lg font-bold shadow-lg animate-pulse">
            {{ product.discount }}% OFF
          </span>
        </div>
        
        <!-- Image Thumbnails -->
        <div class="flex gap-2 overflow-x-auto pb-2">
          <div class="flex-shrink-0 w-20 h-20 rounded-lg bg-base-200 border-2 border-primary cursor-pointer">
            <img :src="product.image" :alt="product.name" class="w-full h-full object-cover rounded-lg" />
          </div>
        </div>
      </div>

      <!-- Product Information Section -->
      <div class="space-y-6">
        <!-- Product Title and Rating -->
        <div class="space-y-2">
          <h1 class="text-3xl lg:text-4xl font-bold text-base-content">{{ product.name }}</h1>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-1">
              <!-- Star Rating -->
              <div class="flex">
                <svg v-for="i in 5" :key="i" class="w-5 h-5" :class="i <= 4 ? 'text-warning' : 'text-base-300'" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
              <span class="text-sm text-base-content/70">(4.0) • 24 reviews</span>
            </div>
          </div>
        </div>

        <!-- Price Section -->
        <div class="space-y-2">
          <div class="flex items-baseline gap-3">
            <span class="text-4xl font-bold text-primary">${{ computedPrice }}</span>
            <span v-if="product.discount" class="text-2xl text-base-content/50 line-through">
              ${{ product.price.toFixed(2) }}
            </span>
          </div>
          <div v-if="product.discount" class="text-success font-semibold">
            You save ${{ (product.price - computedPrice).toFixed(2) }}
          </div>
        </div>

        <!-- Stock Status -->
        <div class="flex items-center gap-3">
          <div :class="product.available > 0 
            ? 'badge badge-success badge-lg' 
            : 'badge badge-error badge-lg'">
            <div v-if="product.available > 0" class="flex items-center gap-2">
              <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              {{ product.available }} in stock
            </div>
            <div v-else class="flex items-center gap-2">
              <div class="w-2 h-2 bg-white rounded-full"></div>
              Out of Stock
            </div>
          </div>
        </div>

        <!-- Product Description -->
        <div class="prose prose-sm max-w-none">
          <h3 class="text-lg font-semibold mb-2">Description</h3>
          <p class="text-base-content/80 leading-relaxed">{{ product.description }}</p>
        </div>

        <!-- Tags -->
        <div v-if="product.tags && product.tags.length" class="space-y-2">
          <h3 class="text-lg font-semibold">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in product.tags" 
              :key="tag"
              class="badge badge-outline badge-lg hover:bg-primary hover:text-primary-content transition-colors cursor-pointer"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="space-y-4 pt-4">
          <div class="grid grid-cols-2 gap-4">
            <button
              :disabled="product.available <= 0"
              class="btn btn-outline btn-primary btn-lg hover:btn-primary transition-all duration-300"
              @click="cartStore.addToCart(product)"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Add to Cart
            </button>

            <button
              :disabled="product.available <= 0"
              class="btn btn-primary btn-lg hover:btn-primary-focus transition-all duration-300"
              @click="store.decreaseStock(product.id)"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
              Buy Now
            </button>
          </div>

          <!-- Additional Info -->
          <div class="grid grid-cols-3 gap-4 pt-4 border-t border-base-300">
            <div class="text-center">
              <svg class="w-8 h-8 mx-auto mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-xs font-medium">Quality Guaranteed</p>
            </div>
            <div class="text-center">
              <svg class="w-8 h-8 mx-auto mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p class="text-xs font-medium">Fast Delivery</p>
            </div>
            <div class="text-center">
              <svg class="w-8 h-8 mx-auto mb-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
              <p class="text-xs font-medium">Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>