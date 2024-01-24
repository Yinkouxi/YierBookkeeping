<template>
  <button :class="[buttonClass,props.level]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { PropType, ref } from 'vue';

const buttonClass = ref('button')
const props = defineProps({
  level:{
    type: String as PropType<'important' | 'normal' | 'danger'>,
      default: 'important'
  }
})

</script>

<style lang="less" scoped>
.button {
  border: 1px solid @button-important-bg;
  padding: 8px 16px;
  background-color: @button-important-bg;
  color: @button-text;
  font-size: @button-font-szie;
  border-radius: @button-radius;
  height: @button-height;
  &:hover {
    border-color: red;
  }

}
.danger{
    background-color: @button-danger-bg;
  }
.normal{
  background-color: @button-normal-bg;
}

.important{
  background-color: @button-important-bg;
}
</style>
