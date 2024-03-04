<template>
  <div class="item-summary">
    <ul class="total" @click="statsClick">
      <li class="spendding">
        <span>支出</span>
        <span>{{ handleAmount(totalExpenses) }}</span>
      </li>
      <li class="income">
        <span>收入</span>
        <span>{{ handleAmount(totalIncome) }}</span>
      </li>
      <li class="net-income">
        <span>净收入</span>
        <span>{{ handleAmount(totalIncome - totalExpenses) }}</span>
      </li>
    </ul>
    <ol class="list">
      <li v-for="item in items" :key="item.id">
        <div class="sign">
          <span>{{ item.tags?.[0].sign }}</span>
        </div>
        <div class="text">
          <div class="tag-amount">
            <span class="tag">{{ item.tags?.[0].name }}</span>
            <span class="amount"
              >{{ item.kind === 'expenses' ? '-' : '' }}{{ handleAmount(item.amount) }}</span
            >
          </div>
          <div class="time">{{ convertISOtoNormalDate(item.happen_at) }}</div>
        </div>
      </li>
    </ol>
    <div class="loading" v-if="hasMore()">
      <button @click="fetchMore">点击加载更多</button>
    </div>
    <div v-else class="loading">
      <p>暂无更多数据</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType, onMounted, ref } from 'vue'
import yierRequest1 from '../../service'
import { Item } from '../../assets/type'
import { convertISOtoNormalDate } from '../../utils/time'
import { handleAmount } from '../../utils/handleAmount.ts'
import router from '../../router'
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

const items = ref<Item[]>([])
const page = ref(1)
let totalExpenses = ref<number>(0)
let totalIncome = ref<number>(0)
// 分页逻辑
const perPage = ref(25)
const itemCount = ref(0)

const statsClick = () => {
  console.log('jjj')
  router.push('/statistics')
  console.log('qqq')
}
onMounted(async () => {
  if (!props.startDate || !props.endDate) {
    return
  }
  await yierRequest1
    .get({
      url: '/api/v1/items',
      params: {
        page: page.value,
        happened_after: props.startDate,
        happened_before: props.endDate
      }
    })
    .then((res) => {
      items.value = res.resources
      itemCount.value = res.pager.count
      perPage.value = res.pager.per_page
      // items.value.push(res.resource)
    })
    .catch((err) => {
      console.log(err)
    })
})

const hasMore = () => {
  if (perPage.value * page.value < itemCount.value) {
    // 还有更多数据
    return true
  } else {
    return false
  }
}

const fetchMore = async () => {
  // 还有更多数据可以点击加载更多显示更多账单数据
  if (hasMore()) {
    console.log('加载更多ing')
    page.value += 1
    await yierRequest1
      .get({
        url: '/api/v1/items',
        params: {
          page: page.value,
          happened_after: props.startDate,
          happened_before: props.endDate
        }
      })
      .then((res) => {
        // 把加载出来的数据拼接在原有数据上
        // console.log(res.resources,'new res')
        items.value.push(...res.resources)
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    console.log('没有更多了')
  }
}

onMounted(() => {
  // 获取支出总额
  if (!props.startDate || !props.endDate) {
    return
  }
  yierRequest1
    .get({
      url: '/api/v1/items/summary',
      params: {
        happened_after: props.startDate,
        happened_before: props.endDate,
        kind: 'expenses',
        group_by: 'happened_at'
      }
    })
    .then((res) => {
      totalExpenses.value = res.total
    })

  yierRequest1
    .get({
      url: '/api/v1/items/summary',
      params: {
        happened_after: props.startDate,
        happened_before: props.endDate,
        kind: 'income',
        group_by: 'happened_at'
      }
    })
    .then((res) => {
      totalIncome.value = res.total
    })
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
      align-items: center;
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

        .tag-amount {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .tag {
            color: @item-list-tag-text-color;
          }
          .amount {
            color: @item-list-amount-text-color;
          }
        }
        .time {
          margin-top: 8px;
          color: @item-list-time-text-color;
        }
      }
    }
  }

  .loading {
    // margin-top: 30px;
    text-align: center;
    color: @item-list-loading-text-color;
    padding: 0 16px 16px 16px;

    button {
      width: 100%;
      height: 40px;
      background-color: @primary-color;
      border-radius: 16px;
      color: white;
    }
  }
}
</style>
