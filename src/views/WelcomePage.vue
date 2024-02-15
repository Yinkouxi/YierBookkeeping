<template>
  <div class="welcome-page">
    <span @click="skipAds" class="pass-welcome">
      <router-link  to="/start" class="pass-text">跳过</router-link>
    </span>
    <div class="logo">
      <svg style="width: 128px">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </div>
    <router-view class="page" v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
const skipAds =()=>{
  localStorage.setItem('skipAdsed','yes')
}

</script>

<style lang="less" scoped>
.welcome-page {
  background-image: linear-gradient(to bottom, @welcome-bg-start 0%, @welcome-bg-end 100%);
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

    .pass-text{
      color: #e0e0ec;
    }
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

  .slide-fade-enter-active {
    position: relative;
    transition: all 0.7s ease-out;
  }
  // .slide-fade-leave-active {
  //   transition: all 5s ease-out;
  // }
  // .slide-fade-leave-to {
  //   transform: translateX(-100vw);
  //   opacity: 0;
  // }
  .slide-fade-enter-from {
    transform: translateX(100vw);
  }
}
</style>
