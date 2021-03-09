<template>
  <div class="xx-tabs">
    <div class="xx-tabs-nav">
      <div class="xx-tabs-nav-item" v-for="(title,index) in tabTitles" :key="index">{{title}}</div>
    </div>
    <div class="xx-tabs-content">
      <component class="xx-tabs-content-item" v-for="(tab,index) in defaults" :is="tab" :key="index" />
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: 'xx-tabs',
  setup (props, context) {
    const defaults = context.slots.default()
    let tabTitles = []
    defaults.forEach(com => {
      if (com.type.name !== 'xx-tab') {
        throw new Error('Tabs 子标签必须是 Tab 组件')
      }
      tabTitles.push(com.props.label)
    })
    return { defaults, tabTitles }
  }
}
</script>

<style lang="scss">
@import "../../assets/css/xing-ui-v3.scss";

.xx-tabs {
  &-nav {
    display: flex;
    color: $tabs-label-color;
    border-bottom: $tabs-nav-border;
    &-item {
      padding: $padding-sm 0 !important;
      margin: 0 $padding-md !important;
      cursor: pointer;
      &:first-child {
        margin-left: 0 !important;
      }
      &.selected {
        color: $tabs-selected-color;
      }
    }
  }
  &-content {
    padding: $padding-sm 0 !important;
  }
}
</style>
