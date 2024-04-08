import { reactive, ref } from 'vue'
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
      selectedMotive: Yup.string().when('key', ([key], schema: any) => {
        const SERVICES_KEYS_FOR_MAINTENANCE = ['tuning', 'brakingSystem', 'airConditioning']
        if (SERVICES_KEYS_FOR_MAINTENANCE.includes(key)) {
          return schema.required('Debe seleccionar un motivo')
        } else {
          return schema.notRequired()
        }
      }),
      selectedService: Yup.string().required(),
      motiveDetail: Yup.string().when(['key', 'selectedMotive'], ([key, selectedMotive], schema: any) => {
        if (selectedMotive == 'otros' || key == 'generalConsultation') {
          return schema.required('Por favor, proporcione algún detalle')
        } else {
          return schema.notRequired()
        }
      }),
      key: Yup.string().required(),
      oilType: Yup.string().when('key', ([key], schema: any) => {
        if (key == 'oilChange') {
          return schema.required('Debe seleccionar un tipo de aceite')
        } else {
          return schema.notRequired()
        }
      })
    }
  ))

  const { errors, defineField, handleSubmit, meta, isSubmitting, resetForm } = useForm({ validationSchema })

  const isLoading = ref(false)
  const showModal = ref(false)

  const [selectedCar, selectedCarProps] = defineField('selectedCar')
  const [selectedMotive, selectedMotiveProps] = defineField('selectedMotive')
  const [selectedService, selectedServiceProps] = defineField('selectedService')
  const [motiveDetail, motiveDetailProps] = defineField('motiveDetail')
  const [key, keyProps] = defineField('key')
  const [oilType, oilTypeProps] = defineField('oilType')

  function setIsLoading(newIsLoading: boolean): void {
    isLoading.value = newIsLoading
  }
  function setShowModal(newShowModal: boolean): void {
    showModal.value = newShowModal
  }
  function handleShowContactModal(service: any): void {
    selectedService.value = service.name
    key.value = service.key
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
    oilType,
    oilTypeProps,
    key,
    keyProps,
    motiveDetail,
    motiveDetailProps,
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
