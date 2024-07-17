<script setup>
import LoadingSpinner from './components/LoadingSpinner.vue'

import NavItem from './components/NavItem.vue'
import ArrowTop from './components/ArrowTop.vue'
import BottomTool from './components/BottomTool.vue'

import FooterItem from './components/FooterItem.vue'
</script>

<template>
  <LoadingSpinner />

  <NavItem />
  <RouterView />
  <ArrowTop />
  <BottomTool />

  <FooterItem />
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
</style>
