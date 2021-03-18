<template>
  <svg class="xx-icon" :style="{ color }">
    <use :xlink:href="`#x-${name}`"></use>
  </svg>
</template>

<script lang="ts">
import './svg.js'

export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

<style lang="scss">
.xx-icon {
  width: 1em!important;
  height: 1em!important;
  fill:currentColor;
  color: currentColor;
}
</style>
