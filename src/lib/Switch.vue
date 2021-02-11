<template>
  <button class="x-switch" :class="{ checked }" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup () {
    const checked = ref(false)
    const toggle = () => {
      checked.value = !checked.value
    }
    return { checked, toggle}
  }
}
</script>

<style lang="scss">
@import "../assets/css/xing-ui-v3.scss";
.x-switch {
  position: relative;
  height: $switch-height;
  width: $switch-width;
  border: none;
  background: $gray-4;
  border-radius: $switch-height / 2;
  cursor: pointer;
  transition: background $switch-duration;
  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $switch-height - 4px;
    height: $switch-height - 4px;
    border-radius: $switch-height / 2;
    background: $white;
    transition: left $switch-duration;
  }
  &.checked{
    background: $main-theme-color;
    >span {
      left: calc(100%  - #{$switch-height} + 2px);
    }
  }
}
</style>
