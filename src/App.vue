<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import { useAuthStore } from '@/stores/auth'

const userStore = useUserStore()
const authStore = useAuthStore()

onMounted(async () => {
  await authStore.getFirebaseUser().then(async () => {
    await userStore.getUserByUid(authStore?.uid)
  })
})
</script>

<template> 
  <RouterView />
</template>

<style scoped>
</style>
