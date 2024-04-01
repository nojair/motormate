<script setup lang="ts">
import { ref } from 'vue'

import Modal from '@/components/Modal.vue'
import { useLocationModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'

const locationModalStore = useLocationModalStore()
const userStore = useUserStore()
const locationSearchTerm = ref('')
const hintOptions = ref({ predictions: [{ description: '' }] })
const selectedHintOption = ref({ description: '', place_id: '' })
const showTooltip = ref(false)

let locationSearchTimer = <any>null

function getHintOptions() {
  if (locationSearchTimer) {
    clearTimeout(locationSearchTimer)
    selectedHintOption.value = { description: '', place_id: '' }
  }

  try {
    locationSearchTimer = setTimeout(async () => {
      // @ts-ignore
      const { AutocompleteService } = await google.maps.importLibrary("places") as google.maps.AutocompleteService
      hintOptions.value = await new AutocompleteService().getPlacePredictions({ input: locationSearchTerm.value })
    }, 200)
  } catch (error) {
    console.log('error', error)
  }
}

async function geocodeByPlaceId(place_id: string) {
  // @ts-ignore
  const { Geocoder } = await google.maps.importLibrary("geocoding") as google.maps.Geocoder
  const geocoder = new Geocoder()
  geocoder.geocode({ placeId: place_id }, function(results: any, status: any) {
    if (status === 'OK') {
      const location = results[0].geometry.location
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
      userStore.setUserCoordinates({ latitude: location.lat(), longitude:location.lng() })
    } else {
      console.error('Error al geocodificar la dirección:', status)
    }
  })
}

function selectHintOption(option: any) {
  selectedHintOption.value = option
  locationSearchTerm.value = option.description
  geocodeByPlaceId(option.place_id)
}
</script>

<template>
  <Modal v-if="locationModalStore.showModal" @closeModal="locationModalStore.setShowModal(false)" :showCloseIcon="false">
    <form id="address-form" class="w-full h-full flex flex-col justify-between items-center">
      <span class="w-full h-full mt-10 px-10 flex flex-col justify-start items-center">
        <label for="autocomplete-input" class="mb-3">Es necesario ingresar una dirección</label>
        <input v-model="locationSearchTerm" @input="getHintOptions" class="pl-2 w-full h-10 bg-white rounded-xs" style="outline: none;" type="text" id="autocomplete-input" name="autocomplete-input">
        <ul v-if="locationSearchTerm && !selectedHintOption.place_id" class="w-full bg-blue-50 rounded-xs">
          <li v-for="(hintOption, index) in hintOptions.predictions" :key="index"
            class="cursor-pointer text-sm hover:bg-white hover:font-medium"
            @click="selectHintOption(hintOption)"
          >
            <div class="py-2 px-4">{{ hintOption.description }}</div>
          </li>
        </ul>
      </span>

      <button
        class="bg-white px-4 py-2 mb-10 text-blue-100 rounded-xs hover:opacity-70"
        :class="{ 'opacity-70': !selectedHintOption.place_id }" type="button" @click="locationModalStore.setShowModal(false)"
        @mouseover="showTooltip = !selectedHintOption.place_id"
        @mouseleave="showTooltip = false"
      >ACEPTAR
        <span v-show="showTooltip && !selectedHintOption.place_id" class="bg-black text-white text-sm py-1 px-2 rounded-lg absolute bottom-40">Selecciona un opción sugerida.</span>
      </button>
    </form>
  </Modal>
</template>