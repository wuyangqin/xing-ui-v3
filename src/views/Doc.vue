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
import TopNav from "../components/common/TopNav.vue"
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
  height: 100vh;
  overflow: hidden;
  .content {
    height: 100vh;
    overflow-y: auto;
    @extend %xx-scrollbar;
    box-sizing: border-box;
    padding-left: $aside-width;
    aside {
      overflow-y: auto;
      position: fixed;
      top: 0;
      left: 0;
      width: $aside-width;
      height: 100vh;
      z-index: 1000;
      padding: $content-padding-top 0;
      background: $white;
      border-right: $main-border;
      @extend %xx-scrollbar;
      >dl {
        >dt {
          line-height: 48px;
          >h3 {
            padding: 0 $padding-md;
          }
        }
        >dd {
          line-height: 40px;
          text-indent: 1em;
          >a {
            display: block;
            padding: $padding-base $padding-md;
            text-decoration: none;
            &.router-link-active {
              position: relative;
              color: $main-theme-color;
              font-weight: bold;
              &:after{
                content:'';
                display: block;
                position: absolute;
                top: 0;
                left: 0;
                width: 3px;
                height: 100%;
                border-radius: $border-radius;
                background: $main-active-color;
                animation: xx-large $duration-fast linear;
              }
            }
            @media (any-hover: hover) {
              &:hover:not(.router-link-active) {
                color: $main-hover-color;
              }
            }
          }
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
