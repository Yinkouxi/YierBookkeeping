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
            <div
              class="tag-wrapper"
              v-for="(tag, index) in spendingTags"
              :key="index"
              @click="tagSelected(tag.id, tag.kind)"
            >
              <div class="tag-sign" :class="selectedTagId === tag.id ? 'selected' : ''">
                {{ tag.sign }}
              </div>
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
            <div
              class="tag-wrapper"
              v-for="(tag, index) in incomeTags"
              :key="index"
              @click="tagSelected(tag.id, tag.kind)"
            >
              <div class="tag-sign" :class="selectedTagId === tag.id ? 'selected' : ''">
                {{ tag.sign }}
              </div>
              <div class="tag-name">{{ tag.name }}</div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
    <div class="input-pad-wrapper">
      <InputPad @sendTimeAndAmount="getTimeAndAmount" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import Tabs from '../../shared/Tabs.vue'
import Tab from '../../shared/Tab.vue'
import { onMounted, reactive, ref } from 'vue'
import InputPad from '../../shared/InputPad.vue'
import yierRequest1 from '../../service'
import { Tag, Resources } from '../../assets/type/index.ts'
import { useRouter } from 'vue-router'
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
      // headers: {
      //   Authorization: 'Bearer' + ' ' + localStorage.getItem('jwt')
      // }
    })
    .then(
      (res) => {
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
      // headers: {
      //   Authorization: 'Bearer' + ' ' + localStorage.getItem('jwt')
      // }
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

type accountingData = {
  kind: 'expenses' | 'inocme' | string
  tag_ids: number[]
  amount: number
  happen_at: string
}

const accountingData = reactive<accountingData>({
  kind: 'expenses',
  amount: 0,
  happen_at: '',
  tag_ids: []
})
const selectedTagId = ref<number>()
const tagSelected = (id: number, kind: string) => {
  selectedTagId.value = id
  accountingData.tag_ids[0] = id
  accountingData.kind = kind
}

const router = useRouter()
async function getTimeAndAmount(currentDate: string, amount: number) {
  accountingData.amount = amount
  accountingData.happen_at = currentDate

  console.log(accountingData, 'zheline')
  await yierRequest1
    .post({
      url: '/api/v1/items',
      data: {
        kind: accountingData.kind,
        amount: accountingData.amount,
        happen_at: accountingData.happen_at,
        tag_ids: accountingData.tag_ids
      },
    })
    .then(() => {
      router.push('/items')
    })
    .catch((err) => {
      console.log('create err', err)
    })
}
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
      .selected {
        background-color: @tag-selected-bg-color;
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
