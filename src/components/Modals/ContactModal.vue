<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'

import { ref, computed } from 'vue'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

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

const corporativePhone = 906841366

const whatsAppLink = computed(() => {
  return `https://api.whatsapp.com/send?phone=${corporativePhone}&text=Hola,%20mi%20nombre%20es%20*${userStore.firstName}*%20%20Tengo%20un%20*${contactModalStore.selectedCar}*%20y%20requiero%20el%20servicio%20de%20*${contactModalStore.selectedMotive}*.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.`
})
</script>

<template>
  <Modal v-if="contactModalStore.showModal" @closeModal="contactModalStore.setShowModal(false)" :width="'w-3/4'" :height="'h-3/4'" :showCloseIcon="true">
    <Loading v-if="contactModalStore.isLoading" />
    <div v-else-if="!authStore.isAuthenticated">
      <p>
        Es necesario
        <span class="cursor-pointer bg-white font-semibold" @click="goToLoginView">Iniciar sesión</span>
        o
        <span class="cursor-pointer bg-white font-semibold" @click="goToRegisterView">Registrarse</span>
        para seguir
      </p>
    </div>
    <div v-else class="w-full flex flex-col justify-center items-center">
      <form>
        <label for="car">Selecciona tu auto:</label>
        <select id="car" name="car" v-model="contactModalStore.selectedCar">
          <option v-for="(car, index) in userStore.cars" :key="index" :value="`${car.value.brand} - ${car.value.model} - ${car.value.year}`">{{ car.value.brand }} - {{ car.value.model }} - {{ car.value.year }}</option>
        </select>
        
        <label for="reason">Motivo de la consulta:</label>
        <select id="reason" name="reason" v-model="contactModalStore.selectedMotive">
          <option value="Mantenimiento">Mantenimiento</option>
          <option value="Reparación">Reparación</option>
        </select>

        <a target="_blank" class="text-center text-white text-xl font-black mr-2" :href="whatsAppLink">Seguir</a>
      </form>
    </div>
  </Modal>
</template>