<template>
  <div class="charts">
    <div class="radio-container">
      <label
        class="radio-label"
        @click="taggleClass('收入')"
        :class="categary === '收入' ? 'checked' : ''"
      >
        <input
          type="radio"
          name="transaction-type"
          value="income"
          v-model="categary"
          class="visually-hidden"
        />
        收入
      </label>
      <label
        class="radio-label"
        @click="taggleClass('支出')"
        :class="categary === '支出' ? 'checked' : ''"
      >
        <input
          type="radio"
          name="transaction-type"
          value="expense"
          v-model="categary"
          class="visually-hidden"
        />
        支出
      </label>
    </div>
    <line-chart />
    <PieChart />
    <Bars />
  </div>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue'
import LineChart from './LineChart.vue'
import PieChart from './PieChart.vue'
import Bars from './Bars.vue'

defineProps({
  startDate: {
    type: String as PropType<string>,
    require: true
  },
  endDate: {
    type: String as PropType<string>,
    require: true
  }
})

const categary = ref('收入')
function taggleClass(selCategary: string) {
  categary.value = selCategary
  console.log('test')
  console.log(categary.value)
}
</script>

<style lang="less" scoped>
.charts {
  color: blueviolet;
  .visually-hidden {
    position: absolute;
    opacity: 0;
  }

  .radio-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 60px;
    font-size: 20px;
    background-color: @select-bg-color;
    border-radius: 18px;
    color: black;
    margin: 16px 16px 0 16px;

    .radio-label {
      height: 80%;
      width: 40%;
      border-radius: 18px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .checked {
    background-color: @select-item-bg-color;
    border: 1px solid @select-item-border-color;
    color: @select-item-text-color;
  }
}
</style>
