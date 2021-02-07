<template>
  <router-view></router-view>
</template>

<script>
import { ref, provide } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup () {
    const screenWidth = document.documentElement.clientWidth
    const responsiveWidth = 500
    const asideVisible = ref(screenWidth <= responsiveWidth ? false : true)
    provide('asideVisible', asideVisible)
    router.afterEach(() => {
      if (screenWidth <= responsiveWidth) {
        asideVisible.value = false
      }
    })
  }
}
</script>
