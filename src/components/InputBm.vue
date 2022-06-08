<template>
  <Input v-model="val1"
         @on-focus="onFocusHandle"
         @on-blur="onBlurHandle"
         ref="inputBmRef"
         class="inputBmClass"
         :class="val1.toUpperCase() === answer ? 'md-checkbox-outline' : 'md-code'"
         :prefix="val1.toUpperCase() === answer ? 'md-checkbox-outline' : 'md-code'"
         :style="{width: this.answer.length * 15 + 15 + 30 + 'px',
         }" />
  <span ref="inputSpanRef"
        style="font-size: 14px; position: absolute; left: -10000px">{{val1}}</span>
  <!-- :storage-key="'vueuse-draggable' + answer"
                storage-type="session" -->
  <!-- <UseDraggable v-if="udVif"
                :initialValue="{ x: initX, y: initY }"
                :style="{width: this.answer.length * 15 + 15 + 30 + 'px',
         }"
                style="position: absolute; background-color: #666666; z-index: 1;">
    Drag me! I am at
  </UseDraggable> -->
  <span style="position: absolute;"
        v-show="guaguakaVif">
    <div style="position: relative; overflow: hidden;"
         :style="{width: this.answer.length * 15 + 15 + 30 + 'px', left: (this.answer.length * 15 + 15 + 30)*-1 + 'px'}">
      <div ref="draggerRef"
           onselectstart="return false;"
           :style="{width: this.answer.length * 15 + 15 + 30 + 'px', left: 0}"
           style="background-color: #f4f5f5; position: relative; top:0;z-index: 1; cursor: pointer; border-radius: 10px;">
        <span style="font-size:12px; margin-left: 10px;">
          <Icon type="md-arrow-round-forward" />
        </span>
      </div>
    </div>
  </span>

</template>

<script>
// import { ref } from 'vue'
// import { UseDraggable } from '@vueuse/components'
export default {
  name: 'InputBm',
  props: {
    answer: {
      type: String,
      default: '',
    },
  },
  components: {
    // UseDraggable
  },
  data () {
    return {
      isFocus: false,
      guaguakaVif: false,
      // udVif: false,
      // initX: 0,
      // initY: 0,
      backgroundSizeX: '0px',
      val1: '',
      val1Bak: '',
      val1Bak2: '',
    }
  },
  watch: {
    isFocus (val) {
      if (val) {
        this.$app.inputNextFocus = this.inputNextFocus
        this.$app.inputPreviousFocus = this.inputPreviousFocus
      }
    },
    '$app.showOne': function (val) {
      if (this.isFocus) {
        console.info('showOne')
        const len = this.val1.length
        if (len < this.answer.length) {
          this.val1 = this.answer.substr(0, len + 1)
        } else {
          this.val1 = this.answer
        }
      }
    },
    '$app.guaguakaVif': function (val) {
      this.guaguakaVif = val
    },
    '$app.clearAnswer': function (val) {
      if (this.isFocus) {
        if (this.val1 !== '') {
          this.val1 = ''
        } else {
          this.inputPreviousFocus()
        }
      }
    },
    '$app.showAnswer': function (val) {
      // console.info('$app.showAnswer', val)
      if (this.isFocus) {
        if (val) { // 备份当前数据
          this.val1Bak = this.val1
          this.val1 = this.answer
        } else {
          this.val1 = this.val1Bak
        }
      }
    },
    '$app.showAnswerAll': function (val) {
      if (val) { // 备份当前数据
        this.val1Bak2 = this.val1
        this.val1 = this.answer
      } else {
        this.val1 = this.val1Bak2
      }
    },
    val1 (val) {
      const showAnswerBool = this.$app.showAnswer === false && this.$app.showAnswerAll === false
      if (val.toUpperCase() === this.answer && showAnswerBool) {
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
    onBlurHandle () {
      this.isFocus = false
    },
    onFocusHandle () {
      this.isFocus = true
    },
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
    inputPreviousFocus () {
      const thisInput = this.$refs.inputBmRef.$el.getElementsByTagName('input')[0]
      const inputs = document.getElementsByTagName('input')
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i] === thisInput) {
          // console.info('找到啦！')
          const tIndex = i - 1
          if (tIndex < inputs.length) { // 不是最后一个 就跳下一个 - 最后一个就不跳了
            inputs[tIndex] && inputs[tIndex].focus()
            break
          }
        }
      }
    },
  },
  created () {

  },
  activated () { },
  mounted () {
    // const bcr = this.$refs.inputBmRef.$el.getBoundingClientRect()
    // console.info('inputBmRef', bcr)
    // this.initX = bcr.left
    // this.initY = bcr.top
    // this.udVif = true
    // console.info('this.$refs.draggerRef.$el', this.$refs.draggerRef)
    const box = this.$refs.draggerRef
    // console.info('box.style.left', parseInt(box.style.left))
    box.onmousedown = function () {
      // console.info('draggerRef.$el.onmousedown')

      // 获取鼠标在div上按下的位置
      var e = window.event  //接收事件对象
      // 获取鼠标在当前事件源的位置
      var x1 = e.clientX
      var y1 = e.offsetY
      const oldLeft = parseInt(box.style.left)
      // console.info('oldLeft', oldLeft)
      // 绑定移动事件
      document.onmousemove = function () {

        // 获取鼠标在浏览器中的位置 - 每个事件都有自己独特的事件对象
        var e = window.event
        var x2 = e.clientX // e.clientX
        var y2 = e.clientY

        // 计算left和top
        var l = x2 - x1
        var t = y2 - y1

        // // 设置不能超出左上角和右上角
        // if (l < 0) {
        //   l = 0
        // }
        // if (t < 0) {
        //   t = 0
        // }

        // 设置div的left和top
        // console.info('box.style.left', box.style.left)
        box.style.left = oldLeft + l + 'px'
        // box.style.top = t + 'px'
      }

    }
    window.onmouseup = function () {
      document.onmousemove = null
    }
  },
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
