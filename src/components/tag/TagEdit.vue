<template>
  <div class="tag-edit">
    <Navbar class="navbar">
      <template #icon>
        <svgIcon name="exit" color="white" width="26px" height="26px"></svgIcon>
      </template>
      <template #title>
        <span>标签详情</span>
      </template>
    </Navbar>

    <TagForm />
    <div class="removes">
      <Button class="remove-tags">删除标签</Button>
      <Button class="remove-tags-items">删除标签和记账</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import TagForm from './TagForm.vue'
import Button from '../../shared/Button.vue'
</script>

<style lang="less" scoped>
.tag-edit {
  position: relative;
  .navbar{
    position: sticky;
    top: 0;
  }
  .removes {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    .remove-tags,
    .remove-tags-items {
      width: 50vw-6px;
    }
  }
}
</style>
