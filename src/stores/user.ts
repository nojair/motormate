import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'
import { db } from '@/firebase'
import { collection, query, where, getDocs, addDoc, updateDoc, doc } from 'firebase/firestore'

export const useUserStore = defineStore('userStore', () => {
  const id = ref('')
  const uid = ref('')
  const firstName = ref('')
  const lastName = ref('')
  const phone = ref('')
  const car = reactive({
    brand: '',
    model: '',
    year: '',
    mileage: '',
    fuelType: 'gasolina',
    soatExpiry: null,
    annualInspection: null,
    technicalInspection: null
  })

  function setUser(userData: {
    uid: string,
    firstName: string,
    lastName: string,
    phone: string,
    car: {
      brand: any,
      model: string,
      year: string,
      mileage: string,
      fuelType: string,
      soatExpiry: string,
      annualInspection: string,
      technicalInspection: string
}}) {
    uid.value = userData.uid || ''
    firstName.value = userData.firstName || ''
    lastName.value = userData.lastName || ''
    phone.value = userData.phone || ''
    Object.assign(car, userData.car || {
      brand: '',
      model: '',
      year: '',
      mileage: '',
      fuelType: '',
      soatExpiry: '',
      annualInspection: '',
      technicalInspection: ''
    })
  }

  function resetUser() {
    uid.value = ''
    firstName.value = ''
    lastName.value = ''
    phone.value = ''
    Object.assign(car, {
      brand: '',
      model: '',
      year: '',
      mileage: '',
      fuelType: '',
      soatExpiry: '',
      annualInspection: '',
      technicalInspection: ''
    })
  }

  async function getUserByUid(userUid: string | null) {
    if (userUid) {
      const usersCollection = collection(db, 'users')
      const customQuery = query(usersCollection, where('uid', '==', userUid))
      const querySnapshot = await getDocs(customQuery)

      const docs = querySnapshot.docs

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
        car: {
          brand: '',
          model: '',
          year: '',
          mileage: '',
          fuelType: 'gasolina',
          soatExpiry: '',
          annualInspection: '',
          technicalInspection: ''
        }
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

  return { id, uid, firstName, lastName, phone, car, setUser, getUserByUid, createUser, updateUser, resetUser }
})