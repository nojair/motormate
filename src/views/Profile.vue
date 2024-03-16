<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

function submitForm(): void {
  userStore.updateUser({
    uid: userStore.uid,
    firstName: userStore.firstName,
    lastName: userStore.lastName,
    phone: userStore.phone,
    cars: userStore.cars
  }).then(() => {
    alert('Tus datos se actualizaron con éxito')
  })
}

onMounted(() => {
  userStore.uid ? null : (router.push({ name: 'Home' }))
})
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto pt-5 mb-11">
      <h1 class="text-left pl-5 text-2xl text-blue-900 font-black mb-4">CONFIGURACIÓN</h1>

      <p class="text-left pl-5 text-blue-900 font-normal mb-6">Llena tus datos y activa notificaciones.</p>

      <form class="mb-4 rounded-md w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-blue-100">
        <h2 class="text-lg text-left text-blue-900 font-bold mb-6">Información de contacto</h2>

        <div class="field flex flex-col mb-2 w-full">
          <label for="first-name" class="text-blue-900 font-bold text-xs mb-1">Nombres</label>
          <input
            id="first-name"
            v-model="userStore.firstName"
            type="text"
            placeholder="Ingresa tu nombre"
            class="mb-4 pl-2"
            style="outline: none;"
          />
        </div>
        <div class="field flex flex-col w-full">
          <label for="last-name" class="text-blue-900 font-bold text-xs mb-1">Apellidos</label>
          <input
            id="last-name"
            v-model="userStore.lastName"
            type="text"
            placeholder="Ingresa tus apellidos"
            class="mb-4 pl-2"
            style="outline: none;"
          />
        </div>
        <div class="field flex flex-col w-full">
          <label for="phone" class="text-blue-900 font-bold text-xs mb-1">Teléfono</label>
          <input
            id="phone"
            v-model="userStore.phone"
            type="tel"
            placeholder="Ingresa tu número de teléfono"
            class="mb-4 pl-2"
            style="outline: none;"
          />
        </div>
      </form>

      <form class="mb-4 rounded-md w-11/12 mx-5 p-5 flex flex-col justify-center items-start bg-blue-100">
        <span class="flex flex-row justify-between items-center w-full mb-6">
          <h2 class="text-lg text-left text-blue-900 font-bold mb-4">Información de tus automóviles</h2>
          <button type="button" @click="userStore.addCar" class="pointer-default bg-blue-600 hover:opacity-80 text-blue-100 font-bold rounded-md px-4 py-1">Agregar automóvil +</button>
        </span>

        <span v-for="(car, index) in userStore.cars" :key="index" class="flex flex-col justify-between items-center w-full">
          <span class="w-full flex flex-row justify-between items-center mb-4">
            <p class="text-xl text-left text-blue-600 font-black">AUTO N° {{ index + 1 }}</p>
            <button type="button" @click="userStore.removeCar(index)" class="ml-4 px-2 rounded-md hover:bg-blue-600 hover:text-white font-bold text-blue-600 bg-white">Descartar auto</button>
          </span>

          <span class="w-full flex flex-row justify-between items-center">
            <div class="field flex flex-col mb-2 w-full mr-1">
              <label for="brand" class="text-blue-900 font-bold text-xs mb-1">Marca</label>
              <input
                id="brand"
                v-model="car.brand"
                type="text"
                placeholder="Ejemplo: Toyota, Honda, etc."
                class="mb-4 pl-2"
                style="outline: none;"
              />
            </div>
            <div class="field flex flex-col mb-2 w-full ml-1">
              <label for="model" class="text-blue-900 font-bold text-xs mb-1">Modelo</label>
              <input
                id="model"
                v-model="car.model"
                type="text"
                placeholder="Ejemplo: Corolla, Civic, etc."
                class="mb-4 pl-2"
                style="outline: none;"
              />
            </div>
          </span>

          <span class="w-full flex flex-row justify-between items-center">
            <div class="field flex flex-col mb-2 w-full mr-1">
              <label for="year" class="text-blue-900 font-bold text-xs mb-1">Año</label>
              <input
                id="year"
                v-model="car.year"
                type="number"
                placeholder="Ejemplo: 2022"
                class="mb-4 pl-2"
                style="outline: none;"
              />
            </div>
            <div class="field flex flex-col mb-2 w-full mr-1 ml-1">
              <label for="mileage" class="text-blue-900 font-bold text-xs mb-1">Kilometraje Actual</label>
              <input
                id="mileage"
                v-model="car.mileage"
                type="number"
                placeholder="Ejemplo: 50000"
                class="mb-4 pl-2"
                style="outline: none;"
              />
            </div>
            <div class="field flex flex-col mb-2 w-full ml-1">
              <label for="fuel-type" class="text-blue-900 font-bold text-xs mb-1">Tipo de Combustible</label>
              <select id="fuel-type" v-model="car.fuelType" class="mb-4 pl-2" style="outline: none;">
                <option value="gasolina">Gasolina</option>
                <option value="gnv">GNV</option>
                <option value="glp">GLP</option>
                <option value="diesel">Diésel</option>
                <option value="hibrido">Híbrido</option>
              </select>
            </div>
          </span>

          <span class="w-full flex flex-row justify-between items-center">        
            <div class="field flex flex-col mb-2 w-full mr-1">
              <label for="soat-expiry" class="text-blue-900 font-bold text-xs mb-1">Fecha vencimiento SOAT</label>
              <input
                id="soat-expiry"
                v-model="car.soatExpiry"
                type="date"
                class="mb-4 pl-2"
                style="outline: none;"
              />
            </div>
            <div class="field flex flex-col mb-2 w-full mr-1 ml-1">
              <label for="annual-inspection" class="text-blue-900 font-bold text-xs mb-1">Fecha revisión técnica anual</label>
              <input
                id="annual-inspection"
                v-model="car.annualInspection"
                type="date"
                class="mb-4 pl-2"
                style="outline: none;"
              />
            </div>
            <div class="field flex flex-col mb-2 w-full ml-1">
              <label for="technical-inspection" class="text-blue-900 font-bold text-xs mb-1">Fecha inspección técnica anual</label>
              <input
                id="technical-inspection"
                v-model="car.technicalInspection"
                type="date"
                class="mb-4 pl-2"
                style="outline: none;"
              />
            </div>
          </span>

          <div v-if="index != (userStore.cars.length - 1) && userStore.cars.length > 0" class="h-0.5 w-full mb-8 bg-white"></div>
        </span>
      </form>

      <button type="submit" @click="submitForm" class="w-11/12 flex flex-row justify-center items-center mx-5 mb-3 p-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold">GUARDAR</button>
    </div>
  </Layout>
</template>