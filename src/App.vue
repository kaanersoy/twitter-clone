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
@import './assets/theme/colors.scss';

body{
  background-color: $color-bg;
}

</style>
