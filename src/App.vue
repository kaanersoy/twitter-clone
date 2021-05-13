<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
import 'normalize.css'
import Layout from '@/views/Layout'

export default {
  components: {
    Layout
  },
}
</script>


<style lang="scss">
*{
  box-sizing: border-box;
  &::before, &::after{
    box-sizing: inherit;
  }
}

html, body, :root{
  font-size: 14px;
}
@import './assets/theme/colors.scss';

body{
  background-color: $color-bg;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

</style>
