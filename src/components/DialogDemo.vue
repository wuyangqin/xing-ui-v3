<template>
  <div>
    <x-button @click="toggle">toggle</x-button>
    <x-dialog v-model:visible="visible"
              :close-on-click-overlay="false" :on-confirm="confirm"
              @onCancel="cancel">
    </x-dialog>
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
    const visible = ref<boolean>(false)
    const toggle = () => {
      visible.value = !visible.value
    }
    const confirm = () => {
      return true
    }
    const cancel = () => {
    }
    return { visible, toggle, confirm, cancel }
  }
}
</script>

<style scoped lang="scss">

</style>
