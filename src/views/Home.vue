<template>
  <div class="home-wrapper">
    <div class="topnavAndBanner">
      <top-nav></top-nav>
      <div class="banner">
        <h1>Xing-UI-V3</h1>
        <h2>基于Vue3的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/wuyangqin/xing-ui-v3" target="_blank">GitHub</a>
          <router-link to="/doc/intro">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li v-for="(feat,i) in features" :key="i">
          <div class="home-icon">
            <svg>
              <use :xlink:href="`#x-${feat.icon}`"></use>
            </svg>
          </div>
          <div>
            <h3>{{ feat.title }}</h3>
            <p>{{ feat.description }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/common/TopNav.vue"
import { HOME_FEATURES } from '../components/demoOptions/doc.ts'
import { ref } from 'vue'

export default {
  components: {
    TopNav
  },
  setup () {
    const features = ref<object>(HOME_FEATURES)
    return { features }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/xing-ui-v3-docs.scss";
.home-wrapper {
  height: 100vh;
  overflow: hidden;
  .topnavAndBanner {
    //height: 50vh;
    background-image: linear-gradient(to top, #fff1eb 0%, #cbf1f5 100%);
    clip-path: ellipse(80% 60% at 50% 40%);
    .banner {
      //height: 30vh;
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
    color: $text-color;
    >ul {
      margin-top: $padding-lg * 3;
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
      height: 40vh;
      >ul {
        margin-top: $padding-lg * 2;
        height: 100%;
        flex-direction: column;
        >li{
          margin-bottom: $padding-lg;
          width: 75%;
          display: flex;
          align-items: center;
          text-align: left;
          font-size: $font-size-md15;
          .home-icon {
            margin-right: $padding-lg;
            width: 40px;
            height: 60px;
          }
        }
      }
    }
  }
}
</style>
