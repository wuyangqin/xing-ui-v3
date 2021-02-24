<template>
  <button class="xx-button" :class="buttonClasses">
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
        [`xx-theme-${theme}`]:theme,
        [`xx-size-${size}`]:size
      }
    })
    return { buttonClasses }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/xing-ui-v3.scss";
.xx-button {
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
  transition: background $button-duration;
  @media (any-hover: hover){
    &:hover, &:focus { background: $main-hover-color;}
  }
  &:focus { outline: none; }
  &::-moz-focus-inner { border: 0; }
  &:active { background: $main-active-color; }
  &.xx-theme-default {
    background: $white;
    border: $button-default-border;
    color: $button-default-color;
    transition: all $button-duration;
    @media (any-hover: hover){
      &:hover,
      &:focus {
        border-color: $button-default-focus-color;
        color: $button-default-focus-color;
      }
    }
    &:active {
      background: $main-color-light;
      border-color: $main-active-color;
      color: $main-active-color;
    }
  }
  &.xx-theme-link {
    background: none;
    box-shadow: none;
    color: $button-link-color;
    @media (any-hover: hover){
      &:hover,&:focus { color: $main-hover-color; }
    }
    &:active { color: $main-active-color; }
  }
  &.xx-theme-info { background: $info; }
  &.xx-theme-danger { background: $error; }
  &.xx-theme-warning { background: $warning; }
  &.xx-theme-success { background: $success; }
  &.xx-size-mini {
    padding: 0 $padding-xs;
    height: $button-mini-height;
    font-size: $button-mini-font-size;
  }
  &.xx-size-small {
    height: $button-small-height;
    font-size: $button-small-font-size;
    padding: 0 $padding-md;
  }
  &.xx-size-large {
    height: $button-large-height;
    font-size: $button-large-font-size;
    padding: 0 $padding-lg * 2;
  }
}
</style>
