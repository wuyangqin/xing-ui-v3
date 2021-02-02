<template>
  <header class="top-nav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </header>
</template>

<script lang="ts">

export default {
  name: 'top-nav'
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
