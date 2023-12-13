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
import welcomeImg from '@/assets/img/welcome/chart.svg'
const welcomeOneSlogan1 = '数据可视化'
const welcomeOneSlogan2 = '收支一目了然'
const nextPage = '/welcome/four'
</script>

<style lang="less" scoped></style>
