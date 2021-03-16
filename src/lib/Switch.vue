<template>
  <button class="xx-switch"
          :class="switchClasses"
          @click="toggle">
    <span>
      <span v-if="loading" class="xx-loadingIndicator"></span>
    </span>
  </button>
</template>

<script lang="ts">
import XIcon from './Icon.vue'
import { computed } from 'vue'

export default {
  components: {
    XIcon
  },
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup (props, context) {
    const toggle = () => {
      let { disabled, loading } = props
      if (!disabled && !loading) {
        context.emit('update:value', !props.value)
      }
    }

    const switchClasses = computed(() => {
      let { value, disabled, loading } = props
      return {
        'checked': value,
        'disabled': disabled || loading,
        loading
      }
    })

    return {
      toggle,
      switchClasses
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/xing-ui-v3.scss";
.xx-switch {
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
    .xx-loadingIndicator {
      margin-right: 0;
      width: 12px;
      height: 12px;
      border-color: $gray-3 $gray-3 $gray-3 transparent;
    }
    >i {
      line-height: $switch-height;
      >svg { width: 13px; height: 13px;
        animation: xx-spin 2s infinite linear; }
    }
  }
  &.checked {
    background: $main-theme-color;
    >span {
      left: calc(100%  - #{$switch-height} + 2px);
    }
  }
  &.disabled { opacity: .5; cursor: not-allowed; }
  &.loading { cursor: default; }
  &:not(.disabled):active {
    >span { width: $switch-height - 1px; }
  }
  &.checked:active {
    >span {
      width: $switch-height - 1px;
      margin-left: -3px;
    }
  }
}
</style>
