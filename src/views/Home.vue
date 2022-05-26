<template>
  <div class="mainWrapClass">
    <div style="height: 100px;"></div>
    <Button type="primary"
            class="marginRightClass"
            to="tiankongPage">填空题 80道</Button>
    <Button type="primary"
            class="marginRightClass"
            to="panduanPage">判断题 80道</Button>
    <Button type="primary"
            class="marginRightClass"
            to="danxuanPage">单选题 40道</Button>
    <Button type="primary"
            class="marginRightClass"
            to="duoxuanPage">多选题 30道</Button>
    <Button type="primary"
            class="marginRightClass"
            to="jiandaPage">简答题 6道</Button>
    <Button type="primary"
            class="marginRightClass"
            to="examPage">模拟考试</Button>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {

    }
  },
  setup () {
  },
  methods: {
  },
  mounted () {
    this.$app.showAnswer = false
  }
}
</script>

<style lang="less" scoped>
</style>
