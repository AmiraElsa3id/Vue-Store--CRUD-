<template>
  <main class="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-100">
    <!-- Hero Section -->
    <section class="relative h-[70vh] overflow-hidden">
      <div class="absolute inset-0">
        <img src="/img/carousel-1.jpg" alt="Vue Store Hero" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
      </div>
      <div class="container mx-auto px-4 h-full flex items-center relative">
        <div class="max-w-4xl animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-bold mb-6 text-white">
            About Vue Store
          </h1>
          <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl">
            Your trusted destination for premium footwear since 2020
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-white mb-2">50K+</div>
              <div class="text-white/80 font-medium">Happy Customers</div>
            </div>
            <div class="text-center border-l border-r border-white/20">
              <div class="text-4xl md:text-5xl font-bold text-white mb-2">200+</div>
              <div class="text-white/80 font-medium">Premium Styles</div>
            </div>
            <div class="text-center">
              <div class="text-4xl md:text-5xl font-bold text-white mb-2">4.9</div>
              <div class="text-white/80 font-medium">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-slide-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div class="space-y-4 text-base-content/80">
              <p>
                Founded in 2020, Vue Store began with a simple mission: to provide exceptional footwear that combines style, comfort, and quality. What started as a small boutique has grown into a trusted destination for shoe enthusiasts worldwide.
              </p>
              <p>
                Our journey began when our founders noticed a gap in the market for premium footwear that didn't compromise on either style or comfort. We believe that the right pair of shoes can transform not just your outfit, but your entire day.
              </p>
              <p>
                Today, we're proud to serve over 50,000 customers across the globe, offering carefully curated collections from running shoes to formal loafers, each selected with the same attention to detail and commitment to quality.
              </p>
            </div>
          </div>
          <div class="relative animate-fade-in">
            <img src="/img/loafers.jpg" alt="Vue Store Story" class="rounded-2xl shadow-enhanced w-full" />
            <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-glow">
              <div class="text-3xl font-bold">2020</div>
              <div class="text-sm">Year Founded</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          <p class="text-base-content/70 max-w-2xl mx-auto">
            The principles that guide everything we do, from product selection to customer service
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Quality First</h3>
            <p class="text-base-content/70">Every product is carefully selected and tested to meet our high standards</p>
          </div>
          
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Customer Love</h3>
            <p class="text-base-content/70">Your satisfaction is our top priority, every single time</p>
          </div>
          
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Innovation</h3>
            <p class="text-base-content/70">Always exploring new trends and technologies in footwear</p>
          </div>
          
          <div class="text-center group">
            <div class="w-20 h-20 mx-auto mb-6 gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3">Sustainability</h3>
            <p class="text-base-content/70">Committed to environmentally responsible practices</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="order-2 lg:order-1">
            <img src="/img/running-shoes.jpg" alt="Why Choose Us" class="rounded-2xl shadow-enhanced w-full" />
          </div>
          <div class="order-1 lg:order-2 animate-slide-in">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Why Choose Vue Store?</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Curated Selection</h3>
                  <p class="text-base-content/70">Hand-picked footwear from the world's best brands, ensuring quality and style in every pair.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p class="text-base-content/70">Free shipping on orders over $50 and express delivery options available.</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold mb-2">Secure Shopping</h3>
                  <p class="text-base-content/70">SSL encrypted checkout and multiple payment options for your peace of mind.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-primary to-secondary">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Find Your Perfect Pair?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Join thousands of satisfied customers who trust Vue Store for their footwear needs
        </p>
        <RouterLink to="/products" class="btn btn-lg bg-white text-primary hover:bg-gray-100 transition-colors">
          Shop Our Collection
        </RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
// No additional script needed for now
</script>