<template>
  <CardOne :noDelay="noDelay" />
  <CardTwo />
  <CardThree />
  <CardFour />
  <CardImgbox />
  <CardFive />
  <ReserveForm />
</template>

<script setup lang="ts">
import CardOne from '../components/CardOne.vue'
import CardTwo from '../components/CardTwo.vue'
import CardThree from '../components/CardThree.vue'
import CardFour from '../components/CardFour.vue'
import CardImgbox from '../components/CardImgbox.vue'
import CardFive from '../components/CardFive.vue'
import ReserveForm from '../components/ReserveForm.vue'
import { defineProps } from 'vue'
import { aniDelay } from '@/stores/aniDelay'

const appStore = aniDelay()
const noDelay = appStore.noDelay
</script>
