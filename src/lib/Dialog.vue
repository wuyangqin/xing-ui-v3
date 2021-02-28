<template>
  <div class="xx-dialog-overlay"></div>
  <div class="xx-dialog-wrapper">
    <header>标题</header>
    <main>内容</main>
    <footer>
      <x-button size="small">ok</x-button>
      <x-button size="small">cancel</x-button>
    </footer>
  </div>
</template>

<script lang="ts">
import XButton from './Button.vue'

export default {
  name:'x-Dialog',
  components: {
    XButton
  }
}
</script>

<style scoped lang="scss">

</style>
