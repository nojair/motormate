<script setup lang="ts">
import { ref } from 'vue'

import LocationSVG from '@/assets/icons/location.svg'
import ProfilePNG from '@/assets/icons/profile.png'
import { useLoginModalStore, useRegisterModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'
import { useLocationModalStore } from '@/stores/modal'

import { signOut } from 'firebase/auth'
import { auth } from '@/firebase'

const { handleShowLoginModal } = useLoginModalStore()
const { handleShowRegisterModal } = useRegisterModalStore()

const userStore = useUserStore()
const authStore = useAuthStore()
const locationModalStore = useLocationModalStore()

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
  <div class="flex sm:flex-row flex-col justify-between items-center bg-white w-full px-4 py-4 drop-shadow-xl sticky">
    <div class="flex flex-row justify-start items-center sm:mb-0 mb-5">
      <p class="cursor-default text-blue-700 border-blue-700 text-4xl font-bold border-4 rounded-xl px-1 hidden sm:block">TODOAUTOS</p>
      <div class="flex flex-col justify-center items-center sm:mx-7">
        <span class="cursor-default flex flex-row px-2 rounded-sm">
          <p class="text-blue-900 font-bold">Ubicación</p>
          <img :src="LocationSVG" alt="LOCATION" class="h-6">
        </span>
        <span class="flex flex-row items-center">
          <p class="cursor-default w-fit px-4 text-center text-blue-700 font-black py-1">
            <template v-if="userStore.location.postal_code">
              {{ userStore.location.administrative_area_level_2 }}, {{ userStore.location.administrative_area_level_1 }}
            </template>
            <template v-else>Seleccionar una ubicación</template>
          </p>
          <svg @click="locationModalStore.setShowModal(true)" class="cursor-pointer w-8 h-6 py-1 rounded-md bg-white" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="512" height="512"><path d="M22.853,1.148a3.626,3.626,0,0,0-5.124,0L1.465,17.412A4.968,4.968,0,0,0,0,20.947V23a1,1,0,0,0,1,1H3.053a4.966,4.966,0,0,0,3.535-1.464L22.853,6.271A3.626,3.626,0,0,0,22.853,1.148ZM5.174,21.122A3.022,3.022,0,0,1,3.053,22H2V20.947a2.98,2.98,0,0,1,.879-2.121L15.222,6.483l2.3,2.3ZM21.438,4.857,18.932,7.364l-2.3-2.295,2.507-2.507a1.623,1.623,0,1,1,2.295,2.3Z"/></svg>
        </span>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row justify-between items-center">
        <template v-if="authStore.isAuthenticated">
          <div class="cursor-default bg-white rounded-md h-12 min-w-fit px-2 flex flex-col justify-center items-center" @mouseenter="isOverProfile = true" @mouseleave="isOverProfile = false">
            <div class="flex flex-row justify-between items-center">
              <img :src="ProfilePNG" alt="AVATAR" class="w-8 mr-2">
              <p class="text-blue-700 font-bold">{{ authStore.displayName || authStore.email || '-' }}</p>
            </div>
            <button v-if="isOverProfile" @click="logout" class="cursor-pointer py-1 font-normal rounded-md border-blue-100 border-2 hover:bg-blue-100 text-blue-900 hover:border-blue-900 bg-white w-44 top-[4.3em] absolute flex flex-col justify-between items-center">
              <div class="absolute w-0 h-0" style="top: -10px; left: 75px; border-left: 10px solid transparent; border-right: 10px solid transparent; border-bottom: 10px solid #1e3a8a;"></div>
              Cerrar sesión
            </button>
          </div>
        </template>
        <template v-else>
          <button @click="handleShowLoginModal" class="font-bold w-40 px-5 py-2 rounded-lg hover:border-blue-700 border-2 text-blue-700 bg-blue-100 mr-3">INGRESAR</button>
          <button @click="handleShowRegisterModal" class="font-bold w-40 px-5 py-2 rounded-lg hover:border-blue-700 border-2 text-blue-700 bg-blue-100">REGISTRARSE</button>
        </template>
      </div>
    </div>
  </div>
</template>