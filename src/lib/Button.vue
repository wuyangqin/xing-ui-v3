<template>
  <button class="x-button" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'x-button',
  props: {
    size: {
      type: String,
      default: 'normal'
    },
    theme: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const { theme, size } = props
    const buttonClasses = computed(() => {
      return {
        [`x-theme-${theme}`]:theme,
        [`x-size-${size}`]:size
      }
    })
    return { buttonClasses }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/xing-ui-v3.scss";
.x-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 1.5em;
  background: $button-primary-background;
  height: $button-normal-height;
  border: none;
  box-shadow: $button-shadow;
  border-radius: $border-radius;
  font-size: $button-normal-font-size;
  color: $white;
  white-space: nowrap;
  cursor: pointer;
  &.x-theme-default {
    background: $white;
    border: $button-default-border;
    color: $button-default-color;
  }
  &.x-theme-text {
    background: none;
    box-shadow: none;
    color: $button-text-color;
  }
  &.x-theme-info { background: $info; }
  &.x-theme-danger { background: $error; }
  &.x-theme-warning { background: $warning; }
  &.x-theme-success { background: $success; }
  &.x-size-mini {
    padding: 0 $padding-xs;
    height: $button-mini-height;
    font-size: $button-mini-font-size;
  }
  &.x-size-small {
    height: $button-small-height;
    font-size: $button-small-font-size;
    padding: 0 $padding-md;
  }
  &.x-size-large {
    height: $button-large-height;
    font-size: $button-large-font-size;
    padding: 0 $padding-lg * 2;
  }
}
</style>
