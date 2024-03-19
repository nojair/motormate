import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { db } from '@/firebase'
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as Yup from 'yup'

const validationSchema = toTypedSchema(
  Yup.object({
    firstName: Yup.string().required(),
    lastName: Yup.string().required(),
    phone: Yup.string().required()
  }
))

export const useUserStore = defineStore('userStore', () => {
  const { errors, defineField, handleSubmit } = useForm({ validationSchema })

  const [firstName, firstNameProps] = defineField('firstName')
  const [lastName, lastNameProps] = defineField('lastName')
  const [phone, phoneProps] = defineField('phone')

  const id = ref('')
  const uid = ref('')
  const cars = reactive([{
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuelType: 'gasolina',
    soatExpiry: null,
    annualInspection: null,
    technicalInspection: null
  }])

  const submitUserForm = async (userData: any) => {
    await handleSubmit(async (values) => {
      try {
        return await userData.updateUser({
          uid: userData.uid,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          cars: userData.cars
        })
      } catch (error) {
        console.error('Error al enviar el formulario', error)
      }
    })()
  }

  function addCar() {
    cars.push({
      brand: '',
      model: '',
      year: '',
      mileage: '',
      fuelType: 'gasolina',
      soatExpiry: null,
      annualInspection: null,
      technicalInspection: null
    })
  }

  function removeCar(carIndex: number) {
    cars.splice(carIndex, 1)
  }

  function setUser(userData: {
    uid: string,
    firstName: string,
    lastName: string,
    phone: string,
    cars: {
      brand: string,
      model: string,
      year: string,
      mileage: string,
      fuelType: string,
      soatExpiry: string,
      annualInspection: string,
      technicalInspection: string
  }[]}) {
    uid.value = userData.uid || ''
    firstName.value = userData.firstName || ''
    lastName.value = userData.lastName || ''
    phone.value = userData.phone || ''
    Object.assign(cars, userData.cars || [{
      brand: '',
      model: '',
      year: '',
      mileage: '',
      fuelType: '',
      soatExpiry: '',
      annualInspection: '',
      technicalInspection: ''
    }])
  }

  function resetUser() {
    uid.value = ''
    firstName.value = ''
    lastName.value = ''
    phone.value = ''
    Object.assign(cars, [{
      brand: '',
      model: '',
      year: '',
      mileage: '',
      fuelType: '',
      soatExpiry: '',
      annualInspection: '',
      technicalInspection: ''
    }])
  }

  async function getUserByUid(userUid: string | null) {
    if (userUid) {
      const usersCollection = collection(db, 'users')
      const customQuery = query(usersCollection, where('uid', '==', userUid))
      const querySnapshot = await getDocs(customQuery)

      querySnapshot.docs.map((doc: any) => {
        const foundUserData = doc.data()
        id.value = doc.id
        setUser(foundUserData)
      })
      
    } else {
      return []
    }
  }

  async function createUser(userUid: string) {
    try {
      const usersCollection = collection(db, 'users')
      
      const initialData = {
        id: '',
        uid: userUid,
        firstName: '',
        lastName: '',
        phone: '',
        cars: [{
          brand: '',
          model: '',
          year: '',
          mileage: '',
          fuelType: 'gasolina',
          soatExpiry: '',
          annualInspection: '',
          technicalInspection: ''
        }]
      }
      setUser(initialData)
    
      const newUser = await addDoc(usersCollection, initialData )
      return newUser   
    } catch (error) {
      throw error
    }
  }

  async function updateUser(userData: any) {
    try {
      
      const userDocRef = doc(db, 'users', id.value)
      await updateDoc(userDocRef, userData)
    } catch (error) {
      throw error
    }
  }

  return {
    id,
    uid,
    errors,
    firstName,
    firstNameProps,
    lastName,
    lastNameProps,
    phone,
    phoneProps,
    submitUserForm,
    cars,
    setUser,
    getUserByUid,
    createUser,
    updateUser,
    resetUser,
    addCar,
    removeCar
  }
})