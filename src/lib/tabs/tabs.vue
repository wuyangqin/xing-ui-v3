<template>
  <div class="xx-tabs">
    <div class="xx-tabs-nav">
      <div class="xx-tabs-nav-item"
           :class="{ selected: pane.name === selected}"
           v-for="(pane,index) in tabPanes"
           :key="index" @click="changeTab(pane.name)">
        {{ pane.label }}
      </div>
    </div>
    <div class="xx-tabs-content">
      <component class="xx-tabs-content-item" :is="currentTab" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue'

export default {
  name: 'xx-tabs',
  props: {
    selected: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const defaults = context.slots.default()
    let tabPanes = []
    defaults.forEach(pane => {
      if (pane.type.name !== 'xx-tab') {
        throw new Error('Tabs 子标签必须是 Tab 组件')
      }
      tabPanes.push({
        label:pane.props.label,
        name: pane.props.name
      })
    })

    const currentTab = computed(() => {
      return defaults.filter(pane => pane.props.name === props.selected)[0]
    })

    const changeTab = (name: string) => {
      context.emit('update:selected', name)
    }
    return {
      defaults,
      tabPanes,
      currentTab,
      changeTab
    }
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
