// dialog
const DIALOG_OPTION:Object = {
    name: 'dialog',
    title: 'Dialog 对话框',
    description: `弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作。
对话框组件支持函数调用和组件调用两种方式。`,
    option: [
        {
            name: 'primary',
            title: '基础用法',
            introduction: '使用组件调用',
            description: `
         通过 <code>v-model:visible</code> 绑定对话框的打开状态，使用 <code>title</code> 和 <code>content</code> 属性定义标题和内容
        `,
            code: `
    <template>
      <x-button @click="toggle">打开对话框</x-button>
      <x-dialog v-model:visible="show"
                title="标题"
                content="星星真可爱">
      </x-dialog>
    </template>

    <script lang="ts">
    
    import { XDialog, XButton } from 'xing-ui-v3'
    import { ref } from 'vue'
    
    export default {
      components: { XDialog, XButton },
      setup() {
        const show = ref(false)
        const toggle = () => {
          show.value = !show.value
        }
        return {
          showDialog,
          toggle
        }
      }
    }
    </script>

          `
        },
        {
            name: 'slots',
            title: '自定义内容',
            introduction: '',
            description: `通过 <code>slot</code> 具名插槽属性自定义对话框标题和内容`,
            code: `
    <template>
      <x-button @click="toggle">自定义对话框</x-button>
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

    <script lang="ts">
    
    import { XDialog, XButton, XIcon } from 'xing-ui-v3'
    import { ref } from 'vue'
    
    export default {
      components: { XDialog, XButton, XIcon },
      setup() {
        const show = ref(false)
        const toggle = () => {
          show.value = !show.value
        }
        return {
          showDialog,
          toggle
        }
      }
    }
    </script>
          `
        },
        {
            name: 'event',
            title: '异步关闭',
            introduction: '对话框关闭前进行特定操作',
            description: `通过 <code>onCancel</code> 属性和 <code>onConfirm</code> 属性可以传入一个回调函数，在对话框关闭前进行特定操作；<code>onConfirm</code>传入的回调函数如果返回false，则对话框不关闭`,
            code: `
    <template>
      <x-button @click="toggle">异步关闭</x-button>
      <x-dialog v-model:visible="show"
                  title="删除" content="确认删除吗"
                  :on-confirm="confirm"
                  :on-cancel="cancel">
      </x-dialog>
    </template>

    <script lang="ts">
    
    import { XDialog, XButton } from 'xing-ui-v3'
    import { ref } from 'vue'
    
    export default {
      components: { XDialog, XButton },
      setup() {
        const show = ref(false)
        const toggle = () => {
          show.value = !show.value
        }
         const confirm = () => {
          console.log('您暂时不能删除')
          return false
        }
        const cancel = () => {
          console.log('取消')
        }
        return {
          showDialog,
          toggle,
          confirm,
          cancel
        }
      }
    }
    </script>
          `
        },
        {
            name: 'function',
            title: '函数调用',
            introduction: '',
            description: `通过调用 <code>openDialog</code> 函数直接弹出对话框`,
            code: `
    <template>
      <x-button @click="showDialog">函数调用</x-button>
    </template>

    <script lang="ts">
    
    import { XButton, openDialog } from 'xing-ui-v3'
    
    export default {
      components: { XButton },
      setup() {
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
        return {
          showDialog
        }
      }
    }
    </script>
          `
        }

    ]
}

export default DIALOG_OPTION
