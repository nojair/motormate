import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as Yup from 'yup'

const validationSchema = toTypedSchema(
  Yup.object({
    email: Yup.string().required().email(),
    password: Yup.string().min(6).required()
  }
))

export const useLoginModalStore = defineStore('loginModal', () => {
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
