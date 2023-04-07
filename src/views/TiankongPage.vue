<template>
  <div class="mainWrapClass">
    <Button type="primary"
            to="home">返回</Button>
    <Button type="primary"
            style="margin-left:15px;"
            @click="checkToListHandle">显示勾选题</Button>
    <Button type="primary"
            style="margin-left:15px;"
            @click="clearAnswerAllHandle">清空所有填空内容</Button>
    <Button type="primary"
            style="margin-left:15px;"
            @click="clearCheckHandle">清空勾选</Button>
    <Button type="primary"
            style="margin-left:15px;"
            @click="autoLoopHandle">自动Loop状态:{{ this.$app.autoLoop ? '开启' : '关闭'}}</Button>
    <ShowAnswerBtn></ShowAnswerBtn>
    <div style="height: 20px;"> </div>
    <h1>填空题 80道</h1>
    <div style="height: 100px;"> </div>
    <div v-for="(item,index) in listData"
         :key="index"
         style="margin-top:15px;">
      <Checkbox v-model="listData[index].check"
                @click="checkHandle">　</Checkbox>
      <Tiankong :tiankongData="item" />
    </div>
    <div style="height: 100px;"></div>
    <pageCommon :oThis="oThis"></pageCommon>
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
      oThis: this,
      listData: this.getListData()
    }
  },
  watch: {

  },
  computed: {
  },
  methods: {
    autoLoopHandle () {
      this.$app.autoLoop = !this.$app.autoLoop
    },
    clearCheckHandle () {
      this.listData = tiankongData
      localStorage.clear()
    },
    getListData () {
      return localStorage.getItem('tiankongData') ? JSON.parse(localStorage.getItem('tiankongData')) : tiankongData
    },
    checkHandle () {
      setTimeout(() => {
        localStorage.setItem('tiankongData', JSON.stringify(this.listData))
      }, 100)
    },
    clearAnswerAllHandle () {
      this.$app.clearAnswerAll = !this.$app.clearAnswerAll
    },
    checkToListHandle () {
      if (tiankongData.length === this.listData.length) {
        this.listData = this.listData.filter(item => item.check)
      } else {
        this.listData = this.getListData()
      }
    },
  },
  created () { },
  activated () { },
  mounted () { },
  beforeUnmount () { }
}
</script>

<style lang="less"></style>
