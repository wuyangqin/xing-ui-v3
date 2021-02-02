<template>
  <h3>导航栏 |
    <router-link to="/">🐏羊儿</router-link>
    <router-link to="/xx">⭐星星</router-link>
  </h3>
  <hr>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
