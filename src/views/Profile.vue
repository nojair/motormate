<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import { defineComponent } from 'vue'

defineComponent({
  setup() {
    return {
      Layout
    }
  }
})
</script>

<template>
  <Layout>
    <div class="flex flex-col justify-start items-center">
      <div class="flex flex-col justify-start items-center">
        <div class="flex flex-row justify-between items-center">
          <label for="fname">Nombres</label>
          <input type="text" id="fname" name="fname">  
        </div>

        <div class="flex flex-row justify-between items-center">
          <label for="lname">Apellidos</label>
          <input type="text" id="lname" name="lname">
        </div>
      </div>
    </div>
  </Layout>
</template>