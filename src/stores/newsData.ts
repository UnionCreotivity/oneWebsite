import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'

export const useNewsData = defineStore('newsData', () => {
  const case_id = 'case2024051711015229'

  const newsData = ref<any>({})

  onBeforeMount(() => {
    axios
      .get(`https://ws.srl.tw/ajax/news.php?case_id=${case_id}`)
      .then((response) => {
        if (response.data.success) {
          newsData.value = response.data.data
        }
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return { newsData }
})
