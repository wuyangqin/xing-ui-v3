<template>
  <div class="xx-tabs">
<!--    <slot></slot>-->
    <component :is="defaults[0]"/>
  </div>
</template>

<script lang="ts">

export default {
  name: 'xx-tabs',
  setup (props, context) {
    const defaults = context.slots.default()
    defaults.forEach(com => {
      if (com.type.name !== 'xx-tab') {
        throw new Error('Tabs 子标签必须是 Tab 组件')
      }
    })
    return { defaults }
  }
}
</script>

<style scoped lang="scss">

</style>
