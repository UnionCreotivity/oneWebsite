<template>
  <div class="bottom-tool-box">
    <div class="tools">
      <div class="item">
        <a href="tel:03-3479656">
          <div class="item-icon-box">
            <img class="item-icon" src="../assets/phone.svg" />
          </div>
          <div class="item-text">播打電話</div>
        </a>
      </div>
      <div class="item">
        <a href="http://">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/fb.svg" />
          </div>
          <div class="item-text">粉絲專頁</div>
        </a>
      </div>
      <div class="item">
        <a href="http://">
          <div class="item-icon-box">
            <img class="item-icon" src="../assets/pen.svg" />
          </div>
          <div class="item-text">預約賞屋</div>
        </a>
      </div>
      <div class="item">
        <a href="http://">
          <div class="item-icon-box more-icon">
            <img class="item-icon" src="../assets/new_more.png" />
          </div>
          <div class="item-text">更多功能</div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
</script>
<style lang="scss">
.bottom-tool-box {
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: rgba(137, 203, 230, 0.4);
  width: 100%;
  padding: 1.5vw 0vw;
  z-index: 999;
  display: none;
  @media all and (max-width: 1024px) {
    display: flex;
  }
  .tools {
    display: flex;

    .item {
      display: flex;
      flex: 1;
      height: 100%;
      flex-direction: column;
      align-items: center;
      a {
        display: flex;
        flex-direction: column;
        color: rgb(0, 0, 0);
        position: relative;
        font-size: 3.5vw;
        text-align: center;
        height: 10vw;
        letter-spacing: 2px;
        font-family: 'Noto Sans TC';
        font-weight: 400;
        text-decoration: none;
        justify-content: space-evenly;
        .item-icon-box {
          display: flex;

          justify-content: center;
          align-self: center;
          img {
            width: 15%;
          }

          .fb {
            width: 8%;
          }
        }

        .more-icon {
          height: 4vw;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 70%;
            height: 2.5vw;
          }
        }
      }
    }
  }
}
</style>
