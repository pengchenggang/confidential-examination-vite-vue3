<template>
  <div class="mainWrapClass">
    <Button type="primary"
            to="home">返回</Button>
    <ShowAnswerBtn></ShowAnswerBtn>
    <div style="height: 20px;"> </div>
    <h1>多选题 30道</h1>
    <div style="height: 100px;"> </div>
    <div v-for="(item,index) in duoxuanData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
import Tiankong from '@/components/Tiankong.vue'
import duoxuanData from './data/duoxuanData.js'
export default {
  name: 'DuoxuanPage',
  props: {},
  components: { Tiankong },
  data () {
    return {
      duoxuanData
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () { },
  beforeUnmount () { }
}
</script>

<style>
</style>
