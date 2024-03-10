<script setup lang="ts">
import Location from '@/assets/icons/location.svg'
import ProfilePNG from '@/assets/icons/profile.png'
import { ref } from 'vue';

const isOverProfile = ref(false)
</script>

<template>
  <div class="flex sm:flex-row flex-col justify-between items-center bg-gray-50 w-full px-4 py-4 drop-shadow-xl sticky">
    <div class="flex flex-row justify-start items-center sm:mb-0 mb-5">
      <P class="text-orange-600 border-orange-600 text-4xl font-bold border-4 px-1 hidden sm:block">MOTORMATE</p>
      <div class="flex flex-col justify-center items-center sm:mx-7">
        <span class="flex flex-row">
          <p class="text-orange-600 font-bold">Ubicación</p>
          <img :src="Location" alt="Location icon" class="w-5 ml-1">
        </span>
        <p class="w-60 text-center font-medium bg-orange-200 mt-1 px-6 py-1 rounded-3xl">Trujillo, La Libertad</p>
      </div>
    </div>

    <div class="flex flex-row justify-between items-center">
      <div class="flex flex-row justify-between items-center">
        <template v-if="false">
          <div class="flex flex-col" @mouseenter="isOverProfile = true" @mouseleave="isOverProfile = false">
            <div class="flex flex-row justify-between items-center">
              <img :src="ProfilePNG" alt="AVATAR" class="w-8">
              <p>Hugo Cardi</p>
            </div>
            <div v-if="isOverProfile" class="flex flex-col justify-between items-center">
              <p>Cerrar sesión</p>
            </div>
          </div>
        </template>
        <template v-else>
          <button class="w-32 px-5 py-2 border-4 rounded-lg border-orange-400 hover:bg-sky-200 mr-3">Ingresar</button>
          <button class="w-32 px-5 py-2 border-4 rounded-lg border-orange-400 hover:bg-sky-200">Registrarse</button>
        </template>
      </div>
    </div>
  </div>
</template>