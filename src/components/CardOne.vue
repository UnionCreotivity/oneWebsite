<template>
  <div class="card1">
    <img
      alt="right"
      class="top-right-flower"
      src="https://ws.srl.tw/cs/2024051711015229/img/img202406191428270.webp"
      srcset=""
    />
    <picture>
      <source
        media="(max-width: 1024px)"
        srcset="https://ws.srl.tw/cs/2024051711015229/img/img2024061914441637.png"
      />
      <img
        alt="right2"
        class="bottom-right-flower"
        src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914283573.webp"
        srcset=""
      />
    </picture>
    <img
      alt="left"
      class="bottom-left-flower"
      src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914284297.webp"
      srcset=""
    />
    <div class="title-box">
      <div class="left-box">鴻堡</div>
      <img
        alt="line"
        class="title-line"
        src="https://ws.srl.tw/cs/2024051711015229/img/img2024061915370465.svg"
        srcset=""
      />
      <div class="right-box">
        <div class="text-box">
          <div class="zh-name">俬玥藏</div>

          <div class="en-name">LOBEL CASTLE</div>
        </div>
        <img
          alt="flower"
          class="right-flower"
          src="https://ws.srl.tw/cs/2024051711015229/img/img2024061914285253.png"
          srcset=""
        />
      </div>
    </div>

    <div class="sub-title-box">航空城客運園區 手感系淳釀別墅</div>

    <div class="sub-title-box-mobile">
      航空城客運園區<br />
      手感系淳釀別墅
    </div>

    <div class="sub-title-box2">
      <div>園區唯一</div>

      <div>5獨立衛浴套房</div>

      <div>別墅之王</div>
    </div>

    <div class="sub-title-box2-mobile">
      <div>園區唯一</div>

      <div>5獨立衛浴套房</div>
    </div>

    <div class="sub-title-box2-mobile2">
      <div>別墅之王</div>
    </div>

    <div class="sub-title-box3">
      <div class="box">
        <div>淳釀14席</div>
        <div>68-71坪</div>
        <div>全新落成</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { SplitText } from 'gsap/SplitText'
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vh', `${vh}px`)
var window_width = window.innerWidth

gsap.registerPlugin(SplitText)

onMounted(() => {
  const zhTitle = document.querySelectorAll('.card1 .right-box .text-box .zh-name')

  const splitzhTitle = Array.from(zhTitle).map((heading) => {
    return new SplitText(heading, {
      type: 'chars,words,lines',
      linesClass: 'clip-text'
    })
  })
  let tl = gsap.timeline({ delay: 2 })
  if (window_width <= 1024) {
    tl.from('.card1 .bottom-left-flower', {
      x: '-10vw',
      rotate: '-30deg',
      duration: 1,
      ease: 'power1.out'
    })
      .from(
        '.card1 .top-right-flower',
        { y: '-16vw', x: '-2vw', rotate: '15deg', duration: 1, ease: 'power2.out' },
        '<0.1'
      )
      .from(
        '.card1 .bottom-right-flower',
        { y: '10vw', x: '6vw', rotate: '-10deg', duration: 1, ease: 'power2.out' },
        '<0.15'
      )
      .from(
        '.card1 .left-box',
        {
          duration: 1,
          opacity: 0,
          filter: 'blur(5px)',
          ease: 'power1.inOut'
        },
        '<0.15'
      )

      .from(
        splitzhTitle[0].chars,
        {
          duration: 1,
          opacity: 0,
          filter: 'blur(5px)',
          ease: 'power1.inOut',
          stagger: {
            each: 0.15
          }
        },
        '<0.3'
      )
      .from(
        '.title-line',
        {
          duration: 1,
          opacity: 0,
          ease: 'power1.inOut'
        },
        '<'
      )
      .from(
        '.card1 .right-box .text-box .en-name',
        {
          duration: 1,
          opacity: 0,
          filter: 'blur(5px)',
          ease: 'power1.inOut'
        },
        '<0.4'
      )
      .from(
        '.card1 .sub-title-box-mobile,.card1 .sub-title-box2-mobile,.card1 .sub-title-box2-mobile2,.card1 .sub-title-box3',
        {
          duration: 1,
          opacity: 0,
          y: 70,
          filter: 'blur(5px)',
          ease: 'power1.inOut',
          stagger: {
            each: 0.2
          }
        },
        '<0.3'
      )
  } else {
    tl.from('.card1 .bottom-left-flower', {
      x: '-10vw',
      rotate: '-30deg',
      duration: 1,
      ease: 'power1.out'
    })
      .from(
        '.card1 .top-right-flower',
        { y: '-16vw', x: '-2vw', rotate: '15deg', duration: 1, ease: 'power2.out' },
        '<0.1'
      )
      .from(
        '.card1 .bottom-right-flower',
        { y: '10vw', x: '6vw', rotate: '-10deg', duration: 1, ease: 'power2.out' },
        '<0.15'
      )
      .from(
        '.card1 .left-box',
        {
          duration: 1,
          opacity: 0,
          filter: 'blur(5px)',
          ease: 'power1.inOut'
        },
        '<0.15'
      )
      .from(
        splitzhTitle[0].chars,
        {
          duration: 1,
          opacity: 0,
          filter: 'blur(5px)',
          ease: 'power1.inOut',
          stagger: {
            each: 0.15
          }
        },
        '<0.3'
      )
      .from(
        '.title-line',
        {
          duration: 1,
          opacity: 0,
          ease: 'power1.inOut'
        },
        '<'
      )
      .from(
        '.card1 .right-box .text-box .en-name',
        {
          duration: 1,
          opacity: 0,
          filter: 'blur(5px)',
          ease: 'power1.inOut'
        },
        '<0.4'
      )
      .from(
        '.card1 .sub-title-box,.card1 .sub-title-box2,.card1 .sub-title-box3',
        {
          duration: 1,
          opacity: 0,
          y: 80,
          filter: 'blur(5px)',
          ease: 'power1.inOut',
          stagger: {
            each: 0.2
          }
        },
        '<0.3'
      )
      .from(
        '.card1 .right-box .right-flower',
        {
          duration: 1,
          opacity: 0,
          scale: 0.2,
          // rotation: 90 * 1,
          ease: 'power0.in'
        },
        '<0.6'
      )
  }
})
</script>

<style lang="scss">
.card1 {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  // background-image: url(../../images/c1_bg.webp);
  background-image: url(https://ws.srl.tw/cs/2024051711015229/img/img2024061914462635.webp);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 15%;
  justify-content: center;

  @media all and (max-width: 1024px) {
    // background-image: url(../../images/mobile_bg.png);
    background-image: url(https://ws.srl.tw/cs/2024051711015229/img/img2024061914471080.png);
    background-position: 0%;
    padding-bottom: 7vw;
  }

  @media all and (max-width: 500px) {
    height: calc(var(--vh, 1vh) * 95);
    height: 92svh;
    padding-bottom: 12vw;
  }

  .top-right-flower {
    position: absolute;
    width: 10%;
    right: 0px;
    top: 0px;
    @media all and (max-width: 1024px) {
      top: 2%;
      width: 25%;
    }
  }

  .bottom-right-flower {
    position: absolute;
    width: 32%;
    right: 0px;
    bottom: 0px;
    @media all and (max-width: 1024px) {
      width: 56%;
    }
    @media all and (max-width: 500px) {
      width: 65%;
    }
  }

  .bottom-left-flower {
    position: absolute;
    width: 17%;
    left: 0px;
    bottom: 0px;
    @media all and (max-width: 1024px) {
      width: 30%;
      left: -10%;
    }
  }

  .title-box {
    display: flex;
    padding-right: 5%;
    justify-content: center;
    padding-left: 3vw;
    margin-top: -2vw;

    @media all and (max-width: 1024px) {
      padding-right: 0%;
      padding-left: 0%;
      margin-top: 0vw;
    }

    .left-box {
      color: #d39f4a;
      font-size: 4.5vw;
      font-weight: bold;
      font-family: 'Noto Serif TC';
      writing-mode: vertical-lr;
      position: relative;
      align-items: center;
      letter-spacing: 0.2em;
      align-self: flex-end;
      padding-top: 1.85%;
      // margin-right: 3vw;

      @media all and (max-width: 1024px) {
        font-size: 12vw;
        padding-top: 4vw;
      }
      // &:after {
      //   content: "";
      //   position: absolute;
      //   bottom: 8%;
      //   right: -16%;
      //   width: 1px;
      //   height: calc(100% - 0.7em);
      //   background-color: #b3b5b8;
      //   pointer-events: none;
      //   @media all and (max-width: 1024px) {
      //     height: calc(100% - 0.6em);
      //   }
      // }
    }

    .title-line {
      padding-top: 2vw;
      width: 1%;
      height: 11.5vw;
      margin-right: 1.3vw;
      margin-left: 0.3vw;
      @media all and (max-width: 1024px) {
        padding-top: 5vw;
        height: 30vw;
        margin-right: 4.5vw;
        margin-left: 3vw;
      }
    }
    .right-box {
      display: flex;
      position: relative;
      .text-box {
        display: flex;
        flex-direction: column;

        .zh-name {
          color: #606060;
          display: flex;
          font-size: 6.3vw;
          font-weight: bold;
          font-family: 'Noto Serif TC';
          letter-spacing: 0.15em;
          text-align: center;

          @media all and (max-width: 1024px) {
            font-size: 16vw;
          }
        }
        .en-name {
          color: #b3b5b8;
          display: flex;
          font-size: 2.6vw;
          font-weight: 500;
          font-family: 'Cormorant Garamond';
          letter-spacing: 0.08em;
          text-align: center;
          padding-left: 0.6vw;
          @media all and (max-width: 1024px) {
            font-size: 6.8vw;
          }
        }
      }

      .right-flower {
        position: absolute;
        width: 33%;
        right: -33%;
        top: 12%;
        @media all and (max-width: 1024px) {
          display: none;
        }
      }
    }
  }

  .sub-title-box {
    display: flex;
    justify-content: center;
    font-family: 'Noto Serif TC';
    font-size: 2.35vw;
    font-weight: 600;
    color: #606060;
    padding-left: 1vw;
    letter-spacing: 0.4em;
    margin-top: 2.5vw;
    margin-bottom: 2vw;

    @media all and (max-width: 1024px) {
      display: none;
    }
  }

  .sub-title-box-mobile {
    display: none;
    justify-content: center;
    font-family: 'Noto Serif TC';
    font-size: 5vw;
    font-weight: 600;
    color: #606060;
    padding-left: 0vw;
    letter-spacing: 0.35em;
    margin-top: 5vw;
    margin-bottom: 5vw;
    line-height: 1.7;

    @media all and (max-width: 1024px) {
      display: flex;
      font-size: 5.3vw;
      margin-top: 3vw;
      margin-bottom: 3vw;
    }
  }

  .sub-title-box2 {
    display: flex;
    justify-content: center;
    font-family: 'Noto Serif TC';
    font-size: 2.75vw;
    font-weight: bold;
    color: #517226;
    letter-spacing: 0.07em;

    @media all and (max-width: 1024px) {
      display: none;
    }

    div {
      position: relative;

      &:nth-child(1) {
        margin-right: 2vw;
        position: relative;
        &:after {
          content: ' ';
          position: absolute;
          bottom: 8%;
          right: -7.5%;
          width: 1px;
          height: calc(100% - 0.4em);
          background-color: #517226;
          pointer-events: none;
        }
      }

      &:nth-child(3) {
        margin-left: 2vw;

        position: relative;
        &:after {
          content: ' ';
          position: absolute;
          bottom: 8%;
          left: -9%;
          width: 1px;
          height: calc(100% - 0.4em);
          background-color: #517226;
          pointer-events: none;
        }
      }
    }
  }

  .sub-title-box2-mobile {
    justify-content: center;
    font-family: 'Noto Serif TC';
    font-size: 6.6vw;
    font-weight: bold;
    color: #517226;
    letter-spacing: 0.07em;
    display: none;
    @media all and (max-width: 1024px) {
      display: flex;
    }

    div {
      position: relative;

      &:nth-child(1) {
        margin-right: 5.5vw;
        position: relative;
        &:after {
          content: ' ';
          position: absolute;
          bottom: 8%;
          right: -8.5%;
          width: 1px;
          height: calc(100% - 0.4em);
          background-color: #517226;
          pointer-events: none;
        }
      }
    }
  }

  .sub-title-box2-mobile2 {
    justify-content: center;
    font-family: 'Noto Serif TC';
    font-size: 8.3vw;
    font-weight: bold;
    color: #517226;
    letter-spacing: 0.07em;
    margin-top: 2vw;
    display: none;
    @media all and (max-width: 1024px) {
      display: flex;
    }
  }

  .sub-title-box3 {
    display: flex;
    justify-content: center;
    font-family: 'Noto Serif TC';
    font-size: 1.7vw;
    font-weight: 500;
    color: #606060;
    letter-spacing: 0.3em;
    margin-top: 3vw;
    @media all and (max-width: 1024px) {
      font-size: 4.55vw;
    }

    @media all and (max-width: 500px) {
      margin-top: 4vw;
    }
    .box {
      display: flex;
      border: 1px solid #b3b5b8;
      padding-top: 0.2vw;
      padding-bottom: 0.3vw;
      padding-left: 1vw;
      padding-right: 0.5vw;

      @media all and (max-width: 500px) {
        padding-left: 2.5vw;
        padding-right: 1.5vw;
      }

      div {
        position: relative;

        &:nth-child(1) {
          margin-right: 2vw;
          position: relative;
          &:after {
            content: ' ';
            position: absolute;
            bottom: 8%;
            right: -7.5%;
            width: 1px;
            height: calc(100% - 0.4em);
            background-color: #b3b5b8;
            pointer-events: none;

            @media all and (max-width: 1024px) {
              right: -1.5%;
            }
          }
        }

        &:nth-child(3) {
          margin-left: 2vw;

          position: relative;
          &:after {
            content: ' ';
            position: absolute;
            bottom: 8%;
            left: -13%;
            width: 1px;
            height: calc(100% - 0.4em);
            background-color: #b3b5b8;
            pointer-events: none;
            @media all and (max-width: 1024px) {
              left: -7%;
            }
          }
        }
      }
    }
  }
}
</style>
