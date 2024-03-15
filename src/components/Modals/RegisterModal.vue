<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'

import { ref } from 'vue'
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRegisterModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const registerModalStore = useRegisterModalStore()
const userStore = useUserStore()

const email = ref('')
const password = ref('')

const registerUser = async () => {
  try {
    registerModalStore.setShowModal(true)
    await createUserWithEmailAndPassword(auth, email.value, password.value)
      .then(async ({ user: { uid } }) => {
        await userStore.createUser(uid).then(() => {
          registerModalStore.setShowModal(false)
          router.push({ name: 'Profile' })
        })
    })

  } catch (error) {
    console.error('Error al registrar el usuario:', error)
  }
}

const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
    // Usuario inició sesión correctamente con Google
  } catch (error) {
    console.error('Error al iniciar sesión con Google:', error)
  }
}
</script>

<template>
  <Modal v-if="registerModalStore.showModal" @closeModal="registerModalStore.setShowModal(false)" :width="'w-3/4'" :height="'h-3/4'">
    <Loading v-if="registerModalStore.isLoading" />
    <div v-else>
      <form @submit.prevent="registerUser">
        <input v-model="email" type="email" placeholder="Correo electrónico" />
        <input v-model="password" type="password" placeholder="Contraseña" />
        <button type="submit">Registrarse</button>
      </form>

      <button @click="signInWithGoogle">Continuar con Google</button>
    </div>
  </Modal>
</template>