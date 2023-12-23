<template>
  <div class="main-layout">
    <Navbar>
      <slot name="title"></slot>
      <slot name="icon"></slot>
    </Navbar>
    <slot></slot>
  </div> 
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'


</script>

<style lang="less" scoped>
.main-layout {
  color: blueviolet;
}
</style>
