<template>
  <div class="card4">
    <div class="top-box">
      <div class="title-box">
        <div class="zh-title">
          <div class="title-img">
            <img
              alt="title_item"
              src="https://ws.srl.tw/cs/2024051711015229/img/img202406191433477.png"
              srcset=""
            />
          </div>

          <div class="title-text">交通大利多 金脈匯聚</div>
        </div>

        <div class="en-title-box">
          <div class="en-title">TRANSPORTATION</div>
        </div>
      </div>

      <div class="content">
        藉月桃路拓寬計劃及機場聯絡道，快速抵達機場捷運A15站和桃園國際機場，<br />
        並透過台61線與國道2號，無遠弗屆。便捷交通網，串聯機場、三鐵、國道、快速道，<br />
        金脈縱橫，房市增值風潮，有請掌握。
      </div>

      <div class="content-mobile">
        藉月桃路拓寬計劃及機場聯絡道，快速抵達機場捷運A15站和桃園國際機場，並透過台61線與國道2號，無遠弗屆。便捷交通網，串聯機場、三鐵、國道、快速道，金脈縱橫，房市增值風潮，有請掌握。
      </div>
      <img
        alt="c4_item"
        class="c4-item"
        src="https://ws.srl.tw/cs/2024051711015229/img/img202406191433551.png"
        srcset=""
      />
    </div>

    <div class="bottom-box">
      <Swiper
        class="swiper-container"
        :modules="modules"
        :loop="true"
        :autoplay="{ delay: 2000 }"
        :speed="1500"
        :slides-per-view="1.7"
        :centered-slides="true"
        :slidesOffsetBefore="0"
        effect="coverflow"
        :coverflowEffect="{
          slideShadows: true,
          rotate: 0,
          stretch: 0,
          depth: 500
        }"
        @swiper="onSwiper"
        navigation
        :pagination="{ clickable: true }"
      >
        <SwiperSlide class="item">
          <img
            alt="c4_swiper1"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914340342.webp"
          />
        </SwiperSlide>
        <SwiperSlide class="item">
          <img
            alt="c4_swiper2"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914341137.webp"
          />
        </SwiperSlide>
        <SwiperSlide class="item">
          <img
            alt="c4_swiper3"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914342332.webp"
          />
        </SwiperSlide>
        <SwiperSlide class="item">
          <img
            alt="c4_swiper4"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914343022.webp"
          />
        </SwiperSlide>
        <!-- Pagination -->

        <!-- Navigation -->
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
var window_width = window.innerWidth
gsap.registerPlugin(ScrollTrigger)
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

const modules = [Autoplay, EffectCoverflow, Pagination, Navigation]

const onSwiper = (swiperInstance: any) => {
  Swiper.value = swiperInstance
  console.log('Swiper effect:', Swiper.value.params)
}

onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.card4',
      start: '-30%'
    }
  })

  if (window_width <= 1024) {
    tl.from(
      '.card4 .top-box .title-box .zh-title,.card4 .top-box .title-box .en-title,.card4 .top-box .content-mobile',
      {
        duration: 1,
        opacity: 0,
        y: 70,
        ease: 'power1.inOut',
        stagger: {
          each: 0.1
        }
      }
    )
  } else {
    tl.from(
      '.card4 .top-box .title-box .zh-title,.card4 .top-box .title-box .en-title,.card4 .top-box .content',
      {
        duration: 1,
        opacity: 0,
        y: 100,
        ease: 'power1.inOut',
        stagger: {
          each: 0.1
        }
      }
    )
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.card4 {
  width: 100%;
  //   height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  padding-top: 4vw;
  padding-bottom: 4vw;
  flex-direction: column;
  @media all and (max-width: 1024px) {
    padding-top: 8vw;
  }
  .top-box {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin: 0 auto;
    position: relative;
    @media all and (max-width: 1024px) {
      width: 85%;
    }

    .c4-item {
      position: absolute;
      right: 12%;
      top: 31%;
      width: 13%;
      @media all and (max-width: 1366px) {
        right: 10%;
      }
      @media all and (max-width: 1024px) {
        top: 18%;
        width: 31%;
        right: -7%;
      }
    }

    .title-box {
      display: flex;
      flex-direction: column;

      .zh-title {
        display: flex;
        text-align: center;
        justify-content: center;
        margin-right: 3vw;
        @media all and (max-width: 1024px) {
          flex-direction: column;
        }
        .title-img {
          @include zhTitleImg();
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
        justify-content: center;
        @media all and (max-width: 1024px) {
          justify-content: center;
          margin-bottom: 7vw;
        }
        .en-title {
          @include enTitle();
          margin-top: 0.5vw;
          padding-bottom: 2vw;
          @media all and (max-width: 1024px) {
            margin-left: 0vw;
            margin-top: 4vw;
            padding-bottom: 6vw;
          }
          &:after {
            @include enTitleBorder();
            bottom: 0%;
            left: 10%;
          }
        }
      }
    }

    .content {
      @include content();
      margin-top: 2vw;
      text-align: center;
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

  .bottom-box {
    margin-top: 2vw;

    @media all and (max-width: 1024px) {
      margin-top: 5vw;
      margin-bottom: 3vw;
    }

    .swiper {
      position: relative;
      width: 85%;

      @media all and (max-width: 1024px) {
        padding-bottom: 0px !important;
      }

      ::v-deep .swiper-button-prev {
        background-image: url('../assets/images/prev.svg');
        color: rgba(255, 255, 255, 0);

        width: 2vw;
        height: 2vw;
        background-repeat: no-repeat;
        background-size: cover;
        left: 19vw;
      }

      ::v-deep .swiper-button-next {
        background-image: url('../assets/images/next.svg');
        color: rgba(255, 255, 255, 0);

        width: 2vw;
        height: 2vw;
        background-repeat: no-repeat;
        background-size: cover;
        right: 19vw;
      }

      ::v-deep .swiper-pagination-bullet-active {
        background: white;
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
    }
  }
}
</style>
