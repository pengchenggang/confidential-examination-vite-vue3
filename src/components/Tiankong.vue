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
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () {
    this.textSplit = this.text.replace(/\n/g, '<br>').split('$input')
  },
  beforeUnmount () { }
}
</script>

<style>
</style>
