<template>
  <div class="demo-page">
    <header class="demo-page-top">
      <h2>{{ option.title }}</h2>
      <p v-if="option.description">{{ option.description }}</p>
    </header>
    <demo-box v-for="(demo, index) in option.option" :key="index"
              :title="demo.title" :introduction="demo.introduction"
              :code="demo.code" :code-type="demo.type">
      <template #components>
        <slot :name="demo.name"></slot>
      </template>
      <template #description v-if="demo.description">
        <p v-html="demo.description"></p>
      </template>
    </demo-box>
    <footer>
      <h3>Attribute</h3>
      <markdown :path="`../../markdown/attr-${option.name}.md`"></markdown>
    </footer>
  </div>
</template>

<script lang="ts">
import DemoBox from './DemoBox.vue'
import Markdown from "./Markdown.vue";

export default {
  name: 'demo-page',
  components: {
    Markdown,
    DemoBox
  },
  props: {
    option: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/css/xing-ui-v3-docs.scss';
</style>
