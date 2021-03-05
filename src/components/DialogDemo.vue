<template>
  <div>
    <div>
      <h3>示例1</h3>
      <x-button @click="toggle('eg1')">toggle</x-button>
      <x-dialog v-model:visible="visible.eg1"
                title="删除" content="确认删除吗"
                :close-on-click-overlay="false" :on-confirm="confirm"
                @onCancel="cancel">
      </x-dialog>
    </div>
    <div>
      <h3>示例1</h3>
      <x-button @click="toggle('eg2')">toggle</x-button>
      <x-dialog v-model:visible="visible.eg2">
        <template v-slot:title>标题</template>
        <template v-slot:content>
          <p>内容一</p>
          <p>内容二</p>
          <p>内容三</p>
        </template>
      </x-dialog>
    </div>
    <div>
      <h3>示例2 函数方式打开dialog</h3>
      <x-button @click="showDialog">toggle</x-button>
    </div>
  </div>
</template>

<script lang="ts">
import XDialog from '../lib/dialog.vue'
import XButton from '../lib/button.vue'
import { openDialog } from '../lib/plugin/openDialog'
import { ref } from 'vue'

export default {
  name: 'dialog-demo',
  components: {
    XDialog,
    XButton
  },
  setup () {
    const visible = ref<object>({
      eg1: false,
      eg2: false
    })
    const visible1 = ref<boolean>(false)
    const toggle = (eg) => {
      visible.value[eg] = !visible.value[eg]
    }
    const confirm = () => {
      return true
    }
    const cancel = () => {
    }
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '嗨 小星星',
        onConfirm:() => {
          console.log('confirm')
          return false
        },
        onCancel:() => {
          console.log('cancel')
        },
        closeOnClickOverlay: false
      })
    }
    return {
      visible1,visible,
      showDialog,
      toggle, confirm, cancel
    }
  }
}
</script>

<style scoped lang="scss">

</style>
