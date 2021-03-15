<template>
  <div>
    <demo-page :option="switchOption">
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
  </div>
</template>

<script lang="ts">
import XSwitch from '../lib/Switch.vue'
import DemoBox from './common/DemoBox.vue'
import DemoPage from "./common/DemoPage.vue";
import SWITCH_OPTION from './demoOptions/switch'
import { ref } from 'vue';

export default {
  name: 'switch-demo',
  components: {
    DemoPage,
    DemoBox,
    XSwitch
  },
  setup () {
    const switchOption = ref<object> (SWITCH_OPTION)
    const bool = ref<boolean>(false)
    const checked = ref<boolean>(false)
    return {
      bool,
      checked,
      switchOption
    }
  }
}
</script>

<style lang="scss">
</style>
