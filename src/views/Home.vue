<template>
  <div class="wrapper">
    <header>
      <h1 class="skip-welcome">跳过</h1>
      <div class="logo-container">
        <img src="@/assets/img/welcome/logo.svg" alt="" />
      </div>
    </header>
    <article class="main">
      <img src="@/assets/img/welcome/pig.svg" alt="" />
      <h1 class="slogan">
        会挣钱
        <br />
        还要会省钱
      </h1>
      <div class="next-page">
        <h1>下一页</h1>
      </div>
    </article>
  </div>
</template>

<script setup></script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-image: linear-gradient(to bottom, #633CC0 0%, #975AD9 100%);
}

.skip-welcome {
  display: flex;
  justify-content: flex-end;
  margin: 16px 16px 0 0;
  color: #fff;
  font-size: 32px;
}

.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 52px;
}

img {
  width: 128px;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  background-color: #fff;
  border-radius: 20px;
  margin: 52px 16px 62px 16px;
  text-align: center;
  font-size: 32px;

  img {
    width: 134px;
    padding: 130px 0 30px 0;
  }

  .next-page {
    font-size: 32px;
    color: #6035BF;
    font-weight: 700;
    margin-top: 80px;
  }
}
</style>


