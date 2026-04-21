<script setup lang="ts">
import CartTable from '@/components/layout/CartTable.vue';

</script>

<template>
    <main class="container mx-auto pt-8 min-h-[80vh]">
       <h2 class="text-2xl font-bold mb-5 before:content-['|'] before:text-primary before:mr-2 my-5">
      Cart
    </h2>
        <CartTable />
    </main>
</template>