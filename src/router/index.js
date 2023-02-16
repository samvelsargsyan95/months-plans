import Vue from 'vue'
import VueRouter from 'vue-router'
import DashboardView from '@/views/DashboardView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: DashboardView,
    children: [
      {
        path: 'home',
        component: DashboardView,
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
