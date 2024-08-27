import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login.vue'
import Preview from '@/views/Preview.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    }
  ]
})

export default router
