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
        showAnswer: false,
        clearAnswer: false,
      },
    }
  },
  mounted () {
    window.$app.config.globalProperties.$app = this.app
    onKeyStroke('k', (e) => {
      if (e.ctrlKey) { // ctrl + k
        e.preventDefault()
        this.app.showAnswer = !this.app.showAnswer
      }
    })

    onKeyStroke('i', (e) => {
      if (e.ctrlKey) { // ctrl + k
        e.preventDefault()
        this.app.clearAnswer = !this.app.clearAnswer
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
