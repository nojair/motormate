<script setup lang="ts">
import TopBar from '@/components/TopBar.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="flex flex-col w-full h-screen overflow-hidden">
    <TopBar />
    <div class="flex flex-row w-full h-full">
      <SideBar />
      <span class="md:container md:mx-auto overflow-y-auto w-full pl-44">
        <div class="w-full h-full">
          <slot>Add view</slot>
        </div>
      </span>
    </div>
  </div>
</template>