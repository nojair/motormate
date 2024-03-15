<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'

import { ref } from 'vue'
import { auth } from '@/firebase'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

import { useLoginModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'

const loginModalStore = useLoginModalStore()
const userStore = useUserStore()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error)
  }
}

const signInWithEmail = async () => {
  try {
    loginModalStore.setIsLoading(true)
    await signInWithEmailAndPassword(auth, email.value, password.value)
      .then(async () => {
        await userStore.getUserByUid(authStore?.uid)
        loginModalStore.setIsLoading(false)
        loginModalStore.setShowModal(false)
      })
  } catch (error) {
    console.error('Error al iniciar sesión con correo y contraseña:', error)
  }
}
</script>

<template>
  <Modal v-if="loginModalStore.showModal" @closeModal="loginModalStore.setShowModal(false)" :width="'w-3/4'" :height="'h-3/4'">
    <Loading v-if="loginModalStore.isLoading" />
    <div v-else>
      <form @submit.prevent="signInWithEmail">
        <div>
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>

      <button @click="signInWithGoogle">Continuar con Google</button>
    </div>
  </Modal>
</template>