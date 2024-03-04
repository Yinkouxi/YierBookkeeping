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
    <PieChart :data="betterData2" />
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
import { Time } from '../../utils/time'

const DAY = 24 * 60 * 60 * 1000
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
  kind.value = selKind
}

// 折线图
type Data1Item = { happened_at: string; amount: number }
type Data1 = Data1Item[]
const data1 = ref<Data1>([])
const betterData1 = computed<[string, number][]>(() => {
  if (!props.startDate || !props.endDate) {
    return []
  }
  const array = []
  // 利用时间戳计算start-end 天数
  const diff = new Date(props.endDate).getTime() - new Date(props.startDate).getTime()
  const days = diff / DAY + 1
  let data1Index = 0
  // 对没有记账的日期进行补零
  for (let i = 0; i < days; i++) {
    const time = new Time(props.startDate).add(i, 'day').format()
    if (
      data1.value[data1Index] &&
      new Time(data1.value[data1Index].happened_at).format() === time
    ) {
      array.push([time, data1.value[data1Index].amount])
      data1Index += 1
    } else {
      array.push([time, 0])
    }
  }
  return array as [string, number][]
})


const fetchData1 = async () => {
  await yierRequest1
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
    })
}
onMounted(fetchData1)
watch(kind, fetchData1)

// 饼图
type Data2Item = { tag_id: number; tag: Tag; amount: number }
type Data2 = Data2Item[]
const data2 = ref<Data2>([])
const betterData2 = computed<{ name: string; value: number }[]>(() =>
  data2.value.map((item) => ({
    name: item.tag.name,
    value: item.amount
  }))
)

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
watch(kind, fetchData2)
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
