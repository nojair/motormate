<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import { useAuthStore } from '@/stores/auth'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const showHamburguer = ref(false)
const authStore = useAuthStore()
const userStore = useUserStore()

function handleToggleHamburguer () {
  showHamburguer.value = !showHamburguer.value
}

function isTheSectionName(sectionName: string) {
  return Object.is(router.currentRoute.value.name, sectionName) 
}
</script>

<template>
  <div>
    <div @click="handleToggleHamburguer" :class="{ 'w-44': showHamburguer, 'w-6.5': !showHamburguer }" class="bg-white cursor-pointer sm:hidden flex fixed top-0">
      <svg v-if="showHamburguer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-white">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 bg-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>
    <div :class="{ 'flex top-[1.5rem]': showHamburguer, 'hidden sm:flex top-[5.5rem]': !showHamburguer }" class="flex-col justify-start items-center h-full w-44 bg-white drop-shadow-xl fixed bottom-0 border-t-2 border-gray-100">
      <router-link v-if="userStore.location.administrative_area_level_2 == 'Trujillo'" :class="{ 'text-blue-700 font-bold bg-rose-100 border-rose-100': isTheSectionName('AllServices'), 'text-blue-500 font-semibold bg-white border-gray-100': !isTheSectionName('AllServices') }" :to="{ name: 'AllServices' }" class="hover:text-blue-700 hover:font-bold drop-shadow-md py-1 border-b-2 w-full text-left pl-3">Todos los servicios</router-link>
      <router-link :class="{ 'text-blue-700 font-bold bg-rose-100 border-rose-100': isTheSectionName('CarWashServices'), 'text-blue-500 font-semibold bg-white border-gray-100': !isTheSectionName('CarWashServices') }" :to="{ name: 'CarWashServices' }" class="hover:text-blue-700 hover:font-bold drop-shadow-md py-1 border-b-2 w-full text-left pl-3">Todo lavado</router-link>
      <router-link v-if="authStore.isAuthenticated" :class="{ 'text-blue-700 font-bold bg-rose-100 border-rose-100': isTheSectionName('Profile'), 'text-blue-500 font-semibold bg-white border-gray-100': !isTheSectionName('Profile') }" :to="{ name: 'Profile' }" class="hover:text-blue-700 hover:font-bold drop-shadow-md py-1 border-b-2 w-full text-left pl-3">Mi perfil</router-link>
    </div>
  </div>
</template>