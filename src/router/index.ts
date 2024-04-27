import { createRouter, createWebHistory } from 'vue-router'
import AllServicesView from '@/views/AllServices.vue'
import CarWashServicesView from '@/views/CarWashServices.vue'
import ProfileView from '@/views/Profile.vue'
import AdminPanelView from '@/views/AdminPanel.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/car-wash-services'
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
    },
    {
      path: '/admin-panel',
      name: 'AdminPanel',
      component: AdminPanelView
    }
  ]
})

export default router
