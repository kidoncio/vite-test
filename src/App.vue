<script setup lang="ts">
import 'vite-test-publish-npm-hello-world/dist/style.css'
import { HelloWorld }  from 'vite-test-publish-npm-hello-world'
</script>

<template>
  <div>
    <a
      href="https://vitejs.dev"
      target="_blank"
    >
      <img
        src="/vite.svg"
        class="logo"
        alt="Vite logo"
      >
    </a>

    <a
      href="https://vuejs.org/"
      target="_blank"
    >
      <img
        src="./assets/vue.svg"
        class="logo vue"
        alt="Vue logo"
      >
    </a>
  </div>

  <HelloWorld message="Teste" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
