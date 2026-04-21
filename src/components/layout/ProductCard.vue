<!-- <script setup>
    import { computed } from 'vue';
    const props = defineProps({
        product: {
            type: Object,
            required: true
        }
    });
    


    const computedPrice = computed(() => {
        return props.product.price * (1 - props.product.discount / 100);
    });

    import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
    console.log(`ProductCard ${props.product.id} mounted`);
});
onUnmounted(() => {
    console.log(`ProductCard ${props.product.id} unmounted`);
});


</script>

<template>
    <RouterLink :to="`/products/${product.id}`" class="card  shadow-sm bg-neutral relative">
  <figure>
    <img
      :src="product.image"
      alt="Shoes" />
  </figure>
  <div class="card-body relative">
<span v-if="product.discount > 0" class="absolute  top-0 right-1  text-primary-content px-2 py-1 rounded-b-lg bg-red-400 text-sm">
      {{ product.discount }}% OFF
    </span>
    <h2 class="card-title">{{ product.name }}</h2>
    <p>{{ product.description }}</p>
    <p>Price: {{computedPrice }} <span  v-if="product.discount > 0" class="line-through text-gray-500">{{ product.price }}</span></p>
    <div class="card-actions justify-end">
      <button :disabled="product.Available == 0" class="btn btn-primary">View Details</button>
    </div>
  </div>
 
  <div v-else class="absolute bottom-0 left-0 right-0 bg-red-500 text-white text-center py-1">
    Not Available
  </div>
   <div v-if="product.Available == 0" class="absolute bottom-0 left-0 rounded-lg right-0 top-0 bg-gray-500/50 text-white text-center py-1 flex justify-center items-center ">
   <p class ="font-bold">
    Not Available</p>
  </div>

</RouterLink>
</template>

<style scoped>

</style> -->



<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useCartStore } from '@/stores/useCartStore'
const cartStore = useCartStore()

const props = defineProps({
  product: { type: Object, required: true }
})

const computedPrice = computed(() => {
  if (!props.product) return 0
  const discountedPrice = props.product.price * (1 - props.product.discount / 100)
  return discountedPrice.toFixed(2)
})
</script>

<template>
  <template v-if="product">
    <div class="group card bg-base-100 shadow-enhanced hover:shadow-glow rounded-xl overflow-hidden transition-all duration-300 animate-fade-in">
      <!-- Product Image with Overlay -->
      <figure class="relative h-48 overflow-hidden bg-gradient-to-br from-base-200 to-base-300">
        <img 
          :src="product.image" 
          :alt="product.name" 
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        <!-- Discount Badge -->
        <span v-if="product.discount > 0"
          class="absolute top-3 right-3 bg-gradient-to-r from-error to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse">
          {{ product.discount }}% OFF
        </span>

        <!-- Stock Status Overlay -->
        <div v-if="product.available == 0"
          class="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div class="text-center">
            <svg class="w-12 h-12 mx-auto mb-2 text-error" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
            <p class="text-white font-bold">Out of Stock</p>
          </div>
        </div>

        <!-- Quick Actions Overlay -->
        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <button 
            :disabled="product.available == 0"
            @click.stop="cartStore.addToCart(product)"
            class="btn btn-primary btn-sm rounded-full px-4 shadow-lg hover:scale-105 transition-transform"
          >
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            Quick Add
          </button>
        </div>
      </figure>

      <!-- Card Body -->
      <div class="card-body p-4 space-y-3">
        <!-- Product Title -->
        <h2 class="card-title text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
          {{ product.name }}
        </h2>

        <!-- Product Description -->
        <p class="text-sm text-base-content/70 line-clamp-2">
          {{ product.description }}
        </p>

        <!-- Tags -->
        <div v-if="product.tags && product.tags.length" class="flex flex-wrap gap-1">
          <span 
            v-for="tag in product.tags.slice(0, 3)" 
            :key="tag"
            class="badge badge-outline badge-sm text-xs"
          >
            {{ tag }}
          </span>
          <span v-if="product.tags.length > 3" class="badge badge-outline badge-sm text-xs">
            +{{ product.tags.length - 3 }}
          </span>
        </div>

        <!-- Price Section -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="text-2xl font-bold text-primary">${{ computedPrice }}</span>
            <span v-if="product.discount > 0" class="text-sm text-base-content/50 line-through">
              ${{ product.price.toFixed(2) }}
            </span>
          </div>
          
          <!-- Stock Indicator -->
          <div v-if="product.available > 0" class="flex items-center gap-1 text-success text-sm">
            <div class="w-2 h-2 bg-success rounded-full"></div>
            <span>{{ product.available }} left</span>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="card-actions gap-2 pt-2">
          <RouterLink 
            :to="`/products/${product.id}`" 
            class="btn btn-outline btn-primary flex-1 hover:btn-primary transition-all duration-300"
          >
            View Details
          </RouterLink>
          <button 
            :disabled="product.available == 0"
            @click.stop="cartStore.addToCart(product)"
            class="btn btn-primary flex-1 hover:btn-primary-focus disabled:btn-disabled transition-all duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </template>
</template>