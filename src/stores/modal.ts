import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as Yup from 'yup'

export const useLoginModalStore = defineStore('loginModal', () => {
  const validationSchema = toTypedSchema(
    Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().min(6).required()
    }
  ))

  const { errors, defineField, handleSubmit, meta, isSubmitting } = useForm({ validationSchema })

  const isLoading = ref(false)
  const showModal = ref(false)

  const [email, emailProps] = defineField('email')
  const [password, passwordProps] = defineField('password')

  function setIsLoading(newIsLoading: boolean) {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean) {
    showModal.value = newShowModal
  }
  function handleShowLoginModal(): void {
    setShowModal(true)
  }

  return { email, password, emailProps, passwordProps, errors, defineField, handleSubmit, meta, isSubmitting, isLoading, showModal, setIsLoading, setShowModal, handleShowLoginModal }
})

export const useRegisterModalStore = defineStore('registerModal', () => {
  const validationSchema = toTypedSchema(
    Yup.object({
      email: Yup.string().required().email(),
      password: Yup.string().min(6).required()
    }
  ))

  const { errors, defineField, handleSubmit, meta, isSubmitting } = useForm({ validationSchema })

  const isLoading = ref(false)
  const showModal = ref(false)

  const [email, emailProps] = defineField('email')
  const [password, passwordProps] = defineField('password')

  function setIsLoading(newIsLoading: boolean) {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean) {
    showModal.value = newShowModal
  }
  function handleShowRegisterModal(): void {
    setShowModal(true)
  }

  return { email, password, emailProps, passwordProps, errors, defineField, handleSubmit, meta, isSubmitting, isLoading, showModal, setIsLoading, setShowModal, handleShowRegisterModal }
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

export const useContactModalStore = defineStore('contactModal', () => {
  const validationSchema = toTypedSchema(
    Yup.object({
      selectedCar: Yup.string().required('Debe registrar por lo menos un atomóvil.'),
      selectedMotive: Yup.string().required('Debe seleccionar un motivo'),
      selectedService: Yup.string().required()
    }
  ))

  const { errors, defineField, handleSubmit, meta, isSubmitting, resetForm } = useForm({ validationSchema })

  const isLoading = ref(false)
  const showModal = ref(false)

  const [selectedCar, selectedCarProps] = defineField('selectedCar')
  const [selectedMotive, selectedMotiveProps] = defineField('selectedMotive')
  const [selectedService, selectedServiceProps] = defineField('selectedService')

  function setIsLoading(newIsLoading: boolean): void {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean): void {
    showModal.value = newShowModal
  }
  function handleShowContactModal(serviceName: string): void {
    selectedService.value = serviceName
    setShowModal(true)
  }
  function setSelectedCar(carBrandAndModelAndYear: string): void {
    selectedCar.value = carBrandAndModelAndYear
  }

  return {
    selectedCar,
    selectedCarProps,
    selectedMotive,
    selectedMotiveProps,
    selectedService,
    selectedServiceProps,
    setSelectedCar,
    errors,
    defineField,
    handleSubmit,
    resetForm,
    meta,
    isSubmitting,
    isLoading,
    showModal,
    setIsLoading,
    setShowModal,
    handleShowContactModal
  }
})
