import { createRouter, createWebHistory } from 'vue-router'
import AllServicesView from '@/views/AllServices.vue'
import CarWashServicesView from '@/views/CarWashServices.vue'
import ProfileView from '@/views/Profile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/all-services'
    },
    {
      path: '/all-services',
      name: 'AllServices',
      component: AllServicesView
    },
    {
      path: '/car-wash-services',
      name: 'CarWashServices',
      component: CarWashServicesView
    },
    {
      path: '/profile',
      name: 'Profile',
      component: ProfileView
    }
  ]
})

export default router
