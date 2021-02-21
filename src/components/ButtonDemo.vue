<template>
  <div>
    <x-button size="small"
              @click="clickButton"
              @mouseenter="clickButton"
              @focus="clickButton">
      点我
    </x-button>
  </div>
</template>

<script lang="ts">
import XButton from '../lib/Button.vue'

export default {
  name: 'button-demo',
  components: {
    XButton
  },
  methods: {
    clickButton () {
      console.log(1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
