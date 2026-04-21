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
  return props.product.price * (1 - props.product.discount / 100)
})
</script>

<template>
  <template v-if="product">
    <div class="card shadow-sm bg-neutral relative">
      <figure >
        <img :src="product.image" :alt="product.name" />
      </figure>
      <div class="card-body relative">
        <span v-if="product.discount > 0"
          class="absolute top-0 right-1 text-primary-content px-2 py-1 rounded-b-lg bg-red-400 text-sm">
          {{ product.discount }}% OFF
        </span>
        <h2 class="card-title">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>
          Price: {{ computedPrice }}$
          <span v-if="product.discount > 0" class="line-through text-gray-500">
            {{ product.price }}$
          </span>
        </p>
        <div class="card-actions flex justify-between">
          <RouterLink :to="`/products/${product.id}`" class="btn btn-primary">
            View Details
          </RouterLink>
          <button :disabled="product.available == 0" class="btn btn-primary" @click.stop="cartStore.addToCart(product)">
            Add to Cart
          </button>
        </div>
      </div>

      <div v-if="product.available == 0"
        class="absolute inset-0 rounded-lg bg-gray-500/50 text-white flex justify-center items-center">
        <p class="font-bold">Not Available</p>
      </div>
    </div>
  </template>
</template>