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
  return product.value.price * (1 - product.value.discount / 100)
})
</script>

<template>
  <div v-if="product" class="card md:card-side bg-neutral shadow-sm">
    <figure class=" w-full md:w-1/2">
      <img :src="product.image" :alt="product.name" />
    </figure>
    <div class="card-body relative">
      <span v-if="product.discount" class="badge bg-red-400 absolute top-0 right-5">
        {{ product.discount }}% OFF
      </span>
      <h2 class="card-title">{{ product.name }}</h2>
      <p>{{ product.description }}</p>

      <!-- Tags -->
      <p>
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="badge badge-primary mr-1"
        >
          {{ tag }}
        </span>
      </p>

      <div class="flex items-center gap-2">
        <span class="text-2xl font-bold">{{ computedPrice }}$</span>
        <span v-if="product.discount" class="text-lg text-gray-500 line-through">
          {{ product.price }}$
        </span>
      </div>

      <div :class="product.available > 0
        ? 'badge text-green-500 bg-green-100'
        : 'badge text-gray-500 bg-gray-100'">
        {{ product.available > 0 ? product.available + ' Available' : 'Out of Stock' }}
      </div>

      <div class="card-actions justify-end gap-2">
        <!-- Add to Cart -->
        <button
          :disabled="product.available <= 0"
          :class="product.available > 0 ? 'btn btn-secondary' : 'btn btn-disabled'"
          @click="cartStore.addToCart(product)"
        >
          Add to Cart 
        </button>

        <!-- Buy Now -->
        <button
          :disabled="product.available <= 0"
          :class="product.available > 0 ? 'btn btn-primary' : 'btn btn-disabled'"
          @click="store.decreaseStock(product.id)"
        >
          Buy Now
        </button>
      </div>
    </div>
  </div>
</template>