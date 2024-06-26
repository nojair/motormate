<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'

import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/firebase'

import { useRegisterModalStore, useLoginModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'

const router = useRouter()

const registerModalStore = useRegisterModalStore()
const loginModalStore = useLoginModalStore()
const userStore = useUserStore()

const isThereError = ref('')

function goToLoginView() {
  registerModalStore.setShowModal(false)
  loginModalStore.setShowModal(true)
}

const registerUser = async () => {
  try {
    registerModalStore.setIsLoading(true)
    isThereError.value = ''
    registerModalStore.setShowModal(true)
    await createUserWithEmailAndPassword(auth, registerModalStore.email || '', registerModalStore.password || '')
      .then(async ({ user: { uid } }: { user: { uid: string }}) => {
        await userStore.createUser(uid, registerModalStore.email).then(() => {
          registerModalStore.setIsLoading(false)
          registerModalStore.setShowModal(false)
          router.push({ name: 'Profile' })
        })
      })
      .catch(error => {
        registerModalStore.setIsLoading(false)
        if (error?.code == 'auth/email-already-in-use') {
          isThereError.value = 'Este correo ya está registrado'      
        } else {
          isThereError.value = 'Error al registrar el usuario'
        }
      })

  } catch(error) {
    registerModalStore.setIsLoading(false)
  }
}

const signInWithGoogle = async () => {
  try {
    registerModalStore.setIsLoading(true)
    isThereError.value = ''
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then(async ({ user: { uid } }: { user: { uid: string }}) => {
        await userStore.getUserByUid(uid)
          .then(async () => {
            if (userStore.uid) {
              registerModalStore.setShowModal(false)
              registerModalStore.setIsLoading(false)
            } else {
              await userStore.createUser(uid, registerModalStore.email).then(() => {
                registerModalStore.setIsLoading(false)
                registerModalStore.setShowModal(false)
                router.push({ name: 'Profile' })
              })
            }
          })
      })
  } catch (error) {
    isThereError.value = 'Error al iniciar sesión con Google'
    registerModalStore.setIsLoading(false)
  }
}

const submitFormData = registerModalStore.handleSubmit(() => registerUser())
</script>

<template>
  <Modal v-if="registerModalStore.showModal" @closeModal="registerModalStore.setShowModal(false)" :width="'w-3/4'" :height="'h-3/4'" :showCloseIcon="true">
    <Loading v-if="registerModalStore.isLoading" />
    <div class="w-full flex flex-col justify-center items-center" v-else>
      <span v-if="isThereError" class="text-sm flex flex-row justify-center items-center mb-10">
        <p class="rounded-xs font-semibold px-4 py-1 bg-red-100 text-red-800 cursor-default mr-1">{{ isThereError }}</p>
      </span>
      <span class="text-sm flex flex-row justify-center items-center mb-10">
        <p class="cursor-default mr-1">¿Ya tienes una cuenta?</p>
        <p class="cursor-pointer bg-white font-semibold" @click="goToLoginView">Inicia sesión</p>
      </span>

      <form @submit.prevent="submitFormData" class="rounded-md w-full sm:w-2/5 flex flex-col justify-center items-center">
        <div class="flex flex-col rounded-md w-full">
          <label for="email" class="bg-white font-semibold text-xs mb-1" :class="{ 'text-xs text-red-700 font-medium pl-2': registerModalStore.meta.touched && registerModalStore.errors && registerModalStore.errors.email }">Correo electrónico</label>
          <input
            class="h-8 mb-2 pl-2 bg-blue-100 rounded-md"style="outline: none;" type="email" id="email" v-model="registerModalStore.email"
            :class="{ 'border-red-400 border-2 rounded-xs': registerModalStore.meta.touched && registerModalStore.errors && registerModalStore.errors.email }"
            v-bind="registerModalStore.emailProps"
          >
        </div>
        <div class="flex flex-col w-full">
          <label for="password" class="bg-white font-semibold text-xs mb-1" :class="{ 'text-xs text-red-700 font-medium pl-2': registerModalStore.meta.touched && registerModalStore.errors && registerModalStore.errors.password }">Contraseña</label>
          <input
            class="h-8 mb-2 pl-2 bg-blue-100 rounded-md" style="outline: none;" type="password" id="password" v-model="registerModalStore.password"
            :class="{ 'border-red-400 border-2 rounded-xs': registerModalStore.meta.touched && registerModalStore.errors && registerModalStore.errors.password }"
            v-bind="registerModalStore.passwordProps" placeholder="Mínimo 6 carácteres"
          >
        </div>

        <button :disabled="registerModalStore.isSubmitting" type="submit" class="w-full flex flex-row justify-center items-center mt-3 py-1 rounded-md bg-blue-600 hover:opacity-80 text-blue-100 font-bold">{{ loginModalStore.isSubmitting ? 'Cargando' : 'Registrarse' }}</button>

        <div class="flex flex-row justify-between items-baseline">
          <hr class="h-[2px] w-24 bg-[#ededed]">
          <p class="my-4 mx-2 text-gray-500">o</p>
          <hr class="h-[2px] w-24 bg-[#ededed]">
        </div>
      </form>

      <button type="button" class="mt-2 flex flex-row justify-evenly items-center bg-white border-blue-100 border-2 w-fit rounded-md px-3 py-1 hover:opacity-60" @click="signInWithGoogle">
        <svg class="h-6" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
        <p class="ml-3">Registrarse con Google</p>
      </button>
    </div>
  </Modal>
</template>