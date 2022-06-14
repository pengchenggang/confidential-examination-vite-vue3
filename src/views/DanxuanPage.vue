<template>
  <div class="mainWrapClass">
    <Button type="primary"
            to="home">返回</Button>
    <ShowAnswerBtn></ShowAnswerBtn>
    <div style="height: 20px;"> </div>
    <h1>单选题 40道</h1>
    <div style="height: 100px;"> </div>
    <div v-for="(item,index) in listData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>
    <div style="height: 100px;"></div>
    <pageCommon :oThis="oThis"></pageCommon>
  </div>
</template>

<script>
import Tiankong from '@/components/Tiankong.vue'
import danxuanData from './data/danxuanData.js'
export default {
  name: 'DanxuanPage',
  props: {},
  components: { Tiankong },
  data () {
    return {
      oThis: this,
      listData: danxuanData
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
