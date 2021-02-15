<template>
  <div>
    <x-switch v-model:value="bool"></x-switch>
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
    const bool = ref(false)
    return { bool }
  }
}
</script>

<style scoped lang="scss">

</style>
