<script setup lang="ts">
import Layout from "@/components/Layout.vue";
import CarWashMap from "@/components/CarWashMap.vue";
import Footer from "@/components/Footer.vue";
import ResponsiveContainer from "@/components/ResponsiveContainer.vue";
import CarBadges from "@/components/CarBadges/CarBadges.vue";
import { useCarsStore } from "../stores/cars";
import { CAR_PLACES } from "../lib/google-maps";

const carsStore = useCarsStore();
</script>

<template>
  <Layout>
    <template #default>
      <ResponsiveContainer>
        <div class="flex sm:flex-row flex-col justify-evenly items-center mb-2">
          <h1 class="sm:text-2xl text-xl text-left font-bold text-blue-700 my-2 uppercase sx:text-left text-center">
            {{
              CAR_PLACES.find((option) => option.key === carsStore.servicekey)
                ?.label
            }}
            CERCA DE TI
          </h1>
          <CarBadges />
        </div>
      </ResponsiveContainer>
      <CarWashMap />
    </template>

    <template #footer>
      <Footer model="narrow" />
    </template>
  </Layout>
</template>
