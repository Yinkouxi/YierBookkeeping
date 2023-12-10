import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 使用() => import() 来实现懒加载
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },
  // 添加其他路由
  {
    path: '/home',
    component: () => import('@/views/Home.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
