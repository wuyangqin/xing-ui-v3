<template>
  <div>
    <x-button @click="toggle">toggle</x-button>
    <x-dialog v-model:visible="visible"></x-dialog>
  </div>
</template>

<script lang="ts">
import XDialog from '../lib/dialog.vue'
import XButton from '../lib/button.vue'
import { ref } from 'vue'

export default {
  name: 'dialog-demo',
  components: {
    XDialog,
    XButton
  },
  setup () {
    const visible = ref(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    return { visible, toggle }
  }
}
</script>

<style scoped lang="scss">

</style>
