<template>
  <div class="tag-wrapper">
    <div class="tag-sign">
      <svgIcon name="addTag" width="20px" height="20px"></svgIcon>
    </div>
    <span class="tag-name">新增</span>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.tag-wrapper {
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 20vw;
  height: calc(20vw * 1.14);

  .tag-sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12vw;
    height: 12vw;
    background-color: @tag-bg-color;
    border: 1px solid @tag-border-color;
    border-radius: 50%;
  }
  .selected {
    background-color: @tag-selected-bg-color;
  }
  .tag-name {
    font-size: 12px;
    margin-top: 4px;
    color: @tag-name-color;
  }
}
</style>
