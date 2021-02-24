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
    level: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const { theme, size, level } = props
    const buttonClasses = computed(() => {
      return {
        [`xx-theme-${theme}`]:theme,
        [`xx-size-${size}`]:size,
        [`xx-level-${level}`]:level
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
  padding: 0 $padding-lg;
  height: $button-normal-height;
  border: none;
  box-shadow: $button-shadow;
  border-radius: $border-radius;
  font-size: $button-normal-font-size;
  white-space: nowrap;
  cursor: pointer;
  transition: background $button-duration;

  &:focus { outline: none; }
  &::-moz-focus-inner { border: 0; }
  &.xx-theme-primary {
    background: $button-primary-background;
    color: $white;
    @media (any-hover: hover){
      &:hover, &:focus { background: $main-hover-color;}
    }
    &:active { background: $main-active-color; }
  }
  &.xx-theme-default {
    padding: 0 $padding-lg - 1;
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
  &.xx-theme-primary {
    &.xx-level-info {
      background: $info;
      @media (any-hover: hover){
        &:hover, &:focus { background: $info-hover; }
      }
      &:active { background: $info-active; }
    }
    &.xx-level-warning {
      background: $warning;
      @media (any-hover: hover){
        &:hover, &:focus { background: $warning-hover; }
      }
      &:active { background: $warning-active; }
    }
    &.xx-level-danger {
      background: $error;
      @media (any-hover: hover){
        &:hover, &:focus { background: $error-hover; }
      }
      &:active { background: $error-active; }
    }
    &.xx-level-success {
      background: $success;
      @media (any-hover: hover){
        &:hover, &:focus { background: $success-hover; }
      }
      &:active { background: $success-active; }
    }
  }
  &.xx-theme-default {
    &.xx-level-info {
      color: $info;
      border-color: $info;
      @media (any-hover: hover){
        &:hover, &:focus { border-color: $info-hover; color: $info-hover; }
      }
      &:active {
        background: lighten($info, 25%);
        border-color: $info-active;
        color: $info-active;
      }
    }
    &.xx-level-warning {
      color: $warning;
      border-color: $warning;
      @media (any-hover: hover){
        &:hover, &:focus { border-color: $warning-hover; color: $warning-hover; }
      }
      &:active {
        background: lighten($warning, 25%);
        border-color: $warning-active;
        color: $warning-active;
      }
    }
    &.xx-level-danger {
      color: $error;
      border-color: $error;
      @media (any-hover: hover){
        &:hover, &:focus { border-color: $error-hover; color: $error-hover; }
      }
      &:active {
        background: lighten($error, 25%);
        border-color: $error-active;
        color: $error-active;
      }
    }
    &.xx-level-success {
      color: $success;
      border-color: $success;
      @media (any-hover: hover){
        &:hover, &:focus { border-color: $success-hover; color: $success-hover; }
      }
      &:active {
        background: lighten($success, 25%);
        border-color: $success-active;
        color: $success-active;
      }
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
  &.xx-theme-link {
    &.xx-level-info {
      color: $info;
      @media (any-hover: hover){
        &:hover,&:focus { color: $info-hover; }
      }
      &:active { color: $info-active; }
    }
    &.xx-level-warning {
      color: $warning;
      @media (any-hover: hover){
        &:hover,&:focus { color: $warning-hover; }
      }
      &:active { color: $warning-active; }
    }
    &.xx-level-success {
      color: $success;
      @media (any-hover: hover){
        &:hover,&:focus { color: $success-hover; }
      }
      &:active { color: $success-active; }
    }
    &.xx-level-danger {
      color: $error;
      @media (any-hover: hover){
        &:hover,&:focus { color: $error-hover; }
      }
      &:active { color: $error-active; }
    }
  }
}
</style>
