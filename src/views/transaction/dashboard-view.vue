<template>
  <main>
    <h1>DASHBOARDS</h1>
  </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
h1 {
  display: inline-block;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: rotate 3s linear infinite;
}

@keyframes rotate {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
