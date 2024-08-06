<template>
  <div class="card3">
    <div class="aerial-box">
      <div class="aerial">
        <div class="photo-box">
          <img
            alt="aerial"
            class="aerial-photo"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914304014.webp"
            srcset=""
          />
          <img
            alt="aerial_moblie"
            class="aerial-photo-moblie"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914305057.webp"
            srcset=""
          />
          <video autoplay="" class="light-video" loop="" muted="" playsinline="">
            <source
              src="https://ws.srl.tw/cs/2024050617332581/img/img2024050718025926.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div class="title-box">
        <div class="zh-title">
          客運園區
          <img
            alt="c3_item"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914311632.png"
            srcset=""
          />
          增值正核心
        </div>

        <div class="en-title">CORE AREA</div>

        <div class="content">
          航空城客運園區，接棒青埔特區，當青埔房價已成暴漲之勢，客運園區這塊封釀已久<br />
          的住宅寶地，將珍而重之，絕響啟封，成為2024年增值起漲正核心。
        </div>

        <div class="content-mobile">
          航空城客運園區，接棒青埔特區，<br />
          當青埔房價已成暴漲之勢，<br />
          客運園區這塊封釀已久的住宅寶地，<br />
          將珍而重之，絕響啟封，<br />
          成為2024年增值起漲正核心。
        </div>
      </div>

      <div class="arrow-container">
        <div class="arrow-left-line">
          <img alt="左線" src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914312364.svg" />
        </div>

        <div class="arrow-left">
          <img
            alt="左箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914313139.svg"
          />
          <img
            alt="左箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914313920.svg"
          />
          <img
            alt="左箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914315248.svg"
          />
          <img
            alt="左箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914315942.svg"
          />
        </div>

        <div class="arrow-finger">
          <img alt="手指" src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914320631.svg" />
          <div class="arrow-finger-circle">&nbsp;</div>

          <div class="arrow-finger-circle">&nbsp;</div>

          <div class="arrow-finger-circle">&nbsp;</div>
        </div>

        <div class="arrow-right">
          <img
            alt="右箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914321362.svg"
          />
          <img
            alt="右箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914321362.svg"
          />
          <img
            alt="右箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914321362.svg"
          />
          <img
            alt="右箭頭"
            src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914321362.svg"
          />
        </div>

        <div class="arrow-right-line">
          <img alt="右線" src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914323081.svg" />
        </div>
      </div>

      <div class="hint">空拍合成示意圖</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
var window_width = window.innerWidth
gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  if (window_width <= 1024) {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card3',
        start: '-45%'
      }
    })
    tl.fromTo(
      '.aerial-photo-moblie',
      {
        filter: 'brightness(1.2) blur(2px)'
      },
      {
        duration: 1.5,
        filter: 'brightness(1) blur(0px)',
        ease: 'power1.inOut'
      }
    ).from(
      '.card3 .title-box .zh-title,.card3 .title-box .en-title,.card3 .content-mobile',
      {
        duration: 1,
        opacity: 0,

        ease: 'power1.inOut',
        stagger: {
          each: 0.1
        }
      },
      '<0.3'
    )
  } else {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.card3',
        start: '-20%'
      }
    })
    tl.fromTo(
      '.aerial-photo',
      {
        filter: 'brightness(1.5) blur(5px)'
      },
      {
        duration: 1.5,
        filter: 'brightness(1) blur(0px)',
        ease: 'power1.inOut'
      }
    ).from(
      '.card3 .title-box .zh-title,.card3 .title-box .en-title,.card3 .content',
      {
        duration: 1,
        opacity: 0,

        ease: 'power1.inOut',
        stagger: {
          each: 0.07
        }
      },
      '<0.3'
    )
  }
})
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.card3 {
  position: relative;
  width: 100%;
  overflow: hidden;
  @media all and (max-width: 1024px) {
    overflow: hidden;
  }
  .aerial-box {
    display: flex;
    width: 100%;
    position: relative;
    .hint {
      display: block;
      content: '空拍合成示意圖';
      @include hint();
      @media all and (max-width: 1024px) {
        bottom: 1%;
      }
    }
    .photo-box {
      position: relative;
      overflow: hidden;
      @media all and (max-width: 1024px) {
        overflow: initial;
      }
    }
    .aerial {
      display: flex;
      @media all and (max-width: 1024px) {
        width: 100%;
        position: relative;
        overflow-x: scroll;
      }
      .aerial-photo {
        width: 100vw;
        @media all and (max-width: 1024px) {
          display: none;
        }
      }

      .aerial-photo-moblie {
        display: none;
        @media all and (max-width: 1024px) {
          display: flex;
          width: auto;
          height: 130vh;
          max-width: unset !important;
        }
        @media all and (max-width: 500px) {
          height: 94vh;
        }
      }
    }
    .light-video {
      mix-blend-mode: plus-lighter;
      position: absolute;
      transform: translate3d(0, 0, 0);
      z-index: 10;
      width: 14vw;
      top: 56%;
      left: 90%;
      transform: translate(-50%, -50%);

      @media all and (max-width: 1024px) {
        width: 15%;
        top: 61%;
        left: 90%;
      }
    }
    .title-box {
      position: absolute;
      top: 18%;
      left: 51%;
      transform: translate(-50%, -50%);
      text-align: center;
      @media all and (max-width: 1024px) {
        width: 100%;
        top: 21%;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .zh-title {
        @include zhTitleText();
        color: white;
        display: flex;
        justify-content: center;
        padding-left: 1vw;
        img {
          width: 10%;
          margin-left: 0.5vw;
          margin-right: 0.5vw;
          @media all and (max-width: 1024px) {
            width: 13%;
            margin-left: 2.5vw;
            margin-right: 2.5vw;
          }
        }
      }
      .en-title {
        @include enTitle();
        color: white;
        margin-bottom: 1vw;
        margin-top: 1vw;
        @media all and (max-width: 1024px) {
          margin-bottom: 5vw;
          margin-top: 5vw;
        }
      }
      .content {
        @include content();
        color: white;

        @media all and (max-width: 1024px) {
          display: none;
        }
      }

      .content-mobile {
        @include content();
        color: white;
        font-weight: normal;
        display: none;
        @media all and (max-width: 1024px) {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
