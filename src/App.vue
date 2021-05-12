<template>
  <layout>
    <router-view />
  </layout>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'
import Layout from '@/views/Layout'

export default {
  components: {
    Layout
  },
  setup() {

  },
}
</script>


<style lang="scss">
@import './assets/theme/colors.scss';

body{
  background-color: $color-bg;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
