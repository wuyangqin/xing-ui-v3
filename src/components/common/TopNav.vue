<template>
  <header class="top-nav">
    <div class="toggle-icon" @click="toggleAside">
      <svg>
        <use xlink:href="#x-toggle"></use>
      </svg>
    </div>
    <div class="logo">
      <router-link to="/">
        <svg>
          <use xlink:href="#x-logo"></use>
        </svg>
      </router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
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
@import "../../assets/css/xing-ui-v3-docs";
.top-nav {
  position: relative;
  background: $white;
  display: flex;
  align-items: center;
  padding: $padding-md;
  z-index: 1004;
  height: $top-nav-height;
  box-shadow: $box-shadow;
  > .toggle-icon {
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    display: none;
  }
  > .logo {
    max-width: 6em;
    width: 2.5em;
  }
  > .menu {
    margin-left: auto;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    color: $main-color-lg;
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
