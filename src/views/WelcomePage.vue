<template>
  <div class="welcome-page">
    <router-link class="pass-welcome" to="/start">跳过</router-link>
    <div class="logo">
      <img src="@/assets/img/welcome/logo.svg" alt="" />
    </div>
    <router-view class="page"></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.welcome-page {
  background-image: linear-gradient(to bottom, #633cc0 0%, #975ad9 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 60px 12px;
  height: 100vh;
  width: 100vw;

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
  }

  .page {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    background-color: #fff;
    border-radius: 12px;
    width: 100%;
  }
}
</style>
