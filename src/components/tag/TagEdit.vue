<template>
  <div class="tag-edit">
    <Navbar class="navbar">
      <template #icon>
        <svgIcon name="exit" color="white" width="26px" height="26px" @click="exit"></svgIcon>
      </template>
      <template #title>
        <span>编辑标签</span>
      </template>
    </Navbar>

    <TagForm :id="tagId"/>
    <div class="removes">
      <Button class="remove-tags" level="danger">删除标签</Button>
      <Button class="remove-tags-items" level="danger">删除标签和记账</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import TagForm from './TagForm.vue'
import Button from '../../shared/Button.vue'
import { useRoute } from 'vue-router';
import router from '../../router';

const route = useRoute()
const exit = () => {
  const { return_to } = route.query
  if (return_to) {
    router.push(return_to.toString())
  } else {
    router.back()
  }
}
const tagId = parseInt(route.params.id.toString())
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
