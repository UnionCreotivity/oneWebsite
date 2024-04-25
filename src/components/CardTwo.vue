<template>
  <div class="card2">
    <div class="text">Helloooooo!</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
</script>

<style lang="scss">
.card2 {
  position: relative;
  background-color: rgb(236, 228, 209);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding-top: 20vw;
  z-index: 1;
  .text {
    color: rgb(66, 66, 66);
    position: relative;
    font-size: 5vw;
    letter-spacing: 2px;
    font-family: 'Noto Sans TC';
    font-weight: 400;
  }
}
</style>
