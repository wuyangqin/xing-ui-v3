<template>
  <div>
    <h3>示例一</h3>
    <x-button @click="clickButton">default</x-button>
    <x-button theme="primary">primary</x-button>
    <x-button theme="link">link</x-button>
    <div>
      <h3>示例2</h3>
      <x-button size="mini">点我</x-button>
      <x-button size="small">点我</x-button>
      <x-button>点我</x-button>
      <x-button size="large">点我</x-button>
    </div>
    <div>
      <h3>示例3</h3>
      <div>
        <x-button level="info">info</x-button>
        <x-button level="warning">warning</x-button>
        <x-button level="danger">danger</x-button>
        <x-button level="success">success</x-button>
      </div>
      <div>
        <x-button level="info" theme="primary">info</x-button>
        <x-button level="warning" theme="primary">warning</x-button>
        <x-button level="danger" theme="primary">danger</x-button>
        <x-button level="success" theme="primary">success</x-button>
      </div>
      <div>
        <x-button level="info" theme="link">info</x-button>
        <x-button level="warning" theme="link">warning</x-button>
        <x-button level="danger" theme="link">danger</x-button>
        <x-button level="success" theme="link">success</x-button>
      </div>
    </div>
    <div>
      <h3>示例4 禁用</h3>
      <x-button disabled>default</x-button>
      <x-button disabled theme="primary">primary</x-button>
      <x-button disabled theme="link">link</x-button>
    </div>
    <div>
      <h3>示例5 加载</h3>
      <x-button loading>加载中</x-button>
    </div>
  </div>
</template>

<script lang="ts">
import XButton from '../lib/Button.vue'

export default {
  name: 'button-demo',
  components: {
    XButton
  },
  methods: {
    clickButton () {
      console.log(1)
    }
  }
}
</script>

<style scoped lang="scss">
.x-button {
  margin-left: 8px;
}
</style>
