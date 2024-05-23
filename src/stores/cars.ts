import { CarPlaceKeys } from '@/types/cars'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCarsStore = defineStore('cars', () => {
  const servicekey = ref<CarPlaceKeys>(CarPlaceKeys.CarWash)
  const mapLoading = ref(true)

  const setServiceKey = (key: CarPlaceKeys) => {
    servicekey.value = key
    mapLoading.value = true
  }

  const setMapLoading = (value: boolean) => {
    mapLoading.value = value
  }

  return { servicekey, setServiceKey, mapLoading, setMapLoading }
})
