<template>
  <div class="line" id="line"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { PropType, onMounted, watch } from 'vue'
import { Time } from '../../utils/time'
import { handleAmount } from '../../utils/handleAmount'

const props = defineProps({
  data: {
    type: Array as PropType<[string, number][]>,
    require: true
  }
})

let myChart: echarts.ECharts | undefined = undefined
const defaultOption = {
  tooltip: {
    show: true,
    trigger: 'axis',
    formatter: ([item]: any) => {
      const [x, y] = item.data
      return `${new Time(new Date(x)).format('YYYY年MM月DD日')} ￥${handleAmount(y)}`
    }
  },
  grid: [{ left: 16, top: 20, right: 16, bottom: 20 }],
  xAxis: {
    type: 'time',
    boundaryGap: ['3%', '0%'],
    axisLabel: {
      formatter: (value: string) => new Time(new Date(value)).format('MM-DD')
    },
    axisTick: {
      alignWithLabel: true
    }
  },
  yAxis: {
    show: true,
    type: 'value',
    splitLine: {
      show: true,
      lineStyle: {
        type: 'dashed'
      }
    },
    axisLabel: {
      show: false
    }
  }
}
onMounted(() => {
  // 基于准备好的dom，初始化echarts实例
  // chart = echarts.init(myChart)
  myChart = echarts.init(document.getElementById('line'))
  myChart.setOption(defaultOption)
  
  // 绘制图表
  myChart?.setOption({
    ...defaultOption,
    series:[{
      data:props.data,
      type:'line'
    }]
  })
})
watch(
  () => props.data,
  () => {
    myChart?.setOption({
      series: [
        {
          data: props.data
        }
      ]
    })
  }
)
</script>

<style lang="less" scoped>
.line {
  color: blueviolet;
  height: 200px;
  width: 100vw;
}
</style>
