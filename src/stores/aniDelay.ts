import { defineStore } from 'pinia'

export const aniDelay = defineStore('app', {
  state: () => ({
    noDelay: false
  }),
  actions: {
    setNoDelay(value: string) {
      this.noDelay = value
    }
  }
})
