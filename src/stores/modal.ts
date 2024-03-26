import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLoginModalStore = defineStore('loginModal', () => {
  const isLoading = ref(false)
  const showModal = ref(false)
  const email = ref('')
  const password = ref('')

  function setIsLoading(newIsLoading: boolean) {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean) {
    showModal.value = newShowModal
  }
  function handleShowLoginModal(): void {
    setShowModal(true)
  }

  return { email, password, isLoading, showModal, setIsLoading, setShowModal, handleShowLoginModal }
})

export const useRegisterModalStore = defineStore('registerModal', () => {
  const isLoading = ref(false)
  const showModal = ref(false)
  const email = ref('')
  const password = ref('')

  function setIsLoading(newIsLoading: boolean) {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean) {
    showModal.value = newShowModal
  }
  function handleShowRegisterModal(): void {
    setShowModal(true)
  }

  return { email, password, isLoading, showModal, setIsLoading, setShowModal, handleShowRegisterModal }
})

export const useLocationModalStore = defineStore('locationModal', () => {
  const isLoading = ref(false)
  const showModal = ref(false)

  function setIsLoading(newIsLoading: boolean) {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean) {
    showModal.value = newShowModal
  }
  function handleShowRegisterModal(): void {
    setShowModal(true)
  }

  return { isLoading, showModal, setIsLoading, setShowModal, handleShowRegisterModal }
})
