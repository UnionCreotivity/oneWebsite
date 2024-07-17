<template>
  <div class="LoadingSpinner">
    <img :src="caseData.loading_logo" alt="" />
    <div class="box_div">
      <span class="box"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, toRefs } from 'vue'
import { useCase } from '@/stores/case'
import { gsap } from 'gsap'

//-- 建案資料 --
let { caseData } = toRefs(useCase())

onMounted(() => {
  let tl = gsap.timeline({ delay: 1.2 })

  tl.to('.LoadingSpinner .box_div', { opacity: 0, scale: 1.5, filter: 'blur(10px)', duration: 0.4 })
    .to('.LoadingSpinner img', { opacity: 0, y: -20, filter: 'blur(10px)', duration: 1 }, '>-0.1')
    .to('.LoadingSpinner', { opacity: 0, duration: 1 }, '<0.3')
    .to('.LoadingSpinner', { visibility: 'hidden' }, '>-0.2')
})
</script>
<style lang="scss" scoped>
.LoadingSpinner {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #778952;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  img {
    width: 90px;
    z-index: 1;
  }
  .box_div {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 120px;
    height: 120px;
    z-index: 0;
    .box {
      display: block;
      width: 120px;
      height: 120px;
      background-color: #333;
      animation-name: boxMv;
      animation-duration: 1.8s;
      animation-timing-function: ease-in-out;
      animation-iteration-count: infinite;
    }
  }

  @keyframes boxMv {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
}
</style>
