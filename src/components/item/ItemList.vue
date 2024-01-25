<template>
  <div class="itemlist">
    <Navbar>
      <template #icon>
        <svgIcon name="menu" color="white" width="26px" height="26px"></svgIcon>
      </template>
      <template #title>
        <span>山竹记账</span>
      </template>
    </Navbar>
    <Tabs :selected="tabsKind" @update="updateSelected" class="tabs">
      <Tab title="本月" class="tab">
        <ItemSummary
          :start-date="timeList[0].start.format()"
          :end-date="timeList[0].end.format()"
        />
      </Tab>
      <Tab title="上月">
        <ItemSummary
          :start-date="timeList[1].start.format()"
          :end-date="timeList[1].end.format()"
        />
      </Tab>
      <Tab title="今年">
        <ItemSummary
          :start-date="timeList[2].start.format()"
          :end-date="timeList[2].end.format()"
        />
      </Tab>
      <Tab title="自定义时间">
        <ItemSummary 
          :start-date="customTime.start"
          :end-date="customTime.end"
        />
      </Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import Tabs from '../../shared/Tabs.vue'
import Tab from '../../shared/Tab.vue'
import ItemSummary from './ItemSummary.vue'
import { reactive, ref } from 'vue'
import { Time } from '../../utils/time'

// Tabs切换绑定
let tabsKind = ref('本月')
function updateSelected(tabTitle: string) {
  tabsKind.value = tabTitle
}

const time = new Time()
const timeList = [
  { start: time.firstDayofMonth(), end: time.lastDayOfMonth() },
  { start: time.add(-1, 'month').firstDayofMonth(), end: time.add(-1, 'month').lastDayOfMonth() },
  { start: time.firstDayOfYear(), end: time.lastDayOfYear() }
]

const customTime = reactive({
  start: new Time().format(),
  end: new Time().format()
})

console.log('time--',timeList)
console.log('custom--',customTime)
</script>

<style lang="less" scoped>
.itemlist {
  color: blueviolet;

  .tabs {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: scroll;
    height: calc(100vh - 80px);
    .tab {
      display: flex;
      flex-direction: column;
    }
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
}
</style>
