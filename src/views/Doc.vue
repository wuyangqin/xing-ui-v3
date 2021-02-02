<template>
  <div class="doc-wrapper">
    <top-nav></top-nav>
    <div class="content">
      <aside>
        <dl>
          <dt>
            <h3>组件列表</h3>
          </dt>
          <dd><router-link to="doc/switch">Switch 开关</router-link></dd>
          <dd><router-link to="doc/button">Button 按钮</router-link></dd>
          <dd><router-link to="doc/dialog">Dialog 对话框</router-link></dd>
          <dd><router-link to="doc/tabs">Tabs 标签页</router-link></dd>
        </dl>
      </aside>
      <main>主内容</main>
    </div>
  </div>
</template>

<script>
import TopNav from "../components/TopNav.vue";

export default {
  components: {
    TopNav
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/xing-ui-v3.scss";

.doc-wrapper {
  .content {
    aside {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 100vh;
      padding: $padding-md;
      padding-top: 80px;
      background: $gray-2;
      >dl {
        >dt {
          line-height: 40px;
        }
        >dd {
          line-height: 36px;
          text-indent: 1em;
        }
      }
    }
  }
}
</style>
