import { defineStore } from 'pinia'
import axios from 'axios'
import { ref, onBeforeMount } from 'vue'

export const useGoogleLifeData = defineStore('Life', () => {
  const case_id = 'case2024051711015229'

  const GoogleLifeData = ref<any>({})

  onBeforeMount(() => {
    axios
      .get(`https://ws.srl.tw/ajax/life.php?case_id=${case_id}`)
      .then((response) => {
        if (response.data.success) {
          GoogleLifeData.value = response.data.data
          console.log(GoogleLifeData.value)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return { GoogleLifeData }
})
