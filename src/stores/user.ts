import { defineStore } from 'pinia'
import { ref, reactive, computed } from 'vue'
import { db } from '@/firebase'
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'
import { useForm, useFieldArray } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import * as Yup from 'yup'

function convertToErrorKey(key: string): string {
  return key.replace(/\[(\d+)\]/g, '.$1')
}

// Función para convertir las claves de error
function convertErrorKeys(errors: ValidationError): ValidationError {
  const convertedErrors: ValidationError = {};

  // Iterar sobre las claves del objeto errors
  for (const key in errors) {
    if (Object.prototype.hasOwnProperty.call(errors, key)) {
      // Verificar si la clave cumple con el patrón deseado
      if (key.includes('[') && key.includes(']')) {
        // Aplicar la función convertToErrorKey a la clave
        const convertedKey = convertToErrorKey(key);
        convertedErrors[convertedKey] = errors[key];
      } else {
        // Mantener la clave sin cambios
        convertedErrors[key] = errors[key];
      }
    }
  }

  return convertedErrors;
}

interface Car {
  brand: string;
  model: string;
  year: number;
  mileage: string;
  fuelType: string;
  soatDate: string;
  ngvLpgCertificationDate: string;
  technicalRevisionDate: string;
  useType: string;
  plate: string;
}

interface ValidationError {
  [key: string]: any;
}

const validationSchema = toTypedSchema(
  Yup.object().shape({
    firstName: Yup.string().required('El nombre es obligatorio'),
    lastName: Yup.string().required('El apellido es obligatorio'),
    phone: Yup.string()
      .matches(/^\d{6,10}$/, 'El número de teléfono debe tener 10 dígitos')
      .required('El teléfono es obligatorio'),
    cars: Yup.array().of(
      Yup.object().shape({
        brand: Yup.string().required('La marca del automóvil es obligatoria'),
        model: Yup.string().required('El modelo del automóvil es obligatorio'),
        year: Yup.number()
          .typeError('El año del automóvil es obligatorio')
          .required('El año del automóvil es obligatorio')
          .min(1900, 'El año debe ser mayor a 1900')
          .max(new Date().getFullYear(), 'El año no puede ser mayor al actual'),
        mileage: Yup.string().required('El kilometraje es obligatorio'),
        fuelType: Yup.string().required('El tipo de combustible es obligatorio'),
        plate: Yup.string()
          .required('La placa es obligatoria')
          .matches(/^[A-Za-z]{1}[0-9A-Za-z]{5}$/, 'Parece que el formato de placa es incorrecto')
          .test('aditional-validation', 'Parece que el formato de placa es incorrecto', function (value) {
            const characters = value.split('')
            let numberCounter = 0
            let lettersCounter = 0
            characters.map(char => {
              if (/[0-9]/.test(char)) {
                numberCounter++
              } else if (/[a-zA-Z]/.test(char)) {
                lettersCounter++
              }
            })

            return (numberCounter == 4 && lettersCounter == 2) || (numberCounter == 3 && lettersCounter == 3)
          }),
        useType: Yup.string().required('El tipo de uso es obligatorio'),
        soatDate: Yup.string()
          .typeError('La fecha de vencimiento del SOAT es obligatoria')
          .required('La fecha de vencimiento del SOAT es obligatoria'),
        ngvLpgCertificationDate: Yup.string().when('fuelType', ([fuelType], schema: any) => {
          const FUELTYPES = ['glp','gnv']
          if (FUELTYPES.includes(fuelType)) {
            return schema.required('La fecha de revisión técnica anual es obligatoria')
          } else {
            return schema.notRequired()
          }
        }),
        technicalRevisionDate: Yup.string()
          .typeError('La fecha de inspección técnica anual es obligatoria')
          .required('La fecha de inspección técnica anual es obligatoria')
      })
    )
  })
)

export const useUserStore = defineStore('user', () => {
  const { errors, defineField, handleSubmit, meta, isSubmitting } = useForm({
    validationSchema,
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      cars: []
    }
  })

  const procesedErrors = computed(() => {
    return convertErrorKeys(errors.value)
  });

  const [firstName, firstNameProps] = defineField('firstName')
  const [lastName, lastNameProps] = defineField('lastName')
  const [phone, phoneProps] = defineField('phone')

  const { remove: removeCar, insert: pushCar, fields: cars, replace: replaceCars } = useFieldArray<Car>('cars')

  const id = ref('')
  const uid = ref('')
  const email = ref('')
  const coordinates = reactive({
    latitude: '',
    longitude: ''
  })
  const location = reactive({
    country: '',
    administrative_area_level_1: '',
    administrative_area_level_2: '',
    locality: '',
    sublocality: '',
    route: '',
    street_number: '',
    postal_code: ''
  })

  const setUserLocation = (userLocation: {
    country: string,
    administrative_area_level_1: string,
    administrative_area_level_2: string,
    locality: string,
    sublocality: string,
    route: string,
    street_number: string,
    postal_code: string
  }) => {
    Object.assign(location, {
      country: userLocation.country || '',
      administrative_area_level_1: userLocation.administrative_area_level_1 || '',
      administrative_area_level_2: userLocation.administrative_area_level_2 || '',
      locality: userLocation.locality || '',
      sublocality: userLocation.sublocality || '',
      route: userLocation.route || '',
      street_number: userLocation.street_number || '',
      postal_code: userLocation.postal_code || ''
    })
  }

  const setUserCoordinates = (userCoordinates: {
    latitude: number,
    longitude: number
  }) => {
    Object.assign(coordinates, {
      latitude: userCoordinates.latitude || '',
      longitude: userCoordinates.longitude || ''
    })
  }

  function addCar() {
    pushCar(0, {
      brand: '',
      model: '',
      year: new Date().getFullYear(),
      mileage: '',
      fuelType: 'gasolina',
      soatDate: '',
      ngvLpgCertificationDate: '',
      technicalRevisionDate: '',
      useType: 'private',
      plate: ''
    })
  }

  function deleteCar(carIndex: number) {
    removeCar(carIndex)
  }

  function setUser(userData: {
    uid: string,
    email: string,
    firstName: string,
    lastName: string,
    phone: string,
    cars: Car[] | any
  }) {
    uid.value = userData.uid || uid.value || ''
    email.value = userData.email || ''
    firstName.value = userData.firstName || ''
    lastName.value = userData.lastName || ''
    phone.value = userData.phone || ''
    replaceCars(userData.cars || [])
  }

  function resetUser() {
    uid.value = ''
    email.value = ''
    firstName.value = ''
    lastName.value = ''
    phone.value = ''
    replaceCars([])
  }

  async function getUserByUid(userUid: string | null) {
    if (userUid) {
      const usersCollection = collection(db, 'users')
      const customQuery = query(usersCollection, where('uid', '==', userUid))
      const querySnapshot = await getDocs(customQuery)
      let foundUserData = null

      querySnapshot.docs.map((doc: any) => {
        foundUserData = doc.data()
        id.value = doc.id
        setUser(foundUserData)
      })      
    } else {
      return []
    }
  }

  async function createUser(userUid: string, email: string | undefined) {
    try {
      const usersCollection = collection(db, 'users')
      
      const initialData = {
        uid: userUid,
        email: email || '',
        firstName: '',
        lastName: '',
        phone: '',
        cars: []
      }
      setUser(initialData)
    
      const newUser = await addDoc(usersCollection, initialData)
      id.value = newUser.id
      return newUser   
    } catch (error) {
      throw error
    }
  }

  async function updateUser(userData: any) {
    try {
      const newUserData = {
        firstName: firstName.value,
        lastName: lastName.value,
        phone: phone.value,
        ...userData
      }
      setUser(newUserData)
      const userDocRef = doc(db, 'users', id.value)
      await updateDoc(userDocRef, newUserData)
    } catch (error) {
      throw error
    }
  }

  return {
    // state
    id,
    uid,
    email,
    // validation
    firstName,
    firstNameProps,
    lastName,
    lastNameProps,
    phone,
    phoneProps,
    deleteCar,
    addCar,
    replaceCars,
    cars,
    errors: procesedErrors,
    handleSubmit,
    meta,
    isSubmitting,
    // actions
    setUser,
    getUserByUid,
    createUser,
    updateUser,
    resetUser,
    location,
    setUserLocation,
    coordinates,
    setUserCoordinates
  }
})