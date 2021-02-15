<template>
  <button class="x-switch" :class="{ 'checked': value }" @click="toggle">
    <span></span>
  </button>
</template>

<script lang="ts">

export default {
  props: {
    value: Boolean
  },
  setup (props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
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
  background: $gray-3;
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
    box-shadow: $switch-shadow;
    transition: left $switch-duration, width $switch-duration, margin-left .1s;
  }
  &.checked{
    background: $main-theme-color;
    >span {
      left: calc(100%  - #{$switch-height} + 2px);
    }
  }
  &:active {
    >span {
      width: $switch-height - 1px;
    }
  }
  &.checked:active {
    >span {
      width: $switch-height - 1px;
      margin-left: -3px;
    }
  }
}
</style>
