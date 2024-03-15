<script setup lang="ts">

import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar.vue'
import GoogleMapsModal from '@/components/Modals/GoogleMapsModal.vue'
import LoginModal from '@/components/Modals/LoginModal.vue'
import RegisterModal from '@/components/Modals/RegisterModal.vue'
</script>

<template>
  <div class="flex flex-col w-full h-screen overflow-hidden">
    <GoogleMapsModal />
    <LoginModal />
    <RegisterModal />
    <TopBar />
    <div class="flex flex-row w-full h-full">
      <SideBar />
      <span class="md:container md:mx-auto overflow-y-auto w-full sm:pl-44">
        <div class="w-full h-full">
          <slot>Add view</slot>
        </div>
      </span>
    </div>
  </div>
</template>