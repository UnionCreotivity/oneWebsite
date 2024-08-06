<template>
  <div class="card2">
    <div class="left-box">
      <div class="img-box">
        <img
          alt="c2_swiper"
          src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914293866.webp"
          srcset=""
        />
      </div>
    </div>

    <div class="right-box">
      <div class="title-box">
        <div class="zh-title">
          <div class="title-img">
            <img
              alt="title_item"
              src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914294499.png"
              srcset=""
            />
          </div>

          <div class="title-text">手感系淳釀別墅</div>
        </div>

        <div class="en-title-box">
          <div class="en-title">QUALITY VILLA</div>
        </div>
      </div>

      <div class="content">
        愈是樸實無華，愈能體現反璞歸真的高貴本色。<br />
        一如釀酒，日本清酒最高等級～大吟釀，<br />
        磨掉每一粒純米的外層雜質，僅留存「心白」之菁華。<br />
        不譁眾取寵、不花俏討好，只萃取別墅大戶的內涵與尊榮，<br />
        匹配品味相當的客戶，不人云亦云、不隨波逐流，<br />
        手感細琢，歷久而彌新，樸實而永恆。
      </div>

      <div class="content-mobile1">
        愈是樸實無華，愈能體現反璞歸真的高貴本色。一如釀酒，日本清酒最高等級～大吟釀，磨掉每一粒純米的外層雜質，僅留存「心白」之菁華。
      </div>

      <div class="content-mobile2">
        不譁眾取寵、不花俏討好，只萃取別墅大戶的內涵與尊榮，匹配品味相當的客戶，不人云亦云、不隨波逐流，手感細琢，歷久而彌新，樸實而永恆。
      </div>
    </div>
    <img
      alt="c2_bottom_item"
      class="c2-bottom-item"
      src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914295116.png"
      srcset=""
    />
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
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.card2',
      start: '-30%'
    }
  })
  if (window_width <= 1024) {
    tl.from(
      '.card2 .right-box .title-box .zh-title,.card2 .right-box .title-box .en-title,.card2 .right-box .content-mobile1,.card2 .right-box .content-mobile2',
      {
        duration: 1,
        opacity: 0,
        y: 70,
        ease: 'power1.inOut',
        stagger: {
          each: 0.07
        }
      }
    )
  } else {
    tl.from(
      '.card2 .right-box .title-box .zh-title,.card2 .right-box .title-box .en-title,.card2 .right-box .content',
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
.card2 {
  width: 100%;
  // height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
  // background-image: url(../../images/c2_bg.png);
  background-image: url(https://ws.srl.tw/cs/2024051711015229/img/img2024061914480347.png);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 8vw;
  padding-bottom: 8vw;
  padding-left: 6vw;
  @media all and (max-width: 1024px) {
    flex-direction: column-reverse;
    padding-left: 0vw;
    padding-bottom: 10vw;
  }
  .left-box {
    display: flex;
    flex-direction: column;
    width: 54%;
    @media all and (max-width: 1024px) {
      width: 85%;
      margin: 0 auto;
    }

    .img-box {
      position: relative;
      @media all and (max-width: 1024px) {
        margin-top: 8vw;
      }
      &::after {
        content: '外觀實景拍攝圖';
        @include hint();
      }
      img {
        width: 100%;
      }
    }
  }

  .right-box {
    display: flex;
    flex-direction: column;
    width: 45%;
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
          @media all and (max-width: 1024px) {
            margin-bottom: 3vw;
          }
          img {
            width: 100%;
          }
        }
        .title-text {
          @include zhTitleText();
          padding-left: 1vw;

          @media all and (max-width: 1024px) {
            text-align: center;
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
          margin-left: 3.5vw;
          margin-top: 0.5vw;
          padding-bottom: 2vw;
          border-bottom: 1px solid #d39f4a;

          @media all and (max-width: 1782px) {
            margin-left: 4vw;
          }

          @media all and (max-width: 1440px) {
            margin-left: 4.5vw;
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
      margin-left: 3.5vw;
      margin-top: 2vw;
      @media all and (max-width: 1782px) {
        margin-left: 4vw;
      }

      @media all and (max-width: 1440px) {
        margin-left: 4.5vw;
      }

      @media all and (max-width: 1024px) {
        display: none;
      }
    }

    .content-mobile1 {
      @include content();
      display: none;

      @media all and (max-width: 1024px) {
        display: flex;
        text-align: justify;
        margin-bottom: 5vw;
      }
    }
    .content-mobile2 {
      @include content();
      display: none;

      @media all and (max-width: 1024px) {
        display: flex;
        text-align: justify;
      }
    }
  }
  .c2-bottom-item {
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 15%;
    @media all and (max-width: 1024px) {
      display: none;
    }
  }
}
</style>
