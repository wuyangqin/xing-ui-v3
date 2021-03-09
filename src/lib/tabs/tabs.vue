<template>
  <div class="xx-tabs">
    <div v-for="(title, index) in tabTitles" :key="index">{{ title }}</div>
    <component v-for="(tab, index) in defaults" :is="tab" :key="index"/>
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

<style scoped lang="scss">

</style>
