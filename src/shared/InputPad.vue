<template>
  <div class="input-pad">
    <div class="date-amount">
      <div class="date">
        <svgIcon name="date" color="#5c33be" width="26px" height="26px"></svgIcon>
        <span>
          <span @click="showDatePicker">{{ currentDate.join('-') }}</span>
          <van-popup position="bottom" v-model:show="showPop" :style="{ height: '40%' }">
            <van-date-picker
              v-model="currentDate"
              title="选择日期"
              @cancel="cancelDatePicker"
              @confirm="setDate"
            />
          </van-popup>
        </span>
      </div>
      <span class="amount">{{ amount }}</span>
    </div>
    <div class="key-board">
      <button v-for="(btn, id) in buttons" @click="buttons[id].onclick">{{ btn.text }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { time } from '../shared/time'

const amount = ref('00000')
const now = new Date()
const currentDate = ref(time(now).format().split('-'))
const showPop = ref(false)

const showDatePicker = () => {
  showPop.value = true
}
const hideDatePicker = () => {
  showPop.value = false
}
const cancelDatePicker = () => {
  //点击取消更新为当天时间  
  currentDate.value=time(now).format().split('-')
  hideDatePicker()
}
const setDate = (datePic: any) => {
  currentDate.value = datePic.selectedValues
  hideDatePicker()
}

const buttons = [
  {
    text: '1',
    onclick: () => {
      console.log('1')
    }
  },
  {
    text: '2',
    onclick: () => {
      console.log(2)
    }
  },
  { text: '3', onclick: () => {} },
  { text: '4', onclick: () => {} },
  { text: '5', onclick: () => {} },
  { text: '6', onclick: () => {} },
  { text: '7', onclick: () => {} },
  { text: '8', onclick: () => {} },
  { text: '9', onclick: () => {} },
  { text: '.', onclick: () => {} },
  { text: '0', onclick: () => {} },
  { text: '清空', onclick: () => {} },
  { text: '提交', onclick: () => {} }
]
</script>

<style lang="less" scoped>
.input-pad {
  color: blueviolet;
  .date-amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    font-family: monospace;
    .date {
      display: flex;
      justify-content: start;
      align-items: center;
      color: @date-text-color;
      span {
        margin-left: 8px;
        font-size: 12px;
      }
    }
    .amount {
      color: @amount-text-color;
      font-size: 20px;
    }
  }
}
.key-board {
  display: grid;
  grid-template-areas:
    'n1 n2 n3 d'
    'n4 n5 n6 d'
    'n7 n8 n9 s'
    'n0 n0 nd s';
  grid-auto-rows: 48px;
  grid-auto-columns: 1fr;
  row-gap: 1px;
  column-gap: 1px;
  flex-wrap: wrap;
  background: @button-border-color;
  border-top: 1px solid @button-border-color;

  button {
    border: none;
    background: @input-button-bg;
    &:nth-child(1) {
      grid-area: n1;
    }
    &:nth-child(2) {
      grid-area: n2;
    }
    &:nth-child(3) {
      grid-area: n3;
    }
    &:nth-child(4) {
      grid-area: n4;
    }
    &:nth-child(5) {
      grid-area: n5;
    }
    &:nth-child(6) {
      grid-area: n6;
    }
    &:nth-child(7) {
      grid-area: n7;
    }
    &:nth-child(8) {
      grid-area: n8;
    }
    &:nth-child(9) {
      grid-area: n9;
    }
    &:nth-child(10) {
      grid-area: nd;
    }
    &:nth-child(11) {
      grid-area: n0;
    }
    &:nth-child(12) {
      grid-area: d;
    }
    &:nth-child(13) {
      grid-area: s;
      background: @button-bg-important;
      color: @button-text-important;
    }
  }
}
</style>
