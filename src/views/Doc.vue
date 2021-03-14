<template>
  <div class="doc-wrapper">
    <top-nav></top-nav>
    <div class="content">
      <aside v-show="asideVisible">
        <dl>
          <dt>
            <h3>文档</h3>
          </dt>
          <dd><router-link to="/doc/intro">介绍</router-link></dd>
          <dd><router-link to="/doc/install">安装</router-link></dd>
          <dd><router-link to="/doc/get-started">开始使用</router-link></dd>
          <dt>
            <h3>组件列表</h3>
          </dt>
          <dd><router-link to="/doc/switch">Switch 开关</router-link></dd>
          <dd><router-link to="/doc/button">Button 按钮</router-link></dd>
          <dd><router-link to="/doc/dialog">Dialog 对话框</router-link></dd>
          <dd><router-link to="/doc/tabs">Tabs 标签页</router-link></dd>
        </dl>
      </aside>
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue"
import { inject, ref } from 'vue'

export default {
  name: 'doc',
  components: {
    TopNav
  },
  setup () {
    const asideVisible = inject<ref<boolean>>('asideVisible')
    return { asideVisible }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/xing-ui-v3-docs.scss";

.doc-wrapper {
  .content {
    box-sizing: border-box;
    padding-left: $aside-width;
    aside {
      position: fixed;
      top: 0;
      left: 0;
      width: $aside-width;
      height: 100vh;
      z-index: 1000;
      padding: $padding-md;
      padding-top: $top-nav-height + 20px;
      background: $gray-2;
      >dl {
        >dt {
          line-height: 48px;
        }
        >dd {
          line-height: 40px;
          text-indent: 1em;
        }
      }
    }
    main {
      padding: $padding-lg * 2;
    }
    @media (max-width: $responsive-width) {
      padding: 0;
      main {
        padding: $padding-lg;
      }
    }
  }
}
</style>
