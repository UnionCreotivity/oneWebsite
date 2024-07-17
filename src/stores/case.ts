import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'

export const useCase = defineStore('case', () => {
  const case_id = 'case2024051711015229'

  let caseData = ref({
    Tb_index: '',
    aTitle: '',
    web_title: '',
    format: '',
    description: '',
    build_adds: '',
    ga4_code: '',
    phone: '',
    line_txt: '',
    fb_sel: '',
    fb_txt: '',
    location: '',
    loading_logo: ''
  })

  onBeforeMount(() => {
    //-- 撈建案資料 --
    axios
      .post('https://ws.srl.tw/ajax/case.php', {
        Tb_index: case_id
      })
      .then((response) => {
        if (response.data.success) {
          caseData.value = response.data.data
        }
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return { caseData }
})
