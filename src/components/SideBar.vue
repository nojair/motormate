<template>
  <div class="flex flex-col justify-start items-center h-full w-44 bg-orange-300 drop-shadow-xl overflow-y-auto fixed top-[6rem] bottom-0">
    <router-link :to="{ name: 'AllServices' }" class="border-b-2 border-orange-50 drop-shadow-xl py-1 mb-1 w-full text-center hover:bg-sky-200">Todos los servicios</router-link>
    <router-link :to="{ name: 'CarWashServices' }" class="border-b-2 border-orange-50 drop-shadow-xl py-1 mb-1 w-full text-center hover:bg-sky-200">Todo Lavado</router-link>
    <router-link :to="{ name: 'Profile' }" class="border-b-2 border-orange-50 drop-shadow-xl py-1 mb-1 w-full text-center hover:bg-sky-200">Mi perfil</router-link>
  </div>
</template>