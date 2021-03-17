<template>
  <div class="doc-wrapper">
    <top-nav></top-nav>
    <div class="content">
      <aside v-show="asideVisible">
        <dl>
          <template v-for="menu in docRouters" :key="menu.title">
            <dt>
              <h3>{{ menu.title }}</h3>
            </dt>
            <dd v-for="sub in menu.router" :key="sub.url"><router-link :to="sub.url">{{ sub.title }}</router-link></dd>
          </template>
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
import { DOC_ROUTERS } from '../components/demoOptions/doc.ts'
import { inject, ref } from 'vue'

export default {
  name: 'doc',
  components: {
    TopNav
  },
  setup () {
    const asideVisible = inject<ref<boolean>>('asideVisible')
    const docRouters = ref<object>(DOC_ROUTERS)
    return { asideVisible,docRouters }
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
      padding: $padding-lg * 3;
    }
    @media (max-width: $responsive-width) {
      padding: 0;
      main {
        padding: $padding-md;
      }
    }
  }
}
</style>
