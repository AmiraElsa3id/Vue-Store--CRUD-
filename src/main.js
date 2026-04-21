import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import { createPinia } from 'pinia'
import ToastPlugin from 'vue-toast-notification';


createApp(App).use(createPinia()).use(router).use(ToastPlugin).mount('#app')
