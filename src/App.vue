<template>
  <router-view />
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onKeyStroke } from '@vueuse/core'
export default {
  name: 'App',
  data () {
    return {
      app: { // 全局属性
        inputNextFocus: null,
        inputPreviousFocus: null,
        showOne: false,
        showAnswer: false,
        showAnswerAll: false,
        clearAnswer: false,
        guaguakaVif: false,
      },
    }
  },
  mounted () {
    window.$app.config.globalProperties.$app = this.app
    onKeyStroke('ArrowUp', (e) => {
      if (e.altKey) { // Alt + ↑
        e.preventDefault()
        this.app.inputPreviousFocus && this.app.inputPreviousFocus()
      }
    })
    onKeyStroke('ArrowDown', (e) => {
      if (e.altKey) { // Alt + ↓
        e.preventDefault()
        this.app.inputNextFocus && this.app.inputNextFocus()
      }
    })
    onKeyStroke('k', (e) => {
      if (e.altKey && e.ctrlKey) {
        e.preventDefault()
        this.app.showAnswerAll = !this.app.showAnswerAll
        return false
      }
      if (e.ctrlKey) { // ctrl + k
        e.preventDefault()
        this.app.showAnswer = !this.app.showAnswer
      }

    })
    onKeyStroke('l', (e) => {
      if (e.ctrlKey) { // ctrl + l
        e.preventDefault()
        this.app.showOne = !this.app.showOne
      }
    })

    onKeyStroke('o', (e) => {
      if (e.ctrlKey) { // ctrl + o
        e.preventDefault()
        this.app.guaguakaVif = !this.app.guaguakaVif
      }
    })
    onKeyStroke('i', (e) => {
      if (e.ctrlKey) { // ctrl + i
        e.preventDefault()
        this.app.clearAnswer = !this.app.clearAnswer
      }
    })
    onKeyStroke('u', (e) => {
      if (e.ctrlKey) { // ctrl + u
        e.preventDefault()
        // this.app.clearAnswer = !this.app.clearAnswer
        this.app.inputNextFocus && this.app.inputNextFocus()
      }
    })
  },
}
</script>

<style>
body {
  background-color: #f4f5f5 !important;
}
.mainWrapClass {
  background-color: white;
  padding: 50px;
  width: 1100px;
  margin: 0 auto;
  font-size: 22px;
}
.marginRightClass {
  margin-right: 10px;
}
</style>
