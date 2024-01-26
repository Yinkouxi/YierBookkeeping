<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';


defineProps({
  title:{
    type:String
  },
  test:{
    type:Function as PropType<(name: string) => void>,
      required: false,
  }
})

</script>

<style lang="less" scoped>

</style>
