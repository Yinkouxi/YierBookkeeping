<template>
  <div class="start page">
    <!-- <h2>start page</h2> -->
    <div class="btn-wrapper">
      <Button class="btn" @click="btnClick">测试</Button>
    </div>
    <FloatButton></FloatButton>
  </div>
</template>

<script setup lang="ts">
import Button from '@/shared/Button.vue'
import FloatButton from '@/shared/FloatButton.vue'

const btnClick = ()=>{
  console.log('btn click')
}
</script>

<style lang="less" scoped>
.btn-wrapper {
  padding: 16px 16px;
  .btn {
    width: 100%;
  }
}
</style>
