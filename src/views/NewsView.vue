<template>
  <div class="news-container">
    <div class="news-list" v-for="(news, index) in newsData" :key="index" v-if="hasData === true">
      <div class="date-box">
        <div class="date">{{ news.StartDate }}</div>
      </div>
      <div class="title-box">
        <a :href="news.aUrl" target="_blank">{{ news.aTitle }}</a>
      </div>
      <div class="source-box">
        來源：<span>{{ news.source }}</span>
      </div>
      <div class="content-box">
        <div class="content">
          {{ news.aAbstract }}
        </div>
      </div>
      <div class="more-box">
        <a class="more" :href="news.aUrl" target="_blank">more</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import { useCase } from '@/stores/case'
import { gsap } from 'gsap'

export default defineComponent({
  setup() {
    const { caseData } = useCase()
    const hasData = ref<boolean>(false) // 有無新聞報導
    const newsData = ref<any>({})

    const fetchNewsData = async () => {
      try {
        const response = await axios.get(
          `https://ws.srl.tw/ajax/news.php?case_id=${caseData.Tb_index}`
        )
        const data = response.data.data
        newsData.value = data.sort(
          (a: any, b: any) => new Date(b.StartDate).getTime() - new Date(a.StartDate).getTime()
        )
        hasData.value = newsData.value.length > 0
      } catch (error) {
        console.error('Error fetching news data:', error)
        hasData.value = false // 發生錯誤時設為 false
      }
    }

    onMounted(() => {
      fetchNewsData()
      const tl = gsap.timeline({})
      tl.from('.news-container', {
        opacity: 0,
        duration: 0.8,
        ease: 'power1.in'
      })
    })

    return {
      caseData,
      hasData,
      newsData
    }
  }
})
</script>
<style lang="scss">
.news-container {
  background-color: white;
  min-height: 100vh;
  // height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 11vw;
  padding-bottom: 28vw;
  .news-list {
    display: flex;
    flex-direction: column;
    width: 90%;
    font-family: 'Noto Serif TC';
    position: relative;
    letter-spacing: 0.2em;
    margin: 0 auto;
    margin-top: 3vw;
    border-top: 1px solid gray;

    &:first-child {
      border-top: none;
    }
    .date-box {
      margin-bottom: 1.5vw;
      margin-top: 3vw;
      .date {
        font-size: 3.5vw;
      }
    }
    .title-box {
      margin-bottom: 1.5vw;
      a {
        font-size: 4vw;
      }
    }
    .source-box {
      margin-bottom: 1.5vw;
      font-size: 3.2vw;
    }
    .content-box {
      font-size: 3.75vw;
      text-align: justify;
      line-height: 1.7em;
      display: flex;
      .content {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 6;
        line-clamp: 6;
        display: -webkit-box;
        max-height: 40vw;
      }
    }
    .more-box {
      display: flex;
      margin-top: 1vw;
      justify-content: right;
      a.more {
        font-size: 3.75vw;
      }
    }
  }
}
</style>
