<template>
  <div>
    <div>
      <h3>示例1</h3>
      <x-tabs>
        <x-tab label="标题1">内容一</x-tab>
        <x-tab label="标题2">内容二</x-tab>
      </x-tabs>
    </div>
  </div>
</template>

<script lang="ts">
import XTabs from '../lib/tabs/tabs.vue'
import XTab from '../lib/tabs/tab.vue'

export default {
  name: 'tabs-demo',
  components: {
    XTabs,
    XTab
  }
}
</script>

<style scoped lang="scss">

</style>
