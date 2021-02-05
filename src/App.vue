<template>
  <router-view></router-view>
</template>

<script>
import { ref, provide } from 'vue'

export default {
  name: 'App',
  setup () {
    const screenWidth = document.documentElement.clientWidth
    const asideVisible = ref(screenWidth <= 500 ? false : true)
    provide('asideVisible', asideVisible)
  }
}
</script>
