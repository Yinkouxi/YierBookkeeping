import path from 'path'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 使用() => import() 来实现懒加载
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/welcome'
  },
  // welcome
  {
    path: '/welcome',
    component: () => import('@/views/WelcomePage.vue'),
    children: [
      {
        path: '',
        redirect: '/welcome/one'
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
  // startPage
  {
    path: '/start',
    component: () => import('@/views/StartPage.vue')
  },
  {
    path: '/items',
    component: () => import('@/views/ItemPage.vue'),
    children: [
      { path: '', redirect: '/items/list' },
      { path: 'list', component: () => import('@/components/item/ItemList.vue') },
      { path: 'create', component: () => import('@/components/item/ItemCreate.vue') }
    ]
  },
  {
    path:'/tags', 
    component:()=> import('@/views/Tagpage.vue'),
    children:[
      {path:'create',component:()=>import('@/components/tag/TagCreate.vue')},
      {path:':id/edit',component:()=>import('@/components/tag/TagEdit.vue')}
    ]
  },
  {
    path:'/sign_in',
    component:()=> import('@/views/SignInPage.vue')
  },
  {
    path:'/statistics',
    component:()=> import('@/views/StatisticsPage.vue')
  },
  // 路径不匹配时显示notfound页面
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/NotFound.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router
