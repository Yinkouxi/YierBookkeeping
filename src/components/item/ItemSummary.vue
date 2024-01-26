<template>
  <div class="item-summary">
    <ul class="total">
      <li class="spendding">
        <span>支出</span>
        <span>456</span>
      </li>
      <li class="income">
        <span>收入</span>
        <span>1000</span>
      </li>
      <li class="net-income">
        <span>净收入</span>
        <span>-544</span>
      </li>
    </ul>
    <ol class="list">
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      <li>
        <div class="sign">
          <span>😎</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">旅行</span>
            <span class="amount">￥1234</span>
          </div>
          <div class="time">2004-02-03 12:00</div>
        </div>
      </li>
      
    </ol>
    <div class="loading">
      <p>向下滑动加载更多</p>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'

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

</script>

<style lang="less" scoped>
.item-summary {
  .total {
    display: flex;
    justify-content: space-around;
    background-color: @item-total-bg-color;
    margin: 16px;
    border-radius: 8px;
    height: 65px;
    align-items: center;

    li {
      display: flex;
      flex-direction: column;
      margin-top: 5px;
    }
    .income {
      color: @item-total-income-text-color;
    }
    .spendding {
      color: @item-total-spendding-text-color;
    }
    .net-income {
      color: @item-total-net-income-text-color;
    }
  }

  .list {
    display: flex;
    flex-direction: column;
    margin: 16px;
    li {
      display: flex;
      flex-direction: row;
      margin-top: 16px;
      padding-bottom: 6px;
      border-bottom: 1px solid @item-list-boder-color;
      .sign {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: @item-sign-bg-color;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
      }
      .text {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        flex-grow: 1;
        margin-left: 16px;

        .tag-amount{
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .tag{
            color: @item-list-tag-text-color;
          }
          .amount{
            color: @item-list-amount-text-color;
          }
        }
        .time{
          margin-top: 8px;
          color: @item-list-time-text-color;
        }
      }

    }
  }

  .loading{
    margin-top: 30px;
    text-align: center;
    color: @item-list-loading-text-color;
  }
}
</style>
