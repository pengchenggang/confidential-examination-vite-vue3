<template>
  <Input v-model="val1"
         ref="inputBmRef"
         class="inputBmClass"
         :class="val1.toUpperCase() === answer ? 'md-checkbox-outline' : 'md-code'"
         :prefix="val1.toUpperCase() === answer ? 'md-checkbox-outline' : 'md-code'"
         :style="{width: this.answer.length * 15 + 15 + 30 + 'px',
         }" />
  <span ref="inputSpanRef"
        style="font-size: 14px; position: absolute; left: -10000px">{{val1}}</span>
</template>

<script>
export default {
  name: 'InputBm',
  props: {
    answer: {
      type: String,
      default: '',
    },
  },
  components: {},
  data () {
    return {
      backgroundSizeX: '0px',
      val1: '',
      val1Bak: '',
    }
  },
  watch: {
    '$app.clearAnswer': function (val) {
      this.val1 = ''
    },
    '$app.showAnswer': function (val) {
      // console.info('$app.showAnswer', val)
      if (val) { // 备份当前数据
        this.val1Bak = this.val1
        this.val1 = this.answer
      } else {
        this.val1 = this.val1Bak
      }
    },
    val1 (val) {
      if (val.toUpperCase() === this.answer && this.$app.showAnswer === false) {
        this.inputNextFocus()
      }

      if (val.length !== 0) {
        const len = val.length
        if (val.toUpperCase() === this.answer.substr(0, len)) {
          this.$nextTick(() => {
            this.backgroundSizeX = this.$refs.inputSpanRef.offsetWidth + 32 + 10 + 'px'
          })
        } else {
          this.backgroundSizeX = '0'
        }
      } else {
        this.backgroundSizeX = '0'
      }
    },
  },
  computed: {},
  methods: {
    inputNextFocus () {
      const thisInput = this.$refs.inputBmRef.$el.getElementsByTagName('input')[0]
      const inputs = document.getElementsByTagName('input')
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === thisInput) {
          // console.info('找到啦！')
          const tIndex = i + 1
          if (tIndex < inputs.length) { // 不是最后一个 就跳下一个 - 最后一个就不跳了
            inputs[tIndex].focus()
            break
          }
        }
      }
    },
  },
  created () { },
  activated () { },
  mounted () { },
  beforeUnmount () { }
}
</script>

<style>
.inputBmClass input {
  background-image: url("./images/right32.png");
  background-repeat: no-repeat;
  background-size: v-bind(backgroundSizeX) 100%;
}
.md-checkbox-outline input {
  background-color: #ace7a8;
}
</style>
