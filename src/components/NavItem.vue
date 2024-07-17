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

      <div class="pc-nav-link-box">
        <a href="javascritp:;" @click="menuBtn('#reserveForm')">預約賞屋</a>
      </div>
    </div>
  </nav>

  <div class="moblie-menu-box" :class="{ show: isMenuOpen }">
    <div class="close" @click="isMenuOpen = false">
      <img id="moblie-menu-close-btn" src="../assets/images/close.svg" alt="" />
    </div>
    <div class="moblie-menu">
      <a href="javascritp:;" @click="menuBtn('#reserveForm')">預約賞屋</a>
    </div>
  </div>
</template>

<script setup>
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ref, toRefs } from 'vue'
import { useCase } from '@/stores/case'

gsap.registerPlugin(ScrollToPlugin)
let { caseData } = toRefs(useCase())
const isMenuOpen = ref(false)
const menu_list = {}

window.addEventListener('scroll', function () {
  if (isMenuOpen.value) {
    isMenuOpen.value = false
  }
})

function menuBtn(id) {
  gsap.to(window, { duration: 1, scrollTo: id })
  isMenuOpen.value = false
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
    background-color: #1a5a74d9;
    padding: 1vw 2vw;
  }

  @media all and (max-width: 500px) {
    padding: 0vw 1%;
    min-height: 40px;
  }
  .navbar-container {
    display: flex;
    width: 60%;
    max-width: 1400px;
    justify-content: space-between;
    margin: 0 auto;
    @media all and (max-width: 1024px) {
      width: 100%;
      max-width: 1024px;
    }
    #logo-img {
      width: auto !important;
      height: 36px !important;
      margin-top: 4px;
      @media all and (max-width: 1024px) {
        display: none;
      }
    }

    // #moblie-menu-btn {
    //   display: none;
    //   height: 7vw;
    //   width: 7vw;
    //   @media all and (max-width: 1024px) {
    //     display: flex;
    //   }
    // }

    .hamburger {
      display: none;

      @media all and (max-width: 1024px) {
        display: flex;
      }

      .hamburger-inner,
      .hamburger-inner::before,
      .hamburger-inner::after {
        background-color: #fff;
      }
    }

    .pc-nav-link-box {
      align-self: center;
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

.moblie-menu-box {
  display: none;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-20px);
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100vh;
  background-color: rgb(26 91 116 / 85%);
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

    a {
      color: rgb(255, 255, 255);
      position: relative;
      font-size: 3.9vw;
      text-align: center;
      letter-spacing: 2px;
      font-family: 'Noto Sans TC';
      font-weight: 400;
      text-decoration: none;

      @media (max-width: 1024px) {
        font-size: 2.6vw;
      }

      @media (max-width: 500px) {
        font-size: 3.9vw;
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
