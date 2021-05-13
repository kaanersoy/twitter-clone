<template>
  <aside>
    <div class="sidebar-logo">
      <router-link to="/">
        <base-icon icon="twitter" />
      </router-link>
    </div>
    <sidebar-item
      v-for="(route, i) in ROUTES"
      :key="i"
      :icon="route.name.toLowerCase()"
      :to="route.path"
    >
      {{ route.name }}
    </sidebar-item>
    <sidebar-item
      icon="profile"
      to="/profile"
    >
      Profile
    </sidebar-item>
    <sidebar-item
      icon="more"
      @click="toggleMenu"
    >
      More
    </sidebar-item>
  </aside>
</template>

<script>
import SidebarItem from '@/components/Sidebar/Item'
import { ROUTES } from '@/components/Sidebar/constants.js'
import BaseIcon from '@/components/BaseIcon'


export default {
  name: 'Sidebar',
  components:{
    SidebarItem,
    BaseIcon
  },
  data: function(){
    return {
      ROUTES,
      isMenuOpened: true
    }
  },
  methods: {
    toggleMenu: function(){
      this.isMenuOpened = !this.isMenuOpened;
      console.log("toggled")
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

aside{
  .sidebar{
    &-logo{
      width: 2rem;
      height: 2rem;
      padding: 12px;
      border-radius: 999px;
      transition: 200ms ease-in-out;
      svg{
        fill: #fff;
      }
      &:hover{
        background-color: rgba($color: $color-blue, $alpha: 0.2);
        svg{
          fill: #fff;
        }
      }
    }
  }
}
</style>