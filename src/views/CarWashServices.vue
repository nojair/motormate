<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import CarWashMap from '@/components/CarWashMap.vue'
import Footer from '@/components/Footer.vue'
import ResponsiveContainer from '@/components/ResponsiveContainer.vue';

</script>

<template>
  <Layout>
    <template #default>
      <ResponsiveContainer>
        <h1 class="text-2xl text-left font-bold text-blue-700 my-6">LAVADEROS DE AUTOS CERCA DE TI</h1>
      </ResponsiveContainer>
      <CarWashMap />
    </template>

    <template #footer>
      <Footer model='narrow' />
    </template>
  </Layout>
</template>
