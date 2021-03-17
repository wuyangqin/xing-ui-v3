<template>
  <demo-page :option="option" :attr-content="attrContent">
    <template #primary>
      <x-button @click="toggle('eg1')">打开对话框</x-button>
      <x-dialog v-model:visible="visible.eg1" title="标题" content="星星真可爱"></x-dialog>
    </template>
    <template #slots>
      <x-button @click="toggle('eg2')">自定义对话框</x-button>
      <x-dialog v-model:visible="visible.eg2">
        <template v-slot:title>
          <x-icon name="info-fill" style="margin-right: 4px"></x-icon>
          <span>数星星</span>
        </template>
        <template v-slot:content>
          <p>一颗小星星</p>
          <p>两颗小星星</p>
          <p>三颗小星星</p>
        </template>
      </x-dialog>
    </template>
    <template #event>
      <x-button @click="toggle('eg3')">异步关闭</x-button>
        <x-dialog v-model:visible="visible.eg3"
                  title="删除" content="确认删除吗"
                  :on-confirm="confirm"
                  :on-cancel="cancel">
        </x-dialog>
    </template>
    <template #function>
      <x-button @click="showDialog">函数调用</x-button>
    </template>
  </demo-page>
</template>

<script lang="ts">
import XDialog from '../lib/dialog.vue'
import XButton from '../lib/button.vue'
import XIcon from '../lib/icon.vue'
import DemoPage from './common/DemoPage.vue'
import attrContentMd from '../markdown/attr-dialog.md'
import DIALOG_OPTION from './demoOptions/dialog'
import { openDialog } from '../lib/plugin/openDialog'
import { ref } from 'vue'

export default {
  name: 'dialog-demo',
  components: {
    XIcon,
    DemoPage,
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
      console.log('您暂时不能删除')
      return false
    }
    const cancel = () => {
      console.log('取消')
    }
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '嗨 小星星',
        onConfirm:() => {
          console.log('confirm')
          return true
        },
        onCancel:() => {
          console.log('cancel')
        },
        closeOnClickOverlay: false
      })
    }

    const option = ref<object> (DIALOG_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrContentMd
    return {
      visible1,visible,
      showDialog,
      toggle, confirm, cancel,
      option,
      attrContent
    }
  }
}
</script>

<style scoped lang="scss">

</style>
