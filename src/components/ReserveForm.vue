<template>
  <div class="form-box">
    <div class="form">
      <div class="top-box">
        <div class="left-input">
          <div class="input-box">
            <div class="input-title">貴賓姓名<span class="star">*</span></div>
            <input type="text" />
          </div>
          <div class="input-box">
            <div class="input-title">連絡電話<span class="star">*</span></div>
            <input type="text" />
          </div>
          <div class="input-box">
            <div class="input-title">居住縣市<span class="star">*</span></div>
            <select name="city" id="">
              <option value="">-- 請選擇縣市 --</option>
            </select>
          </div>
          <div class="input-box">
            <div class="input-title">居住區域<span class="star">*</span></div>
            <select name="area" id="">
              <option value="">-- 請選擇鄉鎮市區 --</option>
            </select>
          </div>
          <div class="input-box">
            <div class="input-title no-line">房型需求<span class="star">*</span></div>
            <input type="text" />
          </div>
          <div class="input-box remark-box">
            <div class="input-title no-line remark">備註</div>
            <textarea name="" id="ca_memo"></textarea>
          </div>
        </div>
        <div class="right-map">
          <a href="https://maps.app.goo.gl/Sp8q1uaJraj49PJj7" target="_blank">
            <img src="../assets/images/map.png" alt="map" srcset="" />
          </a>
        </div>
      </div>
      <div class="bottom-box">
        <div class="bottom-title">隱私權聲明</div>
        <div class="content">
          您所登錄的個人資料將作以下用途：1.本網站所載之相關資料通知2.客戶管理與服務3.本公司行銷業務之推廣，本案實際內容以現場公佈為準。
        </div>
        <input type="checkbox" name="privacy" id="privacy" />
        <label for="privacy">本人知悉並同意『個資告知事項聲明』內容</label>
      </div>
      <div class="send-btn-box">
        <button>送出資料</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.form-box {
  display: flex;
  justify-content: center;
  z-index: 5;
  padding-top: 3vw;
  margin-bottom: 3vw;
  background-color: rgb(236, 228, 209);
  @media all and (max-width: 1440px) {
    justify-content: space-around;
  }

  @media all and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin-top: 15vw;
    padding-bottom: 20vw;
  }

  .form-title {
    display: flex;
    flex-direction: column;
    margin-right: 2vw;
    .zh-title {
      @include ZHtitle();
      writing-mode: vertical-rl;
      line-height: 3.5vw;
      margin-bottom: 2vw;

      @media all and (max-width: 1024px) {
        writing-mode: initial;
        text-align: center;
        margin-bottom: 7vw;
      }
    }
    .en-title {
      @include ENtitle();
      writing-mode: vertical-rl;
      font-size: 2vw;
      line-height: 3.5vw;

      @media all and (max-width: 1440px) {
        font-size: 3vw;
      }

      @media all and (max-width: 1024px) {
        writing-mode: initial;
        font-size: 7.8125vw;
        text-align: center;
        margin-bottom: 11vw;
      }
    }
  }

  .form {
    background-color: white;
    padding: 3vw 4vw;
    width: 87%;
    display: flex;
    flex-direction: column;

    @media all and (max-width: 1024px) {
      width: 100%;
      padding: 7vw 7vw;
    }

    @media all and (max-width: 500px) {
      padding: 5.5vw 4.5vw;
    }

    .top-box {
      display: flex;
      @media all and (max-width: 1024px) {
        flex-direction: column;
      }
      .left-input {
        display: flex;
        flex-direction: column;
        padding-right: 4vw;
        width: 60%;

        @media all and (max-width: 1024px) {
          width: 100%;
          padding-right: 0vw;
        }

        .input-box {
          display: flex;
          margin-bottom: 1vw;
          padding-bottom: 1vw;
          border-bottom: 1px solid #211613;

          @media all and (max-width: 1024px) {
            margin-bottom: 3vw;
            padding-bottom: 3vw;
          }

          .input-title {
            @include inputTitle();

            margin-right: 1.5vw;
            position: relative;

            @media all and (max-width: 1024px) {
              display: flex;
              margin-right: 5vw;
            }

            &:after {
              display: block;
              content: '';
              position: absolute;
              right: -0.5vw;
              top: 0.2vw;
              width: 1px;
              height: 1vw;
              background-color: #211613;

              @media all and (max-width: 1024px) {
                height: 4vw;
                right: -1.5vw;
                top: 1vw;
              }

              @media all and (max-width: 500px) {
                top: 1.2vw;
              }
            }

            .star {
              color: red;
              @media all and (max-width: 1024px) {
                margin-top: 0.4vw;
                font-size: 12px;
                margin-left: -1.5vw;
              }
            }
          }

          .no-line {
            &:after {
              display: block;
              content: '';
              position: absolute;
              right: -0.5vw;
              top: 0.2vw;
              width: 1px;
              height: 1vw;
              background-color: #211613;
              @media all and (max-width: 1024px) {
                display: block;
                content: '';
                top: 1vw;
                width: 1px;
                position: absolute;
                height: 4vw;
                background-color: #211613;
                right: -1.5vw;
              }

              @media all and (max-width: 500px) {
                top: 1.2vw;
              }
            }
          }
          #ca_require {
            @media all and (max-width: 1024px) {
              width: 57.1% !important;
            }
          }
          input {
            border: none;
            width: 70%;
            background: white !important;
            background-color: white !important;
            font-size: 1vw;
            @media all and (max-width: 1024px) {
              font-size: 3.75vw;
              width: 55%;
            }
          }

          select {
            width: 70%;
            color: black;
            text-align: left;
            letter-spacing: 0.1vw;
            font-size: 15pt;
            font-size: 1vw;
            font-family: 'Noto Sans TC', sans-serif;
            border: none !important;
            background: white !important;
            background-color: white !important;

            @media all and (max-width: 1024px) {
              width: 60%;
              font-size: 3.5vw;
              letter-spacing: 0.2vw;
            }
          }

          .zipcode {
            width: 66%;
            @media all and (max-width: 1024px) {
              width: 60%;
            }
          }

          select[name='ca_city'],
          select[name='ca_area'] {
            width: 106%;

            @media all and (max-width: 1024px) {
              width: 95%;
            }
          }
        }

        .remark-box {
          margin-bottom: 1vw;

          @media all and (max-width: 1024px) {
            display: flex;
            margin-bottom: 1vw;
            width: 100%;
            flex-direction: column;
            padding-bottom: 3vw;
          }
          textarea {
            border: none;
            width: 70%;
            resize: none;
            font-size: 1vw;
            align-content: center;
            @media all and (max-width: 1024px) {
              width: 100%;
              height: 12vw;
              font-size: 3.75vw;
            }
          }

          .remark {
            letter-spacing: 2.9vw;
            margin-right: 0vw;
            align-self: center;
            @media all and (max-width: 1920px) {
              margin-right: 0.5vw;
              letter-spacing: 2.9vw;
            }
            @media all and (max-width: 1024px) {
              margin-right: 0vw;
              letter-spacing: 13.5vw;
              align-self: initial;
            }
            @media all and (max-width: 500px) {
              letter-spacing: 13.8vw;
            }
            &:after {
              display: block;
              content: '';
              position: absolute;
              right: 0vw;
              right: 1.3vw;
              top: 0.2vw;
              width: 1px;
              height: 1vw;
              background-color: #211613;
              @media all and (max-width: 1920px) {
                right: 1.3vw;
              }

              @media all and (max-width: 1024px) {
                display: block;
                content: '';
                position: absolute;
                top: 1vw;
                width: 1px;
                height: 1vw;
                background-color: #201512;
                height: 4vw;
                left: 18.5vw;
                left: 25.9vw;
              }

              @media all and (max-width: 500px) {
                top: 1.2vw;
                left: 26.5vw;
              }
            }
          }
        }

        input[name='zipcode'] {
          display: none;
        }
      }

      .right-map {
        width: 54%;

        @media all and (max-width: 1024px) {
          width: 100%;
          margin-top: 4vw;
        }

        img {
          width: 100%;
        }
      }
    }

    .bottom-box {
      .bottom-title {
        @include inputTitle();
        margin-bottom: 1vw;
        @media all and (max-width: 1024px) {
          margin-top: 2vw;
          margin-bottom: 2vw;
        }
      }
      .content {
        font-size: 16pt;
        font-family: 'Noto Sans TC', sans-serif;
        letter-spacing: 0.1vw;
        margin-bottom: 0.5vw;
        font-size: 0.8vw;
        @media all and (max-width: 1024px) {
          font-size: 2.5vw;
          line-height: 4.3vw;
          margin-bottom: 2vw;
        }

        @media all and (max-width: 500px) {
          font-size: 3.5vw;
          line-height: 6.5vw;
          text-align: justify;
        }
      }

      label {
        font-size: 16pt;
        font-family: 'Noto Sans TC', sans-serif;
        letter-spacing: 0.1vw;
        cursor: pointer;
        font-size: 0.8vw;
        @media all and (max-width: 1024px) {
          font-size: 2.5vw;
        }

        @media all and (max-width: 500px) {
          font-size: 3.4vw;
        }
      }
      input[type='checkbox'] {
        transform: scale(1.3);
        margin-right: 0.3vw;

        @media all and (max-width: 1440px) {
          transform: scale(1.1) translateY(3px);
        }
        @media all and (max-width: 1024px) {
          transform: scale(1.1) translateY(0px);
        }
      }
    }

    .send-btn-box {
      display: flex;
      justify-content: center;
      margin-top: 2vw;

      @media all and (max-width: 1024px) {
        margin-top: 7vw;
      }

      button {
        @include content();
        background-color: #004181;
        border-radius: 0.3vw;
        line-height: 1.9vw;
        padding-left: 1.5vw;
        padding-right: 1.5vw;
        border: none;
        cursor: pointer;
        font-family: 'Noto Sans TC', sans-serif;
        @media all and (max-width: 1440px) {
          line-height: 2.2vw;
          padding-left: 1.8vw;
          padding-right: 1.8vw;
        }

        @media all and (max-width: 1024px) {
          line-height: 7vw;
          padding-left: 7vw;
          padding-right: 7vw;
          border-radius: 1vw;
        }

        @media all and (max-width: 500px) {
          line-height: 9.5vw;
          padding-left: 8vw;
          padding-right: 8vw;
          border-radius: 2vw;
          font-size: 3.9vw;
        }
      }
    }
  }
}
</style>
