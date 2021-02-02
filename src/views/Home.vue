<template>
  <div class="home-wrapper">
    <div class="topnavAndBanner">
      <top-nav></top-nav>
      <div class="banner">
        <h1>Xing-UI-V3</h1>
        <h2>基于Vue3的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/wuyangqin/xing-ui-v3" target="_blank">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {
    TopNav
  }
}
</script>

<style scoped lang="scss">

</style>
