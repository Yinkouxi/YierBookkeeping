<template>
  <button class="button">
    <slot />
  </button>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.button {
  border: 1px solid @button-bg;
  padding: 8px 16px;
  background-color: @button-bg;
  color: @button-text;
  font-size: @button-font-szie;
  border-radius: @button-radius;
  height: @button-height;
  &:hover {
    border-color: red;
  }
}
</style>
