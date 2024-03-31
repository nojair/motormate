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

async function getUserGeolocation() {
  if (navigator.geolocation) {
    await new Promise((resolve: any, reject: any) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        userStore.setUserCoordinates(position.coords)
        // @ts-ignore
        const { Geocoder } = await google.maps.importLibrary("geocoding") as google.maps.Geocoder
        const geocoder = new Geocoder()
        geocoder.geocode({ location: { lat: position.coords.latitude, lng: position.coords.longitude }}, function(results: any, status: any) {
          if (status === 'OK') {
            const address_components = {
              country: '',
              administrative_area_level_1: '',
              administrative_area_level_2: '',
              locality: '',
              sublocality: '',
              route: '',
              street_number: '',
              postal_code: ''
            }
            
            results[0].address_components.map((address_component: any) => {
              if (address_component.types.includes('country')) {
                address_components.country = address_component.long_name
              } else if (address_component.types.includes('administrative_area_level_1')) {
                address_components.administrative_area_level_1 = address_component.long_name
              } else if (address_component.types.includes('administrative_area_level_2')) {
                address_components.administrative_area_level_2 = address_component.long_name
              } else if (address_component.types.includes('locality')) {
                address_components.locality = address_component.long_name
              } else if (address_component.types.includes('sublocality')) {
                address_components.sublocality = address_component.long_name
              } else if (address_component.types.includes('route')) {
                address_components.route = address_component.long_name
              } else if (address_component.types.includes('street_number')) {
                address_components.street_number = address_component.long_name
              } else if (address_component.types.includes('postal_code')) {
                address_components.postal_code = address_component.long_name
              }
            })
            
            userStore.setUserLocation(address_components)
          } else {
            console.error('Error al geocodificar la dirección:', status)
          }
        })
        resolve()
      }, (error) => {
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
