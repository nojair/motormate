<script setup lang="ts">
import Modal from '@/components/Modal.vue'

import { useLocationModalStore } from '@/stores/modal'

const locationModalStore = useLocationModalStore()
</script>

<template>
  <Modal v-if="locationModalStore.showModal" @closeModal="locationModalStore.setShowModal(false)">
    <form id="address-form" class="w-full px-10 flex flex-col justify-center items-center">
      <label for="autocomplete-input" class="mb-3">Ingresa una dirección</label>
      <input class="w-full mb-3 bg-blue-100 rounded-xs" style="outline: none;" type="text" id="autocomplete-input" name="autocomplete-input">
      <button class="w-1/3 py-1 rounded-md bg-blue-600 hover:opacity-90 text-blue-100" type="submit">Buscar</button>
    </form>
  </Modal>
</template>