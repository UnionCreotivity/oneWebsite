<template>
  <div class="footer_div">
    <div class="flex_box">
      <span>{{ caseData.web_title }}</span>
      <span>{{ caseData.format }}</span>
      <span v-if="caseData.build_adds != ''"
        ><i class="fa-solid fa-house"></i> 接待會館：{{ caseData.build_adds }}</span
      >
      <span v-if="caseData.phone != ''"
        ><i class="fa-solid fa-phone"></i> 禮賓專線：{{ caseData.phone }}</span
      >
    </div>
    <div class="footer_make">
      <a
        target="_blank"
        href="https://www.facebook.com/profile.php?id=100085307358971"
        class="ui-link"
        >聯創數位</a
      >
    </div>
  </div>
</template>
<script setup lang="ts">
import { useCase } from '@/stores/case'
import { toRefs } from 'vue'
//-- 建案資料 --
let { caseData } = toRefs(useCase())
</script>
<style lang="scss" scoped>
.footer_div {
  text-align: center;
  padding: 20px;
  color: #fff;
  background: #4b4b4b;
  font-size: 14px;
  letter-spacing: 0.05em;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding-bottom: 70px;
  }

  .flex_box {
    display: flex;
    justify-content: center;

    @media (max-width: 1024px) {
      flex-direction: column;
      gap: 7px;
    }

    span {
      font-weight: 300;
      font-family: 'Noto Sans TC';
      margin: 0 5px;

      @media (max-width: 1024px) {
        font-size: 13px;
        letter-spacing: 0.1em;
      }
    }
  }
  .footer_make {
    margin: 0;
    margin-top: 10px;
    display: block !important;
    a {
      display: block;
      font-size: 12px;
      color: #898989;
      text-decoration: none;
      letter-spacing: 0.1em;
      font-family: Microsoft JhengHei;
    }
  }
}
</style>
