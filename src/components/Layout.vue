<script setup lang="ts">

import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar.vue'
import LoginModal from '@/components/Modals/LoginModal.vue'
import RegisterModal from '@/components/Modals/RegisterModal.vue'
import LocationModal from '@/components/Modals/LocationModal.vue'
import ContactModal from '@/components/Modals/ContactModal.vue'
import Alert from '@/components/Alert.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="flex flex-col w-full min-h-screen overflow-hidden">
    <LoginModal />
    <RegisterModal />
    <LocationModal />
    <ContactModal />
    <Alert />
    <TopBar />
    <div class="flex flex-row w-full h-full overflow-y-auto">
      <span class="w-full">
        <div class="w-full flex flex-col justify-between">
          <slot>Add view</slot>
          <slot name="footer">
            <Footer />
          </slot>
        </div>
      </span>
    </div>
  </div>
</template>
