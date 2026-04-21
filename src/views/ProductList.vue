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

  <div>
    <h2 class="text-2xl font-bold mb-5 before:content-['|'] before:text-primary before:mr-2 my-5">
      Special Products
    </h2>
    <div v-if="loading">
      <Loading/>
    </div>
    <div v-else class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-x-5 gap-y-5">
      <ProductCard
        v-for="product in relatedProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>