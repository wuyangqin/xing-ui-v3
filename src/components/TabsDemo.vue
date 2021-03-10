<template>
  <div>
    <div>
      <h3>示例1</h3>
      <x-tabs v-model:selected="selectTab">
        <x-tab label="标题1" name="content1">内容一</x-tab>
        <x-tab label="标题2222" name="content2">内容二</x-tab>
      </x-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import XTabs from '../lib/tabs/tabs.vue'
import XTab from '../lib/tabs/tab.vue'
import { ref } from 'vue'

export default {
  name: 'tabs-demo',
  components: {
    XTabs,
    XTab
  },
  setup(props,context) {
    const selectTab = ref<string>('content1')
    return {
      selectTab
    }
  }
}
</script>

<style scoped lang="scss">

</style>
