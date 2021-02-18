<template>
  <svg class="x-icon" :style="{ color }">
    <use :xlink:href="`#x-${name}`"></use>
  </svg>
</template>

<script lang="ts">
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
  width: 1em;
  height: 1em;
  fill:currentColor;
  color: currentColor;
}
</style>
