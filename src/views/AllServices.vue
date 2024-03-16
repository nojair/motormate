<script setup lang="ts">
import { ref } from 'vue'
import Layout from '@/components/Layout.vue'
import AdjustableSpannerPNG from '@/assets/icons/adjustable-wrench.png'
import FanPNG from '@/assets/icons/fan.png'
import BrakesPNG from '@/assets/icons/brakes.png'
import OilPNG from '@/assets/icons/oil.png'
import SprayPNG from '@/assets/icons/spray.png'
import WhatsappPNG from '@/assets/icons/whatsapp.png'

const services = ref([
  {
    name: 'Lavado',
    imageSrc: SprayPNG,
    description: '<span>Servicio de lavado <span class="text-orange-600 font-black text-lg not-italic">A DOMICILIO</span> y talleres cerca de ti.</span>',
    CTAtext: 'VER TALLERES',
    isCarWash: true
  },
  {
    name: 'Afinamiento',
    organization: 'Nombre del taller',
    imageSrc: AdjustableSpannerPNG,
    description: '<span>Servicio regular para mantener el rendimiento óptimo del vehículo.</span>',
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
    description: '<span>Cambio de aceite y filtro para garantizar un motor saludable.</span>',
    price: 'S/30 (Incluye filtro)',
    CTAtext: 'CONTACTAR',
    isCarWash: false
  },
  {
    name: 'Reparación de Frenos',
    imageSrc: BrakesPNG,
    description: '<span>Inspección y reparación de sistemas de frenos para una conducción segura.</span>',
    price: 'Desde S/100',
    CTAtext: 'CONTACTAR',
    isCarWash: false
  },
  {
    name: 'Revisión de Aire Acondicionado',
    imageSrc: FanPNG,
    description: '<span>Recarga y mantenimiento del sistema de aire acondicionado para un clima interior cómodo.</span>',
    price: 'Desde S/60',
    CTAtext: 'CONTACTAR',
    isCarWash: false
  }
])
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto bg-white pt-5">
      <h1 class="text-2xl text-left pl-5 text-blue-900 font-black mb-4">SERVICIOS PARA AUTOMÓVILES A DOMICILIO</h1>

      <p class="text-left pl-5 text-blue-900 font-normal mb-6">Lista de servicios de mantenimiento y reparación de automóviles <strong>disponibles a domicilio</strong>.</p>

      <div class="flex flex-row flex-wrap justify-evenly items-center">
        <div v-for="service in services" :key="service.name" class="w-[21rem] h-[25rem] mb-6 p-2 mr-1 bg-green-100 flex flex-col justify-center items-center rounded-lg shadow-xl">
          <p class="text-center text-2xl font-black" :class="{ 'text-orange-600': service.isCarWash, 'text-blue-600': !service.isCarWash }">{{ service.name }}</p>
          <p v-if="service.price" class="text-center text-base text-orange-600 py-0 font-black w-ful">{{ service.price }}</p>
          <img :src="service.imageSrc" alt="Car service" class="my-6 h-20 rounded">
          <p class="px-1 rounded mb-6 w-[19rem] text-center text-blue-600 text-base font-mono bg-white italic font-black" v-html="service.description"></p>
          <router-link v-if="service.isCarWash"
            :to="{ name: 'CarWashServices' }"
            class="hover:opacity-80 mb-3 p-1 w-[15rem] rounded-md text-center text-white text-xl font-bold bg-orange-600"
          >{{ service.CTAtext }}</router-link>
          <button v-else class="flex flex-row justify-center items-center mb-3 p-1 w-[15rem] rounded-md bg-blue-600 hover:opacity-80">
            <p class="text-center text-white text-xl font-bold">{{ service.CTAtext }}</p>
            <img :src="WhatsappPNG" alt="whatsapp" class="ml-4 h-6">
          </button>
        </div>
      </div>
    </div>
  </Layout>
  
</template>
