<script setup lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";

import { useLoginModalStore, useRegisterModalStore } from "@/stores/modal";
import { useUserStore } from "@/stores/user";
import { useAuthStore } from "@/stores/auth";
import { useLocationModalStore } from "@/stores/modal";

import { signOut } from "firebase/auth";
import { auth } from "@/firebase";

const { handleShowLoginModal } = useLoginModalStore();
const { handleShowRegisterModal } = useRegisterModalStore();

const route = useRoute();
const userStore = useUserStore();
const authStore = useAuthStore();
const locationModalStore = useLocationModalStore();
const isCarWashServicesRoute = ref(false);

watchEffect(() => {
  isCarWashServicesRoute.value = route.path === "/car-wash-services";
});

const router = useRouter();

const isOverProfile = ref(false);

async function logout() {
  try {
    authStore.setIsLoading(true);
    await signOut(auth)
      .then(() => {
        userStore.resetUser();
        router.push({ name: "Home" });
      })
      .finally(() => {
        authStore.setIsLoading(false);
      });
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
}
</script>

<template>
  <div
    class="z-10 flex sm:flex-row flex-col justify-between items-center bg-white w-full px-4 py-4 sticky border-b-[1px]"
  >
    <div class="flex flex-row justify-start items-center sm:mb-0 mb-5">
      <router-link :to="{ name: 'CarWashServices' }">
        <p
          class="text-blue-700 border-blue-700 text-4xl font-bold border-4 rounded-xl px-1 hidden sm:block cursor-pointer"
        >
          AUTOWASI
        </p>
      </router-link>
      <div class="flex flex-col justify-center items-center sm:mx-7">
        <span class="cursor-default flex flex-row items-center px-2 rounded-sm">
          <p class="text-blue-700 font-black mr-2">Ubicación</p>
          <i class="fas fa-map-marker-alt text-blue-700"></i>
        </span>
        <span class="flex flex-row items-center">
          <p
            class="cursor-default w-fit px-2 text-center text-gray-700 font-semibold py-1"
          >
            <template
              v-if="
                userStore.location.administrative_area_level_2 &&
                userStore.location.administrative_area_level_1
              "
            >
              {{ userStore.location.administrative_area_level_2 }},
              {{ userStore.location.administrative_area_level_1 }}
            </template>
            <template v-else>Seleccionar una ubicación</template>
          </p>
          <i
            @click="locationModalStore.setShowModal(true)"
            class="fa-solid fa-pen-to-square cursor-pointer hover:text-blue-500"
          ></i>
        </span>
      </div>
    </div>

    <div class="flex items-center gap-10">
      <router-link
        v-if="!isCarWashServicesRoute"
        :to="{ name: 'CarWashServices' }"
        class="flex items-center gap-2"
      >
        <i class="fa-regular fa-map text-blue-700"></i>
        <div class="cursor-pointer text-blue-700 font-black">
          Regresar al mapa
        </div>
      </router-link>

      <div class="flex flex-row justify-between items-center">
        <div class="flex flex-row justify-between items-center">
          <template v-if="authStore.isAuthenticated">
            <div
              class="cursor-default bg-white rounded-md sm:mr-10 h-12 min-w-fit px-2 flex flex-col justify-center items-center"
              @mouseenter="isOverProfile = true"
              @mouseleave="isOverProfile = false"
              @click="isOverProfile = !isOverProfile"
            >
              <div class="flex flex-row justify-between items-center">
                <i class="fa-solid fa-user mr-2 text-blue-700"></i>
                <p class="text-blue-700 font-black">
                  {{
                    String(authStore.displayName || "").split(" ")[0] ||
                    authStore.email ||
                    "-"
                  }}
                </p>
              </div>
              <div
                v-if="isOverProfile"
                class="absolute rounded-md top-[9em] sm:top-[4em] flex flex-col justify-center items-center"
              >
                <div
                  class="w-0 h-0"
                  style="
                    border-left: 7px solid transparent;
                    border-right: 7px solid transparent;
                    border-bottom: 7px solid #1e3a8a;
                  "
                ></div>
                <router-link
                  :to="{ name: 'Profile' }"
                  class="cursor-pointer py-1 font-normal border-blue-100 border-2 hover:bg-blue-100 text-blue-700 hover:border-blue-700 bg-white w-36 flex flex-col justify-between items-center"
                >
                  Mi perfil
                </router-link>
                <button
                  @click="logout"
                  class="cursor-pointer py-1 font-normal border-blue-100 border-2 hover:bg-blue-100 text-blue-700 hover:border-blue-700 bg-white w-36 flex flex-col justify-between items-center"
                >
                  Cerrar sesión
                </button>
              </div>
            </div>
          </template>
          <template v-else>
            <button
              @click="handleShowLoginModal"
              class="font-bold w-40 px-5 py-2 rounded-lg hover:border-blue-700 border-2 text-blue-700 bg-blue-100 mr-3"
            >
              INGRESAR
            </button>
            <button
              @click="handleShowRegisterModal"
              class="font-bold w-40 px-5 py-2 rounded-lg hover:border-blue-700 border-2 text-blue-700 bg-blue-100"
            >
              REGISTRARSE
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
