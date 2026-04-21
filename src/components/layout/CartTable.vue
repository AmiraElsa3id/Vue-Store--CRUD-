<script setup>
import { storeToRefs } from 'pinia'
import { useCartStore } from '@/stores/useCartStore'
import { reactive } from 'vue'

const cartStore = useCartStore()
const { items, totalPrice } = storeToRefs(cartStore)

const form = reactive({
  name: '',
  address: ''
})

const errors = reactive({
  name: '',
  address: ''
})

const validate = () => {
  //  Reset errors before validating
  errors.name = ''
  errors.address = ''

  let valid = true

  //  Use form.name not name.value
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

const handleSubmit = () => {
  if (!validate()) return
  cartStore.purchase()
}
</script>

<template>
  <div class="container mx-auto relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base">

    <div v-if="items.length === 0" class="text-center py-10 text-body">
      Your cart is empty
    </div>

    <table v-else class="w-full text-sm text-left rtl:text-right text-body">
      <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
        <tr>
          <th class="px-16 py-3"><span class="sr-only">Image</span></th>
          <th class="px-6 py-3 font-medium">Product</th>
          <th class="px-6 py-3 font-medium">Qty</th>
          <th class="px-6 py-3 font-medium">Price</th>
          <th class="px-6 py-3 font-medium">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in items"
          :key="item.id"
          class="bg-neutral-primary-soft border-b border-gray-200 hover:bg-neutral-secondary-medium"
        >
          <td class="p-4">
            <img :src="item.image" :alt="item.name" class="w-16 md:w-24 max-w-full max-h-full" />
          </td>
          <td class="px-6 py-4 font-semibold text-heading">{{ item.name }}</td>
          <td class="px-6 py-4">
            <div class="relative flex items-center gap-2">
              <button
                @click="cartStore.decreaseQuantity(item.id)"
                class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium rounded-full h-6 w-6"
              >
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14"/>
                </svg>
              </button>
              <span class="text-heading text-sm font-normal w-6 text-center">{{ item.quantity }}</span>
              <button
                @click="cartStore.increaseQuantity(item.id)"
                class="flex items-center justify-center text-body bg-neutral-secondary-medium border border-default-medium hover:bg-neutral-tertiary-medium rounded-full h-6 w-6"
              >
                <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14m-7 7V5"/>
                </svg>
              </button>
            </div>
          </td>
          <td class="px-6 py-4 font-semibold text-heading">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </td>
          <td class="px-6 py-4">
            <button @click="cartStore.removeFromCart(item.id)" class="font-medium text-red-500 hover:underline">
              Remove
            </button>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr class="font-semibold text-heading">
          <td colspan="3" class="px-6 py-4 text-right">Total</td>
          <td class="px-6 py-4">${{ totalPrice.toFixed(2) }}</td>
          <td></td>
        </tr>
      </tfoot>
    </table>

    <form @submit.prevent="handleSubmit">
      <div class="bg-base-100 w-full shrink-0 shadow-2xl">
        <div class="card-body">
          <fieldset class="fieldset w-full">

            <label class="label capitalize font-semibold">Name</label>
            <input
              v-model.trim="form.name"
              type="text"
              class="input w-full"
              :class="{ 'input-error': errors.name }"
              placeholder="Name"
            />
            <p v-if="errors.name" class="text-red-500 text-sm">{{ errors.name }}</p>

            <label class="label capitalize font-semibold">Address</label>
            <input
              v-model.trim="form.address"
              type="text"
              class="input w-full"
              :class="{ 'input-error': errors.address }"
              placeholder="Address"
            />
            <p v-if="errors.address" class="text-red-500 text-sm">{{ errors.address }}</p>

            <button :disabled="!validate()" type="submit" class="btn btn-primary mt-4">
              Checkout
            </button>

          </fieldset>
        </div>
      </div>
    </form>

  </div>
</template>