import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default.vue'),
      children: [{ path: '', name: 'home', component: () => import('@/pages/applications.vue') }],
    },
  ],
})

export default router
