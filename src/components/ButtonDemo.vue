<template>
  <div>
    <h3>示例一</h3>
    <x-button>default</x-button>
    <x-button theme="primary">primary</x-button>
    <x-button theme="text">text</x-button>
    <x-button theme="info">info</x-button>
    <x-button theme="danger">danger</x-button>
    <x-button theme="warning">warning</x-button>
    <x-button theme="success">success</x-button>
    <div>
      <h3>示例2</h3>
      <x-button size="mini">点我</x-button>
      <x-button size="small">点我</x-button>
      <x-button>点我</x-button>
      <x-button size="large">点我</x-button>
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
