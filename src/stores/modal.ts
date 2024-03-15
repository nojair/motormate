import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useGoogleMapsModalStore = defineStore('googleMapsModal', () => {
  const placeId = ref('')
  const address = ref('')
  const isLoading = ref(false)
  const showModal = ref(false)

  function setPlaceId(newPlaceId: string) {
    placeId.value = newPlaceId
  }
  function setAddress(newAddress: string) {
    address.value = newAddress
  }
  function setIsLoading(newIsLoading: boolean) {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean) {
    showModal.value = newShowModal
  }
  function handleShowGoogleMapsModal(location: { placeId: string, address: string }): void {
    setIsLoading(true)
    setShowModal(true)
    setPlaceId(location.placeId)
    setAddress(location.address)
  }

  return { isLoading, showModal, placeId, address, setPlaceId, setAddress, setIsLoading, setShowModal, handleShowGoogleMapsModal }
})

export const useLoginModalStore = defineStore('loginModalStore', () => {
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

export const useRegisterModalStore = defineStore('registerModalStore', () => {
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
