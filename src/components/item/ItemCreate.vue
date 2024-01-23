<template>
  <div class="item-create">
    <div class="main-wrapper">
      <Navbar class="nav">
        <template #icon>
          <svgIcon name="exit" color="white" width="26px" height="26px"></svgIcon>
        </template>
        <template #title>
          <span>记一笔</span>
        </template>
      </Navbar>

      <Tabs :selected="tabsKind" @update="updateSelected" class="tabs">
        <Tab title="支出">
          <div class="tag-list">
            <!-- 新增标签 -->
            <div class="tag-wrapper">
              <div class="tag-sign">
                <svgIcon name="addTag" width="20px" height="20px"></svgIcon>
              </div>
              <span class="tag-name">新增</span>
            </div>
            <!-- 标签列表 -->
            <div class="tag-wrapper" v-for="(tag, index) in spendingTags" :key="index">
              <div class="tag-sign">{{ tag.sign }}</div>
              <span class="tag-name">{{ tag.name }}</span>
            </div>
          </div>
        </Tab>
        <Tab title="收入">
          <div class="tag-list">
            <!-- 新增标签 -->
            <div class="tag-wrapper">
              <div class="tag-sign">
                <svgIcon name="addTag" width="20px" height="20px"></svgIcon>
              </div>
              <span class="tag-name">新增</span>
            </div>
            <!-- 标签列表 -->
            <div class="tag-wrapper" v-for="(tag, index) in incomeTags" :key="index">
              <div class="tag-sign">{{ tag.sign }}</div>
              <div class="tag-name">{{ tag.name }}</div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
    <div class="input-pad-wrapper">
      <InputPad />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import Tabs from '../../shared/Tabs.vue'
import Tab from '../../shared/Tab.vue'
import { ref } from 'vue'
import InputPad from '../../shared/InputPad.vue'

let tabsKind = ref('支出')
function updateSelected(tabTitle: string) {
  tabsKind.value = tabTitle
}

const spendingTags = ref([
  { id: 1, name: '餐费', sign: '￥', category: 'spending' },
  { id: 2, name: '打车', sign: '￥', category: 'spending' },
  { id: 3, name: '聚餐', sign: '￥', category: 'spending' },
  { id: 4, name: '住宿', sign: '￥', category: 'spending' },
  { id: 5, name: '水果', sign: '￥', category: 'spending' },
  { id: 6, name: '恋爱', sign: '￥', category: 'spending' },
  { id: 7, name: '其他', sign: '￥', category: 'spending' }
])

const incomeTags = ref([
  { id: 4, name: '工资', sign: '￥', category: 'income' },
  { id: 5, name: '彩票', sign: '￥', category: 'income' },
  { id: 6, name: '滴滴', sign: '￥', category: 'income' },
  { id: 11, name: '彩票', sign: '￥', category: 'income' },
  { id: 18, name: '滴滴', sign: '￥', category: 'income' },
  { id: 17, name: '彩票', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 4, name: '工资', sign: '￥', category: 'income' },
  { id: 5, name: '彩票', sign: '￥', category: 'income' },
  { id: 6, name: '滴滴', sign: '￥', category: 'income' },
  { id: 11, name: '彩票', sign: '￥', category: 'income' },
  { id: 18, name: '滴滴', sign: '￥', category: 'income' },
  { id: 17, name: '彩票', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 4, name: '工资', sign: '￥', category: 'income' },
  { id: 5, name: '彩票', sign: '￥', category: 'income' },
  { id: 6, name: '滴滴', sign: '￥', category: 'income' },
  { id: 11, name: '彩票', sign: '￥', category: 'income' },
  { id: 18, name: '滴滴', sign: '￥', category: 'income' },
  { id: 17, name: '彩票', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 4, name: '工资', sign: '￥', category: 'income' },
  { id: 5, name: '彩票', sign: '￥', category: 'income' },
  { id: 6, name: '滴滴', sign: '￥', category: 'income' },
  { id: 11, name: '彩票', sign: '￥', category: 'income' },
  { id: 18, name: '滴滴', sign: '￥', category: 'income' },
  { id: 17, name: '彩票', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 4, name: '工资', sign: '￥', category: 'income' },
  { id: 5, name: '彩票', sign: '￥', category: 'income' },
  { id: 6, name: '滴滴', sign: '￥', category: 'income' },
  { id: 11, name: '彩票', sign: '￥', category: 'income' },
  { id: 18, name: '滴滴', sign: '￥', category: 'income' },
  { id: 17, name: '彩票', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' },
  { id: 19, name: '滴滴', sign: '￥', category: 'income' }
])
</script>

<style lang="less" scoped>
.item-create {

  .tabs {
    flex-grow: 1;
    flex-shrink: 1;
    overflow: scroll;
    height: calc(100vh - 80px);
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
  .tag-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 16px;
    overflow: scroll;

    .tag-wrapper {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 20vw;
      height: calc(20vw * 1.14);

      .tag-sign {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12vw;
        height: 12vw;
        background-color: @tag-bg-color;
        border: 1px solid @tag-border-color;
        border-radius: 50%;
      }
      .tag-name {
        font-size: 12px;
        margin-top: 4px;
        color: @tag-name-color;
      }
    }
  }
  .input-pad-wrapper {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>
