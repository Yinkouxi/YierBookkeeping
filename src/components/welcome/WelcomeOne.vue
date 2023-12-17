<template>
  <div>
    <welcome-layout
      :iconName="iconName"
      :slogan1="welcomeOneSlogan1"
      :slogan2="welcomeOneSlogan2"
      :nextPage="nextPage"
    />
  </div>
</template>

<script setup lang="ts">
import WelcomeLayout from './WelcomeLayout.vue'
const iconName = '#icon-pig'
const welcomeOneSlogan1 = '会挣钱'
const welcomeOneSlogan2 = '还要会省钱'
const nextPage = '/welcome/two'
</script>

<style lang="less" scoped></style>
