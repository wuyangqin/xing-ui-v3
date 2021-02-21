<template>
  <button class="x-button" :class="buttonClasses">
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'x-button',
  props: {
    theme: {
      type: String,
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses () {
      let { theme } = this
      return [
        `x-theme-${theme}`
      ]
    }
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
  padding: .5em 1em;
  background: $button-primary-background;
  border: none;
  box-shadow: $button-shadow;
  border-radius: $border-radius;
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
}
</style>
