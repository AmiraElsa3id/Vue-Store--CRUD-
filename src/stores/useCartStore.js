import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { useProductStore } from '@/stores/useProductStore'
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const $toast = useToast();

export const useCartStore = defineStore('cart', () => {
  const items = useLocalStorage('cart', [])
  const productStore = useProductStore()

  const totalItems = computed(() =>
    items.value.reduce((sum, item) => sum + item.quantity, 0)
  )

  const totalPrice = computed(() =>
    items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
  )

  const isInCart = (id) =>
    items.value.some(item => item.id == id)

  // Actions
  const addToCart = (product) => {
    const existing = items.value.find(item => item.id == product.id)
    if (existing) {
      existing.quantity++
      $toast.success('Item increased in cart!')
    } else {
      items.value.push({
        id: product.id,
        name: product.name,
        price: product.price,
        discount: product.discount,
        image: product.image,
        available: product.available,
        quantity: 1
      })
      $toast.success('Item added to cart!')
    }
  }

  const removeFromCart = (id) => {
    items.value = items.value.filter(item => item.id != id)
    $toast.success('Item removed from cart!')
  }

  const increaseQuantity = (id) => {
    const item = items.value.find(item => item.id == id)
    if (item) {
      item.quantity++
      $toast.success('Quantity increased!')
    }
  }

  const decreaseQuantity = (id) => {
    const item = items.value.find(item => item.id == id)
    if (!item) return
    if (item.quantity <= 1) {
      removeFromCart(id)
    } else {
      item.quantity--
      $toast.success('Quantity decreased!')
    }
  }

  const purchase = async () => {
    for (const item of items.value) {
      const product = productStore.getProductById(item.id)
      if (!product || product.available < item.quantity) {
        console.error(`Not enough stock for ${item.name}`)
        $toast.error('Please check your stock!')

        return { 
          success: false, 
          message: `Not enough stock for ${item.name}` 
        }
      }
    }

    for (const item of items.value) {
      for (let i = 0; i < item.quantity; i++) {
        await productStore.decreaseStock(item.id)
      }
    }

    clearCart()
    $toast.success('Purchase successful!')
    return { success: true, message: 'Purchase successful!' }
  }

  const clearCart = () => {
    items.value = []
    $toast.success('Cart cleared!')
  }

  return {
    items,
    totalItems,
    totalPrice,
    isInCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    purchase  
  }
})