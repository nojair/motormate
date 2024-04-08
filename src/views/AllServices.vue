<script setup lang="ts">
import { ref, watchEffect, h, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import Layout from '@/components/Layout.vue'

import AdjustableSpannerPNG from '@/assets/icons/adjustable-wrench.png'
import FanPNG from '@/assets/icons/fan.png'
import BrakesPNG from '@/assets/icons/brakes.png'
import OilPNG from '@/assets/icons/oil.png'
import CleanPNG from '@/assets/icons/clean.png'
import SearchingPNG from '@/assets/icons/searching.png'

import { useUserStore } from '@/stores/user'
import { useContactModalStore } from '@/stores/modal'

const router = useRouter()

const userStore = useUserStore()
const contactModalStore = useContactModalStore()

const services = ref([
  {
    name: 'LAVADO',
    key: 'carWashes',
    imageSrc: CleanPNG,
    description: '<span class="text-rose-100">Encuentra talleres cerca de ti.</span>',
    CTAtext: 'VER TALLERES',
    isCarWash: true,
    showTooltipHelper: false
  },
  {
    name: 'Afinamiento',
    key: 'tuning',
    imageSrc: AdjustableSpannerPNG,
    description: '<p class="rounded-md text-md font-black p-2 text-white text-center">Servicio regular para mantener el rendimiento óptimo del vehículo.</p>',
    price: 'Desde S/150',
    rating: 4.5,
    endedServices: 37,
    mobile: '+51 987654321',
    CTAtext: 'CONTACTAR',
    isCarWash: false,
    showTooltipHelper: true
  },
  {
    name: 'Cambio de Aceite',
    key: 'oilChange',
    imageSrc: OilPNG,
    description: '<p class="rounded-md text-md font-black p-2 text-white text-center">Cambio de aceite y filtro para garantizar un motor saludable.</p>',
    price: 'Desde S/150 (Incluye filtro)',
    CTAtext: 'CONTACTAR',
    isCarWash: false,
    showTooltipHelper: true
  },
  {
    name: 'Sistema de Frenos',
    key: 'brakingSystem',
    imageSrc: BrakesPNG,
    description: '<p class="rounded-md text-md font-black p-2 text-white text-center">Inspección y reparación de sistemas de frenos para una conducción segura.</p>',
    price: 'Desde S/200',
    CTAtext: 'CONTACTAR',
    isCarWash: false,
    showTooltipHelper: true
  },
  {
    name: 'Sistema de Aire Acondicionado',
    key: 'airConditioning',
    imageSrc: FanPNG,
    description: '<p class="rounded-md text-md font-black p-2 text-white text-center">Recarga y mantenimiento del sistema de aire acondicionado para un clima interior cómodo.</p>',
    price: 'Desde S/150',
    CTAtext: 'CONTACTAR',
    isCarWash: false,
    showTooltipHelper: true
  },
  {
    name: 'Consulta general + escaneo',
    key: 'generalConsultation',
    imageSrc: SearchingPNG,
    description: '<p class="rounded-md text-md font-black p-2 text-white text-center">Diagnóstico completo para tu vehículo, garantizando su óptimo funcionamiento.</p>',
    price: 'Desde S/50',
    CTAtext: 'CONTACTAR',
    isCarWash: false,
    showTooltipHelper: true
  }
])

watchEffect(() => {
  if (userStore.location.administrative_area_level_2 && userStore.location.administrative_area_level_2 != 'Trujillo') {
    router.push({ name: 'CarWashServices' })
  }
})

function handleOpenContactModal(service: any) {
  contactModalStore.resetForm()
  if (userStore.cars.length == 1) {
    const { value: { brand, model, year } } = userStore.cars[0]
    contactModalStore.setSelectedCar(`${brand} ${model}, ${year}`)
  }

  contactModalStore.handleShowContactModal(service)
}
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto bg-white pt-12">
      <h1 class="text-2xl text-left px-5 text-blue-700 font-bold mb-4">SERVICIOS PARA AUTOMÓVILES A DOMICILIO</h1>

      <p class="text-left px-5 font-normal text-gray-700 mb-12">Lista de servicios de mantenimiento y reparación de automóviles <strong>disponibles a domicilio</strong>.</p>

      <div class="flex flex-row flex-wrap justify-evenly items-center">
        <div v-for="service in services" :key="service.name" :class="{ 'bg-blue-900': service.isCarWash, 'bg-rose-50': !service.isCarWash }" class="w-[21rem] h-[30rem] mb-6 p-2 mr-1 flex flex-col justify-center items-center rounded-lg shadow-xl">
          <p class="text-center text-2xl font-black w-52" :class="{ 'text-rose-100': service.isCarWash, 'text-blue-700': !service.isCarWash }">{{ service.name }}</p>
          <div v-if="service.showTooltipHelper"
            v-tippy="{
              content: service.description,
              maxWidth: 200,
              placement: 'bottom',
              arrow: true,
              sticky: true,
              offset: [0, 0]
            }" 
            class="py-2 text-md flex flex-row justify-center items-baseline cursor-default"
          >
            <p class="text-blue-700 mr-2 underline text-md">ver más</p>
            <i class="text-blue-700 fas fa-question-circle text-xs"></i>
          </div>
          <figure class="my-4 rounded-lg p-2">
            <img :src="service.imageSrc" alt="Car service" class="h-24">
          </figure>
          <p v-if="!service.showTooltipHelper" class="px-1 rounded mb-6 w-[19rem] text-center text-sm font-mono font-black" v-html="service.description"></p>
          <p v-if="service.price" class="text-center text-base text-blue-500 py-0 mb-4 font-bold w-full">{{ service.price }}</p>
          <router-link v-if="service.isCarWash"
            :to="{ name: 'CarWashServices' }"
            class="hover:opacity-80 mb-3 p-1 w-[15rem] rounded-md text-center text-blue-600 text-xl font-black bg-rose-100"
          >{{ service.CTAtext }}</router-link>
          <button v-else @click="handleOpenContactModal(service)" class="flex flex-row justify-center items-center mb-3 p-1 w-[15rem] rounded-md bg-green-500 hover:opacity-70 border-2 border-blue-100">
            <p class="text-center text-white text-xl font-black mr-2">{{ service.CTAtext }}</p>
            <i class="fab fa-whatsapp text-white font-black text-2xl"></i>
          </button>
        </div>
      </div>
    </div>
  </Layout>
</template>
