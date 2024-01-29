<template>
  <div class="Bars">
    <div v-for="(item,index) in betterData3" :key="index" class="item">
      <div class="sign">
        <span>{{ item.tag.sign }}</span>
      </div>
      <div class="info">
        <div class="name-amount">
          <span>{{ item.tag.name }} - {{ item.percent }}</span>
          <span>{{'￥'+item.amount }}</span>
        </div>
        <div class="progress-wrapper">
          <div class="progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'

const data3 = reactive([
  { tag: { id: 1, name: '房租', sign: '😪' }, amount: 3000 },
  { tag: { id: 2, name: '吃饭', sign: '😪' }, amount: 1000 },
  { tag: { id: 3, name: '娱乐', sign: '😪' }, amount: 900 }
])
const betterData3 = computed(() => {
  const total = data3.reduce((sum, item) => sum + item.amount, 0)
  return data3.map((item) => ({
    ...item,
    percent: Math.round((item.amount / total) * 100) + '%'
  }))
})
</script>

<style lang="less" scoped>
.Bars {
  color: @bars-item-text-color;
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 16px;
  .item{
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
    align-items: center;
    .sign{
      width: 58px;
      height: 48px;
      border-radius: 50%;
      font-size: 24px;
      background-color: @item-sign-bg-color;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-grow: 1;
    }
    .info{
      display: flex;
      flex-direction: column;
      margin-left: 16px;
      width: 100%;
      .name-amount{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }
      .progress-wrapper{
        width: 100;
        height: 5px;
        border-radius: 5px;
        background-color: @bars-item-progress-bg-color;
        margin-top: 8px;
        .progress{
        width: 40%;
        background-color: @bars-item-progress-color;
        height: 5px;
        border-radius: 5px;
      }
      }
    }
  }
}
</style>
