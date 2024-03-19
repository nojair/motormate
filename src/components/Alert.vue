<script setup lang="ts">
import Modal from '@/components/Modal.vue'

import { useAlertStore } from '@/stores/modal'

const alertStore = useAlertStore()
</script>

<template>
  <Modal v-if="alertStore.showAlert" @closeModal="alertStore.setShowAlert(false)" :width="'w-1/4'" :height="'h-40'">
    <p class="text-blue-600 font-medium">¡Los datos se actualizaron con éxito!</p>
  </Modal>
</template>