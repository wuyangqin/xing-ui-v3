<template>
  <div>
    <div>
      <h2>Switch 开关</h2>
      <p>用于在打开和关闭状态之间进行切换</p>
    </div>
    <x-switch v-model:value="bool"></x-switch>
    <x-switch v-model:value="checked" disabled></x-switch>
    <x-switch v-model:value="checked" loading></x-switch>
    <pre class="language-html" v-html="Prism.highlight(code, Prism.languages.html, 'html')" />
  </div>
</template>

<script lang="ts">
import XSwitch from '../lib/Switch.vue'
import { ref } from 'vue';
import 'prismjs';
const Prism = (window as any).Prism
// import 'prismjs/themes/prism-coy.css'

export default {
  name: 'switch-demo',
  components: {
    XSwitch
  },
  setup () {
    const code = ref<string>(`
    <x-switch v-model:value="bool"></x-switch>
    <x-switch v-model:value="checked" disabled></x-switch>
    <x-switch v-model:value="checked" loading></x-switch>`)
    const bool = ref<boolean>(false)
    const checked = ref<boolean>(false)
    return {
      bool,
      checked,
      Prism,
      code,
    }
  }
}
</script>

<style lang="scss">
@import '../assets/css/prism.css';

</style>
