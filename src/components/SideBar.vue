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
  <div class="z-20">
    <div @click="handleToggleHamburguer" :class="{ 'w-44': showHamburguer, 'w-6.5': !showHamburguer }" class="bg-white cursor-pointer sm:hidden flex fixed top-0">
      <i v-if="showHamburguer" class="fas fa-times pl-2 pt-1 text-3xl bg-white"></i>
      <i v-else class="fas fa-bars pl-2 pt-1 text-3xl bg-white"></i>
    </div>
    <div :class="{ 'flex top-[2.5rem]': showHamburguer, 'hidden sm:flex top-[5.5rem]': !showHamburguer }" class="flex-col justify-start items-center h-full w-44 bg-white drop-shadow-xl fixed border-t-2 border-gray-100">
      <router-link v-if="userStore.location.administrative_area_level_2 == 'Trujillo'" :class="{ 'text-blue-700 font-bold bg-rose-100 border-rose-100': isTheSectionName('AllServices'), 'text-blue-500 font-semibold bg-white border-gray-100': !isTheSectionName('AllServices') }" :to="{ name: 'AllServices' }" class="hover:text-blue-700 hover:font-bold drop-shadow-md py-1 border-b-2 w-full text-left pl-3">Servicios a domicilio</router-link>
      <router-link :class="{ 'text-blue-700 font-bold bg-rose-100 border-rose-100': isTheSectionName('CarWashServices'), 'text-blue-500 font-semibold bg-white border-gray-100': !isTheSectionName('CarWashServices') }" :to="{ name: 'CarWashServices' }" class="hover:text-blue-700 hover:font-bold drop-shadow-md py-1 border-b-2 w-full text-left pl-3">Lavaderos</router-link>
      <router-link v-if="authStore.isAuthenticated" :class="{ 'text-blue-700 font-bold bg-rose-100 border-rose-100': isTheSectionName('Profile'), 'text-blue-500 font-semibold bg-white border-gray-100': !isTheSectionName('Profile') }" :to="{ name: 'Profile' }" class="hover:text-blue-700 hover:font-bold drop-shadow-md py-1 border-b-2 w-full text-left pl-3">Mi perfil</router-link>
    </div>
  </div>
</template>