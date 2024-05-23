<script setup lang="ts">
interface IProps {
  model?: "normal" | "narrow"
}

const { model } = withDefaults(defineProps<IProps>(), {
  model: "normal"
})

const modelStyles = model === "normal" ? {
  height: "50px"
} : {
  height: "30px"
};

</script>

<template>
  <footer class="footer">
    <div class='flex justify-center items-center font-bold' :style='modelStyles'>
      <p class="text-gray-700">© {{ new Date().getFullYear() }}
        AUTOWASI. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>
