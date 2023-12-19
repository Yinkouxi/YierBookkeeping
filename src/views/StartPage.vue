<template>
  <div class="start-page">
    <Navbar>
      <template #icon>
        <svgIcon name="menu" color="white" width="26px" height="26px"></svgIcon>
      </template>
      <template #title>
        <span>山竹记账</span>
      </template>
    </Navbar>
    <CenterContainer class="pig-wrapper">
      <svg-icon name="pig" width="128px" height="130px"></svg-icon>
    </CenterContainer>
    <div class="btn-wrapper">
      <Button class="btn" @click="btnClick">开始记账</Button>
    </div>
    <FloatButton></FloatButton>
  </div>
</template>

<script setup lang="ts">
import Button from '@/shared/Button.vue'
import FloatButton from '@/shared/FloatButton.vue'
import CenterContainer from '@/shared/CenterContainer.vue'
import Navbar from '@/shared/Navbar.vue'

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
    padding: 120px 0;
  }
}
</style>
