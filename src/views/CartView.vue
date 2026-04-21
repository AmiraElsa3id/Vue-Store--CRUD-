<script setup>
import CartTable from '@/components/layout/CartTable.vue';
</script>

<template>
  <main class="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
    <div class="container mx-auto px-4 py-8">
      <!-- Page Header -->
      <div class="text-center mb-8 animate-fade-in">
        <h1 class="text-3xl md:text-4xl font-bold mb-4">
          <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Shopping Cart
          </span>
        </h1>
        <p class="text-base-content/70 max-w-2xl mx-auto">
          Review your items and proceed to secure checkout
        </p>
      </div>
      
      <CartTable />
    </div>
  </main>
</template>