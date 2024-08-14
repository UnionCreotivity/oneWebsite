<template>
  <div class="google-life-box">
    <div class="google-life">
      <div class="item" v-for="(life, index) in GoogleLifeData" :key="index">
        <a
          :href="life.url"
          data-fancybox
          data-type="iframe"
          @mouseenter="mouseenter"
          @mouseleave="mouseleave"
        >
          <img :src="life.icon" alt="" srcset="" />
          <span>{{ life.name }}</span>
        </a>
      </div>
    </div>
  </div>

  <div class="right-google-life" v-if="isMobile === false">
    <div
      class="item"
      v-for="(life, index) in limitedGoogleLifeData"
      :key="index"
      ref="rightLifeItems"
    >
      <a
        :href="life.url"
        data-fancybox
        data-type="iframe"
        @mouseenter="rightMouseenter"
        @mouseleave="rightMouseleave"
      >
        <img class="item-img" :src="life.icon" alt="" srcset="" />
        <span>{{ life.name }}</span>
      </a>
    </div>
    <div class="item-more">
      <a @click="menuBtn('.google-life-box')">
        <img
          class="item-img"
          src="https://ws.srl.tw/img/svg/mapTool/new_more.png"
          alt=""
          srcset=""
        />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import '@fancyapps/ui/dist/fancybox/fancybox.css'
import { onMounted, toRefs, watch } from 'vue'
import { useGoogleLifeData } from '@/stores/googleLifeData'
import { gsap } from 'gsap'
const { GoogleLifeData } = toRefs(useGoogleLifeData())

const screenWidth = ref(document.documentElement.clientWidth)
const isMobile = ref(screenWidth.value < 1024)

const menuBtn = (btn: string) => {
  const targetElement = document.querySelector(btn)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}

const limitedGoogleLifeData = computed(() => {
  return Array.isArray(GoogleLifeData.value) ? GoogleLifeData.value.slice(0, 6) : []
})

//下方食衣住行
const mouseenter = (item: any) => {
  gsap.to(item.srcElement.children[0], { scale: 1.25, duration: 0.5, ease: 'power2.inOut' })
}

const mouseleave = (item: any) => {
  gsap.to(item.srcElement.children[0], { scale: 1, duration: 0.5, ease: 'power2.inOut' })
}

//右側食衣住行
const rightMouseenter = (item: any) => {
  gsap.to(item.srcElement.children[0], { opacity: 1, duration: 0.3, ease: 'power2.inOut' })
  gsap.to(item.srcElement.children[1], { opacity: 0, duration: 0.3, ease: 'power2.inOut' })
}

const rightMouseleave = (item: any) => {
  gsap.to(item.srcElement.children[0], { opacity: 0, duration: 0.3, ease: 'power2.inOut' })
  gsap.to(item.srcElement.children[1], { opacity: 1, duration: 0.3, ease: 'power2.inOut' })
}

onMounted(() => {
  watch(GoogleLifeData, (data) => {})
})
</script>
<style lang="scss" scoped>
.google-life-box {
  display: flex;
  width: 100%;
  padding-top: 2vw;
  padding-bottom: 4vw;
  display: flex;
  position: relative;
  justify-content: center;

  .google-life {
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    justify-content: center;
    @media all and (max-width: 1760px) {
      width: 36%;
    }
    @media all and (max-width: 1440px) {
      width: 45%;
    }
    @media all and (max-width: 1024px) {
      width: 90%;
    }
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
        @media all and (max-width: 1440px) {
          margin-bottom: 1.5vw;
        }
        @media all and (max-width: 1024px) {
          padding: 4vw;
          margin-bottom: 3.5vw;
        }
        @media all and (max-width: 500px) {
          border-radius: 15px;
        }
        &:hover {
          background-color: #4e5b34;
        }

        span {
          @media all and (max-width: 1024px) {
            font-size: 2.8vw;
          }
        }
      }
      img {
        width: 40px;
        margin-bottom: 0.5vw;
        @media all and (max-width: 1440px) {
          margin-bottom: 1vw;
        }
        @media all and (max-width: 1024px) {
          width: 5vw;
          margin-bottom: 2vw;
        }
      }
    }
  }
}

.right-google-life {
  position: fixed;
  right: 1vw;
  top: 150px;
  z-index: 100;
  width: 52px;
  .item,
  .item-more {
    display: flex;

    a {
      background-color: #778952;
      border-radius: 12px;
      margin-bottom: 7px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      padding: 8px 12px;
      text-align: center;
      min-width: 45px;
      min-height: 45px;
      position: relative;
      span {
        color: rgba(255, 255, 255, 0.8) !important;
        letter-spacing: 1px;
        font-size: 21px;
        font-weight: 400 !important;
      }
      img {
        width: 23px;
        align-items: center;
        display: flex;
        position: absolute;
        top: 10px;
        left: 12px;
        opacity: 0;
      }
    }
  }

  .item-more {
    cursor: pointer;
    img {
      top: 20px !important;
      left: 13px !important;
      opacity: 1 !important;
    }
  }
}
</style>
