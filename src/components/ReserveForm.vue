<template>
  <section class="cut-form">
    <div class="cut-form-title">
      <picture>
        <source
          media="(max-width:768px)"
          srcset="https://ws.srl.tw/cs/2024051711015229/img/img2024051711284141.webp"
        />
        <img
          alt="cut-form-title"
          src="https://ws.srl.tw/cs/2024051711015229/img/img2024051711282989.webp"
        />
      </picture>
    </div>

    <div class="cut-form-main">
      <form action="" class="cut-form-container" id="form">
        <div class="form-main-top">
          <div class="form-left">
            <!-- 姓名 -->
            <div class="form-input">
              <div class="form-top">
                <label for="ca_name"
                  ><span>貴</span><span>賓</span><span>姓</span><span>名</span></label
                >
                <div class="text-danger">*</div>
                <div class="cut-form-split-line">&nbsp;</div>
                <input id="ca_name" type="text" v-model="formData.name" />
              </div>
              <div class="form-line">&nbsp;</div>
            </div>

            <!-- 電話 -->
            <div class="form-input">
              <div class="form-top">
                <label for="ca_phone"
                  ><span>聯</span><span>絡</span><span>電</span><span>話</span></label
                >
                <div class="text-danger">*</div>
                <div class="cut-form-split-line">&nbsp;</div>
                <input id="ca_phone" type="tel" v-model="formData.phone" />
              </div>
              <div class="form-line">&nbsp;</div>
            </div>

            <!-- 居住縣市 -->
            <div class="form-input">
              <div class="form-top">
                <label for="county">
                  <span>居</span><span>住</span><span>縣</span><span>市</span>
                </label>
                <div class="text-danger">*</div>
                <div class="cut-form-split-line cut-form-special-line">&nbsp;</div>
                <select v-model="selectedCity">
                  <option v-for="city in cities" :key="city" :value="city">{{ city }}</option>
                </select>
              </div>
              <div class="form-line">&nbsp;</div>
            </div>

            <!-- 居住區域 -->
            <div class="form-input">
              <div class="form-top">
                <label for="district">
                  <span>居</span><span>住</span><span>區</span><span>域</span>
                </label>
                <div class="text-danger">*</div>
                <div class="cut-form-split-line cut-form-special-line">&nbsp;</div>
                <select v-model="selectedArea">
                  <option v-for="area in areas" :key="area" :value="area">{{ area }}</option>
                </select>
              </div>
              <div class="form-line">&nbsp;</div>
            </div>

            <!-- 備註 -->
            <div class="form-input">
              <div class="form-top form-memo">
                <label for="ca_memo"><span>備</span><span>註</span></label>
                <div class="cut-form-split-line cut-form-special-line">&nbsp;</div>
                <textarea id="ca_memo" v-model="formData.msg"></textarea>
              </div>
              <div class="form-line">&nbsp;</div>
            </div>
          </div>
        </div>

        <!-- 隱私權 -->
        <div class="form-privacy">
          <h4>隱私權聲明</h4>
          <p>
            您所登錄的個人資料將作以下用途：1.本網站所載之相關資料通知2.客戶管理與服務3.本公司行銷業務之推廣，本案實際內容以現場公佈為準。
          </p>
          <div class="form-privacy-check">
            <label
              ><input id="ca_privacy" type="checkbox" v-model="caPrivacyChecked" />
              本人知悉並同意『<a href="privacy.html" target="_blank">個資告知事項聲明</a>』內容
            </label>
          </div>
        </div>

        <!-- 送出 -->
        <div class="form-button">
          <button id="sub_btn1" type="button" @click="submitForm">送出資料</button>
        </div>
      </form>

      <div class="cut-form-right pc">
        <img
          alt="cut-form-flower"
          src="https://ws.srl.tw/cs/2024051711015229/img/img2024051711285524.webp"
        />
      </div>
    </div>

    <div class="small-flower">
      <img alt="" src="https://ws.srl.tw/cs/2024051711015229/img/form_item.png" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from 'vue'
import { useCityStore } from '@/stores/cityStore'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const cityStore = useCityStore()
const selectedCity = ref('')
const selectedArea = ref('')
const areas = ref([])
const caPrivacyChecked = ref(false) //checkbox 的勾選狀態

// 表單數據
const formData = ref({
  case_id: 'case2024051711015229',
  send_list: '測試1,d974252037@gmail.com',
  name: '',
  phone: '',
  adds_city: '',
  adds_area: '',
  msg: ''
})

// 縣市選項
const cities = computed(() => Object.keys(cityStore.taiwanCities))

// 手機號碼格式驗證函數
const isValidPhoneNumber = (phone: string): boolean => {
  const phoneRegex = /^(09\d{8}|\d{8,10})$/
  return phoneRegex.test(phone)
}

watch(
  selectedCity,
  (newCity) => {
    areas.value = cityStore.taiwanCities[newCity] || [] // 更新區域選項
    if (areas.value.length > 0) {
      selectedArea.value = areas.value[0]
    } else {
      selectedArea.value = ''
    }
  },
  { immediate: true }
)

watch(areas, (newAreas) => {
  if (!newAreas.includes(selectedArea.value)) {
    selectedArea.value = newAreas[0] || ''
  }
})

//送出資料
const submitForm = async () => {
  if (!caPrivacyChecked.value) {
    Swal.fire({
      icon: 'warning',
      title: '請同意隱私權聲明',
      text: '請勾選「同意個資告知事項聲明」後再提交表單。'
    })
    return
  }

  if (formData.value.name === '') {
    Swal.fire({
      icon: 'warning',
      title: '請輸入姓名'
    })
    return
  }

  if (formData.value.phone === '') {
    Swal.fire({
      icon: 'warning',
      title: '請輸入聯絡電話'
    })
    return
  }

  if (selectedCity.value === '') {
    Swal.fire({
      icon: 'warning',
      title: '請選擇居住縣市'
    })
    return
  }

  // 檢查手機號碼格式是否正確
  if (!isValidPhoneNumber(formData.value.phone)) {
    Swal.fire({
      icon: 'warning',
      title: '無效的手機號碼',
      text: '請輸入正確的手機號碼。'
    })
    return
  }

  const postData = {
    case_id: 'case2024051711015229',
    send_list: '測試1,d974252037@gmail.com',
    name: formData.value.name,
    phone: formData.value.phone,
    adds_city: selectedCity.value,
    adds_area: selectedArea.value,
    msg: formData.value.msg
  }

  try {
    const response = await axios.post('https://ws.srl.tw/ajax/form.php', postData)
    console.log('提交成功:', response.data)
    Swal.fire({
      icon: 'success',
      title: '提交成功',
      text: response.data.msg
    })
  } catch (error) {
    console.error('提交失敗:', error)
    Swal.fire({
      icon: 'warning',
      title: '提交失敗',
      text: error
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
.cut-form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 1;
  overflow: hidden;
  @media all and (max-width: 1024px) {
    padding-bottom: 12%;
  }
}

.small-flower {
  position: absolute;
  right: 0px;
  bottom: -4px;
  width: 15%;
  @media all and (max-width: 1024px) {
    width: 43%;
    right: -4vw;
    bottom: -1vw;
  }
}

.cut-form-title {
  margin: auto;
  width: 14vw;
  margin-top: 3vw;
  margin-bottom: 3vw;
  @media all and (max-width: 1024px) {
    width: 35vw;
    margin-top: 10vw;
    margin-bottom: 7vw;
  }
}

.cut-form-main {
  background-color: white;
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 3vw;
  padding-bottom: 3vw;
  margin-bottom: 3vw;
  @media all and (max-width: 1024px) {
    margin-bottom: 0;
    width: 85%;
  }
}

.cut-form-title-1 {
  text-align: center;
  letter-spacing: 5px;
  @media all and (max-width: 1024px) {
    letter-spacing: 4px;
  }

  h3 {
    font-family: 'Noto Sans TC', sans-serif;
    color: white;
    font-size: 1.5vw;
    font-weight: 500;
    @media all and (max-width: 1024px) {
      font-size: 5vw;
    }
  }
}

.cut-form-title-2 {
  text-align: center;
  letter-spacing: 5px;

  @media all and (max-width: 1024px) {
    letter-spacing: 4px;
  }

  h3 {
    font-family: 'Cormorant Garamond', serif;
    color: white;
    font-size: 1.5vw;
    font-weight: 400;
    @media all and (max-width: 1024px) {
      font-size: 5vw;
    }
  }
}

.cut-form-container {
  background-color: white;
  width: 40vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 3%;
  padding-bottom: 3%;
  padding-left: 1%;
  padding-right: 1%;

  @media all and (max-width: 1024px) {
    width: 95%;
    padding: 4%;
    margin-top: 0%;
    padding-bottom: 10%;
    padding-top: 6%;
  }
}

.form-main-top {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 85%;
  gap: 4.5vw;

  @media all and (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    gap: 4vw;
  }
}

.form-left {
  width: 100%;

  @media all and (max-width: 1024px) {
    width: 100%;
  }
}

.form-right {
  width: 40%;
  @media all and (max-width: 1024px) {
    width: 100%;
  }
}

.form-input {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  .form-top {
    display: flex;
    align-items: center;
    width: 100%;
    label {
      color: black;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 500;
      font-size: 1vw;
      width: 22%;
      display: flex;
      align-items: center;
      justify-content: space-between;

      @media all and (max-width: 1024px) {
        width: 30%;
        font-size: 3.75vw;
      }
    }
    input {
      color: black;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 400;
      font-size: 1vw;
      border: none;
      width: 70%;
      margin-left: 1%;

      @media all and (max-width: 1024px) {
        width: 60%;
        font-size: 3.75vw;
        margin-left: unset;
      }
    }

    textarea {
      color: black;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 400;
      font-size: 1vw;
      border: none;
      width: 70%;
      resize: none;
      margin-left: 1%;

      @media all and (max-width: 1024px) {
        margin-left: unset;
      }
    }

    select {
      color: black;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 400;
      font-size: 1vw;
      border: none;
      width: 70%;
      background-color: transparent;

      @media all and (max-width: 1024px) {
        color: black;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 400;
        font-size: 3.5vw;
        border: none;
        width: 60%;
      }
    }

    .text-danger {
      color: red;
      margin-left: 1%;
    }

    .cut-form-split-line {
      width: 1px;
      height: 1vw;
      background-color: gray;
      margin-left: 2%;
      margin-right: 2%;

      @media all and (max-width: 1024px) {
        margin-left: 5%;
        height: 3.75vw;
      }
    }

    .cut-form-special-line {
      @media all and (max-width: 1024px) {
        margin-left: 7.8%;
      }
    }
  }

  .form-memo {
    @media all and (max-width: 1024px) {
      flex-wrap: wrap;
    }
    textarea {
      @media all and (max-width: 1024px) {
        width: 100%;
        height: 6vh;
        font-size: 3.75vw;
      }
    }
    .cut-form-split-line {
      margin-left: 4.4%;
    }
  }

  .form-line {
    width: 100%;
    height: 1px;
    background-color: gray;
    margin-top: 3%;
    margin-bottom: 3%;

    @media all and (max-width: 1024px) {
      margin-top: 4%;
      margin-bottom: 4%;
    }
  }
}

.twzipcode {
  width: 100%;
  .zipcode {
    background-color: transparent;
    border: none;
    width: 70%;
    margin-left: 0%;

    @media all and (max-width: 1024px) {
      margin-left: 0%;
      width: 60%;
    }
  }

  select {
    font-size: 1vw;
    font-family: 'Noto Sans TC', sans-serif;
    background-color: transparent;
    border: none;
    width: 100%;
    color: black;
    @media all and (max-width: 1024px) {
      font-size: 3.5vw;
    }
  }

  input[type='text'] {
    display: none;
  }
}

.form-privacy {
  width: 85%;
  line-height: 1.8;
  @media all and (max-width: 1024px) {
    width: 100%;
    margin-top: 5%;
  }
  h4 {
    font-size: 1vw;
    letter-spacing: 2px;
    font-family: 'Noto Sans TC', sans-serif;
    @media all and (max-width: 1024px) {
      font-size: 3.75vw;
    }
  }

  p {
    font-size: 0.9vw;
    letter-spacing: 1px;
    line-height: 1.8;
    font-family: 'Noto Sans TC', sans-serif;
    margin-top: 0.5%;
    @media all and (max-width: 1024px) {
      font-size: 3.75vw;
      margin-top: 3%;
    }
  }
}

.cut-form {
  background-image: url(https://ws.srl.tw/cs/2024051711015229/img/img2024061915053184.png);
  background-repeat: no-repeat;
  background-size: cover;
}

.form-button {
  text-align: center;
  margin-top: 5%;
  @media all and (max-width: 1024px) {
    margin-top: 7%;
  }
  button {
    background-color: #7a9e75;
    font-size: 1vw;
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 500;
    border: none;
    color: white;
    padding: 0.5vw 2vw;
    border-radius: 10px;
    letter-spacing: 3px;
    cursor: pointer;
    @media all and (max-width: 1024px) {
      padding: 1.75vw 7vw;
      font-size: 3.75vw;
    }
  }
}

.cut-form-right {
  width: 30vw;
  display: flex;
  justify-content: center;
  img {
    width: 70%;
  }
  @media all and (max-width: 1024px) {
    display: none;
  }
}

.form-privacy-check {
  margin-top: 0.5%;

  @media all and (max-width: 1024px) {
    margin-top: 3%;
  }

  label {
    font-size: 0.9vw;
    @media all and (max-width: 1024px) {
      font-size: 3.5vw;
    }
  }
}
</style>
