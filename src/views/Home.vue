<template>
  <div class="min-h-screen">
    <!-- Hero Section with Carousel -->
    <section class="relative h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
      <div class="carousel w-full h-full">
        <div id="item1" class="carousel-item w-full h-full relative">
          <img
            src="/img/carousel-1.jpg"
            class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div class="container mx-auto px-4 text-white">
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">Premium Footwear Collection</h2>
              <p class="text-lg md:text-xl mb-6 animate-slide-in" style="animation-delay: 0.2s">Step into comfort and style with our curated shoe selection</p>
              <RouterLink to="/products" class="btn btn-primary btn-lg animate-slide-in hover:scale-105 transition-transform" style="animation-delay: 0.4s">
                Shop Now
              </RouterLink>
            </div>
          </div>
        </div>
        
        <div id="item2" class="carousel-item w-full h-full relative">
          <img
            src="/img/carousel-2.jpg"
            class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div class="container mx-auto px-4 text-white">
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">Athletic Performance</h2>
              <p class="text-lg md:text-xl mb-6 animate-slide-in" style="animation-delay: 0.2s">Engineered for excellence, designed for champions</p>
              <RouterLink to="/products" class="btn btn-primary btn-lg animate-slide-in hover:scale-105 transition-transform" style="animation-delay: 0.4s">
                Explore Athletic
              </RouterLink>
            </div>
          </div>
        </div>
        
        <div id="item3" class="carousel-item w-full h-full relative">
          <img
            src="/img/carousel-3.jpg"
            class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div class="container mx-auto px-4 text-white">
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">Seasonal Sale</h2>
              <p class="text-lg md:text-xl mb-6 animate-slide-in" style="animation-delay: 0.2s">Up to 50% off on selected styles - Limited time offer</p>
              <RouterLink to="/products" class="btn btn-primary btn-lg animate-slide-in hover:scale-105 transition-transform" style="animation-delay: 0.4s">
                View Deals
              </RouterLink>
            </div>
          </div>
        </div>
        
        <div id="item4" class="carousel-item w-full h-full relative">
          <img
            src="/img/carousel-4.jpg"
            class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex items-center">
            <div class="container mx-auto px-4 text-white">
              <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">New Arrivals</h2>
              <p class="text-lg md:text-xl mb-6 animate-slide-in" style="animation-delay: 0.2s">Fresh styles just dropped - Be first to shop the latest trends</p>
              <RouterLink to="/products" class="btn btn-primary btn-lg animate-slide-in hover:scale-105 transition-transform" style="animation-delay: 0.4s">
                Shop New
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Carousel Navigation -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        <a href="#item1" class="btn btn-circle btn-sm glass hover:glass-effect">1</a>
        <a href="#item2" class="btn btn-circle btn-sm glass hover:glass-effect">2</a>
        <a href="#item3" class="btn btn-circle btn-sm glass hover:glass-effect">3</a>
        <a href="#item4" class="btn btn-circle btn-sm glass hover:glass-effect">4</a>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center group">
            <div class="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Fast Delivery</h3>
            <p class="text-base-content/70">Get your orders delivered within 2-3 business days</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 mx-auto mb-4 gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Quality Guaranteed</h3>
            <p class="text-base-content/70">All products are tested for quality and durability</p>
          </div>
          
          <div class="text-center group">
            <div class="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-2">Secure Payment</h3>
            <p class="text-base-content/70">Your payment information is always safe and secure</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="py-16 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Featured Products
            </span>
          </h2>
          <p class="text-base-content/70 max-w-2xl mx-auto">
            Discover our handpicked selection of premium products designed to enhance your lifestyle
          </p>
        </div>
        <ProductList :products="products" />
      </div>
    </section>
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
