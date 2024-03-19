<script setup lang="ts">
import { withDefaults } from 'vue'

const emit = defineEmits<{
  closeModal: [void]
}>()

interface Props {
  width: string
  height: string
}

const props = withDefaults(defineProps<Props>(), {
  width: 'w-1/2',
  height: 'h-3/4'
})
</script>

<template>
  <div class="fixed w-screen h-screen top-0 left-0 flex flex-row justify-center items-center bg-black bg-opacity-80 z-20">
    <div class="flex flex-col justify-start items-center bg-white rounded-lg pt-2 px-4" :class="props.width + ' ' + props.height">
      <div class="w-full flex flex-row justify-end items-center mb-1">
        <p class="text-lg font-bold cursor-pointer" @click="$emit('closeModal')">X</p>
      </div>

      <div class="w-full h-full flex flex-col justify-center items-center mt-0 mb-5">
        <slot>MODAL</slot>
      </div>
    </div>
  </div>
</template>