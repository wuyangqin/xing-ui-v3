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
          <div class="home-icon">
            <svg>
              <use xlink:href="#x-vue"></use>
            </svg>
          </div>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <div class="home-icon">
            <svg>
              <use xlink:href="#x-typescript"></use>
            </svg>
          </div>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <div class="home-icon">
            <svg>
              <use xlink:href="#x-1024"></use>
            </svg>
          </div>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/common/TopNav.vue"

export default {
  components: {
    TopNav
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/xing-ui-v3-docs.scss";
.home-wrapper {
  .topnavAndBanner {
    background-image: linear-gradient(to top, #fff1eb 0%, #cbf1f5 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    .banner {
      padding: 100px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: $main-color-lg;
      > .actions{
        padding: 8px 0;
        a {
          margin:0 8px;
          background:$main-theme-color;
          display: inline-block;
          $h: 32px;
          height: $h;
          line-height: $h;
          border-radius: $h/2;
          color: $white;
          padding: 0 1em;
        }
      }
    }
  }
  .features {
    text-align: center;
    >ul {
      margin-top: $padding-md;
      display: flex;
      align-items: center;
      justify-content: space-around;
      >li {
        .home-icon {
          display: inline-block;
          width: 64px;
          height: 100px;
        }
      }
    }
  }
  @media (max-width: $responsive-width) {
    .features {
      >ul {
        flex-direction: column;
      }
    }
  }
}
</style>
