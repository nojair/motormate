<script setup lang="ts">

import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar.vue'
import GoogleMapsModal from '@/components/Modals/GoogleMapsModal.vue'
import LoginModal from '@/components/Modals/LoginModal.vue'
import RegisterModal from '@/components/Modals/RegisterModal.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col w-full h-screen overflow-hidden">
    <GoogleMapsModal />
    <LoginModal />
    <RegisterModal />
    <TopBar />
    <div class="flex flex-row w-full h-full overflow-y-auto">
      <SideBar />
      <span class="md:container md:mx-auto w-full sm:pl-44">
        <div class="w-full h-full">
          <slot>Add view</slot>
          <Footer />
        </div>
      </span>
    </div>
  </div>
</template>