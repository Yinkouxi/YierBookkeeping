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
    <form class="main" :onSubmit="onSubmit">
      <div class="email">
        <span class="title">邮箱地址</span>
        <input type="email" placeholder="请输入邮箱，然后点击发送验证码" v-model="formData.email" />
        <div class="input-error">
          <!-- <span>{{ errors['email'] ? errors['email'][0] : "&nbsp" }}</span> -->
          <span v-show="showErrors.emailError">{{ showErrors.emailError }}</span>
          <span v-show="showErrors.emailError === ''" class="space">&nbsp</span>
        </div>
      </div>
      <div class="verification">
        <span class="title">验证码</span>
        <div class="verification-main">
          <input
            class="verification-input"
            type="text"
            placeholder="六位数字"
            v-model="formData.code"
          />
          <Button class="send" @click="sendVerification" :disabled="isCounting">
            {{ isCounting ? `${count}s后可继续发送` : '发送验证码' }}
          </Button>
        </div>
        <div class="input-error">
          <span>{{ errors['code'].length !== 0 ? errors['code'][0] : '　' }}</span>
        </div>
      </div>
      <Button class="login-btn">登录</Button>
    </form>
  </div>

</template>

<script setup lang="ts">
import Navbar from '../shared/Navbar.vue'
import Button from '../shared/Button.vue'
import { computed, reactive, ref, toRaw } from 'vue'
import { Rules, validata } from '../utils/validata'
import yierRequest1 from '../service'

const formData = reactive({
  email: '3405176636@qq.com',
  code: ''
})

const errors = reactive({
  email: [],
  code: []
})

const showErrors = {
  emailError: '',
  codeError: ''
}

const onSubmit = (e: Event) => {
  e.preventDefault()
  const rules: Rules<typeof formData> = [
    { key: 'email', type: 'required', message: '必填' },
    { key: 'email', type: 'pattern', regex: /.+@.+/, message: '请输入正确的邮箱地址' },
    { key: 'code', type: 'required', message: '必填' },
    { key: 'code', type: 'pattern', regex: /^\d{6}$/, message: '请输入六位数字验证码' }
  ]
  // 校验前先清空
  Object.assign(errors, {
    email: [],
    code: []
  })
  Object.assign(errors, validata(formData, rules))

  showErrors.emailError = toRaw(errors.email).toString()
  showErrors.codeError = toRaw(errors.code).toString()
}

const MAX_COUNT = 10
const timer = ref()
const count = ref<number>(MAX_COUNT)
const isCounting = computed(() => {
  if (count.value !== 10 && count.value !== 0) {
    return true
  } else {
    return false
  }
})
// console.log(isCounting.value)
const countDowm = () => {
  timer.value = setInterval(() => {
    count.value -= 1
    if (count.value === 0) {
      clearInterval(timer.value)
      timer.value = null
      count.value = MAX_COUNT
    }
  }, 1000)
}
const sendVerification = async (e: Event) => {
  e.preventDefault()
  if (formData.email == '') {
    console.log('请先输入邮箱地址')
    return
  }
  const response = await yierRequest1.post({
    url:'/api/v1/validation_codes',
    params:{
      email:formData.email
    }
  }).catch(()=>{
    console.log('验证码发送失败')
  })
  console.log(response)
  countDowm()
}
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

    .title {
      color: #333333;
      margin-top: 16px;
      margin-bottom: 8px;
    }
    input {
      border: 1px solid @sign-in-input-border-color;
      height: 48px;
      border-radius: 8px;
      padding-left: 16px;
    }
    .verification-main {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .verification-input {
        width: 8rem;
        margin-right: 16px;
      }

      .send {
        flex-grow: 1;
        height: 48px;
      }
      .send[disabled]{
        opacity: 0.7;
        cursor: not-allowed;
      }
    }

    .login-btn {
      margin-top: 96px;
    }
  }
  .input-error {
    margin-top: 4px;
    span {
      font-size: 14px;
      color: @tag-create-text-color-error;
    }
  }
}
</style>
