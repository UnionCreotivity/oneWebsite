<script setup>
import { RouterView } from 'vue-router'

import NavItem from './components/NavItem.vue'
import ArrowTop from './components/ArrowTop.vue'
import BottomTool from './components/BottomTool.vue'

import CardOne from './components/CardOne.vue'
import CardTwo from './components/CardTwo.vue'
</script>

<template>
  <NavItem />
  <RouterView />
  <ArrowTop />
  <BottomTool />

  <CardOne />
  <CardTwo />
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
}
</style>
