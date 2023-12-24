<template>
  <div class="tabs">
    <div class="nav">
      <li
        v-for="(tabTitle, index) in tabTitles"
        :key="index"
        :class="selected === tabTitle ? 'selected' : ''"
        @click="$emit('update', tabTitle)"
      >
        {{ tabTitle }}
      </li>
    </div>
    <!-- 全部展示 -->
    <!-- <component v-for="(tabInfo, index) in defaults" :key="index" :is="tabInfo"> </component> -->
    <!-- 只展示被选中页面 -->
    <component :is="current" :key="current"> </component>
  </div>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue'
import Tab from './Tab.vue'

defineEmits(['update'])

const props = defineProps({
  selected: {
    type: String
  }
})

const slots = useSlots()

const defaults = slots.default?.()
if (defaults)
  defaults.forEach((tag) => {
    if (tag.type !== Tab) {
      throw new Error('<Tabs> 子标签必须为 <tab>')
    }
  })

const tabTitles = defaults?.map((tag) => {
  return tag.props?.title
})

// 使用计算属性，切换tab重新渲染画面
const current = computed(() => {
  return defaults?.find((tag) => tag.props?.title === props.selected)
})
// console.log(current)
</script>

<style lang="less" scoped>
.tabs {
  display: flex;
  flex-direction: column;
  .nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    background-color: @tabs-bg-color;
    color: @navbar-color;
    li{
      flex-grow: 1;
      flex-shrink: 0;
      padding: 12px 0;
    }

    .selected {
      position: relative;
      &::after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: @tabs-indicator-bg;
      }
    }
  }
}
</style>
