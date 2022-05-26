<template>
  <div class="mainWrapClass">
    <Button type="primary"
            to="home">返回</Button>
    <ShowAnswerBtn></ShowAnswerBtn>
    <div style="height: 20px;"> </div>
    <h1>填空题 80道</h1>
    <div style="height: 100px;"> </div>
    <div v-for="(item,index) in tiankongData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
import Tiankong from '@/components/Tiankong.vue'
import tiankongData from './data/tiankongData.js'
export default {
  name: 'TiankongPage',
  props: {},
  components: {
    Tiankong
  },
  data () {
    return {
      tiankongData
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

<style lang="less"></style>
