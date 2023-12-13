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
import welcomeImg from '@/assets/img/welcome/clock.svg'
const welcomeOneSlogan1 = '每日提醒'
const welcomeOneSlogan2 = '不会遗漏每一笔账单'
const nextPage = '/welcome/three'
</script>

<style lang="less" scoped></style>
