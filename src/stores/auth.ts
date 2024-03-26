import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const displayName = ref<string | null>('')
  const email = ref<string | null>('')
  const uid = ref<string | null>('')
  const isLoading = ref<boolean>(false)
  const isAuthenticated = ref<boolean>(false)

  function setIsLoading(newIsLoading: boolean) {
    isLoading.value = newIsLoading
  }

  async function getFirebaseUser(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        auth.onAuthStateChanged((user: any) => {
          isAuthenticated.value = !!user
          if (user) {
            email.value = user.email
            uid.value = user.uid
            displayName.value = user.displayName
          }
          resolve()
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  return { isLoading, setIsLoading, email, uid, displayName, getFirebaseUser, isAuthenticated }
})