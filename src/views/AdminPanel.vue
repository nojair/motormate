<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import VueDatePicker from '@vuepic/vue-datepicker'

import Layout from '@/components/Layout.vue'

import getNextRevisionDate from '@/utils'

import '@vuepic/vue-datepicker/dist/main.css'

const userStore = useUserStore()

const manualUserUID = ref('')
let foundUser = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  cars: [{
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    mileage: '',
    fuelType: 'gasolina',
    soatExpiry: '',
    ngvLpgCertificationDate: '',
    vehicleInspectionDate: '',
    useType: 'private',
    plate: ''
  }]
})

async function handleGetUserByUID() {
  await userStore.getUserByUid(manualUserUID.value).then(foundData => Object.assign(foundUser, foundData))
} 
</script>

<template>
  <Layout>
    <h1 class="text-left pl-5 text-2xl text-blue-700 font-bold my-4">PANEL ADMINISTRATIVO</h1>

    <span class="flex flex-row justify-center items-center">
      <input
        type="text"
        v-model="manualUserUID"
        placeholder="Ingresa un UID"
        class="w-1/3 pl-2 bg-white rounded-md py-1 border-2 h-9"
      >
      <button class="pointer-default hover:opacity-90 border-2 hover:border-blue-700 hover:bg-blue-100 hover:text-blue-700 text-blue-100 bg-blue-700 font-bold rounded-md px-4 py-1" @click="handleGetUserByUID">OBTENER</button>
    </span>

    <form class="mb-4 rounded-xs w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-rose-100 rounded-xs px-4 py-5 drop-shadow-md">
        <h2 class="text-lg text-left font-bold mb-6 text-blue-700">Información de contacto</h2>

        <span class="flex sm:flex-row flex-col justify-between w-full items-baseline">
          <div class="mb-4 sm:mb-0 sm:mr-3 flex flex-col w-full">
            <label for="first-name" class="font-bold text-xs mb-1">Nombres*</label>
            <input
              id="first-name"
              v-model="foundUser.firstName"
              type="text"
              placeholder="Ingresa tu nombre"
              class="pl-2 rounded-md"
              style="outline: none;"
            />
          </div>
          <div class="mb-4 sm:mb-0 sm:mr-3 flex flex-col w-full">
            <label for="last-name" class="font-bold text-xs mb-1">Apellidos*</label>
            <input
              id="last-name"
              v-model="foundUser.lastName"
              type="text"
              placeholder="Ingresa tus apellidos"
              class="pl-2 rounded-md"
              style="outline: none;"
            />
          </div>
          <div class="flex flex-col w-full">
            <label for="phone" class="font-bold text-xs mb-1">Teléfono*</label>
            <input
              id="phone"
              v-model="foundUser.phone"
              type="tel"
              placeholder="Ingresa tu número de teléfono"
              class="pl-2 rounded-md"
              style="outline: none;"
            />
          </div>
        </span>
      </form>

      <form class="mb-4 w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-rose-100 px-4 py-5 drop-shadow-md">     
          <li v-for="(car, index) in foundUser.cars" :key="index" class="flex flex-col justify-between items-center w-full">
            <span class="flex flex-col justify-between items-center w-full bg-rose-50 px-2 py-2">          
              <span class="w-full flex flex-row justify-between items-center mb-4">
                <p class="text-xl text-left text-blue-700 font-black">AUTO N° {{ index + 1 }}</p>
              </span>

              <span class="w-full flex flex-row justify-start items-center ml-5 mt-4 mb-10">
                <p class="text-md text-left text-blue-700 font-black mr-3">Próxima revisión técnica:</p>
                <p class="text-md text-left text-gray-700 font-bold">{{ getNextRevisionDate(car.useType, car.plate, String(car.year)) }}</p>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline sm:mb-2">
                <div class="flex flex-col mb-2 w-full sm:mr-2">
                  <label for="brand" class="font-bold text-xs mb-1">Marca</label>
                  <select
                    id="brand"
                    v-model="car.brand"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                  >
                    <option class="text-xs" :value="car.brand">{{ car.brand }}</option>
                  </select>
                </div>
                <div class="flex flex-col mb-2 w-full sm:mr-2">
                  <label for="model" class="font-bold text-xs mb-1">Modelo</label>
                  <select
                    id="model"
                    v-model="car.model"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                  >
                    <option class="text-xs" :value="car.model">{{ car.model }}</option>
                  </select>
                </div>
                <div class="flex flex-col mb-2 w-full sm:mr-2">
                  <label for="model" class="font-bold text-xs mb-1">Placa</label>
                  <input
                    id="model"
                    v-model="car.plate"
                    type="text"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                  />
                </div>
                <div class="flex flex-col sm:mb-2 w-full">
                  <label for="fuel-type" class="font-bold text-xs mb-1">Tipo de uso</label>
                  <select
                    id="fuel-type"
                    v-model="car.useType"
                    class="pl-2 bg-white w-full rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                  >
                    <option class="text-xs" value="privateUse">Particular</option>
                    <option class="text-xs" value="serviceUse">De servicios</option>
                    <option class="text-xs" value="serviceUse:peopleTransportation">De servicios: transportes de personas</option>
                  </select>
                </div>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline sm:mb-2">
                <div class="flex flex-col mb-2 w-full mr-1">
                  <label for="year" class="font-bold text-xs mb-1">Año</label>
                  <VueDatePicker year-picker
                    id="year"
                    v-model="car.year"
                    input-class-name="pl-2 bg-white rounded-md h-9"
                    style="outline: none;"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full mr-1 ml-1">
                  <label for="mileage" class="font-bold text-xs mb-1">Kilometraje Actual</label>
                  <input
                    id="mileage"
                    v-model="car.mileage"
                    type="number"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full ml-1">
                  <label for="fuel-type" class="font-bold text-xs mb-1">Tipo de Combustible</label>
                  <select
                    id="fuel-type"
                    v-model="car.fuelType"
                    class="pl-2 bg-white rounded-md py-1 border-2 h-9"
                    style="outline: none;"
                  >
                    <option class="text-xs" value="gasolina">Gasolina</option>
                    <option class="text-xs" value="gnv">GNV</option>
                    <option class="text-xs" value="glp">GLP</option>
                    <option class="text-xs" value="diesel">Diésel</option>
                    <option class="text-xs" value="hibrido">Híbrido</option>
                  </select>
                </div>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline">        
                <div class="flex flex-col mb-2 w-full mr-1">
                  <label for="soat-expiry" class="font-bold text-xs mb-1">Fecha vencimiento SOAT</label>
                  <VueDatePicker :enable-time-picker="false"
                    v-model="car.soatExpiry"
                    input-class-name="pl-2 bg-white rounded-lg"
                    style="outline: none;"
                  />
                </div>
                <div v-if="['gnv', 'glp'].includes(car.fuelType)" class="flex flex-col mb-2 w-full mr-1 ml-1">
                  <label for="annual-inspection" class="font-bold text-xs mb-1">Fecha certificación GNV/GLP</label>
                  <VueDatePicker :enable-time-picker="false"
                    v-model="car.ngvLpgCertificationDate"
                    input-class-name="pl-2 bg-white rounded-md"
                    style="outline: none;"
                  />
                </div>
                <div class="flex flex-col mb-2 w-full ml-1">
                  <label for="technical-inspection" class="font-bold text-xs mb-1">Fecha revisión vehicular</label>
                  <VueDatePicker :enable-time-picker="false"
                    v-model="car.vehicleInspectionDate"
                    input-class-name="pl-2 bg-white rounded-md"
                    style="outline: none;"
                  />
                </div>
              </span>
            </span>

            <div v-if="index != (userStore.cars.length - 1) && userStore.cars.length > 0" class="h-0.5 w-full my-8 bg-sky-50"></div>
          </li>
      </form>
  </Layout>
</template>