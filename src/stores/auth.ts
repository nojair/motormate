import { defineStore } from 'pinia'
import { auth } from '@/firebase'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const email = ref<string | null>('')
  const uid = ref<string | null>('')

  async function getFirebaseUser(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      try {
        auth.onAuthStateChanged(user => {
          if (user) {
            email.value = user.email
            uid.value = user.uid
          }
          resolve()
        })
      } catch (error) {
        reject(error)
      }
    })
  }

  return { email, uid, getFirebaseUser }
})