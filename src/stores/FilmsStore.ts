import { defineStore } from "pinia";

export const useFilmsStore = defineStore('test', {
  state: () => ({
    message: 'hello'
  })
})