<template>
  <div>
    <div class="mask" @click="$emit('closeOverlay')"></div>
    <div class="overlay">
      <div class="account-info">
        <div v-if="userEmail">
          <h2 class="user-status">{{ userEmail }}</h2>
          <p class="sing-in" @click="signOut">退出登录</p>
        </div>
        <div v-else>
          <router-link :to="'/sign_in?' + 'return_to=' + route.fullPath">
            <h2 class="user-status">未登录用户</h2>
            <p class="sing-in">点击这里登录</p>
          </router-link>
        </div>
      </div>
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
            <router-link to="/remind" class="action">
              <svgIcon name="notice" width="32px" height="32px"></svgIcon>
              <span>记账提醒</span>
            </router-link>
          </li>
          <li>
            <div class="action">
              <svgIcon name="signOut" width="32px" height="32px"></svgIcon>
              <span>未完待续</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import yierRequest1 from '../service'
import { ref } from 'vue'
import router from '../router'
import { showConfirmDialog } from 'vant'
const route = useRoute()

const userEmail = ref<string>('')

yierRequest1
  .get({
    url: '/api/v1/me'
  })
  .then((res) => {
    userEmail.value = res.resource.email
  })

const signOut = () => {
  showConfirmDialog({
    title: '警告',
    message: '你确定退出登录吗'
  })
    .then(() => {
      router.push(`/sign_in?return_to=${route.fullPath}`)
      localStorage.removeItem('jwt')
    })
    .catch(() => {})
}
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

  .account-info {
    background-color: @overlay-section-color;
    height: 128px;
    padding: 32px 0 44px 16px;
    .user-status {
      color: @overlay-user-status-text-color;
      font-weight: 350;
      font-size: 24px;
      overflow: hidden;
      text-overflow: ellipsis;
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

      span {
        margin-left: 16px;
      }
    }
  }
}
</style>
