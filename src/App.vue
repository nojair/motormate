<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'
import LoadingView from '@/views/LoadingView.vue'

const userStore = useUserStore()
const authStore = useAuthStore()

onMounted(async () => {
  authStore.setIsLoading(true)
  await authStore.getFirebaseUser().then(async () => {
    await userStore.getUserByUid(authStore?.uid).then(() => {
      authStore.setIsLoading(false)
    })
  })
})
</script>

<template>
  <LoadingView v-if="authStore.isLoading" />
  <RouterView v-else />
</template>

<style scoped>
</style>
