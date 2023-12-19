<template>
  <div class="float-button">
    <svg-icon name="add" color="white" width="24px" height="24px"></svg-icon>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.float-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: @float-button-bg;
  color: rgb(146, 79, 79);
}
</style>
