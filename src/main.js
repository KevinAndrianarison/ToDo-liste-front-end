import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css' 
import Routes from './Routes'
import { createPinia } from 'pinia'

 

const router = createRouter({
    history: createWebHistory(),
    routes: Routes,
  })

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
