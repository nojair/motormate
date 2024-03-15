<script setup lang="ts">
import Layout from '@/components/Layout.vue'
import { useUserStore } from '@/stores/user'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

function submitForm(): void {
  userStore.updateUser({
    uid: userStore.uid,
    firstName: userStore.firstName,
    lastName: userStore.lastName,
    phone: userStore.phone,
    car: userStore.car
  })
}

onMounted(() => {
  userStore.uid ? null : (router.push({ name: 'Home' }))
})
</script>

<template>
  <Layout>
    <div class="flex flex-col justify-start items-center">
      <div class="flex flex-col justify-between items-start">
        <h1>Formulario de Contacto</h1>
        <form>
          <div class="field">
            <label for="first-name">Nombre:</label>
            <input
              id="first-name"
              v-model="userStore.firstName"
              type="text"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div class="field">
            <label for="last-name">Apellidos:</label>
            <input
              id="last-name"
              v-model="userStore.lastName"
              type="text"
              placeholder="Ingresa tus apellidos"
            />
          </div>
          <div class="field">
            <label for="phone">Teléfono:</label>
            <input
              id="phone"
              v-model="userStore.phone"
              type="tel"
              placeholder="Ingresa tu número de teléfono"
            />
          </div>
        </form>
      </div>

      <div class="flex flex-col justify-between items-center">
        <h1>Formulario de Datos del Carro</h1>
        <form>
          <div class="field">
            <label for="brand">Marca del Carro:</label>
            <input
              id="brand"
              v-model="userStore.car.brand"
              type="text"
              placeholder="Ejemplo: Toyota, Honda, etc."
            />
          </div>
          <div class="field">
            <label for="model">Modelo del Carro:</label>
            <input
              id="model"
              v-model="userStore.car.model"
              type="text"
              placeholder="Ejemplo: Corolla, Civic, etc."
            />
          </div>
          <div class="field">
            <label for="year">Año del Carro:</label>
            <input
              id="year"
              v-model="userStore.car.year"
              type="number"
              placeholder="Ejemplo: 2022"
            />
          </div>
          <div class="field">
            <label for="mileage">Kilometraje Actual:</label>
            <input
              id="mileage"
              v-model="userStore.car.mileage"
              type="number"
              placeholder="Ejemplo: 50000"
            />
          </div>
          <div class="field">
            <label for="fuel-type">Tipo de Combustible:</label>
            <select id="fuel-type" v-model="userStore.car.fuelType">
              <option value="gasolina">Gasolina</option>
              <option value="gnv">GNV</option>
              <option value="glp">GLP</option>
              <option value="diesel">Diésel</option>
              <option value="hibrido">Híbrido</option>
            </select>
          </div>
          <div class="field">
            <label for="soat-expiry">Fecha de Vencimiento de SOAT:</label>
            <input
              id="soat-expiry"
              v-model="userStore.car.soatExpiry"
              type="date"
            />
          </div>
          <div class="field">
            <label for="annual-inspection">Fecha de Revisión Técnica Anual:</label>
            <input
              id="annual-inspection"
              v-model="userStore.car.annualInspection"
              type="date"
            />
          </div>
          <div class="field">
            <label for="technical-inspection">Fecha de Inspección Técnica Anual:</label>
            <input
              id="technical-inspection"
              v-model="userStore.car.technicalInspection"
              type="date"
            />
          </div>
        </form>
      </div>

      <button type="submit" @click="submitForm">Guardar</button>
    </div>
  </Layout>
</template>