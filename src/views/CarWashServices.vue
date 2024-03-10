<script setup lang="ts">
import { ref, defineComponent } from 'vue'
import Location from '@/assets/icons/location.svg'
import Layout from '@/components/Layout.vue'
import Modal from '@/components/Modal.vue'

const carWashWorkshops = ref([
  {
    key: 1,
    organization: 'BRUCCE SAC',
    description: 'Lavado de autos a DOMICILIO',
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
      address: 'online'
    }
  },
  {
    key: 2,
    organization: 'AutoTaller QQQ',
    description: '¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.',
    price: {
      exteriorWash: 's/20',
      exteriorAndInteriorWash: 's/35',
      completeWash: 's/50'
    },
    email: 'irvin.jair.pg@gmail.com',
    phone: '+51 943800214',
    whatsapp: '-',
    schedules: {
      fromMondayToFriday: '8am - 6pm',
      saturday: '9am - 4pm',
      sundayOrHolidays: '-'
    },
    location: {
      country: 'PER',
      region: 'La Libertad',
      city: 'Trujillo',
      address: 'Jirón Cahuide 439, Urb. Santa María 3era etapa'
    }
  },
  {
    key: 3,
    organization: 'AutoTaller WWW',
    description: '¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.',
    price: {
      exteriorWash: 's/20',
      exteriorAndInteriorWash: 's/35',
      completeWash: 's/50'
    },
    email: '-',
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
      address: 'Jirón Cahuide 439, Urb. Santa María 3era etapa'
    }
  },
  {
    key: 4,
    organization: 'AutoTaller EEE',
    description: '¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.',
    price: {
      exteriorWash: 's/20',
      exteriorAndInteriorWash: 's/35',
      completeWash: 's/50'
    },
    email: 'irvin.jair.pg@gmail.com',
    phone: '',
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
      address: 'Jirón Cahuide 439, Urb. Santa María 3era etapa'
    }
  },
  {
    key: 5,
    organization: 'AutoTaller RRR',
    description: '¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.',
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
      address: 'Jirón Cahuide 439, Urb. Santa María 3era etapa'
    }
  },
  {
    key: 6,
    organization: 'AutoTaller TTT',
    description: '¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.',
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
      address: 'Jirón Cahuide 439, Urb. Santa María 3era etapa'
    }
  },
  {
    key: 7,
    organization: 'AutoTaller YYY',
    description: '¡Haz que tu auto luzca como nuevo! En AutoTaller XYZ, ofrecemos un servicio completo de lavado de autos para mantener tu vehículo limpio y reluciente.',
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
      address: 'Jirón Cahuide 439, Urb. Santa María 3era etapa'
    }
  }
])

const showMapModal = ref(false)

defineComponent({
  setup() {
    return {
      Layout,
      Modal,
      carWashWorkshops,
      Location
    }
  }
})
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto bg-gray-50 pt-5 pb-10">
      <Modal v-if="showMapModal" @closeModal="showMapModal = false">
        <iframe
          width="600"
          height="450"
          style="border:0"
          Loading="lazy"
          allowfullscreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJW3gamX89rZERq1EIvzdk53E&key=AIzaSyDyp1H4_IoRX2Z6AbXFtqUmKJlpkCu91HY"></iframe>
      </Modal>

      <div class="flex flex-row flex-wrap justify-evenly items-center">
        <div v-for="workshop in carWashWorkshops.slice(1)" :key="workshop.key" class="max-w-80 min-h-60 mb-6 p-2 mr-1 bg-slate-900 flex flex-col items-center rounded-lg shadow-xl">
          <p class="mb-3 text-cente text-orange-600 font-bold">{{ workshop.organization }}</p>
          <p class="mb-3 text-center text-white text-xs">{{ workshop.description }}</p>
          <div class="flex flex-col justify-center items-center mb-4">
            <p class="mb-1 text-center text-xl text-orange-200 font-black w-ful">Lavado exterior: {{ workshop.price.exteriorWash }}</p>
            <p class="mb-1 text-center text-xl text-orange-200 font-black w-ful">Lavado interior: {{ workshop.price.exteriorAndInteriorWash }}</p>
            <p class="mb-1 text-center text-xl text-orange-200 font-black w-ful">Lavado completo: {{ workshop.price.completeWash }}</p>
          </div>
          <span class="flex flex-col justify-center items-center bg-gray-50 text-center mb-4 p-2 max-w-64">
            <p class="text-xs	font-normal mb-2">Ubicación:</p>
            <span class="flex flex-row justify-center items-start mb-4">
              <img :src="Location" alt="Location icon" class="w-4">
              <p class="text-xs font-semibold">{{ workshop.location.address }}</p>
            </span>
            <button @click="showMapModal = true" class="text-xs font-medium bg-gray-500 rounded-lg py-1 px-10">Ver mapa</button>
          </span>
          <button class="mb-3 p-2 w-64 rounded-md text-center text-white text-2xl font-bold bg-orange-600">Contactar</button>
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
