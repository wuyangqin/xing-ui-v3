// switch
const SWITCH_OPTION:Object = {
    name: 'switch',
    title: 'Switch 开关',
    description: '用于在打开和关闭状态之间进行切换',
    option: [
        {
            name: 'primary',
            title: '基础用法',
            introduction: '基础的开关用法',
            description: `
         通过 <code>v-model</code> 绑定开关的选中状态。
        `,
            code: `
    <template>
      <Switch v-model:value="checked"></Switch>
    </template>

    <script lang="ts">
    
    import Switch from 'xing-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: {Switch},
      setup() {
        const checked = ref(false)
        return { checked }
      }
    }
    </script>

          `
        },
        {
            name: 'disabled',
            title: '禁用状态',
            introduction: '',
            description: `使用 <code>disabled</code> 属性来禁用开关，禁用状态下开关不可点击`,
            code: `
    <template>
      <Switch v-model:value="checked" disabled></Switch>
    </template>

    <script lang="ts">
    
    import Switch from 'xing-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: {Switch},
      setup() {
        const checked = ref(false)
        return { checked }
      }
    }
    </script>
          `
        },
        {
            name: 'loading',
            title: '加载状态',
            introduction: '',
            description: `使用 <code>loading</code> 设置开关为加载状态，加载状态下开关不可点击`,
            code: `
    <template>
      <Switch v-model:value="checked" loading></Switch>
    </template>

    <script lang="ts">
    
    import Switch from 'xing-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: {Switch},
      setup() {
        const checked = ref(false)
        return { checked }
      }
    }
    </script>
          `
        }
    ]
}

export default SWITCH_OPTION
