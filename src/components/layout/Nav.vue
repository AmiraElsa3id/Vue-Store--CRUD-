<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useProductStore } from '@/stores/useProductStore'
import { useCartStore } from '@/stores/useCartStore'

const { products } = storeToRefs(useProductStore())
const { items } = storeToRefs(useCartStore())

const totalAvailable = computed(() =>
  products.value.reduce((sum, p) => sum + (p.available ?? 0), 0)
)
</script>

<template>
  <div class="navbar bg-neutral shadow-sm">
    <div class="container mx-auto flex items-center justify-between">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">Vue Lap1</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/about">About</RouterLink></li>
          <li class="relative"><RouterLink to="/cart">Cart</RouterLink>
            <span v-if="items.length > 0" class="badge badge-primary absolute -top-2 -right-2">{{ items.length }}</span>
          </li>
          <li><RouterLink to="/products">Products</RouterLink></li>
        </ul>
        <div class="badge badge-primary">{{ totalAvailable }} </div>

      </div>
    </div>
  </div>
</template>