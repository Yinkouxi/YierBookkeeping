<template>
  <div class="input-pad">
    <!-- <h2>input-pad</h2> -->
    <div class="data-amount">
      <div class="data">
        <svgIcon name="data" color="#5c33be" width="26px" height="26px"></svgIcon>
        <span>2023-12-26</span>
      </div>
      <span class="amount">{{ amount }}</span>
    </div>
    <div class="key-board">
      <button v-for="btn in buttons">{{ btn.text }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const amount = ref('0')
const buttons = [
  {
    text: '1',
    onclick: () => {
      console.log('1')
    }
  },
  { text: '2', onclick: () => {} },
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
  .data-amount {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 16px;
    .data {
      display: flex;
      justify-content: start;
      align-items: center;
      span {
        margin-left: 8px;
        font-size: 12px;
        // height: 20px;
        // line-height: 20px;
        
      }
    }
    .amount {
      color: @amount-text-color;
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
  // gap: 0px;
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
