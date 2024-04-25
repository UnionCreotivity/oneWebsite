<template>
  <nav id="navbar-box">
    <div class="navbar-container">
      <img id="logo-img" src="../assets/logo.png" />
      <img
        id="moblie-menu-btn"
        src="../assets/menu-icon.svg"
        alt=""
        @click="isMenuOpen = !isMenuOpen"
      />
      <div class="pc-nav-link-box">
        <a href="http://">預約賞屋</a>
      </div>
    </div>
  </nav>

  <div class="moblie-menu-box" v-if="isMenuOpen">
    <div class="moblie-menu">
      <a href="http://">預約賞屋</a>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
// import { debounce } from 'debounce'
const isMenuOpen = ref(false)
</script>
<style lang="scss">
#navbar-box {
  display: flex;
  background-color: rgba(255, 255, 255, 0.329);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  min-height: 50px;
  z-index: 10;
  backdrop-filter: blur(5px);
  padding: 0.8vw;
  align-items: center;

  @media all and (max-width: 1024px) {
    padding: 1vw 5vw;
  }

  @media all and (max-width: 500px) {
    padding: 1vw 5vw;
    min-height: 45px;
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

    #moblie-menu-btn {
      display: none;
      height: 7vw;
      width: 7vw;
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
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background-color: rgb(250, 233, 236);
  -webkit-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
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
}
</style>
