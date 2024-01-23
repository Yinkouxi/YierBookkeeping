<template>
  <div class="tag-create">
    <Navbar class="navbar">
      <template #icon>
        <svgIcon name="exit" color="white" width="26px" height="26px"></svgIcon>
      </template>
      <template #title>
        <span>新建标签</span>
      </template>
    </Navbar>
    <TagForm/>
  </div>
</template>

<script setup lang="ts">
import TagForm from './TagForm.vue'
import Navbar from '@/shared/Navbar.vue'


</script>

<style lang="less" scoped>
.tag-create {
  position: relative;
  .navbar{
    position: sticky;
    top: 0;
  }
}
</style>
