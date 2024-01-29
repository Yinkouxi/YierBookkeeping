<template>
  <div class="line" id="line">

  </div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue';
onMounted(() => {

var myChart = echarts.init(document.getElementById('line'))

const option = {
  grid: [
          {  top: 46,  bottom: 20 }
        ],
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
myChart.setOption(option);

})
</script>

<style lang="less" scoped>
.line{
    color: blueviolet;
    height: 200px;
    width: 100vw;
}
</style>
