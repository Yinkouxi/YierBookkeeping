<template>
  <div class="pie" id="pie"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { watch } from 'vue';
import { PropType } from 'vue'
import { onMounted } from 'vue'
import { handleAmount } from '../../utils/handleAmount';

const props = defineProps({
  data: Array as PropType<{ name: string; value: number }[]>
})
console.log(props.data, 'props')

let myChart: echarts.ECharts | undefined = undefined

const defaultOption = {
  tooltip:{
    trigger:'item',
    position: (point: any[], _: any, dom: { offsetWidth: any; }, _rect: any, size: { viewSize: any[]; }) => {
      // 通过计算调整 Tooltip 的位置
      const containerWidth = size.viewSize[0];
      const tooltipWidth = dom.offsetWidth;
      const maxLeft = containerWidth - tooltipWidth;
      let left = point[0];
      if (left > maxLeft) {
        left = maxLeft;
      }
      return [left, point[1]];
    },
    formatter: (x: {name:string, value:number, percent: number})=>{
      const {name,value,percent} = x
      return `${name}: ￥${handleAmount(value)} 占比 ${percent}%`
    },
  },
  
  grid: [{ left: 0, top: 0, right: 0, bottom: 20 }],
  series: [
    {
      type: 'pie',
      radius: '50%',
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
onMounted(() => {
  myChart = echarts.init(document.getElementById('pie'))
  myChart.setOption(defaultOption)
})

watch(()=>props.data,()=>{
  myChart?.setOption({
    series:[{
      data:props.data
    }]
  })
})
</script>

<style lang="less" scoped>
.pie {
  color: blueviolet;
  height: 100vw;
  width: 100vw;
}
</style>
