<template>
  <demo-page :option="option" :attr-content="attrContent">
    <template #primary>
      <x-button @click="clickButton">default</x-button>
      <x-button theme="primary">primary</x-button>
      <x-button theme="link">link</x-button>
    </template>
    <template #level>
      <div class="button-line">
        <x-button level="info">信息</x-button>
        <x-button level="warning">警告</x-button>
        <x-button level="danger">危险</x-button>
        <x-button level="success">成功</x-button>
      </div>
      <div class="button-line">
        <x-button level="info" theme="primary">信息</x-button>
        <x-button level="warning" theme="primary">警告</x-button>
        <x-button level="danger" theme="primary">危险</x-button>
        <x-button level="success" theme="primary">成功</x-button>
      </div>
      <div>
        <x-button level="info" theme="link">信息</x-button>
        <x-button level="warning" theme="link">警告</x-button>
        <x-button level="danger" theme="link">危险</x-button>
        <x-button level="success" theme="link">成功</x-button>
      </div>
    </template>
    <template #size>
      <x-button size="mini">迷你按钮</x-button>
      <x-button size="small">小型按钮</x-button>
      <x-button>普通按钮</x-button>
      <x-button size="large">大号按钮</x-button>
    </template>
    <template #disabled>
      <x-button disabled>禁用状态</x-button>
      <x-button disabled theme="primary">禁用状态</x-button>
      <x-button disabled theme="link">禁用状态</x-button>
    </template>
    <template #loading>
      <x-button loading>加载中...</x-button>
    </template>
  </demo-page>
</template>

<script lang="ts">
import XButton from '../lib/Button.vue'
import DemoPage from './common/DemoPage.vue'
import attrContentMd from '../markdown/attr-button.md'
import BUTTON_OPTION from './demoOptions/button'
import {ref} from 'vue'

export default {
  name: 'button-demo',
  components: {
    DemoPage,
    XButton
  },
  setup () {
    const option = ref<object> (BUTTON_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrContentMd

    return {
      option,
      attrContent
    }
  }
}
</script>

<style scoped lang="scss">
.xx-button {
  margin-right: 8px;
}
.button-line {
  margin-bottom: 8px;
}
</style>
