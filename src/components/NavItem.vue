<template>
  <nav id="navbar-box">
    <div class="navbar-container">
      <img :src="caseData.loading_logo" alt="" id="logo-img" />

      <button
        class="hamburger hamburger--spin"
        :class="{ 'is-active': isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>

      <div class="mobile-project-news-box">
        <div class="tab-item project-box" :class="{ active: selectedTab === 'project' }">
          <div class="item">
            <button @click="navigate('project')">建案資訊</button>
          </div>
        </div>
        <div class="tab-item news-box" :class="{ active: selectedTab === 'news' }">
          <div class="item">
            <router-link to="/news" @click.native="selectTab('news')">媒體報導</router-link>
          </div>
        </div>
      </div>

      <div class="link-box">
        <div class="nav-link">
          <a @click="menuBtn('#card3')">增值正核心</a>
        </div>
        <div class="nav-link">
          <a @click="menuBtn('#card4')">交通大利多</a>
        </div>
        <div class="nav-link">
          <a @click="menuBtn('#reserveForm')">預約賞屋</a>
        </div>
      </div>
    </div>
  </nav>

  <div class="moblie-menu-box" :class="{ show: isMenuOpen }">
    <div class="close" @click="isMenuOpen = false">
      <img id="moblie-menu-close-btn" src="../assets/images/close.svg" alt="" />
    </div>

    <div class="moblie-menu">
      <div class="link-box">
        <div class="nav-link">
          <a @click="menuBtn('#card3')">增值正核心</a>
        </div>
        <div class="nav-link">
          <a @click="menuBtn('#card4')">交通大利多</a>
        </div>
        <div class="nav-link">
          <a @click="menuBtn('#reserveForm')">預約賞屋</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ref, toRefs } from 'vue'
import { useCase } from '@/stores/case'
import { useRouter } from 'vue-router'
import { aniDelay } from '@/stores/aniDelay'
const router = useRouter()
const appStore = aniDelay()

const navigate = (tab: string) => {
  appStore.setNoDelay(true)
  selectedTab.value = tab // 設置選中的 tab
  router.push('/home')
}
// 定義選中的選項，默認為空
const selectedTab = ref<string>('project')

// 選擇選項的函數
const selectTab = (tab: string) => {
  selectedTab.value = tab // 設置選中的 tab
}

gsap.registerPlugin(ScrollToPlugin)
let { caseData } = toRefs(useCase())
const isMenuOpen = ref(false)
const menu_list = {}

window.addEventListener('scroll', function () {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
})

const menuBtn = (selector: string) => {
  const targetElement = document.querySelector(selector)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
<style lang="scss" scoped>
@import 'hamburgers/_sass/hamburgers/hamburgers.scss';

#navbar-box {
  display: flex;
  background-color: #778952;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 50px;
  z-index: 110;
  backdrop-filter: blur(4px);
  padding: 0.4vw;
  align-items: center;

  @media all and (max-width: 1024px) {
    padding: 0vw 0%;
    align-items: inherit;
    background-color: transparent;
  }

  @media all and (max-width: 500px) {
    min-height: 40px;
  }

  .navbar-container {
    display: flex;
    width: 100%;
    max-width: 1400px;
    justify-content: space-between;
    margin: 0 auto;

    @media all and (max-width: 1024px) {
      max-width: inherit;
      justify-content: inherit;
    }
    #logo-img {
      width: auto;
      height: 40px;
      margin-top: 6px;
      @media all and (max-width: 1024px) {
        display: none;
      }
    }

    .hamburger {
      display: none;
      background-color: #778952;
      @media all and (max-width: 1024px) {
        display: flex;
      }

      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: #fff;
        width: 34px;
        height: 3px;
      }
    }

    .mobile-project-news-box {
      display: none;
      @media all and (max-width: 1024px) {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
      }

      .tab-item {
        color: white;
        font-family: 'Noto Serif TC';
        position: relative;
        align-items: center;
        text-align: center;
        letter-spacing: 0.2em;
        width: 50%;
        font-size: 16px;
        height: 100%;
        background-color: #778952;
        a {
          color: white;
          align-items: center;
          justify-content: center;
          display: flex;
        }
        .item {
          height: 100%;
          align-content: center;
        }
      }
      .tab-item.active {
        background-color: #f0f0f0;

        a {
          color: black;
        }
        button {
          color: black;
        }
      }
      .project-box {
        button {
          background: none;
          border: none;
          color: white;
          width: 100%;
          font-family: 'Noto Serif TC';
          letter-spacing: 0.2em;
          width: 50%;
          font-size: 16px;
        }
      }
    }

    .link-box {
      display: flex;

      .nav-link {
        align-self: center;
        cursor: pointer;
        margin-left: 1.5vw;
        @media all and (max-width: 1024px) {
          display: none;
        }
        a {
          color: white;
          position: relative;
          font-size: 16px;
          letter-spacing: 2px;
          font-family: 'Noto Sans TC';
          font-weight: 400;
          text-decoration: none;
        }
      }
    }
  }
}

.moblie-menu-box {
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgba(219, 224, 212, 0.85);
  backdrop-filter: blur(8px);
  transition: all 0.3s ease-in-out;

  @media all and (max-width: 1024px) {
    display: block;
  }

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
  }

  .moblie-menu {
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    top: 45%;
    transform: translateY(-50%);

    .link-box {
      display: flex;
      flex-direction: column;
      width: 80%;
      justify-content: center;
      align-items: center;
      text-align: center;
      .nav-link {
        width: 80%;
        padding-top: 3vw;
        padding-bottom: 3vw;

        border-bottom: 1px solid #0f0f0fd3;
        &:last-child {
          margin-bottom: 0vw;
        }
      }
      a {
        color: #000000;
        position: relative;
        font-size: 3.9vw;
        text-align: center;
        letter-spacing: 2px;
        font-family: 'Noto Sans TC';
        font-weight: 400;
        text-decoration: none;
        cursor: pointer;

        @media (max-width: 1024px) {
          font-size: 2.6vw;
        }

        @media (max-width: 500px) {
          font-size: 3.9vw;
        }
      }
    }
  }

  .close {
    position: absolute;
    top: 3vw;
    left: 5vw;

    img {
      width: 20px;
    }
  }
}
</style>
