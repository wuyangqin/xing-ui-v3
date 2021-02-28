<template>
  <div class="xx-dialog-overlay"></div>
  <div class="xx-dialog-wrapper">
    <div class="xx-dialog">
      <header>
        标题
        <span class="xx-dialog-close"></span>
      </header>
      <main>
        <p>内容</p>
        <p>内容</p>
        <p>内容</p>
      </main>
      <footer>
        <x-button size="small">取消</x-button>
        <x-button size="small" theme="primary">确定</x-button>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import XButton from './Button.vue'

export default {
  name:'x-Dialog',
  components: {
    XButton
  }
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
    border-bottom: $dialog-border;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: $font-size-lg17;
    font-weight: bold;
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
