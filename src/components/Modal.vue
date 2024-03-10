<script setup lang="ts">

</script>

<template>
  <div class="md:container md:mx-auto fixed w-screen h-screen top-0 left-0 flex flex-row justify-center items-center bg-black bg-opacity-80">
    <div class="flex flex-col justify-start items-center w-64 h-64 bg-white rounded-lg pt-2 px-4">
      <div class="w-full flex flex-row justify-end items-center">
        <p class="text-lg font-bold cursor-pointer" @click="$emit('closeModal')">X</p>
      </div>
      <slot>MODAL</slot>
    </div>
  </div>
</template>