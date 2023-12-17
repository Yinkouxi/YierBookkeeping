<template>
  <div>
    <welcome-layout
      :iconName="iconName"
      :slogan1="welcomeOneSlogan1"
      :slogan2="welcomeOneSlogan2"
      :nextPage="nextPage"
      :nextText="nextText"
    />
  </div>
</template>

<script setup lang="ts">
import WelcomeLayout from './WelcomeLayout.vue'
const iconName = '#icon-cloud'
const welcomeOneSlogan1 = '云备份'
const welcomeOneSlogan2 = '再也不怕数据丢失'
const nextPage = '/start'
const nextText = '完成'
</script>

<style lang="less" scoped></style>
