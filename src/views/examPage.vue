<template>
  <div class="mainWrapClass">
    <Button type="primary"
            to="home">返回</Button>
    <ShowAnswerBtn></ShowAnswerBtn>
    <div style="height: 20px;"> </div>
    <h1>模拟考试</h1>

    <div style="height: 100px;"> </div>
    <h2>单选题 10道</h2>
    <div v-for="(item,index) in danxuanData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>

    <div style="height: 100px;"> </div>
    <h2>多选题 10道</h2>
    <div v-for="(item,index) in duoxuanData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>

    <div style="height: 100px;"> </div>
    <h2>判断题 10道</h2>
    <div v-for="(item,index) in panduanData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>

    <div style="height: 100px;"> </div>
    <h2>填空题 15道</h2>
    <div v-for="(item,index) in tiankongData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>

    <div style="height: 100px;"> </div>
    <h2>简答题 3道</h2>
    <div v-for="(item,index) in jiandaData"
         :key="index"
         style="margin-top:15px;">
      <Tiankong :tiankongData="item" />
    </div>
    <div style="height: 100px;"></div>
  </div>
</template>

<script>
import Tiankong from '@/components/Tiankong.vue'
import danxuanData from './data/danxuanData.js'
import tiankongData from './data/tiankongData.js'
import panduanData from './data/panduanData.js'
import duoxuanData from './data/duoxuanData.js'
import jiandaData from './data/jiandaData.js'
export default {
  name: 'examPage',
  props: {},
  components: { Tiankong },
  data () {
    return {
      jiandaData: [],
      duoxuanData: [],
      panduanData: [],
      danxuanData: [],
      tiankongData: [],
    }
  },
  watch: {},
  computed: {},
  methods: {
    randomSort (arr1) {
      const arr = [...arr1]
      const result = []
      while (arr.length > 0) {
        const randomIndex = Math.floor(Math.random() * arr.length)
        result.push(arr[randomIndex])
        arr.splice(randomIndex, 1)
      }
      return result
    },
    getRaTop (arr, topNum) {
      const raArr = this.randomSort(arr)
      return raArr.filter((item, index) => {
        return index < topNum
      })
    },
  },
  created () { },
  activated () { },
  mounted () {
    console.info('examPage mounted')
    this.jiandaData = this.getRaTop(jiandaData, 3)
    this.duoxuanData = this.getRaTop(duoxuanData, 10)
    this.panduanData = this.getRaTop(panduanData, 10)
    this.danxuanData = this.getRaTop(danxuanData, 10)
    this.tiankongData = this.getRaTop(tiankongData, 15)
  },
}
</script>

<style>
</style>
