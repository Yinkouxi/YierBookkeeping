<template>
  <div class="navbar">
    <div class="icon-wrapper">
      <slot name="icon"></slot>
    </div>
    <div class="title-wrapper">
      <slot name="title"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.navbar {
  // 背景渐变
  background-image: linear-gradient(to bottom, @navbar-bg-start 0%, @navbar-bg-end 100%);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 40px 16px 12px;
  color: @navbar-text-color;
  font-weight: 350;

  .title-wrapper {
    font-size: 24px;
    margin-left: 12px;
  }
  .icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
