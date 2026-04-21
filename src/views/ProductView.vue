<!-- <template>
  <main class="min-h-[calc(100vh-120px)]">
    <div class="container mx-auto my-10">
      <div class="mb-10">
        <ProductDetails :product="ProductDetailsData" />
      </div>
      <ProductList :products="filteredProducts" />
    </div>
  </main>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import ProductDetails from '@/components/layout/ProductDetails.vue';
import ProductList from './ProductList.vue';

const { products } = defineProps({
  products: {
    type: Array,
    required: true
  }
});

const route = useRoute();


const ProductDetailsData = ref(null);
const filteredProducts = ref([]);

function updateProducts() {
  const productId = route.params.id;
  ProductDetailsData.value = productId
    ? products.find(p => p.id == productId)
    : products[0];

  filteredProducts.value = productId
    ? products.filter(p => p.id != productId)
    : products.slice(1);
}


watch(() => route.params.id, updateProducts, { immediate: true });
</script> -->



<!-- 
<template>
  <main class="min-h-[calc(100vh-120px)]">
    <div class="container mx-auto my-10">
      <div class="mb-10">
        <ProductDetails @buy="emit('buy', $event)" :product="ProductDetailsData" />
        <ProductDetails @buy="updateStock" :product="ProductDetailsData" />
      </div>
      <ProductList :products="filteredProducts" />
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductDetails from '@/components/layout/ProductDetails.vue';
import ProductList from './ProductList.vue';
import { onMounted, onUnmounted } from 'vue';
import { useProductStore } from '@/stores/useProductStore';



// const emit = defineEmits(['buy']);
onMounted(() => {
    console.log('ProductView mounted');
});
onUnmounted(() => {
    console.log('ProductView unmounted');
});
const { products   } = defineProps({
  products: {
    type: Array,
    required: true
  }
});

const route = useRoute();

const ProductDetailsData = computed(() => {
  const productId = route.params.id;
  return productId ? products.find(p => p.id == productId) : products[0];
});

const filteredProducts = computed(() => {
  const productId = route.params.id;
  return productId ? products.filter(p => p.id != productId) : products.slice(1);
});
const { decreaseStock } = useProductStore();

function updateStock(id) {
 products.value = decreaseStock(id);
}
</script> -->

<!-- ProductView.vue — this is ALL it should contain -->
<script setup>
import ProductDetails from '@/components/layout/ProductDetails.vue'
import ProductList from '@/views/ProductList.vue'
</script>

<template>
  <main class="min-h-[calc(100vh-120px)]">
    <div class="container mx-auto my-10">
      <div class="mb-10">
        <ProductDetails />
      </div>
      <ProductList />
    </div>
  </main>
</template>