<template>
  <div>
    <div class="mask" @click="$emit('closeOverlay')"></div>
    <div class="overlay">
      <section>
        <h2 class="user-status">未登录用户</h2>
        <p class="sing-in">点击这里登录</p>
      </section>
      <nav class="side-navbar">
        <ul>
          <li>
            <router-link to="/statistics" class="action">
              <svgIcon name="chart" width="32px" height="32px"></svgIcon>
              <span>统计图表</span>
            </router-link>
          </li>
          <li>
            <router-link to="/export" class="action">
              <svgIcon name="export" width="32px" height="32px"></svgIcon>
              <span>导出数据</span>
            </router-link>
          </li>
          <li>
            <router-link to="/notify" class="action">
              <svgIcon name="notice" width="32px" height="32px"></svgIcon>
              <span>记账提醒</span>
            </router-link>
          </li>
          <li>
            <router-link to="/signout" class="action">
              <svgIcon name="signOut" width="32px" height="32px"></svgIcon>
              <span>退出登录</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({})
const close = () => {}
</script>

<style lang="less" scoped>
.mask {
  position: fixed;
  z-index: @z-index-overlay;
  background-color: @overlay-mask-bg;
  top: @top-safe-area-height;
  left: 0;
  width: 100%;
  height: calc(100% - @top-safe-area-height);
}
.overlay {
  position: fixed;
  background-color: @overlay-bg;
  z-index: @z-index-overlay + 1;
  top: @top-safe-area-height;
  left: 0;
  width: 16rem;
  height: calc(100% - @top-safe-area-height);

  section {
    background-color: @overlay-section-color;
    height: 128px;
    padding: 32px 0 44px 16px;
    .user-status {
      color: @overlay-user-status-text-color;
      font-weight: 350;
      font-size: 24px;
    }
    .sing-in {
      color: @overlay-sign-in-text-color;
      margin-top: 12px;
    }
  }

  .side-navbar {
    padding: 18px 0 0 16px;
    font-size: 20px;

    .action {
      color: @overlay-side-navbar-text-color;
      display: flex;
      align-items: center;
      margin-top: 12px;

      span{
        margin-left: 16px;
      }
    }
  }
}
</style>
