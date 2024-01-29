<template>
  <div class="pie" id="pie"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue'
onMounted(() => {
  var myChart = echarts.init(document.getElementById('pie'))

  const option = {
    grid: [
          { left: 0, top: 0, right: 0, bottom: 20 }
        ],
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  myChart.setOption(option)
})
</script>

<style lang="less" scoped>
.pie {
  color: blueviolet;
  height: 100vw;
  width: 100vw;
}
</style>
