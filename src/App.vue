<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'

import LoadingView from '@/views/LoadingView.vue'

import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'
import { useLocationModalStore } from '@/stores/modal'

const locationModalStore = useLocationModalStore()
const userStore = useUserStore()
const authStore = useAuthStore()

let userLocation = <any>null

async function getUserGeolocation() {
  if (navigator.geolocation) {
    await new Promise((resolve: any, reject: any) => {
      navigator.geolocation.getCurrentPosition((position) => {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        resolve()
      }, (error) => {
        console.log('error.code', error.code, 'error.PERMISSION_DENIED', error.PERMISSION_DENIED)
        if (error.code === error.PERMISSION_DENIED) {
          locationModalStore.setShowModal(true)
        }
        reject()
      })
    })
  } else {
    console.error('Geolocalización no es compatible con este navegador.')
  }
}

onMounted(async () => {
  authStore.setIsLoading(true)
  await authStore.getFirebaseUser().then(async () => {
    await userStore.getUserByUid(authStore?.uid).then(() => {
      authStore.setIsLoading(false)
      getUserGeolocation()
    })
  })
})
</script>

<template>
  <LoadingView v-if="authStore.isLoading" />
  <RouterView v-else />
</template>

<style scoped>
</style>
