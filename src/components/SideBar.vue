<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const showHamburguer = ref(false)
const authStore = useAuthStore()
const router = useRouter()

function handleToggleHamburguer () {
  showHamburguer.value = !showHamburguer.value
}

function isTheSectionName(sectionName: string) {
  return Object.is(router.currentRoute.value.name, sectionName) 
}
</script>

<template>
  <div>
    <div @click="handleToggleHamburguer" :class="{ 'w-44': showHamburguer, 'w-6.5': !showHamburguer }" class="bg-blue-900 cursor-pointer sm:hidden flex fixed top-0">
      <svg v-if="showHamburguer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-blue-100">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 bg-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </div>
    <div :class="{ 'flex top-[1.5rem]': showHamburguer, 'hidden sm:flex top-[5.5rem]': !showHamburguer }" class="flex-col justify-start items-center h-full w-44 bg-blue-900 drop-shadow-xl fixed bottom-0">
      <router-link :class="{ 'text-sky-900 bg-blue-100': isTheSectionName('AllServices'), 'text-sky-100 bg-blue-900': !isTheSectionName('AllServices') }" :to="{ name: 'AllServices' }" class="font-medium text-sky-100 hover:text-sky-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3">Todos los servicios</router-link>
      <router-link :class="{ 'text-sky-900 bg-blue-100': isTheSectionName('CarWashServices'), 'text-sky-100 bg-blue-900': !isTheSectionName('CarWashServices') }" :to="{ name: 'CarWashServices' }" class="font-medium text-sky-100 hover:text-sky-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3">Todo Lavado</router-link>
      <router-link :class="{ 'text-sky-900 bg-blue-100': isTheSectionName('Profile'), 'text-sky-100 bg-blue-900': !isTheSectionName('Profile') }" v-if="authStore.isAuthenticated" :to="{ name: 'Profile' }" class="font-medium hover:text-sky-900 hover:bg-blue-100 drop-shadow-xl py-1 mb-1 w-full text-left pl-3">Mi perfil</router-link>
    </div>
  </div>
</template>