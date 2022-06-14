<template>
  <span v-for="(item, index) in textSplit"
        :key="index">
    <span v-html="textSplit[index]"></span>
    <InputBm v-if="answer[index]"
             :answer="answer[index]"></InputBm>
  </span>
</template>

<script>
import InputBm from './InputBm.vue'
export default {
  name: 'Tiankong',
  props: {
    tiankongData: {
      type: Object,
      default () {
        return {
          text: 'def $input',
          answer: ['def'],
        }
      },
    },
  },
  components: {
    InputBm
  },
  data () {
    return {
      text: this.tiankongData.text,
      answer: this.tiankongData.answer,
      textSplit: [],
    }
  },
  watch: {
    tiankongData (val) {
      this.init()
    }
  },
  computed: {},
  methods: {
    init () {
      this.text = this.tiankongData.text
      this.answer = this.tiankongData.answer
      this.textSplit = this.text.replace(/\n/g, '<br>').split('$input')
    }
  },
  created () { },
  activated () { },
  mounted () {
    this.init()
  },
  beforeUnmount () { }
}
</script>

<style>
</style>
