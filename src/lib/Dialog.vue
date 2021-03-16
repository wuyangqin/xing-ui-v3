<template>
  <template v-if="visible">
    <Teleport to="#app">
      <div class="xx-dialog-overlay" @click="onClickOverlay"></div>
      <div class="xx-dialog-wrapper">
        <div class="xx-dialog">
          <header :class="{ 'title': title || $slots.title }">
            <div v-if="$slots.title" class="title-slot">
              <slot name="title"></slot>
            </div>
            <span v-else>{{ title }}</span>
            <span class="xx-dialog-close" @click="close"></span>
          </header>
          <main>
            <slot v-if="$slots.content" name="content"></slot>
            <div v-else>{{ content }}</div>
          </main>
          <footer>
            <x-button size="small" @click="onCancel">取消</x-button>
            <x-button size="small" theme="primary" @click="onConfirm">确定</x-button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>

<script lang="ts">
import XButton from './Button.vue'

export default {
  name:'x-Dialog',
  components: {
    XButton
  },
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
  },
  setup (props, context) {
    const { closeOnClickOverlay, onConfirm: propsOnConfirm, onCancel: propsOnCancel} = props
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (closeOnClickOverlay) {
        close()
      }
    }
    const onCancel = () => {
      propsOnCancel?.()
      context.emit('onCancel')
      close()
    }
    const onConfirm = () => {
      if (propsOnConfirm?.() !== false) { // 是否有propsOnConfirm且propsOnConfirm的返回值不为false
        close()
      }
    }
    return {
      close,
      onClickOverlay,
      onCancel,
      onConfirm
    }
  },
}
</script>

<style lang="scss">
@import "../assets/css/xing-ui-v3.scss";

$border-color: #d9d9d9;
.xx-dialog {
  min-width: $dialog-min-width;
  max-width: 90%;
  background: $white;
  border-radius: $border-radius;
  box-shadow: $dialog-box-shadow;

  &-overlay { @extend %xx-common-overlay; }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1010;
  }

  > header {
    padding: $dialog-padding;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: $font-size-lg17;
    font-weight: bold;
    &.title { border-bottom: $dialog-border; }
    .title-slot {
      display: flex;
      align-items: center;
    }
  }

  > main {
    padding: $dialog-padding;
  }

  > footer {
    padding: $dialog-padding;
    text-align: right;
    .xx-button {
      margin-left: $padding-md;
    }
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: $gray-6;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    @media (any-hover: hover) {
      &:hover {
        &::before,
        &::after {
          background: $main-theme-color;
        }
      }
    }
  }
}
</style>
