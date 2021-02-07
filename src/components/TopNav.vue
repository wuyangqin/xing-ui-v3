<template>
  <header class="top-nav">
    <div class="toggle-icon" @click="toggleAside"></div>
    <div class="logo">LOGO</div>
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
  }
}

</script>

<style lang="scss">
@import "../assets/css/xing-ui-v3-docs.scss";
.top-nav {
  position: relative;
  background: skyblue;
  display: flex;
  align-items: center;
  padding: $padding-md;
  z-index: 20;
  height: $top-nav-height;
  > .toggle-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 15px;
    height: 15px;
    background-color: $gray-2;
    display: none;
  }
  > .logo {
    max-width: 6em;
    margin: 0 1em;
  }
  > .menu {
    margin-left: auto;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  @media (max-width: $responsive-width) {
    justify-content: center;
    > .toggle-icon { display: inline-block; }
    > .log { margin: 0 auto; }
    > .menu { display: none; }
  }
}
</style>
