<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

import Layout from '@/components/Layout.vue'
import Modal from '@/components/Modal.vue'

import { useUserStore } from '@/stores/user'
import { useAlertStore } from '@/stores/alert'
import { useAuthStore } from '@/stores/auth'

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
</script>

<template>
  <Layout>
    <div class="md:container md:mx-auto pt-12 mb-11">
      <Modal v-if="showFormConfirmationModal" @closeModal="showFormConfirmationModal = false" :width="'w-1/3'" :height="'h-1/3'" :showCloseIcon="true">
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
          <div class="mb-4 sm:mb-0 sm:mr-3 field flex flex-col w-full">
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
          <div class="mb-4 sm:mb-0 sm:mr-3 field flex flex-col w-full">
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
          <div class="field flex flex-col w-full">
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

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline">
                <div class="field flex flex-col mb-2 w-full mr-1">
                  <label for="brand" class="font-bold text-xs mb-1">Marca</label>
                  <input
                    id="brand"
                    v-model="car.value.brand"
                    type="text"
                    placeholder="Ejemplo: Toyota, Honda, etc."
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars.${index}.brand`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.brand`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.brand`] }}</p>
                </div>
                <div class="field flex flex-col mb-2 w-full ml-1">
                  <label for="model" class="font-bold text-xs mb-1">Modelo</label>
                  <input
                    id="model"
                    v-model="car.value.model"
                    type="text"
                    placeholder="Ejemplo: Corolla, Civic, etc."
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars.${index}.model`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.model`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].model`] }}</p>
                </div>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline">
                <div class="field flex flex-col mb-2 w-full mr-1">
                  <label for="year" class="font-bold text-xs mb-1">Año</label>
                  <input
                    id="year"
                    v-model="car.value.year"
                    type="number"
                    placeholder="Ejemplo: 2022"
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars[${index}].year`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.year`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].year`] }}</p>
                </div>
                <div class="field flex flex-col mb-2 w-full mr-1 ml-1">
                  <label for="mileage" class="font-bold text-xs mb-1">Kilometraje Actual</label>
                  <input
                    id="mileage"
                    v-model="car.value.mileage"
                    type="number"
                    placeholder="Ejemplo: 50000"
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars.${index}.mileage`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.mileage`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.mileage`] }}</p>
                </div>
                <div class="field flex flex-col mb-2 w-full ml-1">
                  <label for="fuel-type" class="font-bold text-xs mb-1">Tipo de Combustible</label>
                  <select
                    id="fuel-type"
                    v-model="car.value.fuelType"
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars.${index}.fuelType`] }"
                  >
                    <option value="gasolina">Gasolina</option>
                    <option value="gnv">GNV</option>
                    <option value="glp">GLP</option>
                    <option value="diesel">Diésel</option>
                    <option value="hibrido">Híbrido</option>
                  </select>
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.fuelType`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars[${index}].fuelType`] }}</p>
                </div>
              </span>

              <span class="w-full flex sm:flex-row flex-col justify-between items-baseline">        
                <div class="field flex flex-col mb-2 w-full mr-1">
                  <label for="soat-expiry" class="font-bold text-xs mb-1">Fecha vencimiento SOAT</label>
                  <input
                    id="soat-expiry"
                    v-model="car.value.soatExpiry"
                    type="date"
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars.${index}.soatExpiry`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.soatExpiry`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.soatExpiry`] }}</p>
                </div>
                <div v-if="['gnv', 'glp'].includes(car.value.fuelType)" class="field flex flex-col mb-2 w-full mr-1 ml-1">
                  <label for="annual-inspection" class="font-bold text-xs mb-1">Fecha certificación técnica anual</label>
                  <input
                    id="annual-inspection"
                    v-model="car.value.annualCertification"
                    type="date"
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars.${index}.annualCertification`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.annualCertification`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.annualCertification`] }}</p>
                </div>
                <div class="field flex flex-col mb-2 w-full ml-1">
                  <label for="technical-inspection" class="font-bold text-xs mb-1">Fecha revisión técnica anual</label>
                  <input
                    id="technical-inspection"
                    v-model="car.value.annualTechnicalInspection"
                    type="date"
                    class="pl-2 bg-white rounded-md"
                    style="outline: none;"
                    :class="{ 'border-red-400 border-2 rounded-xs': userStore.meta.touched && userStore.errors[`cars.${index}.annualTechnicalInspection`] }"
                  />
                  <p v-if="userStore.meta.touched && userStore.errors[`cars.${index}.annualTechnicalInspection`]" class="text-xs text-red-700 font-medium pl-2">{{ userStore.errors[`cars.${index}.annualTechnicalInspection`] }}</p>
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