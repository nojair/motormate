<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import Gear from '@/assets/icons/gear.svg'
import Location from '@/assets/icons/location.svg'

const services = ref([
      {
        name: 'Mantenimiento Preventivo',
        organization: 'Nombre del taller',
        image: 'Icono de herramientas de mantenimiento',
        description: 'Servicio regular para mantener el rendimiento óptimo del vehículo.',
        price: 'Desde S/50',
        rating: 4.5,
        endedServices: 37,
        mobile: '+51 987654321',
        CTAtext: 'Solicitar Cita'
      },
      {
        name: 'Cambio de Aceite',
        image: 'Botella de aceite y llave inglesa',
        description: 'Cambio de aceite y filtro para garantizar un motor saludable.',
        price: 'S/30 (Incluye filtro)',
        CTAtext: 'Ver Detalles'
      },
      {
        name: 'Reparación de Frenos',
        image: 'Disco de freno y pastillas',
        description: 'Inspección y reparación de sistemas de frenos para una conducción segura.',
        price: 'Desde S/100',
        CTAtext: 'Pedir Presupuesto'
      },
      {
        name: 'Alineación y Balanceo',
        image: 'Neumáticos y equipo de alineación',
        description: 'Alineación precisa y balanceo de ruedas para una conducción suave y segura.',
        price: 'S/40',
        CTAtext: 'Agendar Ahora'
      },
      {
        name: 'Lavado y Encerado',
        image: 'Auto limpio y brillante',
        description: 'Lavado completo y encerado para mantener la apariencia del vehículo.',
        price: 'S/25 (Lavado básico)',
        CTAtext: 'Reservar'
      },
      {
        name: 'Servicio de Diagnóstico',
        image: 'Escáner de diagnóstico',
        description: 'Diagnóstico profesional para identificar problemas mecánicos y electrónicos.',
        price: 'S/50 (Reembolsable con reparación)',
        CTAtext: 'Consultar'
      },
      {
        name: 'Cambio de Batería',
        image: 'Batería de auto nueva',
        description: 'Instalación de batería nueva para un arranque confiable.',
        price: 'Desde S/80',
        CTAtext: 'Ver Precios'
      },
      {
        name: 'Reparación de Transmisión',
        image: 'Transmisión y herramientas',
        description: 'Reparación y mantenimiento de transmisiones automáticas y manuales.',
        price: 'A consultar',
        CTAtext: 'Llamar Ahora'
      },
      {
        name: 'Servicio de Aire Acondicionado',
        image: 'Aire acondicionado del coche',
        description: 'Recarga y mantenimiento del sistema de aire acondicionado para un clima interior cómodo.',
        price: 'Desde S/60',
        CTAtext: 'Ver Detalles'
      },
      {
        name: 'Inspección de Emisiones',
        image: 'Tubo de escape y medidor de emisiones',
        description: 'Inspección y prueba de emisiones para cumplir con los estándares de contaminación.',
        price: 'S/20',
        CTAtext: 'Programar Cita'
      }
    ])
const searchedService = ref('')
const wasServiceSearched = ref(false)
const filteredServices = ref([...services.value])
const searchServices = () => {
  filteredServices.value = services.value.filter(service => service.name.toLowerCase().includes(searchedService.value.toLowerCase()))
  wasServiceSearched.value = true
}
const resetSearch = () => {
  filteredServices.value = [...services.value]
  searchedService.value = ''
  wasServiceSearched.value = false
}

defineComponent({
  setup() {
    return {
      Gear,
      services,
      searchedService,
      filteredServices,
      searchServices
    }
  }
})
</script>

<template>
  <div class="md:container md:mx-auto bg-gray-50 pt-5 pb-10">
    <div class="flex sm:flex-row flex-col justify-between items-center px-4 pb-10">
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
      <div class="sm:w-2/5 w-full">
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input v-model="searchedService" type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa un servicio" required />
          <button @click="searchServices" class="text-white absolute end-2.5 bottom-2.5 bg-orange-600 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Buscar</button>
          <button v-if="wasServiceSearched" @click="resetSearch" class="text-white absolute top-2 right-24 bg-orange-600 hover:bg-orange-800 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Limpiar</button>
        </div>        
      </div>
    </div>
    <div class="flex flex-row flex-wrap justify-evenly items-center">
      <P v-if="!filteredServices.length" class="font-extrabold text-orange-700 text-end">No se encontraron servicios</P>
      <div v-for="service in filteredServices" :key="service.name" class="max-w-80 min-h-60 mb-6 p-2 mr-1 bg-slate-900 flex flex-col items-center rounded-lg shadow-xl">
        <p class="mb-3 text-cente text-orange-600 font-bold">{{ service.name }}</p>
        <img :src="Gear" :alt="service.image" class="mb-3 w-28 bg-orange-600 rounded">
        <p class="mb-3 text-center text-white text-xs">{{ service.description }}</p>
        <p class="mb-4 text-center text-xl text-orange-200 py-2 font-black w-ful">{{ service.price }}</p>
        <button class="mb-3 p-2 w-64 rounded-md text-center text-white text-2xl font-bold bg-orange-600">{{ service.CTAtext }}</button>
      </div>
    </div>

    <footer class="footer">
      <div class="pt-10 pb-3 px-10 text-center text-orange-700 font-bold">
        <p>© {{ new Date().getFullYear() }} Motormate. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>
