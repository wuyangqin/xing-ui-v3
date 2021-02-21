<template>
  <div class="x-button-dv" :size="size">
    <button class="x-button" v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>

<script>

export default {
  name: 'x-button',
  inheritAttrs: false,
  setup (props, context) {
    const { size, ...rest } = context.attrs // 将事件绑定给button，其余属性绑定给外层div
    return { size, rest }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/xing-ui-v3.scss";
.x-button-dv {
  .x-button {
    padding: .5em 1em;
    background: $main-theme-color;
    border: none;
    border-radius: $border-radius;
    color: $white;
    cursor: pointer;
  }
}
</style>
