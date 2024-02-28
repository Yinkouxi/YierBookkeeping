<template>
  <div class="tag-form">
    <form class="form" :onSubmit="onSubmit">
      <!-- input -->
      <div>
        <label class="input-label">
          <span>标签名</span>
          <div class="input-wrapper">
            <input v-model="formData.name" type="text" placeholder="请输入2-4个汉字" />
          </div>
          <div class="input-error">
            <span>{{ errors['name'] ? errors['name'][0] : '　' }}</span>
            <span class="space">&nbsp</span>
          </div>
        </label>
      </div>
      <!-- emojiList -->
      <div class="emoji-list-wrapper">
        <label class="emoji-label">
          <span class="symbol">符号: </span>
          <span class="sign"> {{ formData.sign }}</span>
          <EmojiSelect v-model="formData.sign"> </EmojiSelect>
          <div class="input-error">
            <span>{{ errors['sign'] ? errors['sign'][0] : '　' }}</span>
            <span class="space">&nbsp</span>
          </div>
        </label>
      </div>
      <!-- <p class="tips">记账时长按标签，即可进行编辑</p> -->
      <div class="button-wrapper">
        <Button class="button">确定</Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Button from '../../shared/Button.vue'
import EmojiSelect from '@/shared/EmojiSelect.vue'
import { onMounted, reactive } from 'vue'
// import { Rules,validata} from '@/utils/validata.ts'
import { Rules, validata } from '../../utils/validata'
import { useRoute } from 'vue-router'
import yierRequest1 from '../../service'
import router from '../../router'
import { Tag } from '../../assets/type/index.ts'
const props = defineProps({
  id: Number
})
onMounted(async () => {
  if (props.id) {
    await yierRequest1
      .get({
        url: `/api/v1/tags/${props.id}`
      })
      .then((res) => {
        formData.id = res.resource.id
        formData.name = res.resource.name
        formData.sign = res.resource.sign
      })
  }
})

const route = useRoute()
// const tagKind = route.query.kind || 'expenses'
const formData = reactive<Partial<Tag>>({
  id: undefined,
  name: '',
  sign: '',
  kind: route.query.kind!.toString() as 'expenses' | 'income'
})
// const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({})
const errors = reactive({
  name: [],
  sign: []
})

function hasErrors(errors: { [x: string]: string | any[] }) {
  for (const key in errors) {
    if (errors[key]?.length) {
      return true
    }
  }
  return false
}

const onSubmit = async (e: Event) => {
  e.preventDefault()
  const rules: Rules<typeof formData> = [
    { key: 'name', type: 'required', message: '必填' },
    { key: 'name', type: 'pattern', regex: /^.{2,4}$/, message: '只能填 2 到 4 个字符' },
    { key: 'sign', type: 'required', message: '必选' }
  ]
  // 校验前先清空
  Object.assign(errors, {
    name: undefined,
    sign: undefined
  })
  Object.assign(errors, validata(formData, rules))
  if (!hasErrors(errors)) {
    if (formData.id) {
      // id有值，为标签更改操作
      await yierRequest1
        .patch({
          url: `/api/v1/tags/${formData.id}`,
          data: formData
        })
        .then(() => {
          router.back()
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      // id无值 标签新建操作
      await yierRequest1
        .post({
          url: '/api/v1/tags',
          data: {
            kind: formData.kind,
            name: formData.name,
            sign: formData.sign
          }
        })
        .then(() => {
          router.push('/items/create')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  } else {
    console.log('you err')
    console.log(errors)
  }
}
</script>

<style lang="less" scoped>
.tag-form {
  .form {
    padding: 16px;
    .input-label {
      span {
        font-size: 18px;
        color: @tag-create-text-color;
      }

      input {
        border: 1px solid red;
        border-radius: 8px;
        width: 100%;
        height: 48px;
        line-height: 48px;
        margin-top: 10px;
        padding: 0 10px 0 10px;
        font-size: 18px;
        color: @tag-create-text-color-normal;
      }
      .input-error {
        margin-top: 4px;
        span {
          font-size: 14px;
          color: @tag-create-text-color-error;
        }
      }
    }

    .emoji-list-wrapper {
      margin-top: 6px;

      .emoji-label {
        .symbol {
          color: @tag-create-text-color;
          font-size: 18px;
          margin-top: 16px;
        }
        .sign {
          font-size: 28px;
        }
        .emoji-list {
          display: flex;
          flex-direction: column;
          padding: 10px 12px 0 12px;
          border: 1px solid @tag-create-emoji-list-border-color;
          border-radius: 8px;

          .emoji-nav {
            display: flex;
            color: @tag-create-text-color-normal;
            overflow: auto;

            span {
              margin-right: 16px;
              line-height: 16px;
              text-wrap: nowrap;
            }
          }
          .emoji-nav::-webkit-scrollbar {
            display: none;
          }
          ol {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            font-size: 24px;
            line-height: 32px;
            height: calc(32px * 12);
            margin-top: 10px;
            overflow: auto;
            li {
              width: 10%;
              flex-grow: 0;
              flex-shrink: 0;
              align-items: center;
            }
          }

          ol::-webkit-scrollbar {
            display: none;
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
    }
    .tips {
      color: @tag-create-text-color;
      font-size: 16px;
      text-align: center;
      margin-top: 20px;
    }
    .button-wrapper {
      margin-top: 30px;
      // margin-bottom: 60px;
      .button {
        width: 100%;
      }
    }
  }
  .space {
    background-color: #554646;
    // display: none;
    opacity: 0;
  }
}
</style>
