<script setup lang="ts">
import { CAR_PLACES } from "@/lib/google-maps";
import { useCarsStore } from "../../stores/cars";
import { CarPlaceKeys } from "../../types/cars";

const carsStore = useCarsStore();

const updateKeyMap = (key: CarPlaceKeys) => {
  carsStore.setServiceKey(key);
};
</script>

<template>
  <div class='flex flex-col gap-2'>
    <h4>Encuentra tambien:</h4>
    <div class="w-[480px] flex flex-wrap gap-x-2 gap-y-1">
      <span
        v-for="element in CAR_PLACES"
        :key="element.key"
        :class="[
          'text-xs font-medium me-2 px-2.5 py-0.5 rounded cursor-pointer',
          element.key === carsStore.servicekey
            ? 'bg-blue-700 text-white'
            : 'bg-gray-300',
        ]"
        @click="updateKeyMap(element.key)"
      >
        {{ element.label }}
      </span>
    </div>
  </div>
</template>
