import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useApi } from '@/composable/useApi'  

const { get, put } = useApi()

export const useProductStore = defineStore('product', () => {
  const products = ref([])
  const isLoading = ref(false)
  const error = ref(null)
  const productId = ref(null)

  const getAllProducts = async () => {
    if (products.value.length > 0) return
    isLoading.value = true
    error.value = null
    try {
          await new Promise(resolve => setTimeout(resolve, 2000)) // 2 seconds

      products.value = await get('/products')
    } catch (err) {
      error.value = err.message
      console.error('getAllProducts failed:', err)
    } finally {
      isLoading.value = false
    }
  }

  const getProductById = (id) => {
    return products.value.find(product => product.id == id)
  }

  const getRelatedProducts = computed(() => {
    return products.value.filter(product => product.id != productId.value)
  })

  const decreaseStock = async (id) => {
    const product = getProductById(id)
    if (!product || product.available <= 0) return

    product.available--
    if (product.available < 0) {
      product.available = 0
      return
    }

    try {
      await put(`/products/${id}`, product)
    } catch (err) {
      product.available++
      error.value = err.message
      console.error('decreaseStock failed, rolling back:', err)
    }
  }

  return {
    products,
    isLoading,
    error,
    productId,
    getAllProducts,
    getProductById,
    getRelatedProducts,
    decreaseStock
  }
})