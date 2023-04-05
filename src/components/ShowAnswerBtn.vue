<template>
  <Button type="primary"
          style="margin-left:10px;"
          @click="clickHandle">{{btnText}} 答案</Button>
          <Button type="primary"
          style="margin-left:10px;"
          @click="phoneHandle">手机模式</Button>
  <Tag size="large"
       style="margin-left:10px;">tip: Ctrl + K 可以切换显示隐藏答案</Tag>
  <Tag size="large"
       style="margin-left:10px;">tip: Ctrl + I 可以清除答案</Tag>
  <Tag size="large"
       style="margin-left:10px;">tip: Ctrl + O 可以开启刮刮卡</Tag>
  <Tag size="large"
       style="margin-left:10px;">tip: Ctrl + L 可以提示一个字</Tag>
  <Tag size="large"
       style="margin-left:10px;">tip: Alt + J 向下滚动</Tag>
  <Tag size="large"
       style="margin-left:10px;">tip: Alt + K 向上滚动</Tag>
</template>

<script>
export default {
  name: 'ShowAnswerBtn',
  props: {},
  components: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {
    btnText () {
      if (this.$app.showAnswer) {
        return '隐藏'
      } else {
        return '显示'
      }
    }
  },
  methods: {
    phoneHandle () {
      this.$app.isPhone = !this.$app.isPhone
    },
    clickHandle () {
      this.$app.showAnswerAll = !this.$app.showAnswerAll
    }
  },
  created () { },
  activated () { },
  mounted () { },
}
</script>

<style>
</style>
