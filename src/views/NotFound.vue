<template>
  <div class="notfound">
    <h2>您访问的页面不存在，请检查路径后重试</h2>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
.notfound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: 'Arial', sans-serif;
  text-align: center;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  padding: 20px;
  color: purple;
  border: 2px solid purple;
  border-radius: 8px;
}

@media (max-width: 480px) {
  h2 {
    font-size: 20px;
    padding: 15px;
    border-radius: 6px;
  }
}
</style>
