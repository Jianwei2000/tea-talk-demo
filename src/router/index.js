import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory('/tea-talk-demo/'),
  routes: [
    //前台
    {
      path: '/',
      component: () => import('../views/FrontView.vue'),
      children: [
        {
          path: '',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: 'products',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'contact',
          component: () => import('../views/ContactUs.vue')
        },
        {
          path: 'qa',
          component: () => import('../views/QAView.vue')
        },
        {
          path: 'login',
          component: () => import('../views/LoginView.vue')
        }
      ]
    },
    //後台
    {
      path: '/admin',
      component: () => import('../views/backend/DashboardView.vue'),
      children: [
        {
          path: 'products',
          component: () => import('../views/backend/AdminProducts.vue')
        },
        {
          path: 'coupon',
          component: () => import('../views/backend/AdminCoupon.vue')
        },
        {
          path: 'order',
          component: () => import('../views/backend/AdminOrder.vue')
        }
      ]
    }
  ],
  // 切換頁面時滾至頂部
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router
