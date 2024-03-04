<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import type { PropType } from 'vue';
  
  export default defineComponent({
    name: 'HelloWorld',
    props: {
      msg: {
        type: String as PropType<string>,
        required: true
      }
    }
  });
  </script>
  
  <style scoped>
  .hello {
    font-size: 2em;
  }
  </style>
  