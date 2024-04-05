<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'

import { computed } from 'vue'

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

const whatsAppLink = computed(() => {
  return `https://api.whatsapp.com/send?phone=${corporativePhone}&text=Hola,%20mi%20nombre%20es%20*${userStore.firstName}*%20%20Tengo%20un%20*${contactModalStore.selectedCar}*%20y%20requiero%20el%20servicio%20de%20*${contactModalStore.selectedMotive}*.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.`
})

function handleOpenChat() {
  contactModalStore.handleSubmit(() => {
    window.open(whatsAppLink.value, '_blank')
  })()
}

function handleGoToMiProfile() {
  contactModalStore.resetForm()
  contactModalStore.setShowModal(false)
}
</script>

<template>
  <Modal v-if="contactModalStore.showModal" @closeModal="contactModalStore.setShowModal(false)" :width="'w-3/4'" :height="'h-3/4'" :showCloseIcon="true">
    <Loading v-if="contactModalStore.isLoading" />
    <div class="h-full py-20 flex flex-col justify-evenly items-center" v-else-if="!authStore.isAuthenticated">
      <p class="text-gray-700 font-bold">Es necesario</p>
      <button type="button" lass="hover:opacity-80 cursor-pointer rounded-lg text-white bg-blue-700 py-2 px-6 font-black" @click="goToLoginView">INICIAR SESIÓN</button>
      <p class="text-gray-700 font-bold">o</p>
      <button type="button" class="hover:opacity-80 cursor-pointer rounded-lg text-white bg-blue-700 py-2 px-6 font-black" @click="goToRegisterView">REGISTRARSE</button>
      <p class="text-gray-700 font-bold">para continuar</p>
    </div>
    <div v-else class="w-full h-full flex flex-col justify-center items-center">
      <form class="w-full h-full flex flex-col justify-evenly items-center py-10">
        <p class="text-gray-700 text-md text-center mb-2">Para continuar, por favor selecciona tu automóvil y el motivo de tu consulta.</p>

        <span class="flex flex-col justify-center items-start bg-blue-200 px-10 py-4 rounded-md">
          <label for="car" class="mb-2 text-xs text-left text-blue-700 font-black">Selecciona tu auto:</label>
          <select
            id="car"
            name="car"
            v-model="contactModalStore.selectedCar"
            class="outline-none focus:outline-none rounded-md bg-gray-50 w-fit min-w-64 text-md"
            :class="{ 'border-2 border-red-700': contactModalStore.meta.touched && contactModalStore.errors.selectedCar }"
          >
            <option v-for="(car, index) in userStore.cars" :key="index"
              :value="`${car.value.brand} ${car.value.model}, ${car.value.year}`"
            >{{ car.value.brand }} {{ car.value.model }}, {{ car.value.year }}</option>
          </select>
          <span @click="handleGoToMiProfile" v-if="contactModalStore.meta.touched && contactModalStore.errors.selectedCar" class="flex flex-col justify-start items-start">
            <p class="text-xs text-red-700 font-medium pl-2">{{ contactModalStore.errors.selectedCar }}</p>
            <router-link :to="{ name: 'Profile' }" class="pl-2 cursor-pointer text-xs text-red-700 font-extrabold">===> Ir a mi perfil</router-link>
          </span>
        </span>

        <span class="flex flex-col justify-center items-start bg-blue-200 px-10 py-4 rounded-md">
          <label for="reason" class="mb-2 text-xs text-blue-700 font-black">Motivo de la consulta:</label>
          <select
            id="reason"
            name="reason"
            v-model="contactModalStore.selectedMotive"
            class="outline-none focus:outline-none rounded-md bg-gray-50 w-fit min-w-64 text-md"
            :class="{ 'border-2 border-red-700': contactModalStore.meta.touched && contactModalStore.errors.selectedMotive }"
          >
            <option value="Mantenimiento">Mantenimiento preventivo</option>
            <option value="Reparación">Reparación</option>
            <option value="Reparación">Inspección</option>
            <option value="Reparación">Otros</option>
          </select>
          <p v-if="contactModalStore.meta.touched && contactModalStore.errors.selectedMotive" class="text-xs text-red-700 font-medium pl-2">{{ contactModalStore.errors.selectedMotive }}</p>
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