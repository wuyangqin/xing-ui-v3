// tabs
const TABS_OPTION:Object = {
    name: 'tabs',
    title: 'Tabs 标签页',
    description: '分隔内容上有关联的数据内容',
    option: [
        {
            name: 'primary',
            title: '基础用法',
            introduction: '',
            description: `
         通过 <code>Tabs</code> 和 <code>Tab</code> 组件实现基础的选项卡，通过 <code>v-model:selected</code> 指定选中的标签。
        `,
            code: `
    <template>
      <x-tabs v-model:selected="selectTab">
        <x-tab label="星星" name="star">一颗小星星</x-tab>
        <x-tab label="羊" name="sheep">羊羊羊</x-tab>
        <x-tab label="咩咩" name="mie">咩咩是全世界最可爱的猫咪</x-tab>
      </x-tabs>
    </template>

    <script lang="ts">
    
    import { XTabs, XTab } from 'xing-ui-v3'
    import {ref} from 'vue'
    
    export default {
      components: { XTabs, XTab },
      setup() {
        const selectTab = ref<string>('star')
        return { selectTab }
      }
    }
    </script>

          `
        },
    ]
}

export default TABS_OPTION
