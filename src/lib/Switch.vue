<template>
  <button class="x-switch">
    <span></span>
  </button>
</template>

<script lang="ts">
export default {

}
</script>

<style lang="scss">
@import "../assets/css/xing-ui-v3.scss";
.x-switch {
  position: relative;
  height: $switch-height;
  width: $switch-width;
  border: none;
  background: $main-theme-color;
  border-radius: $switch-height / 2;
  >span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $switch-height - 4px;
    height: $switch-height - 4px;
    border-radius: $switch-height / 2;
    background: $white;
  }
  &:hover >span {
    left: calc(100%  - #{$switch-height} + 2px);
  }
}
</style>
