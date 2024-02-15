<template>
  <div class="content">
    <div class="wel-img">
      <svg style="width: 128px">
        <!-- 'xlink：href执行用哪一个图标,属性值务必icon-图标名字·' -->
        <!-- use标签fi11属性可以设置图标的颜色 -->
        <use :xlink:href= iconName ></use>
      </svg>
    </div>
    <div class="slogan">
      <h1>{{ slogan1 }}</h1>
      <h1>{{ slogan2 }}</h1>
    </div>
    <router-link class="next-page" :to="nextPage" @click="skipAds">{{ nextText }}</router-link>
  </div>
</template>

<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router'
const skipAds =()=>{
  localStorage.setItem('skipAdsed','yes')
}
defineProps({
  iconName: {
    type: String
  },
  slogan1: String,
  slogan2: String,
  nextPage: {
    type: [String, Object] as unknown as () => RouteLocationRaw,
    default: '/'
  },
  nextText: {
    type: String,
    default: '下一页'
  }
})
</script>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 12px;
  width: 100%;
  // position: absolute;

  .wel-img {
    margin-top: 60px;
    flex-grow: 1;
  }
  .slogan {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
    font-size: 32px;
    font-weight: 350;
    color: #000000;
  }
  .next-page {
    flex-grow: 1;
    color: #6035bf;
    font-weight: 700;
    font-size: 32px;
  }
}
</style>
