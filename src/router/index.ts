import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    component: () => import('@/views/login/Login.vue')
  },
  {
    path: '/index',
    component: () => import('@/views/index/Index.vue')
  }
]

const router = createRouter({
  routes: routes,
  history: createWebHashHistory()
})

export default router
