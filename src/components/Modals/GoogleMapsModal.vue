<script setup lang="ts">
import Loading from '@/components/Loading.vue'
import Modal from '@/components/Modal.vue'

import { ref } from 'vue'
import { useGoogleMapsModalStore } from '@/stores/modal'

const SECRET_API_KEY = ref('AIzaSyDyp1H4_IoRX2Z6AbXFtqUmKJlpkCu91HY')

const googleMapsModalStore = useGoogleMapsModalStore()
</script>

<template>
  <Modal v-if="googleMapsModalStore.showModal" @closeModal="googleMapsModalStore.setShowModal(false)" :width="'w-3/4'" :height="'h-3/4'">
    <Loading v-if="googleMapsModalStore.isLoading" />
    <p v-if="!googleMapsModalStore.isLoading" class="text-sm font-semibold text-center mb-3"><strong>UBICACIÓN</strong></p>
    <iframe v-if="googleMapsModalStore.placeId"
      class="w-full h-full"
      style="border:0"
      Loading="lazy"
      allowfullscreen
      @load="googleMapsModalStore.setIsLoading(false)"
      :src="`https://www.google.com/maps/embed/v1/place?q=place_id:${googleMapsModalStore.placeId}&key=${SECRET_API_KEY}`"
    ></iframe>
    <p v-if="!googleMapsModalStore.isLoading" class="text-sm font-semibold text-center mt-5 max-w-80">{{ googleMapsModalStore.address }}</p>
  </Modal>
</template>