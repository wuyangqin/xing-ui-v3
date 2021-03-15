<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'xx-markdown',
  props: {
    path:{
      type: String,
      default: ''
    }
  },
  setup(props) {
    const content = ref<string>('')
    import(props.path).then((result) => {
      content.value = result.default
    })
    return {
      content
    }
  }
}
</script>

<style scoped lang="scss">

</style>
