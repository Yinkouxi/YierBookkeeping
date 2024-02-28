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

    <TagForm :id="tagId" />
    <div class="removes">
      <Button class="remove-tags" level="danger" @click="deleteTag(tagId)">删除标签</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import TagForm from './TagForm.vue'
import Button from '../../shared/Button.vue'
import { useRoute } from 'vue-router'
import router from '../../router'
import yierRequest1 from '../../service'

const route = useRoute()
const { return_to } = route.query
const exit = () => {

  if (return_to) {
    router.push(return_to.toString())
  } else {
    router.back()
  }
}
const tagId = parseInt(route.params.id.toString())

const deleteTag = async(tagId:number)=>{
  await yierRequest1.delete({
    url:`/api/v1/tags/${tagId}`
  }).then((res)=>{
    console.log(res)
    router.back()
  }).catch(err=>{
    console.log(err)
  })
}

</script>

<style lang="less" scoped>
.tag-edit {
  position: relative;
  .navbar {
    position: sticky;
    top: 0;
  }
  // .removes {
  //   display: flex;
  //   justify-content: space-between;
  //   padding: 0 16px;
  // .remove-tags,
  // .remove-tags-items {
  //   width: 50vw-6px;
  // }
  // }
  .removes{
    padding: 0 16px 0 16px;

    .remove-tags {
      width: 100%;
  } 
  }
}
</style>
