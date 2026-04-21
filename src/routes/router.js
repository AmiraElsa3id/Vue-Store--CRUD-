import { createRouter, createWebHistory } from 'vue-router'
import ProductView from '@/views/ProductView.vue'
import Home from '@/views/Home.vue'
import About from '@/views/AboutView.vue'
import CartView from '@/views/CartView.vue'
import ProductList from '@/views/ProductList.vue'



const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products/:id',
      name: 'ProductView',
      component: ProductView,
      
    },
    {
      path: '/products',
      name: 'ProductList',
      component: ProductList,
      
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartView
    }   
  ]
})

export default router