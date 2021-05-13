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
    <more-menu v-if="isMenuOpened" />
  </aside>
</template>

<script>
import SidebarItem from '@/components/Sidebar/Item'
import { ROUTES } from '@/components/Sidebar/constants.js'
import BaseIcon from '@/components/BaseIcon'
import MoreMenu from '@/components/Sidebar/MoreMenu'


export default {
  name: 'Sidebar',
  components:{
    SidebarItem,
    BaseIcon,
    MoreMenu
  },
  data: function(){
    return {
      ROUTES,
      isMenuOpened: false
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
  position: relative;
  .sidebar{
    &-logo{
      width: 50px;
      height: 50px;
      padding: 10px;
      border-radius: 999px;
      transition: 200ms ease-in-out;
      svg{
        display: block;
        width: 100%;
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