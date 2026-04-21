<template>
    <div class="container mx-auto mt-5 min-h-[80vh]">
        <!-- carousel -->
         <div class="carousel w-full">
  <div id="item1" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
      class="w-full" />
  </div>
  <div id="item2" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      class="w-full" />
  </div>
  <div id="item3" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      class="w-full" />
  </div>
  <div id="item4" class="carousel-item w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      class="w-full" />
  </div>
</div>
<div class="flex w-full justify-center gap-2 py-2">
  <a href="#item1" class="btn btn-xs">1</a>
  <a href="#item2" class="btn btn-xs">2</a>
  <a href="#item3" class="btn btn-xs">3</a>
  <a href="#item4" class="btn btn-xs">4</a>
</div>
<ProductList :products="products" />
    </div>
</template>
<script setup>
import ProductList from './ProductList.vue';
import { onMounted, onUnmounted } from 'vue';

defineProps({
    products: {
        type: Array,
        required: true
    }
});




onMounted(() => {
    console.log('Home mounted');
});
onUnmounted(() => {
    console.log('Home unmounted');
});


</script>
