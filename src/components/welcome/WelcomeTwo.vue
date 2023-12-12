<template>
  <div class="wrapper">
    <h2 class="pass-welcome">跳过</h2>
    <div class="logo">
      <img src="@/assets/img/welcome/logo.svg" alt="" />
    </div>
    <div class="content">
      <div class="wel-img">
        <img src="@/assets/img/welcome/clock.svg" alt="" />
      </div>
      <div class="slogan">
        <h1>每日提醒</h1>
        <h1>不会遗忘每一笔账单</h1>
      </div>
      <router-link class="next-page" to="/welcome/three">下一页</router-link>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.wrapper {
  background-color: aquamarine;
  background-image: linear-gradient(to bottom, #633cc0 0%, #975ad9 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 60px 12px;
  height: 100vh;

  .pass-welcome {
    align-self: flex-end;
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }
  .logo {
    margin-top: 60px;
    margin-bottom: 20px;
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 12px;
    width: 100%;

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
}
</style>
