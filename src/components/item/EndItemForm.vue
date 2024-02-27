<template>
  <div class="item-form">
    <span class="title">{{ props.title }}</span>
    <div class="date-wrapper" @click="showDatePicker">
      <span class="current-date">
        {{ endDate.join('-') }}
      </span>
    </div>
    <van-popup position="bottom" v-model:show="showPop" :style="{ height: '40%' }">
      <van-date-picker
        v-model="endDate"
        title="选择日期"
        @cancel="cancelDatePicker"
        @confirm="setDate"
      />
    </van-popup>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { Time } from '../../utils/time'

const props = defineProps({
  title: {
    type: String,
    require: true
  }
})
const emit = defineEmits(['sendEndTime'])
const now = new Date()
const endDate = ref(new Time(now).format().split('-'))
const showPop = ref(false)

onMounted(() => {
  emit('sendEndTime', endDate.value)
})
const showDatePicker = () => {
  showPop.value = true
}
const hideDatePicker = () => {
  emit('sendEndTime', endDate.value)

  showPop.value = false
}
const cancelDatePicker = () => {
  //点击取消更新为当天时间
  endDate.value = new Time(now).format().split('-')
  hideDatePicker()
}
const setDate = () => {
  emit('sendEndTime', endDate.value)
  hideDatePicker()
}
</script>

<style lang="less" scoped>
.item-form {
  display: flex;
  flex-direction: column;
  color: @item-form-title-color;
  .date-wrapper {
    height: 38px;
    width: 100%;
    border: 1px solid @item-form-date-border-color;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 8px;
    margin-top: 8px;

    .current-date {
      margin-left: 16px;
      color: @item-form-text-color;
    }
  }
}
</style>
