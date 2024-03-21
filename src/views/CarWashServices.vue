<script setup lang="ts">
import Layout from '@/components/Layout.vue'
/*
import { ref } from 'vue'
import { useGoogleMapsModalStore } from '@/stores/modal'
import WhatsappPNG from '@/assets/icons/whatsapp.png'

import Location from '@/assets/icons/location.svg'

const { handleShowGoogleMapsModal } = useGoogleMapsModalStore()

const carWashWorkshops = ref([
  {
    key: 1,
    organization: 'BRUCCE SAC',
    description: '<span>Lavado de autos a DOMICILIO</span>',
    price: {
      exteriorWash: 's/20',
      exteriorAndInteriorWash: 's/35',
      completeWash: 's/50'
    },
    email: 'irvin.jair.pg@gmail.com',
    phone: '+51 943800214',
    whatsapp: '+51 943800214',
    schedules: {
      fromMondayToFriday: '8am - 6pm',
      saturday: '9am - 4pm',
      sundayOrHolidays: '-'
    },
    location: {
      country: 'PER',
      region: 'La Libertad',
      city: 'Trujillo',
      address: 'online',
      placeId: 'ChIJW3gamX89rZERq1EIvzdk53E'
    },
    isOnline: true
  }
])

function goToWhatsapp(workshop:any): String {
  return workshop.whatsapp
}
*/

import CarWashMap from '@/components/CarWashMap.vue'
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto pt-5">
      <h1 class="text-2xl text-left px-5 text-blue-900 font-black mb-4">LAVADO DE AUTOMÓVILES</h1>

      <p class="text-left px-5 text-blue-900 font-normal mb-6">Encuentra talleres de lavado cerca de ti.</p>

      <!--div class="flex flex-row flex-wrap justify-evenly items-center">
        <div v-for="workshop in carWashWorkshops" :key="workshop.key" class="cursor-default w-[21rem] h-[26rem] mb-6 p-2 mr-1 bg-green-100 flex flex-col justify-center items-center rounded-lg shadow-xl">
          <p class="mb-3 text-center text-2xl font-black" :class="{ 'text-orange-600': workshop.isOnline, 'text-blue-600': !workshop.isOnline }">{{ workshop.organization }}</p>
          <p v-if="workshop.isOnline" class="px-1 rounded mb-6 w-[19rem] text-center text-blue-600 font-black font-mono bg-white italic" v-html="workshop.description"></p>
          <span v-if="!workshop.isOnline" class="flex flex-col justify-center items-center rounded-sm text-center mb-4 p-2 max-w-64">
            <p class="text-xs	font-normal mb-2">Ubicación:</p>
            <span class="flex flex-row justify-center items-start mb-4">
              <img :src="Location" alt="Location icon" class="w-4">
              <p class="text-xs font-semibold">{{ workshop.location.address }}</p>
            </span>
            <button @click="handleShowGoogleMapsModal(workshop.location)" class="text-xs font-bold text-white bg-gray-500 hover:text-gray-500 hover:bg-white border-2 border-gray-500 hover:gray-green-500 rounded-lg py-1 px-10">Ver mapa</button>
          </span>
          <div class="flex flex-col justify-center items-center mb-4">
            <p class="mb-1 text-center text-base text-orange-600 font-black w-ful">Lavado exterior: {{ workshop.price.exteriorWash }}</p>
            <p class="mb-1 text-center text-base text-orange-600 font-black w-ful">Lavado interior: {{ workshop.price.exteriorAndInteriorWash }}</p>
            <p class="mb-1 text-center text-base text-orange-600 font-black w-ful">Lavado completo: {{ workshop.price.completeWash }}</p>
          </div>
          <button @click="goToWhatsapp(workshop.whatsapp)" class="hover:opacity-80 flex flex-row justify-center items-center mb-3 p-1 w-[15rem] rounded-md" :class="{ 'bg-orange-600': workshop.isOnline, 'bg-blue-600': !workshop.isOnline }">
            <p class="text-center text-white text-xl font-bold">Contactar</p>
            <img :src="WhatsappPNG" alt="whatsapp" class="ml-4 h-6">
          </button>
        </div>
      </div-->

      <CarWashMap />
    </div>
  </Layout>
</template>
