<template>
  <div>
    <welcome-layout
      :welImg="welcomeImg"
      :slogan1="welcomeOneSlogan1"
      :slogan2="welcomeOneSlogan2"
      :nextPage="nextPage"
    />
  </div>
</template>

<script setup lang="ts">
import WelcomeLayout from './WelcomeLayout.vue'
import welcomeImg from '@/assets/img/welcome/cloud.svg'
const welcomeOneSlogan1 = '云备份'
const welcomeOneSlogan2 = '再也不怕数据丢失'
const nextPage = '/start'
</script>

<style lang="less" scoped></style>
