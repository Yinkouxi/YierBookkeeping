<template>
  <div class="tag-create">
    <Navbar class="navbar">
      <template #icon>
        <svgIcon name="exit" color="white" width="26px" height="26px" @click="exit"></svgIcon>
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
