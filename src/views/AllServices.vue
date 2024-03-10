<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import Layout from '@/components/Layout.vue'
import AdjustableSpannerPNG from '@/assets/icons/adjustable-wrench.png'
import FanPNG from '@/assets/icons/fan.png'
import BrakesPNG from '@/assets/icons/brakes.png'
import OilPNG from '@/assets/icons/oil.png'
import SprayPNG from '@/assets/icons/spray.png'

const services = ref([
  {
    name: 'Lavado',
    imageSrc: SprayPNG,
    description: 'Servicio de lavado a domicilio y talleres cerca de ti.',
    CTAtext: 'Ver talleres',
    shouldUseRouterLink: true
  },
  {
    name: 'Afinamiento',
    organization: 'Nombre del taller',
    imageSrc: AdjustableSpannerPNG,
    description: 'Servicio regular para mantener el rendimiento óptimo del vehículo.',
    price: 'Desde S/50',
    rating: 4.5,
    endedServices: 37,
    mobile: '+51 987654321',
    CTAtext: 'Solicitar Cita'
  },
  {
    name: 'Cambio de Aceite',
    imageSrc: OilPNG,
    description: 'Cambio de aceite y filtro para garantizar un motor saludable.',
    price: 'S/30 (Incluye filtro)',
    CTAtext: 'Ver Detalles'
  },
  {
    name: 'Reparación de Frenos',
    imageSrc: BrakesPNG,
    description: 'Inspección y reparación de sistemas de frenos para una conducción segura.',
    price: 'Desde S/100',
    CTAtext: 'Pedir Presupuesto'
  },
  {
    name: 'Revisión de Aire Acondicionado',
    imageSrc: FanPNG,
    description: 'Recarga y mantenimiento del sistema de aire acondicionado para un clima interior cómodo.',
    price: 'Desde S/60',
    CTAtext: 'Ver Detalles'
  }
])

defineComponent({
  setup() {
    return {
      Layout,
      services,
      AdjustableSpannerPNG,
      FanPNG,
      BrakesPNG,
      OilPNG,
      SprayPNG
    }
  }
})
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto bg-gray-50 pt-5 pb-10">
      <div class="flex flex-row flex-wrap justify-evenly items-center">
        <div v-for="service in services" :key="service.name" class="w-80 h-96 mb-6 p-2 mr-1 bg-slate-900 flex flex-col justify-center items-center rounded-lg shadow-xl">
          <p class="mb-3 text-cente text-orange-600 font-bold">{{ service.name }}</p>
          <img :src="service.imageSrc" alt="Car service" class="mb-3 h-32 bg-orange-600 rounded">
          <p class="mb-3 text-center text-white text-xs">{{ service.description }}</p>
          <p v-if="service.price" class="mb-4 text-center text-xl text-orange-200 py-2 font-black w-ful">{{ service.price }}</p>
          <router-link v-if="service.shouldUseRouterLink"
            :to="{ name: 'CarWashServices' }"
            class="mb-3 p-2 w-64 rounded-md text-center text-white text-2xl font-bold bg-orange-600"
          >{{ service.CTAtext }}</router-link>
          <button v-else class="mb-3 p-2 w-64 rounded-md text-center text-white text-2xl font-bold bg-orange-600">{{ service.CTAtext }}</button>
        </div>
      </div>

      <footer class="footer">
        <div class="pt-10 pb-3 px-10 text-center text-orange-700 font-bold">
          <p>© {{ new Date().getFullYear() }} Motormate. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  </Layout>
  
</template>
