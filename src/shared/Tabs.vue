<template>
  <div>
    <div
      v-for="(tabTitle, index) in tabTitles"
      :key="index"
      :class="selected === tabTitle ? 'selected' : ''"
      @click="$emit('update', tabTitle)"
    >
      {{ tabTitle }}
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
.selected {
  color: white;
  background-color: rgb(118, 35, 35);
}
</style>
