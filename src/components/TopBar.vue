<script setup lang="ts">
import { ref } from 'vue'

import LocationSVG from '@/assets/icons/location.svg'
import ProfilePNG from '@/assets/icons/profile.png'
import { useLoginModalStore, useRegisterModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'

import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

const { handleShowLoginModal } = useLoginModalStore()
const { handleShowRegisterModal } = useRegisterModalStore()

const userStore = useUserStore()
const authStore = useAuthStore()

const isOverProfile = ref(false)

async function logout() {
  try {
    await signOut(auth)
    userStore.resetUser()
  } catch (error) {
    console.error('Error al cerrar sesión:', error)
  }
}
</script>

<template>
  <div class="flex sm:flex-row flex-col justify-between items-center bg-blue-900 w-full px-4 py-4 drop-shadow-xl sticky">
    <div class="flex flex-row justify-start items-center sm:mb-0 mb-5">
      <p class="cursor-default text-sky-100 border-sky-100 text-4xl font-bold border-4 px-1 hidden sm:block">TODOAUTOS</p>
      <div class="flex flex-col justify-center items-center sm:mx-7">
        <span class="cursor-default flex flex-row px-2 rounded-sm">
          <p class="text-sky-300 font-bold">Ubicación</p>
          <img :src="LocationSVG" alt="LOCATION" class="h-6">
        </span>
        <p class="cursor-default w-52 text-center text-sky-100 font-black px-6 py-1">Trujillo, La Libertad</p>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row justify-between items-center">
        <template v-if="userStore.uid">
          <div class="cursor-default bg-white rounded-md h-12 min-w-fit px-2 flex flex-col justify-center items-center" @mouseenter="isOverProfile = true" @mouseleave="isOverProfile = false">
            <div class="flex flex-row justify-between items-center">
              <img :src="ProfilePNG" alt="AVATAR" class="w-8 mr-2">
              <p class="text-blue-900 font-medium">{{ authStore.email || '-' }}</p>
            </div>
            <button v-if="isOverProfile" @click="logout" class="cursor-pointer py-1 font-normal rounded-md border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-blue-900 hover:bg-blue-100 hover:text-blue-900 w-44 top-[4.3em] absolute flex flex-col justify-between items-center">
              <div class="absolute w-0 h-0" style="top: -10px; left: 75px; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 10px solid #1e3a8a;"></div>
              Cerrar sesión
            </button>
          </div>
        </template>
        <template v-else>
          <button @click="handleShowLoginModal" class="font-semibold w-40 px-5 py-2 rounded-lg border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-0 hover:bg-blue-100 hover:text-blue-900 mr-3">INGRESAR</button>
          <button @click="handleShowRegisterModal" class="font-semibold w-40 px-5 py-2 rounded-lg border-blue-100 border-2 bg-blue-900 text-blue-100 hover:border-0 hover:bg-blue-100 hover:text-blue-900">REGISTRARSE</button>
        </template>
      </div>
    </div>
  </div>
</template>