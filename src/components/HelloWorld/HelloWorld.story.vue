<script setup lang="ts">
import { ref } from 'vue'
import HelloWorld from './HelloWorld.vue'

const text = ref<string>('Hello World')
</script>

<template>
  <Story>
    <HelloWorld :message="text" />
  </Story>
</template>
