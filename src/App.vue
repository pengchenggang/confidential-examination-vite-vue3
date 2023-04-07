<template>
  <router-view />
</template>

<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { onKeyStroke } from "@vueuse/core"
export default {
  name: "App",
  data () {
    return {
      app: {
        // 全局属性
        clearAnswerAllAndFoucsFirst: false, // 清除全部数据，并focus第一个input
        isPhone: false,
        randomDoIt: false,
        inputNextFocus: null,
        inputPreviousFocus: null,
        showOne: false,
        showAnswer: false,
        showAnswerAll: false,
        clearAnswer: false,
        clearAnswerAll: false,
        guaguakaVif: false,
      },
    }
  },
  mounted () {
    window.$app.config.globalProperties.$app = this.app
    onKeyStroke("ArrowUp", (e) => {
      if (e.altKey) {
        // Alt + ↑
        e.preventDefault()
        this.app.inputPreviousFocus && this.app.inputPreviousFocus()
      }
    })
    onKeyStroke("ArrowDown", (e) => {
      if (e.altKey) {
        // Alt + ↓
        e.preventDefault()
        this.app.inputNextFocus && this.app.inputNextFocus()
      }
    })
    onKeyStroke("k", (e) => {
      if (e.altKey && e.ctrlKey) {
        e.preventDefault()
        this.app.showAnswerAll = !this.app.showAnswerAll
        return false
      }
      if (e.ctrlKey) {
        // ctrl + k
        e.preventDefault()
        this.app.showAnswer = !this.app.showAnswer
      }
      if (e.altKey) {
        // alt + k 上移动滚动条
        e.preventDefault()
        const n = document.documentElement.scrollTop
        document.documentElement.scrollTop = n - 200
      }
    })
    onKeyStroke("j", (e) => {
      if (e.altKey) {
        // alt + j 下滚动
        e.preventDefault()
        const n = document.documentElement.scrollTop
        document.documentElement.scrollTop = n + 200
      }
    })
    // onKeyStroke('h', (e) => {
    //   if (e.ctrlKey) { // ctrl + h
    //     e.preventDefault()
    //     const n = document.documentElement.scrollTop
    //     document.documentElement.scrollTop = n - 200
    //   }
    // })
    onKeyStroke("r", (e) => {
      if (e.ctrlKey) {
        // ctrl + r
        e.preventDefault()
        this.app.randomDoIt = !this.app.randomDoIt
      }
    })
    onKeyStroke("l", (e) => {
      if (e.altKey) {
        // ctrl + l
        e.preventDefault()
        this.app.showOne = !this.app.showOne
      }
    })

    onKeyStroke("o", (e) => {
      if (e.altKey) {
        // ctrl + o
        e.preventDefault()
        this.app.guaguakaVif = !this.app.guaguakaVif
      }
    })
    onKeyStroke("i", (e) => {
      if (e.altKey && e.ctrlKey) {
        console.info('ctrl alt i')
        e.preventDefault()
        this.app.clearAnswerAllAndFoucsFirst = !this.app.clearAnswerAllAndFoucsFirst
        return
      }
      if (e.ctrlKey) {
        // ctrl + i
        e.preventDefault()
        this.app.clearAnswer = !this.app.clearAnswer
      }
    })
    onKeyStroke("u", (e) => {
      if (e.ctrlKey) {
        // ctrl + u
        e.preventDefault()
        // this.app.clearAnswer = !this.app.clearAnswer
        this.app.inputNextFocus && this.app.inputNextFocus()
      }
    })
  },
};
</script>

<style>
body {
  background-color: #f4f5f5 !important;
}
@media screen and (min-width: 320px) {
  .mainWrapClass {
    font-size: 1em;
    padding: 20px;
  }
}

@media screen and (min-width: 640px) {
  .mainWrapClass {
    font-size: 22px;
    padding: 50px;
  }
}

.mainWrapClass {
  background-color: white;
  /* padding: 50px; */
  width: 100%;
  min-width: 320px;
  max-width: 1100px;
  margin: 0 auto;
  /* font-size: 22px; */
  /* font-size: 1.3em; */
}
.marginRightClass {
  margin-right: 10px;
}
</style>
