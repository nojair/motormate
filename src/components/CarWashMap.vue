<script setup lang="ts">
import { ref, watchEffect, computed, onUpdated } from 'vue';

// @ts-ignore
import { initMap } from "@/lib/google-maps.ts";
import { useUserStore } from "@/stores/user";
import { useViewport } from "../composables/useViewport";
import { useElementPosition } from "../composables/useElementPosition";
import Loader from "./Loader/Loader.vue";
import { useCarsStore } from "../stores/cars";

const userStore = useUserStore();
const carsStore = useCarsStore();
const { height } = useViewport();
const { divRef, y } = useElementPosition();
const mapCenterCoordinates = userStore.coordinates;
const dynamicHeight = ref("430px");

watchEffect(() => {
  const calculatedHeight = height.value - y.value - 30;
  dynamicHeight.value = `${calculatedHeight > 200 ? calculatedHeight : 200}px`;
});

watchEffect(async () => {
  if (mapCenterCoordinates.latitude && mapCenterCoordinates.longitude) {
    await initMap({
      type: carsStore.servicekey,
      lat: mapCenterCoordinates.latitude,
      lng: mapCenterCoordinates.longitude,
    });
    carsStore.setMapLoading(false)
  }
});

const dinamicHeightStyles = computed(() => ({
  height: dynamicHeight.value,
}));

</script>

<template>
  <div ref="divRef" class="test">
    <div
      v-if="carsStore.mapLoading"
      class="relative flex justify-center items-center w-full text-lg font-bold text-gray-600"
      :style="dinamicHeightStyles"
    >
      <Loader />
    </div>
    <div id="map" :style="dinamicHeightStyles"></div>
  </div>
</template>
