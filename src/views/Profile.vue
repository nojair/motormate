<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import VueDatePicker from '@vuepic/vue-datepicker'

import Layout from '@/components/Layout.vue'
import Modal from '@/components/Modal.vue'

import { useUserStore } from '@/stores/user'
import { useAlertStore } from '@/stores/alert'
import { useAuthStore } from '@/stores/auth'

import getNextRevisionDate from '@/utils'

import '@vuepic/vue-datepicker/dist/main.css'

const authStore = useAuthStore()
const userStore = useUserStore()
const alertStore = useAlertStore()

const router = useRouter()

const showFormConfirmationModal = ref(false)

onMounted(() => {
  authStore.isAuthenticated ? null : (router.push({ name: 'Home' }))
})

async function handleFormConfirmationModal() {
  userStore.handleSubmit(() => {
    showFormConfirmationModal.value = true
  })()
}

async function submitFormData() {
  userStore.handleSubmit(async (values: any) => {
    authStore.setIsLoading(true)
    return await userStore.updateUser({
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      cars: values.cars
    }).then(() => {
      authStore.setIsLoading(false)
      alertStore.setShowAlert(true)
    })
  }, () => {
    authStore.setIsLoading(false)
  })()
}

const brandsAndModels = reactive([
  {
    brand: 'Toyota',
    models: ['Corolla', 'Camry', 'Rav4', 'Yaris', 'Highlander', 'Tacoma', 'Sienna', '4Runner', 'Prius', 'Tundra', 'Land Cruiser', 'Avalon', 'Sequoia']
  },
  {
    brand: 'Honda',
    models: ['Civic', 'Accord', 'CR-V', 'Pilot', 'Odyssey', 'HR-V', 'Fit', 'Ridgeline', 'Passport', 'Insight', 'Clarity']
  },
  {
    brand: 'Ford',
    models: ['F-150', 'Escape', 'Explorer', 'Focus', 'Mustang', 'Edge', 'Fusion', 'Ranger', 'Expedition', 'EcoSport', 'Taurus', 'Flex', 'Transit']
  },
  {
    brand: 'Chevrolet',
    models: ['Silverado', 'Equinox', 'Malibu', 'Cruze', 'Traverse', 'Tahoe', 'Suburban', 'Colorado', 'Impala', 'Blazer', 'Express', 'Trax', 'Sonic', 'Volt']
  },
  {
    brand: 'Nissan',
    models: ['Altima', 'Rogue', 'Sentra', 'Frontier', 'Pathfinder', 'Versa', 'Murano', 'Titan', 'Maxima', 'Armada', 'Leaf', 'Kicks', 'NV', '370Z']
  },
  {
    brand: 'Hyundai',
    models: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe', 'Kona', 'Veloster', 'Accent', 'Palisade', 'Venue', 'Nexo', 'Ioniq']
  },
  {
    brand: 'Volkswagen',
    models: ['Jetta', 'Passat', 'Tiguan', 'Atlas', 'Golf', 'Arteon', 'Touareg', 'ID.4', 'ID.3', 'Golf GTI', 'T-Cross', 'Polo', 'Amarok', 'Teramont']
  },
  {
    brand: 'BMW',
    models: ['3 Series', '5 Series', 'X3', 'X5', '7 Series', 'X1', 'X7', 'X6', '4 Series', 'Z4', '8 Series', 'i3', 'i8', 'M2']
  },
  {
    brand: 'Mercedes-Benz',
    models: ['C-Class', 'E-Class', 'GLC', 'GLE', 'S-Class', 'A-Class', 'GLA', 'GLB', 'CLA', 'G-Class', 'SLC', 'GLS', 'SL', 'EQC']
  },
  {
    brand: 'Audi',
    models: ['A4', 'Q5', 'A6', 'Q7', 'A3', 'Q3', 'A5', 'A7', 'Q8', 'e-tron', 'TT', 'A8', 'RS 3', 'S3']
  },
  {
    brand: 'Subaru',
    models: ['Impreza', 'Forester', 'Outback', 'Legacy', 'Crosstrek', 'WRX', 'Ascent']
  },
  {
    brand: 'Kia',
    models: ['Optima', 'Sorento', 'Sportage', 'Forte', 'Soul', 'Telluride', 'Rio']
  },
  {
    brand: 'Lexus',
    models: ['RX', 'ES', 'NX', 'IS', 'GX', 'LS', 'UX']
  },
  {
    brand: 'Mazda',
    models: ['Mazda3', 'Mazda6', 'CX-5', 'CX-9', 'MX-5 Miata', 'CX-3', 'CX-30']
  },
  {
    brand: 'Jeep',
    models: ['Wrangler', 'Grand Cherokee', 'Cherokee', 'Renegade', 'Compass', 'Gladiator', 'Wagoneer']
  },
  {
    brand: 'Ram',
    models: ['1500', '2500', '3500', 'Promaster', 'Promaster City', 'Chassis Cab']
  },
  {
    brand: 'GMC',
    models: ['Sierra', 'Acadia', 'Terrain', 'Yukon', 'Canyon', 'Savana', 'Envoy']
  },
  {
    brand: 'Tesla',
    models: ['Model S', 'Model 3', 'Model X', 'Model Y', 'Roadster']
  },
  {
    brand: 'Volvo',
    models: ['S60', 'XC60', 'XC90', 'S90', 'XC40', 'V60', 'V90']
  },
  {
    brand: 'Cadillac',
    models: ['Escalade', 'CTS', 'XT5', 'XT4', 'CT6', 'XT6', 'ATS']
  },
  {
    brand: 'Dodge',
    models: ['Challenger', 'Charger', 'Durango', 'Journey', 'Grand Caravan', 'Dart', 'Ram 1500', 'Ram 2500', 'Ram 3500', 'Viper']
  },
  {
    brand: 'Buick',
    models: ['Encore', 'Enclave', 'Regal', 'Lacrosse', 'Verano', 'Cascada', 'Envision', 'Century', 'Rendezvous', 'Park Avenue']
  },
  {
    brand: 'Acura',
    models: ['TLX', 'MDX', 'RDX', 'ILX', 'RLX', 'NSX', 'RSX', 'CL', 'TSX', 'Integra']
  },
  {
    brand: 'Infiniti',
    models: ['Q50', 'QX60', 'QX80', 'Q60', 'QX50', 'Q70', 'QX30', 'QX70', 'G35', 'FX35']
  },
  {
    brand: 'Lincoln',
    models: ['MKZ', 'Navigator', 'Nautilus', 'Aviator', 'Continental', 'Corsair', 'MKX', 'Town Car', 'MKS', 'Mark LT']
  },
  {
    brand: 'Land Rover',
    models: ['Range Rover', 'Discovery', 'Evoque', 'Defender', 'Velar', 'Sport', 'Freelander', 'Discovery Sport', 'LR4', 'LR2']
  },
  {
    brand: 'Jaguar',
    models: ['XE', 'F-Pace', 'I-Pace', 'XF', 'XJ', 'E-Pace', 'S-Type', 'X-Type', 'XK', 'XKR']
  },
  {
    brand: 'Porsche',
    models: ['911', 'Cayenne', 'Panamera', 'Macan', 'Boxster', 'Cayman', 'Taycan', '918 Spyder', '944', '928']
  },
  {
    brand: 'Fiat',
    models: ['500', '500X', '500L', '124 Spider', 'Punto', 'Doblo', 'Tipo', 'Panda', 'Qubo', 'Uno']
  },
  {
    brand: 'Mitsubishi',
    models: ['Outlander', 'Eclipse Cross', 'Mirage', 'Pajero', 'Lancer', 'ASX', 'Montero', 'Strada', 'Galant', 'Attrage']
  },
  {
    brand: 'Fiat',
    models: ['500', 'Panda', 'Tipo', 'Punto', '500X']
  },
  {
    brand: 'Mitsubishi',
    models: ['Outlander', 'Eclipse Cross', 'L200', 'ASX', 'Pajero Sport']
  },
  {
    brand: 'Chrysler',
    models: ['300', 'Pacifica', 'Voyager', 'Aspen', 'PT Cruiser']
  },
  {
    brand: 'Mini',
    models: ['Cooper', 'Countryman', 'Clubman', 'Convertible', 'Paceman']
  },
  {
    brand: 'Alfa Romeo',
    models: ['Giulia', 'Stelvio', '4C', 'Giulietta', 'MiTo']
  },
  {
    brand: 'Genesis',
    models: ['G70', 'G80', 'G90']
  },
  {
    brand: 'Smart',
    models: ['Fortwo', 'Forfour', 'Roadster']
  },
  {
    brand: 'Aston Martin',
    models: ['DB11', 'Vantage', 'DBS Superleggera', 'Rapide', 'DBX']
  },
  {
    brand: 'Ferrari',
    models: ['488', '812 Superfast', 'Portofino', 'Roma', 'SF90 Stradale']
  },
  {
    brand: 'Maserati',
    models: ['Ghibli', 'Quattroporte', 'Levante', 'GranTurismo', 'GranCabrio']
  },
  {
    brand: 'Bugatti',
    models: ['Chiron', 'Veyron', 'Divo']
  },
  {
    brand: 'McLaren',
    models: ['720S', '570S', 'P1']
  },
  {
    brand: 'Rolls-Royce',
    models: ['Phantom', 'Cullinan', 'Ghost']
  },
  {
    brand: 'Bentley',
    models: ['Continental GT', 'Bentayga', 'Flying Spur']
  },
  {
    brand: 'Lotus',
    models: ['Evora', 'Elise', 'Exige']
  },
  {
    brand: 'Maybach',
    models: ['S-Class', 'GLS']
  },
  {
    brand: 'Pagani',
    models: ['Huayra', 'Zonda']
  },
  {
    brand: 'Abarth',
    models: ['595', '124 Spider']
  },
  {
    brand: 'Lancia',
    models: ['Ypsilon', 'Delta']
  },
  {
    brand: 'Citroën',
    models: ['C3', 'C4', 'C5']
  },
  {
    brand: 'Citroën',
    models: ['C3', 'C4', 'C5', 'Berlingo']
  },
  {
    brand: 'Peugeot',
    models: ['208', '308', '3008', '5008']
  },
  {
    brand: 'Renault',
    models: ['Clio', 'Mégane', 'Captur', 'Kadjar']
  },
  {
    brand: 'DS Automobiles',
    models: ['DS3', 'DS4', 'DS5']
  },
  {
    brand: 'Dacia',
    models: ['Sandero', 'Duster', 'Logan']
  },
  {
    brand: 'SEAT',
    models: ['Ibiza', 'León', 'Arona', 'Ateca', 'Tarraco']
  },
  {
    brand: 'Skoda',
    models: ['Octavia', 'Superb', 'Karoq', 'Kodiaq']
  },
  {
    brand: 'Volkswagen Commercial Vehicles',
    models: ['Transporter', 'Caddy', 'Crafter']
  },
  {
    brand: 'Mitsubishi Motors',
    models: ['Outlander', 'ASX', 'Eclipse Cross']
  },
  {
    brand: 'Suzuki',
    models: ['Swift', 'Vitara', 'Jimny']
  },
  {
    brand: 'Hino',
    models: ['Dutro', 'Ranger', 'Poncho', 'Liesse']
  },
  {
    brand: 'Scania',
    models: ['R-Series', 'S-Series', 'G-Series', 'P-Series']
  },
  {
    brand: 'MAN',
    models: ['TGX', 'TGS', 'TGM', 'TGL']
  },
  {
    brand: 'Iveco',
    models: ['Stralis', 'Eurocargo', 'Daily', 'Trakker']
  },
  {
    brand: 'Freightliner',
    models: ['Cascadia', 'M2 106', 'Columbia', '114SD']
  },
  {
    brand: 'Western Star',
    models: ['4900', '5700', '4700', '6900']
  },
  {
    brand: 'Peterbilt',
    models: ['579', '389', '567', '579 UltraLoft']
  },
  {
    brand: 'Kenworth',
    models: ['T680', 'W990', 'T880', 'T800']
  },
  {
    brand: 'Mack Trucks',
    models: ['Anthem', 'Granite', 'Pinnacle', 'LR']
  },
  {
    brand: 'International Trucks',
    models: ['LT Series', 'RH Series', 'MV Series', 'HV Series']
  },
  {
    brand: 'Volvo Trucks',
    models: ['VNL Series', 'VNR Series', 'VHD Series', 'VAH Series']
  },
  {
    brand: 'DAF Trucks',
    models: ['XF', 'CF', 'LF']
  },
  {
    brand: 'FAW',
    models: ['J7', 'Jiefang J6P', 'Jiefang JH6', 'Jiefang JH6']
  },
  {
    brand: 'JAC',
    models: ['Sunray', 'N-Series', 'M5', 'T6']
  },
  {
    brand: 'Dongfeng Motor',
    models: ['EQ2050', 'Dongfeng Warrior', 'Joyear', 'DFSK']
  },
  {
    brand: 'Changan Automobile',
    models: ['CS', 'Raeton', 'Alsvin', 'Eado']
  },
  {
    brand: 'BYD',
    models: ['Tang', 'Song', 'Yuan', 'Qin']
  },
  {
    brand: 'BAIC Group',
    models: ['Senova', 'X', 'Weiwang', 'D50']
  },
  {
    brand: 'GAC Group',
    models: ['Trumpchi', 'Aion', 'Gonow', 'Hino']
  },
  {
    brand: 'Great Wall Motors',
    models: ['Haval', 'Wey', 'Ora', 'Great Wall']
  },
  {
    brand: 'Geely Auto',
    models: ['Emgrand', 'Vision', 'Boyue', 'Coolray', 'Preface', 'Xingyue', 'Borui', 'Binrui', 'Jiaji', 'Star']
  },
  {
    brand: 'Zotye Auto',
    models: ['T600', 'T700', 'SR9', 'SR7', 'E200', 'Z300', 'Z100', 'Z500', 'Z360', 'Z560']
  },
  {
    brand: 'Chery',
    models: ['Tiggo 7', 'Tiggo 8', 'Tiggo 3X', 'Arrizo 5', 'Arrizo 6', 'Arrizo 7', 'Fulwin', 'QQ', 'eQ1', 'eQ5']
  },
  {
    brand: 'SAIC Motor',
    models: ['MG ZS', 'MG Hector', 'MG RX5', 'MG 5', 'MG 6', 'Roewe RX3', 'Roewe RX5', 'Roewe RX8', 'Roewe i5', 'Roewe i6']
  },
  {
    brand: 'Changhe Auto',
    models: ['Q25', 'Q35', 'Freedom M50', 'Q7', 'Q25L', 'Q7L', 'A6', 'A8', 'A5', 'Q6']
  },
  {
    brand: 'Lifan Group',
    models: ['X70', 'X80', 'X60', 'Myway', '650', '520', '820', '530', '720', '330']
  },
  {
    brand: 'Wuling Motors',
    models: ['Hong Guang', 'Rong Guang', 'Sunshine', 'Zhiguang', 'Future', 'Hongtu', 'Cortez', 'Confero', 'Formo', 'Almaz']
  },
  {
    brand: 'Haval',
    models: ['H6', 'H9', 'H2', 'F7', 'F5', 'F7x', 'H4', 'H1', 'H5', 'Jolion']
  },
  {
    brand: 'Venucia',
    models: ['T90', 'D60', 'Xing', 'R30', 'R50', 'T70', 'M30', 'E30', 'e30', 'D50']
  },
  {
    brand: 'NIO',
    models: ['ES8', 'ES6', 'EC6', 'EP9', 'ET7', 'ET5', 'ET6', 'EP7', 'E10', 'EF9']
  },
  {
    brand: 'NIO',
    models: ['ES8', 'ES6', 'EC6']
  },
  {
    brand: 'Xpeng Motors',
    models: ['G3', 'P7']
  },
  {
    brand: 'WM Motor',
    models: ['W5', 'W6']
  },
  {
    brand: 'Arcfox',
    models: ['α-T', 'α-S']
  },
  {
    brand: 'Roewe',
    models: ['i5', 'RX5', 'RX3']
  },
  {
    brand: 'Borgward',
    models: ['BX7', 'BX5', 'BX6']
  },
  {
    brand: 'Foton',
    models: ['Tunland', 'View', 'Sauvana']
  },
  {
    brand: 'King Long',
    models: ['XMQ6900', 'XMQ6127', 'XMQ6119']
  },
  {
    brand: 'Sunlong',
    models: ['SLK6112', 'SLK6793', 'SLK6752']
  },
  {
    brand: 'Yutong',
    models: ['ZK6122', 'ZK6119', 'ZK6125']
  }
])

function getModelsByBrand(selectedBrand: string) {
  const foundBrandAndModels = brandsAndModels.find(({ brand }) => brand == selectedBrand)
  return foundBrandAndModels ? foundBrandAndModels.models : []
}
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto pt-12 mb-11">
      <Modal v-if="showFormConfirmationModal" @closeModal="showFormConfirmationModal = false" :width="'sm:w-1/3 w-full'" :height="'h-1/3'" :showCloseIcon="true">
        <div class="cursor-default flex flex-col justify-center items-center">
          <p class="px-10 py-1 text-gray-700 text-xl font-semibold mb-10">¿Guardar los cambios?</p>
          <span class="w-full flex flex-row justify-evenly items-center">
            <button
              type="button"
              class="mr-5 hover:opacity-80 hover:border-blue-700 border-gray-200 border-2 cursor-pointer rounded-lg text-blue-700 py-2 px-6 font-black text-xs"
              @click="showFormConfirmationModal = false"
            >CANCELAR</button>
            <button
              type="button"
              class="hover:opacity-80 cursor-pointer rounded-lg text-white bg-blue-700 py-2 px-6 font-black text-xs"
              @click="submitFormData"
            >GUARDAR</button>
          </span>
        </div>
      </Modal>

      <h1 class="text-left pl-5 text-2xl text-blue-700 font-bold mb-4">CONFIGURACIÓN</h1>

      <p class="text-left pl-5 text-gray-700 font-normal mb-12">Administra tus datos personales y de tus autos.</p>

      <form class="mb-4 rounded-xs w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-rose-100 rounded-xs px-4 py-5 drop-shadow-md">
        <h2 class="text-lg text-left font-bold mb-6 text-blue-700">Información de contacto</h2>

        <span class="flex sm:flex-row flex-col justify-between w-full items-baseline">
          <div class="mb-4 sm:mb-0 sm:mr-3 flex flex-col w-full">
            <label for="first-name" class="font-bold text-xs mb-1">Nombres*</label>
            <input
              id="first-name"
              v-model="userStore.firstName"
              type="text"
              placeholder="Ingresa tu nombre"
              class="pl-2 rounded-md"
              style="outline: none;"
              :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors.firstName }"
            />
            <p v-if="userStore.meta.touched && userStore.errors.firstName" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors.firstName }}</p>
          </div>
          <div class="mb-4 sm:mb-0 sm:mr-3 flex flex-col w-full">
            <label for="last-name" class="font-bold text-xs mb-1">Apellidos*</label>
            <input
              id="last-name"
              v-model="userStore.lastName"
              type="text"
              placeholder="Ingresa tus apellidos"
              class="pl-2 rounded-md"
              style="outline: none;"
              :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors.lastName }"
            />
            <p v-if="userStore.meta.touched && userStore.errors.lastName" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors.lastName }}</p>
          </div>
          <div class="flex flex-col w-full">
            <label for="phone" class="font-bold text-xs mb-1">Teléfono*</label>
            <input
              id="phone"
              v-model="userStore.phone"
              type="tel"
              placeholder="Ingresa tu número de teléfono"
              class="pl-2 rounded-md"
              style="outline: none;"
              :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors.phone }"
            />
            <p v-if="userStore.meta.touched && userStore.errors.phone" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors.phone }}</p>
          </div>
        </span>
      </form>

      <form class="mb-4 w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-rose-100 px-4 py-5 drop-shadow-md">
        <span class="flex flex-row justify-between items-center w-full mb-6">
          <h2 class="text-lg text-left font-bold text-blue-700">Información de tus automóviles</h2>
          <button
            type="button" @click="userStore.addCar"
            class="pointer-default hover:opacity-90 border-2 hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700 text-blue-100 bg-blue-700 font-bold rounded-md px-4 py-1"
          >Agregar automóvil <i class="fas fa-plus"></i></button>
        </span>
        
        <TransitionGroup name="fade" tag="ul" class="w-full">
          <li v-for="(car, index) in userStore.cars" :key="car.key" class="flex flex-col justify-between items-center w-full">
            <span class="flex flex-col justify-between items-center w-full bg-rose-50 px-2 py-2">          
              <span class="w-full flex flex-row justify-between items-center mb-4">
                <p class="text-xl text-left text-blue-700 font-black">AUTO N° {{ index + 1 }}</p>
                <button type="button" @click="userStore.deleteCar(index)" class="ml-4 px-2 rounded-md text-md font-black hover:opacity-90 hover:bg-blue-700 hover:text-blue-100 text-blue-700 bg-blue-100">Quitar automóvil <i class="fas fa-trash"></i></button>
              </span>

              <span class="w-full flex flex-row justify-start items-center ml-5 mt-4 mb-10">
                <p class="text-md text-left text-blue-700 font-black mr-3">Próxima revisión técnica:</p>
                <p class="text-md text-left text-gray-700 font-bold">{{ getNextRevisionDate(car.value.useType, car.value.plate, String(car.value.year)) }}</p>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline sm:mb-2">
                <div class="flex flex-col mb-2 w-full sm:mr-2">
                  <label for="brand" class="font-bold text-xs mb-1">Marca</label>
                  <select
                    id="brand"
                    v-model="car.value.brand"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                    :class="{ 'border-red-400': userStore.meta.touched && userStore.errors[`cars.${index}.brand`] }"
                  >
                    <option class="text-xs" :value="brand" v-for="({ brand }, index) in brandsAndModels" :key="index">{{ brand }}</option>
                  </select>
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.brand`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.brand`] }}</p>
                </div>
                <div class="flex flex-col mb-2 w-full sm:mr-2">
                  <label for="model" class="font-bold text-xs mb-1">Modelo</label>
                  <select
                    id="model"
                    v-model="car.value.model"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                    :class="{ 'border-red-400': userStore.meta.touched && userStore.errors[`cars.${index}.model`] }"
                  >
                    <option class="text-xs" :value="model" v-for="(model, index) in getModelsByBrand(car.value.brand)" :key="index">{{ model }}</option>
                  </select>
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.model`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].model`] }}</p>
                </div>
                <div class="flex flex-col mb-2 w-full sm:mr-2">
                  <label for="model" class="font-bold text-xs mb-1">Placa</label>
                  <input
                    id="model"
                    v-model="car.value.plate"
                    type="text"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2': userStore.meta.touched && userStore.errors[`cars.${index}.plate`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.plate`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].plate`] }}</p>
                </div>
                <div class="flex flex-col sm:mb-2 w-full">
                  <label for="fuel-type" class="font-bold text-xs mb-1">Tipo de uso</label>
                  <select
                    id="fuel-type"
                    v-model="car.value.useType"
                    class="pl-2 bg-white w-full rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                    :class="{ 'border-red-400': userStore.meta.touched && userStore.errors[`cars.${index}.useType`] }"
                  >
                    <option class="text-xs" value="privateUse">Particular</option>
                    <option class="text-xs" value="serviceUse">De servicios</option>
                    <option class="text-xs" value="serviceUse:peopleTransportation">De servicios: transportes de personas</option>
                  </select>
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.useType`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].useType`] }}</p>
                </div>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline sm:mb-2">
                <div class="flex flex-col mb-2 w-full mr-1">
                  <label for="year" class="font-bold text-xs mb-1">Año</label>
                  <VueDatePicker year-picker auto-apply
                    id="year"
                    v-model="car.value.year"
                    input-class-name="pl-2 bg-white rounded-md h-9"
                    style="outline: none;"
                    :state="userStore.meta.touched && userStore.errors[`cars.${index}.soatExpiry`] ? false : true"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.year`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].year`] }}</p>
                </div>
                <div class="flex flex-col mb-2 w-full mr-1 ml-1">
                  <label for="mileage" class="font-bold text-xs mb-1">Kilometraje Actual</label>
                  <input
                    id="mileage"
                    v-model="car.value.mileage"
                    type="number"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                    :class="{ 'border-red-400': userStore.meta.touched && userStore.errors[`cars.${index}.mileage`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.mileage`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.mileage`] }}</p>
                </div>
                <div class="flex flex-col mb-2 w-full ml-1">
                  <label for="fuel-type" class="font-bold text-xs mb-1">Tipo de Combustible</label>
                  <select
                    id="fuel-type"
                    v-model="car.value.fuelType"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                    :class="{ 'border-red-400': userStore.meta.touched && userStore.errors[`cars.${index}.fuelType`] }"
                  >
                    <option class="text-xs" value="gasolina">Gasolina</option>
                    <option class="text-xs" value="gnv">GNV</option>
                    <option class="text-xs" value="glp">GLP</option>
                    <option class="text-xs" value="diesel">Diésel</option>
                    <option class="text-xs" value="hibrido">Híbrido</option>
                  </select>
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.fuelType`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].fuelType`] }}</p>
                </div>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline">        
                <div class="flex flex-col mb-2 w-full mr-1">
                  <label for="soat-expiry" class="font-bold text-xs mb-1">Fecha vencimiento SOAT</label>
                  <VueDatePicker :enable-time-picker="false" auto-apply
                    v-model="car.value.soatExpiry"
                    input-class-name="pl-2 bg-white rounded-lg"
                    style="outline: none;"
                    :state="userStore.meta.touched && userStore.errors[`cars.${index}.soatExpiry`] ? false : true"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.soatExpiry`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.soatExpiry`] }}</p>
                </div>
                <div v-if="['gnv', 'glp'].includes(car.value.fuelType)" class="flex flex-col mb-2 w-full mr-1 ml-1">
                  <label for="annual-inspection" class="font-bold text-xs mb-1">Fecha certificación GNV/GLP</label>
                  <VueDatePicker :enable-time-picker="false" auto-apply
                    v-model="car.value.ngvLpgCertificationDate"
                    input-class-name="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :state="userStore.meta.touched && userStore.errors[`cars.${index}.ngvLpgCertificationDate`] ? false : true"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.ngvLpgCertificationDate`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.ngvLpgCertificationDate`] }}</p>
                </div>
                <div class="flex flex-col mb-2 w-full ml-1">
                  <label for="technical-inspection" class="font-bold text-xs mb-1">Fecha revisión vehicular</label>
                  <VueDatePicker :enable-time-picker="false" auto-apply
                    v-model="car.value.vehicleInspectionDate"
                    input-class-name="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :state="userStore.meta.touched && userStore.errors[`cars.${index}.vehicleInspectionDate`] ? false : true"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.vehicleInspectionDate`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.vehicleInspectionDate`] }}</p>
                </div>
              </span>
            </span>

            <div v-if="index != (userStore.cars.length - 1) && userStore.cars.length > 0" class="h-0.5 w-full my-8 bg-sky-50"></div>
          </li>
        </TransitionGroup>
      </form>

      <button :disabled="userStore.isSubmitting" type="button" @click="handleFormConfirmationModal" class="w-11/12 flex flex-row justify-center items-center mx-5 mb-3 p-1 rounded-md bg-blue-700 hover:opacity-80 text-blue-50 font-bold">{{ userStore.isSubmitting ? 'ENVIANDO...' : 'GUARDAR' }}</button>
    </div>
  </Layout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>