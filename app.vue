<template>
  <div class="app">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
import 'vue-skeletor/dist/vue-skeletor.css';
</script>
<style lang="scss">
.app {
  padding: 24px;
  background-color: var(--bg-color);
}
</style>