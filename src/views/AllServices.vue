<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

import Layout from '@/components/Layout.vue'

import AdjustableSpannerPNG from '@/assets/icons/adjustable-wrench.png'
import FanPNG from '@/assets/icons/fan.png'
import BrakesPNG from '@/assets/icons/brakes.png'
import OilPNG from '@/assets/icons/oil.png'
import CleanPNG from '@/assets/icons/clean.png'

import { useUserStore } from '@/stores/user'
import { useContactModalStore } from '@/stores/modal'

const router = useRouter()

const userStore = useUserStore()
const contactModalStore = useContactModalStore()

const services = ref([
  {
    name: 'LAVADO',
    imageSrc: CleanPNG,
    description: '<span class="text-rose-100">Encuentra talleres cerca de ti.</span>',
    CTAtext: 'VER TALLERES',
    isCarWash: true
  },
  {
    name: 'Afinamiento',
    organization: 'Nombre del taller',
    imageSrc: AdjustableSpannerPNG,
    description: '<span class="text-blue-700">Servicio regular para mantener el rendimiento óptimo del vehículo.</span>',
    price: 'Desde S/50',
    rating: 4.5,
    endedServices: 37,
    mobile: '+51 987654321',
    CTAtext: 'CONTACTAR',
    isCarWash: false
  },
  {
    name: 'Cambio de Aceite',
    imageSrc: OilPNG,
    description: '<span class="text-blue-700">Cambio de aceite y filtro para garantizar un motor saludable.</span>',
    price: 'Desde S/30 (Incluye filtro)',
    CTAtext: 'CONTACTAR',
    isCarWash: false
  },
  {
    name: 'Reparación de Frenos',
    imageSrc: BrakesPNG,
    description: '<span class="text-blue-700">Inspección y reparación de sistemas de frenos para una conducción segura.</span>',
    price: 'Desde S/100',
    CTAtext: 'CONTACTAR',
    isCarWash: false
  },
  {
    name: 'Revisión de Aire Acondicionado',
    imageSrc: FanPNG,
    description: '<span class="text-blue-700">Recarga y mantenimiento del sistema de aire acondicionado para un clima interior cómodo.</span>',
    price: 'Desde S/60',
    CTAtext: 'CONTACTAR',
    isCarWash: false
  }
])

watchEffect(() => {
  if (userStore.location.administrative_area_level_2 && userStore.location.administrative_area_level_2 != 'Trujillo') {
    router.push({ name: 'CarWashServices' })
  }
})
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto bg-white pt-12">
      <h1 class="text-2xl text-left px-5 text-blue-700 font-bold mb-4">SERVICIOS PARA AUTOMÓVILES A DOMICILIO</h1>

      <p class="text-left px-5 font-normal text-gray-700 mb-12">Lista de servicios de mantenimiento y reparación de automóviles <strong>disponibles a domicilio</strong>.</p>

      <div class="flex flex-row flex-wrap justify-evenly items-center">
        <div v-for="service in services" :key="service.name" :class="{ 'bg-blue-900': service.isCarWash, 'bg-rose-50': !service.isCarWash }" class="w-[21rem] h-[25rem] mb-6 p-2 mr-1 flex flex-col justify-center items-center rounded-lg shadow-xl">
          <p class="text-center text-2xl font-black" :class="{ 'text-rose-100': service.isCarWash, 'text-blue-700': !service.isCarWash }">{{ service.name }}</p>
          <p v-if="service.price" class="text-center text-base text-blue-500 py-0 font-bold w-ful">{{ service.price }}</p>
          <figure class="my-6 rounded-lg p-2">
            <img :src="service.imageSrc" alt="Car service" class="h-24">
          </figure>
          <p class="px-1 rounded mb-6 w-[19rem] text-center text-sm font-mono font-black" v-html="service.description"></p>
          <router-link v-if="service.isCarWash"
            :to="{ name: 'CarWashServices' }"
            class="hover:opacity-80 mb-3 p-1 w-[15rem] rounded-md text-center text-blue-600 text-xl font-black bg-rose-100"
          >{{ service.CTAtext }}</router-link>
          <button v-else @click="contactModalStore.handleShowContactModal(service.name)" class="flex flex-row justify-center items-center mb-3 p-1 w-[15rem] rounded-md bg-green-500 hover:opacity-70 border-2 border-blue-100">
            <p class="text-center text-white text-xl font-black mr-2">{{ service.CTAtext }}</p>
            <i class="fab fa-whatsapp text-white font-black text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </Layout>
  
</template>
