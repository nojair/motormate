<script setup lang="ts">
import { ref, watchEffect  } from 'vue'

// @ts-ignore
import { initMap } from '@/lib/google-maps.ts'
import { useUserStore } from '@/stores/user'

const mapLoading = ref(true)

const userStore = useUserStore()
const mapCenterCoordinates = userStore.coordinates

watchEffect(async () => {
  if (mapCenterCoordinates.latitude && mapCenterCoordinates.longitude) {
    await initMap({
      lat: mapCenterCoordinates.latitude,
      lng: mapCenterCoordinates.longitude
    })
    mapLoading.value = false
  }
})
</script>

<template>
  <div class="px-5">
    <div v-if="mapLoading" class="relative flex justify-center items-center w-full h-96 text-lg font-bold text-gray-600">Cargando el mapa...</div>
    <div id="map" class="h-[400px]"></div>
  </div>
</template>