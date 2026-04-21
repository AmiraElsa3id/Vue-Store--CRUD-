<!-- <script setup>
    
    import ProductCard from '@/components/layout/ProductCard.vue';
  
  const { products } = defineProps({
        products: {
            type: Array,
            required: true
        }
    });
    // const products = ref([
    //     { id: 1, name: 'Running Shoes', price: 90, discount: 10, image: product1, description: 'Product 1 description' ,Available: 50 },
    //     { id: 2, name: 'Casual Boots', price: 150, discount: 0, image: product2, description: 'Product 2 description' ,Available: 0},
    //     { id: 3, name: 'Flip Flops', price: 30, discount: 50, image: product3, description: 'Product 3 description' ,Available: 100},
    //     { id: 4, name: 'Sneakers', price: 400, discount: 0, image: product1, description: 'Product 4 description' ,Available: 25},
    //     { id: 5, name: 'Sandals', price: 500, discount: 10, image: product2, description: 'Product 5 description' ,Available: 0},
    //     { id: 6, name: 'Hiking Boots', price: 600, discount: 50, image: product3, description: 'Product 6 description' ,Available: 75},
    //     { id: 7, name: 'Loafers', price: 700, discount: 0, image: product1, description: 'Product 7 description' ,Available: 15},
    //     { id: 8, name: 'Slippers', price: 800, discount: 0, image: product2, description: 'Product 8 description' ,Available: 0}

    // ]);

   import { onMounted, onUnmounted } from 'vue';
onMounted(() => {
    console.log('ProductList mounted');
});
onUnmounted(() => {
    console.log('ProductList unmounted');
});

</script>

<template>
    <div>
        <h2 class="text-2xl font-bold mb-5 before:content-['|'] before:text-primary before:mr-2 my-5">Special Products</h2>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1  gap-x-5 gap-y-5">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<style scoped>

</style> -->


<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/useProductStore'
import ProductCard from '@/components/layout/ProductCard.vue'
import Loading from '@/components/shared/Loading.vue'

const route = useRoute()
const store = useProductStore()
const { products ,loading} = storeToRefs(store)

const relatedProducts = computed(() => {
  const id = route.params.id
  return id
    ? products.value.filter(p => p.id != id)
    : products.value.slice(1)
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Section Header -->
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold mb-4">
        <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Special Products
        </span>
      </h2>
      <p class="text-base-content/70 max-w-2xl mx-auto">
        Explore our curated selection of premium products with exclusive offers
      </p>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="text-center space-y-4">
        <Loading />
        <p class="text-base-content/70 animate-pulse">Loading amazing products...</p>
      </div>
    </div>

    <!-- Products Grid -->
    <div v-else-if="relatedProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard
        v-for="(product, index) in relatedProducts"
        :key="product.id"
        :product="product"
        class="animate-fade-in"
        :style="{ animationDelay: `${index * 0.1}s` }"
      />
    </div>

    <!-- Empty State -->
    <div v-else class="text-center py-20">
      <svg class="w-24 h-24 mx-auto mb-4 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
      </svg>
      <h3 class="text-xl font-semibold mb-2">No products found</h3>
      <p class="text-base-content/70 mb-6">Check back later for new arrivals</p>
      <button class="btn btn-primary">Continue Shopping</button>
    </div>
  </div>
</template>