<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

defineProps({
  title:{
    type:String
  }
})

</script>

<style lang="less" scoped>

</style>
