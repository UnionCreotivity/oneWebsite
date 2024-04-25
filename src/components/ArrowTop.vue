<template>
  <a id="scroll-top-arrow" @click="scrollTop">
    <img class="arrow" src="/src/assets/return.png" alt="" srcset="" />
  </a>
</template>
<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style lang="scss" scoped>
#scroll-top-arrow {
  position: fixed;
  display: flex;
  bottom: 100px;
  justify-content: center;
  right: 35px;
  z-index: 30;
  width: 45px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.1);
  height: 45px;
  cursor: pointer;

  @media all and (max-width: 1024px) {
    width: 35px;
    height: 35px;
  }
  .arrow {
    z-index: 32;
    mix-blend-mode: lighten;
    height: 1vw;
    text-align: center;
    align-self: center;
    transition: all 1s ease-in-out;
    @media all and (max-width: 1024px) {
      height: 4vw;
    }

    @media all and (max-width: 500px) {
      height: 6vw;
    }
  }
}
</style>
