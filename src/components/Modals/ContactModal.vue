<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'

import { computed, reactive } from 'vue'

import { useLoginModalStore, useRegisterModalStore, useContactModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'

const loginModalStore = useLoginModalStore()
const registerModalStore = useRegisterModalStore()
const contactModalStore = useContactModalStore()
const userStore = useUserStore()
const authStore = useAuthStore()

function goToRegisterView() {
  contactModalStore.setShowModal(false)
  loginModalStore.setShowModal(false)
  registerModalStore.setShowModal(true)
}

function goToLoginView() {
  contactModalStore.setShowModal(false)
  registerModalStore.setShowModal(false)
  loginModalStore.setShowModal(true)
}

const corporativePhone = 947387067
const SERVICES_KEYS_FOR_MAINTENANCE = ['tuning', 'brakingSystem', 'airConditioning']
const oilTypes = reactive([
  'Castrol EDGE (0W-20)',
  'Castrol EDGE (5W-20)',
  'Castrol EDGE (5W-30)',
  'Castrol (GTX 5W-20)',
  'Castrol (GTX 5W-30)',
  'Mobil 1 (0W-20)',
  'Mobil 1 (5W-20)',
  'Mobil 1 (5W-30)',
  'Pennzoil Platinum (0W-20)',
  'Pennzoil Platinum (5W-20)',
  'Pennzoil Platinum (5W-30)',
  'Pennzoil High Mileage (5W-20)',
  'Pennzoil High Mileage (5W-30)',
  'Valvoline Full Synthetic (0W-20)',
  'Valvoline Full Synthetic (5W-20)',
  'Valvoline Full Synthetic (5W-30)',
  'Valvoline High Mileage (5W-20)',
  'Valvoline High Mileage (5W-30)',
  'Shell Helix Ultra (0W-20)',
  'Shell Helix Ultra (5W-20)',
  'Shell Helix Ultra (5W-30)'
])

const whatsAppLink = computed(() => {
  const presentation = `https://api.whatsapp.com/send?phone=${corporativePhone}&text=Mi%20nombre%20es%20*${userStore.firstName}*,%20ID%20*${userStore.uid}*,%20tengo%20un%20*${contactModalStore.selectedCar}*%20y%20requiero%20servicio%20de%20*${contactModalStore.selectedService}*`
  const motive = contactModalStore.selectedMotive ? `%20por%20motivos%20de%20*${contactModalStore.selectedMotive}*` : ''
  const motiveDetail = contactModalStore.motiveDetail ? `%20(Detalles%20*${contactModalStore.motiveDetail}*)` : ''
  const oilType = contactModalStore.oilType ? `%20con%20aceite%20*${contactModalStore.oilType}*` : ''

  return presentation + motive + motiveDetail + oilType + '.'
})

function handleOpenChat() {
  contactModalStore.handleSubmit((values) => {
    window.open(whatsAppLink.value, '_blank')
  })()
}

function handleGoToMiProfile() {
  contactModalStore.resetForm()
  contactModalStore.setShowModal(false)
}
</script>

<template>
  <Modal v-if="contactModalStore.showModal" @closeModal="contactModalStore.setShowModal(false)" :width="'w-3/4'" :height="'h-4/5'" :showCloseIcon="true">
    <Loading v-if="contactModalStore.isLoading" />
    <div class="w-2/3 h-4/5 flex flex-col sm:flex-row justify-evenly items-center" v-else-if="!authStore.isAuthenticated">
      <p class="text-gray-700 font-bold">Es necesario</p>
      <button type="button" class="hover:opacity-80 cursor-pointer rounded-lg text-white bg-blue-700 py-2 px-6 font-black" @click="goToLoginView">INICIAR SESIÓN</button>
      <p class="text-gray-700 font-bold">o</p>
      <button type="button" class="hover:opacity-80 cursor-pointer rounded-lg text-white bg-blue-700 py-2 px-6 font-black" @click="goToRegisterView">REGISTRARSE</button>
      <p class="text-gray-700 font-bold">para continuar</p>
    </div>
    <div v-else class="w-full h-full flex flex-col justify-center items-center">
      <form class="w-full h-full flex flex-col justify-evenly items-center py-10">
        <p class="text-gray-700 text-md text-center mb-2">Elegiste el servicio de <span class="font-black text-blue-700 underline">{{ contactModalStore.selectedService }}</span></p>

        <span class="flex flex-col justify-center items-start bg-blue-200 px-10 py-4 rounded-md">
          <label for="car" class="mb-2 text-xs text-left text-blue-700 font-black">Selecciona tu auto:</label>
          <select
            id="car"
            name="car"
            v-model="contactModalStore.selectedCar"
            class="outline-none focus:outline-none rounded-md bg-gray-50 w-fit min-w-64 text-md"
            :class="{ 'border-2 border-red-700': contactModalStore.meta.touched && contactModalStore.errors.selectedCar }"
          >
            <option class="text-xs" v-for="(car, index) in userStore.cars" :key="index"
              :value="`${car.value.brand} ${car.value.model}, ${car.value.year}`"
            >{{ car.value.brand }} {{ car.value.model }}, {{ car.value.year }}</option>
          </select>
          <span @click="handleGoToMiProfile" v-if="contactModalStore.meta.touched && contactModalStore.errors.selectedCar" class="flex flex-col justify-start items-start">
            <p class="text-xs text-red-700 font-medium pl-2">{{ contactModalStore.errors.selectedCar }}</p>
            <router-link :to="{ name: 'Profile' }" class="pl-2 cursor-pointer text-xs text-red-700 font-extrabold">===> Ir a mi perfil</router-link>
          </span>
        </span>

        <span v-if="SERVICES_KEYS_FOR_MAINTENANCE.includes(contactModalStore.key || '')"
          class="flex flex-col justify-center items-start bg-blue-200 px-10 py-4 rounded-md"
        >
          <label for="reason" class="mb-2 text-xs text-blue-700 font-black">Motivo de la consulta:</label>
          <select
            id="reason"
            name="reason"
            v-model="contactModalStore.selectedMotive"
            class="outline-none focus:outline-none rounded-md bg-gray-50 w-fit min-w-64 text-md"
            :class="{ 'border-2 border-red-700': contactModalStore.meta.touched && contactModalStore.errors.selectedMotive }"
          >
            <template v-if="contactModalStore.key == 'tuning'">
              <option class="text-xs" value="prevención">Prevención</option>
              <option class="text-xs" value="fallas existentes">Fallas existentes</option>
            </template>
            <template v-else-if="contactModalStore.key == 'brakingSystem'">
              <option class="text-xs" value="mantenimiento">Mantenimiento preventivo</option>
              <option class="text-xs" value="inspección">Inspección</option>
              <option class="text-xs" value="fallas existentes">Fallas existentes</option>
              <option class="text-xs" value="otros">Otros</option>
            </template>
            <template v-else-if="contactModalStore.key == 'airConditioning'">
              <option class="text-xs" value="mantenimiento">Mantenimiento preventivo</option>
              <option class="text-xs" value="reparación">Reparación</option>
            </template>
          </select>
          <p v-if="contactModalStore.meta.touched && contactModalStore.errors.selectedMotive" class="text-xs text-red-700 font-medium pl-2">{{ contactModalStore.errors.selectedMotive }}</p>
        </span>

        <span v-if="contactModalStore.key == 'oilChange'"
          class="flex flex-col justify-center items-start bg-blue-200 px-10 py-4 rounded-md"
        >
          <label for="reason" class="mb-2 text-xs text-blue-700 font-black">Tipo de aceite:</label>
          <select
            id="reason"
            name="reason"
            v-model="contactModalStore.oilType"
            class="outline-none focus:outline-none rounded-md bg-gray-50 w-fit min-w-64 text-md"
            :class="{ 'border-2 border-red-700': contactModalStore.meta.touched && contactModalStore.errors.oilType }"
          >
            <option class="text-xs" v-for="(oil, index) in oilTypes" :key="index" :value="oil">{{ oil }}</option>
          </select>
          <p v-if="contactModalStore.meta.touched && contactModalStore.errors.oilType" class="text-xs text-red-700 font-medium pl-2">{{ contactModalStore.errors.oilType }}</p>
        </span>

        <span v-if="contactModalStore.selectedMotive == 'otros' || contactModalStore.key == 'generalConsultation'"
          class="flex flex-col justify-center items-start bg-blue-200 px-10 py-4 rounded-md"
        >
          <label for="model" class="mb-2 text-xs text-blue-700 font-black">Detalle del motivo</label>
          <textarea
            id="motiveDetail"
            v-model="contactModalStore.motiveDetail"
            class="outline-none focus:outline-none rounded-md bg-gray-50 w-fit min-w-64 text-xs"
            style="outline: none;"
            :class="{ 'border-red-400 border-2 rounded-xs': contactModalStore.meta.touched && contactModalStore.errors.motiveDetail }"
            rows="2"
            cols="20"
          ></textarea>
          <p v-if="contactModalStore.meta.touched && contactModalStore.errors.motiveDetail" class="text-xs text-red-700 font-medium pl-2">{{ contactModalStore.errors.motiveDetail }}</p>
        </span>

        <button
          type="button"
          @click="handleOpenChat"
          class="mt-2 hover:opacity-80 text-center text-white text-md font-black mr-2 bg-blue-700 px-10 py-2 rounded-md  w-fit min-w-52"
        >CONTINUAR</button>
      </form>
    </div>
  </Modal>
</template>