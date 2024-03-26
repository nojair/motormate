import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAlertStore = defineStore('alert', () => {
  const showAlert = ref(false)

  function setShowAlert(shouldShow: boolean) {
    showAlert.value = shouldShow
    setTimeout(() => {
      showAlert.value = false
    }, 1500)
  }

  return { showAlert, setShowAlert }
})
