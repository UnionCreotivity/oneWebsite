<template>
  <div class="bottom-tool-box">
    <div class="tools">
      <div class="item" v-if="caseData.phone != '' && caseData.phone != undefined">
        <a :href="`tel:${caseData.phone}`" target="_blank">
          <div class="item-icon-box">
            <img class="item-icon" src="../assets/images/phone.svg" />
          </div>
          <div class="item-text">播打電話</div>
        </a>
      </div>

      <div class="item">
        <a :href="line_url" v-if="caseData.line_txt != null" target="_blank">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/images/new_line.png" style="width: 20px" />
          </div>
          <div class="item-text">LINE</div>
        </a>
      </div>

      <div class="item">
        <a :href="fb_url" target="_blank">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/images/fb.svg" />
          </div>
          <div class="item-text">粉絲專頁</div>
        </a>
      </div>

      <div class="item">
        <a>
          <div class="item-icon-box">
            <img class="item-icon" src="../assets/images/pen.svg" />
          </div>

          <div @click="menuBtn('#reserveForm')" class="item-text">預約賞屋</div>
        </a>
      </div>

      <div class="item" @click="openLife">
        <a>
          <div class="item-icon-box">
            <img class="item-icon" src="../assets/images/new_life.png" />
          </div>
          <div class="item-text">生活機能</div>
        </a>
      </div>

      <div class="item" v-if="caseData.location != null">
        <a :href="caseData.location" target="_blank">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/images/point.svg" />
          </div>
          <div class="item-text">地圖導航</div>
        </a>
      </div>

      <div class="item" @click="opeMore">
        <a>
          <div class="item-icon-box more-icon">
            <img class="item-icon" src="../assets/images/new_more.png" />
          </div>
          <div class="item-text">更多功能</div>
        </a>
      </div>
    </div>
    <div
      class="google-life-box-mobile"
      :style="{
        opacity: isLifeBoxVisible ? 1 : 0,
        pointerEvents: isLifeBoxVisible ? 'auto' : 'none'
      }"
    >
      <div class="google-life-item" v-for="(life, index) in limitedGoogleLifeData" :key="index">
        <a :href="life.url" data-fancybox data-type="iframe">
          <img :src="life.icon" alt="" srcset="" />
          <span>{{ life.name }}</span>
        </a>
      </div>
      <div class="item-more">
        <a @click="menuBtn('.google-life-box')">
          <div class="img-box">
            <img
              class="item-img"
              src="https://ws.srl.tw/img/svg/mapTool/new_more.png"
              alt=""
              srcset=""
            />
          </div>
          <span>更多</span>
        </a>
      </div>
    </div>
  </div>

  <div
    class="more_tool_div"
    :style="{ opacity: isMoreVisible ? 1 : 0, pointerEvents: isMoreVisible ? 'auto' : 'none' }"
  >
    <div class="tools">
      <div class="item">
        <a href="javascript:;" @click="copyLink">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/images/002-chain-links.svg" />
          </div>
          <div class="item-text">連結</div>
          <input id="linkToCopy" type="hidden" :value="case_url" />
        </a>
      </div>
      <div class="item">
        <a href="javascript:;" @click="qrCode_open = true">
          <div class="item-icon-box">
            <img class="item-icon fb" src="../assets/images/001-qr-code.svg" />
          </div>
          <div class="item-text">QR</div>
        </a>

        <LightBox v-model="qrCode_open">
          <div class="box_div">
            <h4>鴻堡建設｜別墅之王 QR Code</h4>

            <div class="qrcode_box">
              <QRCodeVue3
                :value="case_url"
                :width="260"
                :dotsOptions="{
                  type: 'square',
                  color: '#000000',
                  gradient: {
                    type: 'linear',
                    rotation: 0,
                    colorStops: [
                      { offset: 0, color: '#000000' },
                      { offset: 1, color: '#000000' }
                    ]
                  }
                }"
                :cornersSquareOptions="{ type: 'square', color: '#000000' }"
              />
            </div>

            <p>掃描上面的QR Code，連結到鴻堡建設｜別墅之王</p>
          </div>
        </LightBox>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LightBox from '../tool/LightBox.vue'
import QRCodeVue3 from 'qr-code-generator-vue3'
import { useCase } from '@/stores/case'
import { useGoogleLifeData } from '@/stores/googleLifeData'
import { gsap } from 'gsap'
const { GoogleLifeData } = toRefs(useGoogleLifeData())

const limitedGoogleLifeData = computed(() => {
  return Array.isArray(GoogleLifeData.value) ? GoogleLifeData.value.slice(0, 6) : []
})

const isLifeBoxVisible = ref(false)
const isMoreVisible = ref(false)

const menuBtn = (btn: string) => {
  const targetElement = document.querySelector(btn)
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
  }
}
const openLife = () => {
  isLifeBoxVisible.value = !isLifeBoxVisible.value // 切換狀態
}
const opeMore = () => {
  isMoreVisible.value = !isMoreVisible.value // 切換狀態
}
//-- 建案資料 --
let { caseData } = toRefs(useCase())

//-- qrcode開關 --
let qrCode_open = ref(false)

//-- 更多功能開關 --
let show_more_tool = ref(false)

//-- FB連結類型 --
let fb_url: string, case_url: string, line_url: string
watch(caseData, (newVal) => {
  fb_url =
    newVal.fb_sel === 'share'
      ? `https://www.facebook.com/dialog/feed?app_id=563666290458260&display=popup&link=https://ws.srl.tw/cs/2024051711015229/&redirect_uri=https://www.facebook.com/`
      : newVal.fb_txt
  line_url = `https://line.me/R/msg/text/?${newVal.line_txt}`
  let id_num = newVal.Tb_index.substring(4)
  case_url = `https://ws.srl.tw/cs/${id_num}/`
})

window.addEventListener('scroll', function () {
  if (show_more_tool) {
    show_more_tool.value = false
  }
})

//-- 複製網址 --
function copyLink() {
  // 獲取要複製的輸入框
  var copyText = <HTMLInputElement>document.getElementById('linkToCopy')

  // 使用 Clipboard API 複製到剪貼板
  navigator.clipboard.writeText(copyText.value).then(
    function () {
      alert(`複製成功：${copyText.value}`)
    },
    function (err) {
      console.error('無法複製', err)
      alert(`複製失敗`)
    }
  )
}

onMounted(() => {
  watch(GoogleLifeData, (data) => {})
})
</script>

<style lang="scss" scoped>
.lightbox {
  h1,
  h2,
  h3,
  h4,
  p {
    font-family: 'Noto Sans TC', sans-serif;
  }

  p {
    font-size: 12px;
    color: #767676;
  }

  .qrcode_box {
    width: 90%;
    display: contents;
  }
  .box_div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.bottom-tool-box {
  position: fixed;
  bottom: 0px;
  left: 0px;
  background-color: #778952;
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
        padding: 2vw;
        @media all and (max-width: 500px) {
          padding-left: 0vw;
          padding-right: 0vw;
        }
        .item-icon-box {
          display: flex;
          justify-content: center;
          align-self: center;
          img {
            width: 30px;
            height: 30px;
            object-fit: contain;

            @media all and (max-width: 500px) {
              width: 17px;
              height: 19px;
            }
          }
        }

        .item-text {
          font-size: 2.2vw;
          @media all and (max-width: 500px) {
            font-size: 12px;
          }
          @media all and (max-width: 330px) {
            font-size: 1px;
          }
        }

        .more-icon {
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

.more_tool_div {
  display: none;
  width: 100%;
  position: fixed;
  bottom: 95px;
  justify-content: flex-end;
  background-color: #000000d9;
  opacity: 0;
  z-index: 99999;
  transition: opacity 0.5s ease;
  @media (max-width: 1024px) {
    display: flex;
  }

  @media (max-width: 500px) {
    bottom: 60px;
  }

  .tools {
    display: flex;
    padding: 1.5vw;
    padding-right: 1vw;
    width: 32.5%;
    justify-content: right;
    .item {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: center;
      width: 25%;

      a {
        display: flex;
        flex-direction: column;
        color: #fff;
        position: relative;
        text-align: center;
        letter-spacing: 0.1em;
        font-family: 'Noto Sans TC';
        font-weight: 400;
        text-decoration: none;
        justify-content: space-evenly;

        .item-text {
          font-size: 2.2vw;
          @media all and (max-width: 500px) {
            font-size: 12px;
          }
          @media all and (max-width: 330px) {
            font-size: 1px;
          }
        }
        .item-icon-box {
          display: flex;
          justify-content: center;
          align-self: center;
          margin-bottom: 1vw;
          img {
            width: 30px;
            height: 30px;
            object-fit: contain;
            @media all and (max-width: 500px) {
              width: 17px;
              height: 19px;
            }
          }
        }

        // .more-icon {
        //   flex-direction: column;
        //   justify-content: center;
        //   align-items: center;
        //   img {
        //     width: 25px;
        //   }
        // }
      }
    }
  }
}

.google-life-box-mobile {
  position: absolute;
  display: flex;
  bottom: 60px;
  background-color: #2f2f2fee;
  width: 100%;
  justify-content: space-evenly;
  opacity: 0;
  transition: opacity 0.5s ease;
  @media all and (max-width: 1024px) {
    bottom: 100px;
  }
  @media all and (max-width: 500px) {
    padding-top: 1vw;
    padding-bottom: 0.5vw;
    bottom: 60px;
  }
  .google-life-item {
    display: flex;
    justify-content: center;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
    width: 10%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 30px;
        height: 30px;
        @media all and (max-width: 500px) {
          width: 20px;
          height: 20px;
        }
      }

      span {
        color: rgba(255, 255, 255, 0.8) !important;
        letter-spacing: 1px;
        margin-top: 1vw;
        font-size: 2.2vw;
        @media all and (max-width: 500px) {
          font-size: 12px;
        }
        @media all and (max-width: 330px) {
          font-size: 1px;
        }
      }
    }
  }
  .item-more {
    display: flex;
    justify-content: center;
    padding-top: 1.5vw;
    padding-bottom: 1.5vw;
    width: 10%;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .img-box {
        width: 30px;
        height: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media all and (max-width: 500px) {
          width: 20px;
          height: 20px;
        }
        img {
          width: 30px;
          vertical-align: middle;
          @media all and (max-width: 500px) {
            width: 20px;
          }
        }
      }

      span {
        color: rgba(255, 255, 255, 0.8) !important;
        letter-spacing: 1px;
        margin-top: 1vw;
        font-size: 2.2vw;
        @media all and (max-width: 500px) {
          font-size: 12px;
        }
        @media all and (max-width: 330px) {
          font-size: 1px;
        }
      }
    }
  }
}

.is-compact .fancybox__content > .f-button.is-close-btn {
  --f-button-border-radius: 0%;
}
</style>
