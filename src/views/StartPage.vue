<template>
  <div class="start-page">
    <CenterContainer class="pig-wrapper">
      <svg-icon name="pig" width="128px" height="130px"></svg-icon>
    </CenterContainer>
    <div class="btn-wrapper">
      <Button class="btn" @click="btnClick">测试</Button>
    </div>
    <FloatButton></FloatButton>
  </div>
</template>

<script setup lang="ts">
import Button from '@/shared/Button.vue'
import FloatButton from '@/shared/FloatButton.vue'
import CenterContainer from '@/shared/CenterContainer.vue'

const btnClick = () => {
  console.log('btn click')
}
</script>

<style lang="less" scoped>
.start-page {
  .btn-wrapper {
    padding: 16px 16px;
    .btn {
      width: 100%;
    }
  }

  .pig-wrapper {
    padding: 160px 0;
  }
}
</style>
