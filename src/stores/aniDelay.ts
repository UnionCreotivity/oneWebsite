import { defineStore } from 'pinia'

export const aniDelay = defineStore('app', {
  state: () => ({
    noDelay: false
  }),
  actions: {
    setNoDelay(value: boolean) {
      this.noDelay = value
    }
  }
})
