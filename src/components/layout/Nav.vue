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
  <div class="navbar bg-base-100 shadow-enhanced glass sticky top-0 z-50 animate-slide-in">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex items-center space-x-4">
          <RouterLink to="/" class="flex items-center space-x-2 group">
            <div class="w-10 h-10 gradient-primary rounded-lg flex items-center justify-center animate-pulse-hover">
              <span class="text-white font-bold text-xl">V</span>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              Vue Store
            </span>
          </RouterLink>
        </div>

        <!-- Navigation Links -->
        <div class="hidden md:flex items-center space-x-1">
          <RouterLink 
            to="/" 
            class="btn btn-ghost hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300 group"
          >
            <span class="relative">
              Home
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>
          
          <RouterLink 
            to="/products" 
            class="btn btn-ghost hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300 group"
          >
            <span class="relative">
              Products
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>
          
          <RouterLink 
            to="/about" 
            class="btn btn-ghost hover:bg-primary/10 hover:text-primary rounded-lg transition-all duration-300 group"
          >
            <span class="relative">
              About
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </span>
          </RouterLink>
        </div>

        <!-- Right Section -->
        <div class="flex items-center space-x-4">
          <!-- Stock Badge -->
          <div class="hidden lg:flex items-center space-x-2 px-3 py-1 bg-success/10 rounded-full">
            <div class="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span class="text-sm font-medium text-success">{{ totalAvailable }} in stock</span>
          </div>

          <!-- Cart -->
          <div class="relative">
            <RouterLink 
              to="/cart" 
              class="btn btn-primary hover:btn-primary-focus rounded-full px-4 shadow-enhanced hover:shadow-glow transition-all duration-300 group"
            >
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              <span class="ml-2">Cart</span>
            </RouterLink>
            
            <!-- Cart Badge -->
            <span 
              v-if="items.length > 0" 
              class="absolute -top-2 -right-2 bg-error text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse shadow-glow"
            >
              {{ items.length }}
            </span>
          </div>

          <!-- Mobile Menu Toggle -->
          <div class="md:hidden">
            <button class="btn btn-ghost btn-circle">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>