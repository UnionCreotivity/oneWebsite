<template>
  <div class="google-life-box">
    <div class="google-life">
      <div class="item" v-for="(life, index) in GoogleLifeData" :key="index">
        <a :href="life.url" data-fancybox data-type="iframe">
          <img :src="life.icon" alt="" srcset="" />
          <span>{{ life.name }}</span>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { onMounted, ref, toRefs, watch } from 'vue'
import { useGoogleLifeData } from '@/stores/googleLifeData'
const { GoogleLifeData } = toRefs(useGoogleLifeData())

onMounted(() => {
  watch(GoogleLifeData, (data) => {
    console.log(GoogleLifeData)
  })
})

// Fancybox.bind('[data-fancybox]', {})
</script>
<style lang="scss" scoped>
.google-life-box {
  display: flex;
  width: 100%;
  padding-top: 2vw;
  padding-bottom: 4vw;
  display: flex;
  position: relative;
  //   background-color: #778952;
  justify-content: center;

  .google-life {
    display: flex;

    flex-wrap: wrap;
    width: 30%;
    justify-content: center;

    .item {
      width: 30%;
      border-radius: 30px;
      display: flex;
      justify-content: center;
      a {
        border-radius: 30px;
        text-decoration: none;
        color: white;
        width: 86%;
        background-color: #637342;
        font-size: 18px;
        display: flex;
        letter-spacing: 1px;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 2vw;
        margin-bottom: 1vw;
      }
      img {
        width: 40px;
        margin-bottom: 0.5vw;
      }
    }
  }
}
</style>
