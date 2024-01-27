<template>
  <div class="sign-in">
    <Navbar>
      <template #icon>
        <svgIcon name="exit" color="white" width="26px" height="26px"></svgIcon>
      </template>
      <template #title>
        <span>登录</span>
      </template>
    </Navbar>
    <div class="logo">
      <svgIcon name="mangosteen" width="64px" height="68px"></svgIcon>
      <span class="title">山竹记账</span>
    </div>
    <form class="main">
      <div class="email">
        <span class="title">邮箱地址</span>
        <input type="text" placeholder="请输入邮箱，然后点击发送验证码" />
      </div>
      <div class="verification">
        <span class="title">验证码</span>
        <div class="verification-main">
          <input class="verification-input" type="text" placeholder="六位数字" />
          <Button class="send">发送验证码</Button>
        </div>
      </div>
      <Button class="login-btn">登录</Button>
    </form>
  </div>
</template>

<script setup lang="ts">
import Navbar from '../shared/Navbar.vue'
import Button from '../shared/Button.vue'
</script>

<style lang="less" scoped>
.sign-in {
  color: blueviolet;

  .logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 42px 0 16px 0;

    .title {
      font-size: 32px;
      font-weight: 700;
      color: @sign-in-title-text-color;
      margin-top: 8px;
    }
  }

  .main {
    display: flex;
    flex-direction: column;
    padding: 0 16px 0 16px;

    .email,
    .verification {
      display: flex;
      flex-direction: column;
    }

    .title{
      color: #333333;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    input{
      border: 1px solid @sign-in-input-border-color;
      height: 48px;
      border-radius: 8px;
      padding-left: 16px;
    }
    .verification-main{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .verification-input{
        width: 8rem;
        margin-right: 16px;
      }

      .send{
        flex-grow: 1;
        height: 48px;
      }
    }

    .login-btn{
      margin-top: 96px;
    }
  }
}
</style>
