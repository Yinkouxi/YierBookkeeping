<template>
  <div class="item-create">
    <Navbar>
      <template #icon>
        <svgIcon name="exit" color="white" width="26px" height="26px"></svgIcon>
      </template>
      <template #title>
        <span>记一笔</span>
      </template>
    </Navbar>

    <Tabs :selected= tabsKind @update="updateSelected" >
      <Tab title="支出"> icon-支出 </Tab>
      <Tab title="收入"> icon-收入 </Tab>
    </Tabs>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/shared/Navbar.vue'
import Tabs from '../../shared/Tabs.vue'
import Tab from '../../shared/Tab.vue'
import { ref } from 'vue'

let tabsKind = ref('支出')
function updateSelected(tabTitle:string){
  tabsKind.value=tabTitle
}
// console.log(tabsKind)

</script>

<style lang="less" scoped>
.item-create {
  color: blueviolet;
}
</style>
