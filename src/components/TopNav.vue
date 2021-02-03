<template>
  <header class="top-nav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </header>
</template>

<script lang="ts">
import { inject, ref } from 'vue'

export default {
  name: 'top-nav',
  setup () {
    const asideVisible = inject<ref<boolean>>('asideVisible')
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return { toggleAside }
    console.log(asideVisible.value);
  }
}

</script>

<style lang="scss">
@import "../assets/css/xing-ui-v3.scss";
.top-nav {
  position: relative;
  background: skyblue;
  display: flex;
  padding: $padding-md;
  z-index: 20;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>
