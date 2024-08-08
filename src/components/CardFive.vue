<template>
  <div class="card5">
    <div class="left-box">
      <Swiper
        class="swiper-container"
        :modules="modules"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        :speed="1500"
        effect="fade"
        :fadeEffect="{ crossFade: true }"
        @swiper="onSwiper"
        navigation
        :pagination="{ clickable: true }"
      >
        <SwiperSlide class="item">
          <img
            alt="c4_swiper1"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914352760.webp"
          />
        </SwiperSlide>
        <SwiperSlide class="item">
          <img
            alt="c4_swiper2"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914353671.webp"
          />
        </SwiperSlide>
        <SwiperSlide class="item">
          <img
            alt="c4_swiper3"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914354584.webp"
          />
        </SwiperSlide>
        <SwiperSlide class="item">
          <img
            alt="c4_swiper4"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914360467.webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>

    <div class="right-box">
      <div class="title-box">
        <div class="zh-title">
          <div class="title-img">
            <img
              alt="c5_item"
              src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914362925.png"
              srcset=""
            />
          </div>

          <div class="title-text">置產金磚 發展示範區</div>
        </div>

        <div class="en-title-box">
          <div class="en-title">GOLD PARK</div>
        </div>
      </div>

      <div class="content">
        客運園區作為政府與民間同樣重視的發展特區，<br />
        所挹注的資金與重點發展不計其數。<br />
        包括棒球場、市民活動中心、公園、埤塘生態區，<br />
        以及體育園區、醫療園區等重大建設。<br />
        將成為置產金磚，全面發展的示範區。
      </div>

      <div class="content-mobile">
        客運園區作為政府與民間同樣重視的發展特區所挹注的資金與重點發展不計其數。包括棒球場、市民活動中心、公園、埤塘生態區，以及體育園區、醫療園區等重大建設。將成為置產金磚，全面發展的示範區。
      </div>
    </div>
    <img
      alt="c5_item2"
      class="c5-item2"
      src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914363711.png"
      srcset=""
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
var window_width = window.innerWidth
gsap.registerPlugin(ScrollTrigger)

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, Pagination, EffectFade, Navigation]
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';

.card5 {
  width: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  padding-bottom: 8vw;

  justify-content: center;
  @media all and (max-width: 1024px) {
    flex-direction: column-reverse;
  }
  .left-box {
    display: flex;
    flex-direction: column;
    width: 50%;

    @media all and (max-width: 1024px) {
      width: 85%;
      margin: 0 auto;
      margin-top: 5vw;
    }
    .swiper {
      position: relative;
      width: 100%;

      @media all and (max-width: 1024px) {
        width: 100%;
        padding-bottom: 0px !important;
      }

      .swiper-slide {
        width: 100%;
        overflow: hidden;
      }

      .hint {
        @include hint();
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        object-fit: cover;
      }

      .swiper-pagination {
        bottom: 2%;
      }

      .swiper-pagination-bullet-active {
        background: white;
      }
    }
  }

  .right-box {
    display: flex;
    flex-direction: column;
    width: 37%;
    padding-left: 5%;
    justify-content: center;
    @media all and (max-width: 1024px) {
      padding-left: 0vw;
      width: 85%;
      margin: 0 auto;
    }
    .title-box {
      display: flex;
      flex-direction: column;
      .zh-title {
        display: flex;
        @media all and (max-width: 1024px) {
          justify-content: center;
          flex-direction: column;
        }
        .title-img {
          @include zhTitleImg();
          width: 3.2vw;
          @media all and (max-width: 1024px) {
            margin-bottom: 3vw;
          }
          img {
            width: 100%;
          }
        }
        .title-text {
          @include zhTitleText();
          text-align: center;
          padding-left: 1vw;

          @media all and (max-width: 1024px) {
            padding-left: 0vw;
          }
        }
      }
      .en-title-box {
        display: flex;
        @media all and (max-width: 1024px) {
          justify-content: center;
          margin-bottom: 7vw;
        }
        .en-title {
          @include enTitle();

          margin-left: 4.3vw;
          margin-top: 0.5vw;
          padding-bottom: 2vw;
          border-bottom: 1px solid #d39f4a;

          @media all and (max-width: 1440px) {
            margin-left: 4.5vw;
          }
          @media all and (max-width: 1366px) {
            margin-left: 5vw;
          }
          @media all and (max-width: 1024px) {
            margin-left: 0vw;
            margin-top: 4vw;
            padding-bottom: 6vw;
          }
        }
      }
    }
    .content {
      @include content();
      margin-left: 4.3vw;
      margin-top: 2vw;
      @media all and (max-width: 1440px) {
        margin-left: 4.5vw;
      }
      @media all and (max-width: 1366px) {
        margin-left: 5vw;
      }
      @media all and (max-width: 1024px) {
        display: none;
      }
    }

    .content-mobile {
      @include content();
      display: none;

      @media all and (max-width: 1024px) {
        display: flex;
        text-align: justify;
        margin-bottom: 5vw;
      }
    }
  }

  .c5-item2 {
    position: absolute;
    right: -3%;
    bottom: 11%;
    width: 20%;
    @media all and (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
