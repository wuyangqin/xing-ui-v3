<template>
  <demo-page :option="switchOption" :attr-content="attrContent">
    <template #primary>
      <x-switch v-model:value="bool"></x-switch>
    </template>
    <template #disabled>
      <x-switch v-model:value="checked" disabled></x-switch>
    </template>
    <template #loading>
      <x-switch v-model:value="checked" loading></x-switch>
    </template>
  </demo-page>
</template>

<script lang="ts">
import XSwitch from '../lib/Switch.vue'
import DemoPage from "./common/DemoPage.vue"
import attrSwitch from '../markdown/attr-switch.md'
import SWITCH_OPTION from './demoOptions/switch'
import { ref } from 'vue'

export default {
  name: 'switch-demo',
  components: {
    DemoPage,
    XSwitch
  },
  setup () {
    const switchOption = ref<object> (SWITCH_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrSwitch

    const bool = ref<boolean>(false)
    const checked = ref<boolean>(false)
    return {
      bool,
      checked,
      switchOption,
      attrContent
    }
  }
}
</script>

<style lang="scss">
</style>
