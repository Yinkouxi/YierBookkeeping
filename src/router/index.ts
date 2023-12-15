import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 使用() => import() 来实现懒加载
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: () => import('@/views/WelcomePage.vue'),
    children: [
      {
        path:'',
        redirect:'/welcome/one'
      },
      { 
        path: 'one',
        component: () => import('@/components/welcome/WelcomeOne.vue')
      },
      {
        path: 'two',
        component: () => import('@/components/welcome/WelcomeTwo.vue')
      },
      {
        path: 'three',
        component: () => import('@/components/welcome/WelcomeThree.vue')
      },
      {
        path: 'four',
        component: () => import('@/components/welcome/WelcomeFour.vue')
      }
    ]
  },
  // 路径不匹配时显示notfound页面
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
