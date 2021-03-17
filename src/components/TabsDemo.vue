<template>
  <demo-page :option="option" :attr-content="attrContent">
    <template #primary>
      <x-tabs v-model:selected="selectTab">
        <x-tab label="星星" name="star">一颗小星星</x-tab>
        <x-tab label="羊" name="sheep">羊羊羊</x-tab>
        <x-tab label="咩咩" name="mie">咩咩是全世界最可爱的猫咪</x-tab>
      </x-tabs>
    </template>
  </demo-page>
</template>

<script lang="ts">
import XTabs from '../lib/tabs/tabs.vue'
import XTab from '../lib/tabs/tab.vue'
import DemoPage from './common/DemoPage.vue'
import attrContentMd from '../markdown/attr-tabs.md'
import TABS_OPTION from './demoOptions/tabs'
import { ref } from 'vue'

export default {
  name: 'tabs-demo',
  components: {
    DemoPage,
    XTabs,
    XTab
  },
  setup(props,context) {
    const selectTab = ref<string>('star')

    const option = ref<object> (TABS_OPTION)
    const attrContent = ref<string>('')
    attrContent.value = attrContentMd
    return {
      selectTab,
      option,
      attrContent
    }
  }
}
</script>

<style scoped lang="scss">

</style>
