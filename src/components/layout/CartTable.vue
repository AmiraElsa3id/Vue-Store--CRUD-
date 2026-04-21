<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/useCartStore'
import { reactive, computed } from 'vue'

const cartStore = useCartStore()
const { items, totalPrice } = storeToRefs(cartStore)

const form = reactive({
  name: '',
  address: ''
})

const touched = reactive({
  name: false,
  address: false
})

const errors = reactive({
  name: '',
  address: ''
})

const validate = () => {
  // Reset errors before validating
  errors.name = ''
  errors.address = ''

  let valid = true

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    valid = false
  }

  if (!form.address.trim()) {
    errors.address = 'Address is required'
    valid = false
  }

  return valid
}

// Computed properties to determine if a field should show error state
const nameHasError = computed(() => {
  return touched.name && errors.name !== ''
})

const addressHasError = computed(() => {
  return touched.address && errors.address !== ''
})

const handleNameBlur = () => {
  touched.name = true
  if (form.name.trim()) {
    errors.name = ''
  }
}

const handleAddressBlur = () => {
  touched.address = true
  if (form.address.trim()) {
    errors.address = ''
  }
}

const handleSubmit = () => {
  // Mark all fields as touched on submit attempt
  touched.name = true
  touched.address = true
  
  if (!validate()) return
  cartStore.purchase()
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <!-- Empty Cart State -->
    <div v-if="items.length === 0" class="text-center py-20">
      <div class="max-w-md mx-auto">
        <svg class="w-24 h-24 mx-auto mb-6 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>
        <h2 class="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p class="text-base-content/70 mb-8">Looks like you haven't added any products to your cart yet.</p>
        <RouterLink to="/products" class="btn btn-primary btn-lg">
          Start Shopping
        </RouterLink>
      </div>
    </div>

    <!-- Cart with Items -->
    <div v-else class="grid lg:grid-cols-3 gap-8">
      <!-- Cart Items Table -->
      <div class="lg:col-span-2">
        <div class="bg-base-100 rounded-xl shadow-enhanced overflow-hidden">
          <div class="p-6 border-b border-base-300">
            <h2 class="text-2xl font-bold">Shopping Cart ({{ items.length }} items)</h2>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full">
              <thead class="bg-base-200 border-b border-base-300">
                <tr>
                  <th class="px-6 py-4 text-left text-sm font-semibold">Product</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold">Quantity</th>
                  <th class="px-6 py-4 text-right text-sm font-semibold">Price</th>
                  <th class="px-6 py-4 text-center text-sm font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in items"
                  :key="item.id"
                  class="border-b border-base-200 hover:bg-base-50 transition-colors"
                >
                  <td class="px-6 py-4">
                    <div class="flex items-center space-x-4">
                      <img 
                        :src="item.image" 
                        :alt="item.name" 
                        class="w-20 h-20 object-cover rounded-lg shadow-sm"
                      />
                      <div>
                        <h3 class="font-semibold text-base-content">{{ item.name }}</h3>
                        <p class="text-sm text-base-content/70">${{ item.price.toFixed(2) }} each</p>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4">
                    <div class="flex items-center justify-center space-x-2">
                      <button
                        @click="cartStore.decreaseQuantity(item.id)"
                        class="w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        </svg>
                      </button>
                      <span class="w-12 text-center font-semibold">{{ item.quantity }}</span>
                      <button
                        @click="cartStore.increaseQuantity(item.id)"
                        class="w-8 h-8 rounded-full bg-base-200 hover:bg-base-300 flex items-center justify-center transition-colors"
                      >
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                      </button>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <span class="font-bold text-lg text-primary">
                      ${{ (item.price * item.quantity).toFixed(2) }}
                    </span>
                  </td>
                  <td class="px-6 py-4 text-center">
                    <button 
                      @click="cartStore.removeFromCart(item.id)" 
                      class="text-error hover:bg-error/10 p-2 rounded-lg transition-colors"
                    >
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Checkout Form -->
      <div class="lg:col-span-1">
        <div class="bg-base-100 rounded-xl shadow-enhanced p-6 sticky top-24">
          <h3 class="text-xl font-bold mb-6">Order Summary</h3>
          
          <!-- Price Summary -->
          <div class="space-y-3 mb-6">
            <div class="flex justify-between text-base-content/70">
              <span>Subtotal</span>
              <span>${{ totalPrice.toFixed(2) }}</span>
            </div>
            <div class="flex justify-between text-base-content/70">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div class="flex justify-between text-base-content/70">
              <span>Tax</span>
              <span>${{ (totalPrice * 0.08).toFixed(2) }}</span>
            </div>
            <div class="border-t border-base-300 pt-3">
              <div class="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span class="text-primary">${{ (totalPrice * 1.08).toFixed(2) }}</span>
              </div>
            </div>
          </div>

          <!-- Checkout Form -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <div>
              <label class="block text-sm font-semibold mb-2">Full Name</label>
              <input
                v-model.trim="form.name"
                type="text"
                class="input input-bordered w-full"
                :class="{ 'input-error': nameHasError }"
                placeholder="Enter your full name"
                @blur="handleNameBlur"
              />
              <p v-if="nameHasError" class="text-error text-sm mt-1">{{ errors.name }}</p>
            </div>

            <div>
              <label class="block text-sm font-semibold mb-2">Shipping Address</label>
              <textarea
                v-model.trim="form.address"
                class="textarea textarea-bordered w-full"
                :class="{ 'textarea-error': addressHasError }"
                placeholder="Enter your shipping address"
                rows="3"
                @blur="handleAddressBlur"
              ></textarea>
              <p v-if="addressHasError" class="text-error text-sm mt-1">{{ errors.address }}</p>
            </div>

            <button 
              type="submit" 
              class="btn btn-primary w-full btn-lg"
              :disabled="!validate() || items.length === 0"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
              Proceed to Checkout
            </button>
          </form>

          <!-- Security Badge -->
          <div class="mt-6 text-center">
            <div class="flex items-center justify-center space-x-2 text-sm text-base-content/60">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <span>Secure Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>