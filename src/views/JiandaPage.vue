<template>
  <div class="mainWrapClass">
    <Button type="primary"
            to="home">返回</Button>
    <ShowAnswerBtn></ShowAnswerBtn>
    <div style="height: 20px;"> </div>
    <h1>简答题 6道</h1>
    <div style="height: 100px;"> </div>
    <div>
      <pre>
题目目录：
1．请详细叙述《中华人民共和国保守国家秘密法》第四十八条列举的十二种违法行为。
2．请列举保密行政管理部门应当吊销涉密集成资质的相关情形？
3．请详细叙述涉密人员应当履行的保密责任。
4．请详细叙述涉密人员脱密期管理相关要求。
5．请叙述保密制度应当涉及的主要方面。
6．请详细叙述涉密会议应当采取的保密管理措施。
      </pre>
    </div>
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
import jiandaData from './data/jiandaData.js'
export default {
  name: 'JiandaPage',
  props: {},
  components: { Tiankong },
  data () {
    return {
      oThis: this,
      listData: jiandaData
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
