<template>
  <Button type="primary"
          style="margin-left:10px;"
          @click="clickHandle">{{btnText}} 答案</Button>
  <Tag size="large"
       style="margin-left:10px;">tip: Ctrl + K 可以切换显示隐藏答案</Tag>
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
    clickHandle () {
      this.$app.showAnswer = !this.$app.showAnswer
    }
  },
  created () { },
  activated () { },
  mounted () { },
}
</script>

<style>
</style>
