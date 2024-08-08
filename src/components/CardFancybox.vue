<template>
  <div class="card4_2">
    <div class="bg_div">&nbsp;</div>

    <div class="flex_box">
      <div class="left">
        <picture>
          <source
            media="(max-width: 900px)"
            srcset="https://ws.srl.tw/cs/2024051711015229/img/img2024062410270288.svg"
          />
          <img alt="文字" src="https://ws.srl.tw/cs/2024051711015229/img/img2024062410264897.png" />
        </picture>
      </div>

      <div class="right">
        <a data-fancybox="" href="https://ws.srl.tw/cs/2024051711015229/img/img2024062410292581.jpg"
          ><img
            alt="地圖"
            class="map_img"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024062410292581.jpg"
          />
        </a>
        <img
          alt="葉子"
          class="leaf_img"
          src="https://ws.srl.tw/cs/2024051711015229/img/img202406241030077.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
</style>
