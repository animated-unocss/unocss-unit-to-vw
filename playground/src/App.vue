<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <div class="text-2xl">
      unocss text-2xl
    </div>
    <div class="text-20px">
      unocss text-20px
    </div>
    <div class="demo">
      css demo
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.demo{
  font-size: 20px;
}
</style>
