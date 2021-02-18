<template>
  <div>
    <x-switch v-model:value="bool"></x-switch>
    <x-switch v-model:value="checked" disabled></x-switch>
    <x-switch v-model:value="checked" loading></x-switch>
  </div>
</template>

<script lang="ts">
import XSwitch from '../lib/Switch.vue'
import { ref } from 'vue';

export default {
  name: 'switch-demo',
  components: {
    XSwitch
  },
  setup () {
    const bool = ref<boolean>(false)
    const checked = ref<boolean>(false)
    return { bool, checked }
  }
}
</script>

<style scoped lang="scss">

</style>
