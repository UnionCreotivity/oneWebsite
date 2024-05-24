<template>
  <div class="bottom-tool-box">
    <div class="tools">
      <div class="item">
        <a href="tel:03-3479656">
          <div class="item-icon-box">
            <img class="item-icon" src="../assets/images/phone.svg" />
          </div>
          <div class="item-text">播打電話</div>
        </a>
      </div>
      <div class="item">
        <a href="http://">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/images/fb.svg" />
          </div>
          <div class="item-text">粉絲專頁</div>
        </a>
      </div>
      <div class="item">
        <a href="http://">
          <div class="item-icon-box">
            <img class="item-icon" src="../assets/images/pen.svg" />
          </div>
          <router-link class="item-text" :to="{ path: '/', hash: '#reserveForm' }">
            預約賞屋</router-link
          >
        </a>
      </div>
      <div class="item">
        <a href="http://">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/images/point.svg" />
          </div>
          <div class="item-text">地圖導航</div>
        </a>
      </div>
      <div class="item">
        <a href="javascript:;" @click="show_more_tool=!show_more_tool">
          <div class="item-icon-box more-icon">
            <img class="item-icon" src="../assets/images/new_more.png" />
          </div>
          <div class="item-text">更多功能</div>
        </a>
      </div>
    </div>
  </div>

  <div class="more_tool_div" :class="{show: show_more_tool}">
    <div class="tools">
      <div class="item">
      <a href="javascript:;" @click="copyLink">
        <div class="item-icon-box">
          <img class="item-icon fb" src="../assets/images/002-chain-links.svg" />
        </div>
        <div class="item-text">連結</div>
        <input id="linkToCopy" type="hidden" value="https://ws.srl.tw/cs/2024051711015229/">
      </a>
    </div>
    <div class="item">
      <a href="javascript:;" @click="qrCode_open=!qrCode_open">
        <div class="item-icon-box">
          <img class="item-icon fb" src="../assets/images/001-qr-code.svg" />
        </div>
        <div class="item-text">QR</div>
      </a>

      <LightBox :isOpen="qrCode_open">
        <h2>這是內容123</h2>
        <p>123456789</p>
      </LightBox>

    </div>
    </div>
  </div>

  

</template>

<script setup>
import { ref } from 'vue'
import LightBox from '@/tool/lightBox.vue'
import { gsap } from "gsap";

let qrCode_open=ref(false)
let show_more_tool=ref(false)

window.addEventListener('scroll', function() {
  if(show_more_tool){
    show_more_tool.value=false
  }
});

function copyLink() {
    // 獲取要複製的輸入框
    var copyText = document.getElementById("linkToCopy");

    // 使用 Clipboard API 複製到剪貼板
    navigator.clipboard.writeText(copyText.value).then(function() {
        alert(`複製成功:${copyText.value}`)
    }, function(err) {
        console.error('無法複製', err);
        alert(`複製失敗`)
    });
}


</script>


<style lang="scss">
.bottom-tool-box {
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #1a5b74;
  backdrop-filter: blur(4px);
  width: 100%;
  z-index: 999;
  display: none;
  @media all and (max-width: 1024px) {
    
    display: flex;
  }
  .tools {
    display: flex;
    width: 100%;

    .item {
      display: flex;
      flex: 1;
      height: 100%;
      padding: 10px 0vw;
      flex-direction: column;
      align-items: center;
      border-right: 1px solid #fff;

      &:last-of-type {
        border: none;
      }

      a {
        display: flex;
        gap: 7px;
        flex-direction: column;
        color: #fff;
        position: relative;
        font-size: 11px;
        text-align: center;

        letter-spacing: 0.1em;
        font-family: 'Noto Sans TC';
        font-weight: 400;
        text-decoration: none;
        justify-content: space-evenly;
        .item-icon-box {
          display: flex;

          justify-content: center;
          align-self: center;
          img {
            width: 17px;
            height: 19px;
            object-fit: contain;
          }
        }

        .more-icon {
          // height: 4vw;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 25px;
          }
        }
      }
    }
  }
}

.more_tool_div{
  display: none;
  width: 100%;
  position: fixed;
  z-index: 10;
  bottom: 60px;
  justify-content: flex-end;
  background-color: #000000d9;
  transform: translateY(60px);
  transition: transform 0.3s;

  @media (max-width:1024px) {
    display: flex;
  }

  &.show{
    transform: translateY(0px);
  }

  .tools {
    display: flex;
    // width: 100%;

    .item {
      display: flex;
      flex: 1;
      height: 100%;
      padding: 10px 0vw;
      flex-direction: column;
      align-items: center;
      width: 50px;

      &:last-of-type {
        border: none;
      }

      a {
        display: flex;
        gap: 7px;
        flex-direction: column;
        color: #fff;
        position: relative;
        font-size: 11px;
        text-align: center;

        letter-spacing: 0.1em;
        font-family: 'Noto Sans TC';
        font-weight: 400;
        text-decoration: none;
        justify-content: space-evenly;
        .item-icon-box {
          display: flex;

          justify-content: center;
          align-self: center;
          img {
            width: 17px;
            height: 19px;
            object-fit: contain;
          }
        }

        .more-icon {
          // height: 4vw;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          img {
            width: 25px;
          }
        }
      }
    }
  }
}
</style>
