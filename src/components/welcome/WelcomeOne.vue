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
import welcomeImg from '@/assets/img/welcome/pig.svg'
const welcomeOneSlogan1 = '会挣钱'
const welcomeOneSlogan2 = '还要会省钱'
const nextPage = '/welcome/two'
</script>

<style lang="less" scoped></style>
