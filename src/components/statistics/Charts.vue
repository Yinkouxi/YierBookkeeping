<template>
  <div class="charts">
    <div class="radio">
      <div
        class="option"
        :class="kind === 'expenses' ? 'selected' : ''"
        @click="selectKind('expenses')"
      >
        <span>支出</span>
      </div>
      <div
        class="option"
        :class="kind === 'income' ? 'selected' : ''"
        @click="selectKind('income')"
      >
        <span>收入</span>
      </div>
    </div>
    <line-chart :data="betterData1" />
    <PieChart :data="betterData2"/>
    <Bars />
  </div>
</template>

<script setup lang="ts">
import { PropType, computed, onMounted, ref, watch } from 'vue'
import LineChart from './LineChart.vue'
import PieChart from './PieChart.vue'
import Bars from './Bars.vue'
import yierRequest1 from '../../service'
import { Tag } from '../../assets/type'
const props = defineProps({
  startDate: {
    type: String as PropType<string>,
    require: true
  },
  endDate: {
    type: String as PropType<string>,
    require: true
  }
})

const kind = ref('expenses')
const selectKind = (selKind: string) => {
  console.log('sel', selKind)
  kind.value = selKind
}
type Data1Item = { happened_at: string; amount: number }
type Data1 = Data1Item[]
const data1 = ref<Data1>([])
const betterData1 = computed(() => {
  return data1.value.map((item) => {
    return [item.happened_at, item.amount] as [string, number]
  })
})

// setTimeout(() => {
//   console.log(data1.value)
//   console.log(betterData1.value)
// }, 2000)
onMounted(() => {
  yierRequest1
    .get({
      url: '/api/v1/items/summary',
      params: {
        happened_after: props.startDate,
        happened_before: props.endDate,
        kind: kind.value,
        group_by: 'happened_at'
      }
    })
    .then((res) => {
      data1.value = res.groups
      // console.log(data1.value)
      // console.log(data1.value[0].amount)
    })
})

// 饼图
type Data2Item = { tag_id: number; tag: Tag; amount: number }
type Data2 = Data2Item[]
const data2 = ref<Data2>([])
// const betterData2 = computed<{ name: string; value: number }>()
const betterData2 = computed<{ name: string; value: number }[]>(() =>
  data2.value.map((item) => ({
    name: item.tag.name,
    value: item.amount
  }))
)
setTimeout(() => {
  console.log(betterData2.value)
}, 1000)

const fetchData2 = async () => {
  await yierRequest1
    .get({
      url: '/api/v1/items/summary',
      params: {
        happened_after: props.startDate,
        happened_before: props.endDate,
        kind: kind.value,
        group_by: 'tag_id'
      }
    })
    .then((res) => {
      data2.value = res.groups
    })
}
onMounted(fetchData2)
watch(kind,fetchData2)
</script>

<style lang="less" scoped>
.charts {
  color: blueviolet;
  .visually-hidden {
    position: absolute;
    opacity: 0;
  }

  .radio {
    padding: 16px 0 0 16px;
    display: flex;
    text-align: center;
    align-items: center;
    color: #975ad9;
    .option {
      width: 25vw;
      height: 48px;
      line-height: 48px;
      border-radius: 16px;
    }

    .selected {
      background-color: #975ad9;
      color: white;
    }
  }
}
</style>
