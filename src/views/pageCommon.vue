<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'pageCommon',
  props: {
    oThis: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  components: {},
  data () {
    return {
    }
  },
  watch: {
    '$app.randomDoIt': function (val) {
      console.info('ctrl + r 随机打乱')
      this.oThis.listData = [...this.oThis.listData.sort((a, b) => Math.random() > 0.5 ? 1 : -1)]
    },
  },
  computed: {},
  methods: {},
  created () { },
  activated () { },
  mounted () { },
  beforeDestroy () { }
}
</script>

<style>
</style>