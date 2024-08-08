<template>
  <div class="card4_2">
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
.card4_2 {
  position: relative;
  padding: 2vw 0;
  padding-right: 7vw;
}

.card4_2 .flex_box {
  display: flex;
  position: relative;
  z-index: 5;
}
.card4_2 .left {
  flex: 1 1 14%;
  display: flex;
  justify-content: center;
}
.card4_2 .left img {
  width: auto;
}

.card4_2 .right {
  flex: 1 1 50%;
  position: relative;
}

.card4_2 .right .map_img {
  display: block;
  width: 100%;
}
.card4_2 .right .leaf_img {
  position: absolute;
  width: 20%;
  left: -20%;
  bottom: 0%;
}

@media all and (max-width: 900px) {
  .card4_2 {
    padding: 2vw 7vw;
  }
  .card4_2 .flex_box {
    flex-direction: column;
  }
  .card4_2 .left img {
    width: 50%;
    margin: auto;
    display: block;
    margin-bottom: 9%;
  }
}
</style>
