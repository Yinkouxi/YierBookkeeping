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
    <!-- <Tabs :selected="tabsKind" @update="updateSelected" class="tabs" @click="showOverlay"> -->
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
      <tab title="自定义时间">
        <ItemSummary :start-date="customTime.start" :end-date="customTime.end" />
      </tab>
    </Tabs>
    <van-overlay :show="overlayVisible" class="v-overlay" @click.stop="hiddenOverlay">
      <div class="content" @click="protectContent">
        <header>请选择时间</header>
        <main>
          <form v-on:submit="customSubmit">
            <div>
              <ItemForm title="开始时间" class="item-form"></ItemForm>
              <ItemForm title="结束时间" class="item-form"></ItemForm>
            </div>
            <div class="btns">
              <button @click="hiddenOverlay">取消</button>
              <button @click="hiddenOverlay" type="submit">确认</button>
            </div>
          </form>
        </main>
      </div>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import Tabs from '../../shared/Tabs.vue'
import Tab from '../../shared/Tab.vue'
import ItemSummary from './ItemSummary.vue'
import ItemForm from './ItemForm.vue'
import { reactive, ref } from 'vue'
import { Time } from '../../utils/time'

// Tabs切换绑定
let tabsKind = ref('本月')
function updateSelected(tabTitle: string) {
  tabsKind.value = tabTitle
  showOverlay()
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

const overlayVisible = ref(false)
function showOverlay() {
  // 如果是自定义时间tab
  if (tabsKind.value === '自定义时间') {
    overlayVisible.value = true
    console.log(tabsKind.value)
  }
}
const hiddenOverlay = () => {
  overlayVisible.value = false
}

const protectContent = (e: Event) => {
  e.stopPropagation()
}
const customSubmit = (e: Event) => {
  e.preventDefault()
}
</script>

<style lang="less" scoped>
.itemlist {
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

  .v-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    .content {
      width: 80vw;
      background-color: @custom-time-content-bg-color;
      display: flex;
      flex-direction: column;
      border-radius: 16px;

      header {
        width: 100%;
        background-color: @custom-time-title-bg-color;
        padding: 12px 16px;
        color: #fff;
      }
      main {
        padding: 12px 16px;

        .item-form {
          margin-top: 16px;
        }
        .btns {
          display: flex;
          justify-content: flex-end;
          margin-top: 16px;

          :nth-child(1) {
            margin-right: 32px;
          }
        }
      }
    }
  }
}
</style>
