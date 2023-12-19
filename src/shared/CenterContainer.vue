<template>
  <div class="center">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from 'vue'

const directionMap = {
  '-': 'horizontal',
  '|': 'vertical',
  'horizontal': 'horizontal',
  'vertical': 'vertical'
}
defineProps({
  direction: {
    type: String as PropType<'-' | '|' | 'horizontal' | 'vertical'>,
    default: 'horizontal'
  }
})
</script>

<style lang="less" scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  &:horizontal {
    flex-direction: row;
  }
  &:vertical {
    flex-direction: column;
  }
}
</style>
