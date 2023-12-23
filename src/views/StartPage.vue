<template>
  <div class="start-page">
    <Navbar>
      <template #icon>
        <svgIcon name="menu" color="white" width="26px" height="26px" @click="onClickMenu()"></svgIcon>
      </template>
      <template #title>
        <span>山竹记账</span>
      </template>
    </Navbar>
    <CenterContainer class="pig-wrapper">
      <svg-icon name="pig" width="128px" height="130px"></svg-icon>
    </CenterContainer>
    <div class="btn-wrapper">
      <router-link to="/items/create">
        <Button class="btn">开始记账</Button>
      </router-link>
    </div>
    <router-link to="/items/create">
      <FloatButton></FloatButton>
    </router-link>
    <Overlay v-show="overlayVisible" @close-overlay="closeOverlay"></Overlay>
  </div>
</template>

<script setup lang="ts">
import Button from '@/shared/Button.vue'
import FloatButton from '@/shared/FloatButton.vue'
import CenterContainer from '@/shared/CenterContainer.vue'
import Navbar from '@/shared/Navbar.vue'
import Overlay from '@/shared/Overlay.vue'
import { ref } from 'vue'

const overlayVisible = ref(false)

const onClickMenu = () => {
  overlayVisible.value = !overlayVisible.value
}

const closeOverlay = () => {
  overlayVisible.value = false
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
