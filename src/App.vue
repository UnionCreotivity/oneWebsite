<script setup lang="ts">
import LoadingSpinner from './components/LoadingSpinner.vue'

import NavItem from './components/NavItem.vue'
import ArrowTop from './components/ArrowTop.vue'
import BottomTool from './components/BottomTool.vue'
</script>

<template>
  <LoadingSpinner />

  <NavItem />
  <RouterView />
  <ArrowTop />
  <BottomTool />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}

body {
  background-color: rgb(236, 228, 209);
}
img {
  display: block;
}

.swal2-styled.swal2-confirm {
  background-color: #7a9e75 !important;
}

.fancybox__backdrop {
  background: rgba(0, 0, 0, 0.76) !important;
}

.fancybox__content {
  padding: 0 !important;
}

.has-iframe .fancybox__content,
.has-map .fancybox__content,
.has-pdf .fancybox__content {
  width: 100% !important;
  height: 95% !important;
}

.fancybox__content > .f-button.is-close-btn {
  --f-button-width: 1.8vw !important;
  --f-button-height: 1.8vw !important;
  @media all and (max-width: 1024px) {
    --f-button-width: 4.8vw !important;
    --f-button-height: 4.8vw !important;
  }
  @media all and (max-width: 500px) {
    --f-button-width: 6.5vw !important;
    --f-button-height: 7vw !important;
  }
}

.fancybox__content > .f-button.is-close-btn {
  background: #d4271b !important;
  opacity: 1;
  top: 1vw;
  right: 2vw;
  @media all and (max-width: 1024px) {
    top: -6vw;
    right: 1vw;
    opacity: 1 !important;
  }
}

.is-compact .fancybox__content > .f-button.is-close-btn {
  --f-button-border-radius: 0% !important;
  @media all and (max-width: 500px) {
    top: -2vw !important;
    right: 3vw !important;
    width: 7vw !important;
  }
}
</style>
