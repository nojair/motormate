<script setup lang="ts">
import Modal from '@/components/Modal.vue'

import { useAlertStore } from '@/stores/alert'

const alertStore = useAlertStore()
</script>

<template>
  <Modal v-if="alertStore.showAlert" @closeModal="alertStore.setShowAlert(false)" :width="'w-1/3'" :height="'h-40'" :showCloseIcon="true">
    <p class="text-blue-700 font-bold">¡Los datos se actualizaron con éxito!</p>
  </Modal>
</template>