<script setup>
import { RouterView } from 'vue-router'

import NavItem from './components/NavItem.vue'
import ArrowTop from './components/ArrowTop.vue'
import BottomTool from './components/BottomTool.vue'

import CardOne from './components/CardOne.vue'
import CardTwo from './components/CardTwo.vue'

import ReserveForm from './components/ReserveForm.vue'
import Footerbox from './components/footer.vue'
</script>

<template>
  <NavItem />
  <RouterView />
  <ArrowTop />
  <BottomTool />

  <CardOne />
  <CardTwo />

  <ReserveForm />
  <Footerbox />
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
