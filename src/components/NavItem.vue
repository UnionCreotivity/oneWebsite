<template>
  <nav id="navbar-box">
    <div class="navbar-container">
      <img id="logo-img" src="../assets/images/logo.png" />
      <button class="hamburger hamburger--spin" :class="{'is-active': isMenuOpen}" @click="isMenuOpen = !isMenuOpen" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <!-- <img
        id="moblie-menu-btn"
        src="../assets/images/menu-icon.svg"
        alt=""
        @click="isMenuOpen = !isMenuOpen"
      /> -->
      <div class="pc-nav-link-box">
        <router-link :to="{ path: '/', hash: '#reserveForm' }">預約賞屋</router-link>
      </div>
    </div>
  </nav>

  <div class="moblie-menu-box" :class="{'show': isMenuOpen}">
    <div class="close" @click="isMenuOpen = false">
      <img id="moblie-menu-close-btn" src="../assets/images/close.svg" alt="" />
    </div>
    <div class="moblie-menu">
      <router-link :to="{ path: '/', hash: '#reserveForm' }">預約賞屋</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
// import { debounce } from 'debounce'
const isMenuOpen = ref(false)
const menu_list={
 
};

</script>
<style lang="scss" scoped>
@import "hamburgers/_sass/hamburgers/hamburgers.scss";

#navbar-box {
  display: flex;
  background-color: rgba(255, 255, 255, 0.85);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 50px;
  z-index: 110;
  backdrop-filter: blur(5px);
  padding: 0.8vw;
  align-items: center;

  @media all and (max-width: 1024px) {
    padding: 1vw 5vw;
  }

  @media all and (max-width: 500px) {
    padding: 0vw 3%;
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
      height: 1vw;
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

    $hamburger-layer-width: 18px;
    $hamburger-layer-height: 2px;
    .hamburger{
      display: none;
      // padding: 10px 5px;

      // .hamburger-box{
      //   width: $hamburger-layer-width;
      //   height: 12px;

      //   .hamburger-inner{
      //     &::before{
      //       top: -5px;
      //     }
      //     &::after{
      //       top: -10px;
      //     }
      //   }

      //   .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after{
      //     width: $hamburger-layer-width;
      //     height: $hamburger-layer-height;
      //   }
      // }
      @media all and (max-width: 1024px) {
        display: flex;
      }
    }

    .pc-nav-link-box {
      @media all and (max-width: 1024px) {
        display: none;
      }
      a {
        color: rgb(0, 0, 0);
        position: relative;
        font-size: 0.8vw;
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
  background-color: rgb(250, 233, 236);
  transition: all 0.3s ease-in-out;

  @media all and (max-width: 1024px){
    display: block;
  }

  &.show{
    opacity: 1;
    visibility:visible;
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
      color: rgb(0, 0, 0);
      position: relative;
      font-size: 3.9vw;
      text-align: center;
      letter-spacing: 2px;
      font-family: 'Noto Sans TC';
      font-weight: 400;
      text-decoration: none;
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
