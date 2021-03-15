<template>
  <div class="xx-tabs">
    <div class="xx-tabs-nav" ref="navContainer">
      <div class="xx-tabs-nav-item"
           v-for="(pane,index) in tabPanes"
           :class="{ selected: pane.name === selected }"
           :ref="el => { if (pane.name === selected) selectedItem = el }"
           :key="index" @click="changeTab(pane.name)">
        {{ pane.label }}
      </div>
      <div class="xx-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="xx-tabs-content">
      <component class="xx-tabs-content-item" :is="currentTab" :key="selected" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  computed,
  watchEffect,
  onMounted
} from 'vue'

export default {
  name: 'xx-tabs',
  props: {
    selected: {
      type: String,
      default: ''
    }
  },
  setup (props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const navContainer = ref<HTMLDivElement>(null)
    const getIndicatorAttr = () => {
      const { width } = selectedItem.value.getBoundingClientRect()
      const { left: containerLeft } = navContainer.value.getBoundingClientRect()
      const { left: selectedItemLeft } = selectedItem.value.getBoundingClientRect()
      const left = selectedItemLeft - containerLeft
      indicator.value.style.left = left + 'px'
      indicator.value.style.width = width + 'px'
    }
    onMounted(()=>{
      watchEffect(getIndicatorAttr, { flush:'post' }) // Vue3正式版默认flush为pre（即在渲染前执行watchEffect）
    })

    const defaults = context.slots.default()
    defaults.forEach(pane => {
      if (pane.type.name !== 'xx-tab') {
        throw new Error('Tabs 子标签必须是 Tab 组件')
      }
    })

    const tabPanes = defaults.map(pane => {
      return {
        label:pane.props.label,
        name: pane.props.name
      }
    })

    const currentTab = computed(() => {
      return defaults.filter(pane => pane.props.name === props.selected)[0]
    })

    const changeTab = (name: string) => {
      context.emit('update:selected', name)
    }

    return {
      selectedItem,
      indicator,
      navContainer,
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
    position: relative;

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

    &-indicator {
      position: absolute;
      height: $tabs-indicator-height;
      background: $tabs-selected-color;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all $tabs-indicator-duration;
    }
  }
  &-content {
    padding: $padding-sm 0 !important;
  }
}
</style>
