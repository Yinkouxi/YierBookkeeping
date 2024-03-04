import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { refreshMe } from '../service/login/refreshMe'

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
    beforeEnter: (_to, _from, next) => {
      localStorage.getItem('skipAdsed') === 'yes' ? next('/start') : next()
    },
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
    // beforeEnter: async (to, _from, next) => {
    //   await refreshMe().catch(() => {
    //     next('/sign_in?return_to=' + to.path)
    //   })
    //   next()
    // },
    children: [
      { path: '', redirect: '/items/list' },
      { path: 'list', component: () => import('@/components/item/ItemList.vue') },
      { path: 'create', component: () => import('@/components/item/ItemCreate.vue') }
    ]
  },
  {
    path: '/tags',
    component: () => import('@/views/Tagpage.vue'),
    // beforeEnter: async (to, _from, next) => {
    //   await refreshMe().catch(() => {
    //     next('/sign_in?return_to=' + to.path)
    //   })
    //   next()
    // },
    children: [
      { path: 'create', component: () => import('@/components/tag/TagCreate.vue') },
      { path: ':id/edit', component: () => import('@/components/tag/TagEdit.vue') }
    ]
  },
  {
    path: '/sign_in',
    name: 'sign_in',
    component: () => import('@/views/SignInPage.vue')
  },
  {
    path: '/statistics',
    // beforeEnter: async (to, _from, next) => {
    //   await refreshMe().catch(() => {
    //     next('/sign_in?return_to=' + to.path)
    //   })
    //   next()
    // },
    component: () => import('@/views/StatisticsPage.vue')
  },
  {
    path:'/export',
    component:()=>import('@/views/ExportPage.vue')
  },
  {
    path:'/remind',
    component:()=>import('@/views/RemindPage.vue')
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

// router.beforeEach(async (to, _form) => {
//   if (to.path === '/' || to.path.startsWith('/welocme') || to.path.startsWith('/sign_in')) {
//     return true
//   } else {
//     const path = await refreshMe().then(
//     )
//     return path
//   }
// })

// router.beforeEach(async (to, _from, next) => {
//   await refreshMe().catch(() => {
//     next('/sign_in?return_to=' + to.path)
//   })
//   next()
// })

router.beforeEach(async (to, _from) => {
  if (
    to.path === '/' ||
    to.path.startsWith('/welcome') ||
    to.path.startsWith('/sign_in') ||
    to.path.startsWith('/start')
  ) {
    return true
  } else {
    // 验证登录是否登录、jwt是否有效
    await refreshMe().catch(() => {
      localStorage.removeItem('jwt')
    })

    if (!localStorage.getItem('jwt')) {
      // 未登录或jwt失效，携带当前路径进入登录页面
      return 'sign_in?return_to=' + to.path
    } else {
      return true
    }
    // await refreshMe().catch((err) => {
    //   console.log(err, 'err')
    //   const newTo = 'sign_in?return_to=' + to.path
    //   console.log('newTo', newTo)
    //   return 'sign_in'
    //   // console.log(newTo)
    //   // return 'sign_in'
    // })
  }
  return true
})
export default router
