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
import { onMounted, ref } from 'vue'
import InputPad from '../../shared/InputPad.vue'
import yierRequest1 from '../../service'
import { Tag, Resources } from '../../assets/type/index.ts'
let tabsKind = ref('支出')
function updateSelected(tabTitle: string) {
  tabsKind.value = tabTitle
}

const spendingTags = ref<Tag[]>([])
const incomeTags = ref<Tag[]>([])
onMounted(async () => {
  await yierRequest1
    .get<Resources<Tag>>({
      url: '/api/v1/tags',
      params: {
        kind: 'expenses'
      },
      headers: {
        Authorization: 'Bearer' + ' ' + localStorage.getItem('jwt')
      }
    })
    .then(
      (res) => {
        console.log(res, 'res')
        spendingTags.value = res.resources
      },
      (err) => {
        console.log('tag list err', err)
      }
    )

  await yierRequest1
    .get<{ resources: Tag[] }>({
      url: '/api/v1/tags',
      params: {
        kind: 'income'
      },
      headers: {
        Authorization: 'Bearer' + ' ' + localStorage.getItem('jwt')
      }
    })
    .then(
      (res) => {
        incomeTags.value = res.resources
      },
      (err) => {
        console.log('tag list err', err)
      }
    )
})
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
