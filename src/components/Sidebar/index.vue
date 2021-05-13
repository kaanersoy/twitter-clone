<template>
  <aside>
    <div class="sidebar-nav">
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
    </div>
    <profile-popup />
  </aside>
</template>

<script>
import SidebarItem from '@/components/Sidebar/Item'
import { ROUTES } from '@/components/Sidebar/constants.js'
import BaseIcon from '@/components/BaseIcon'
import ProfilePopup from '@/components/Sidebar/ProfilePopup'
import MoreMenu from '@/components/Sidebar/MoreMenu'
import { mapGetters } from 'vuex'


export default {
  name: 'Sidebar',
  components:{
    SidebarItem,
    BaseIcon,
    MoreMenu,
    ProfilePopup
  },
  data: function(){
    return {
      ROUTES,
      isMenuOpened: false
    }
  },
  computed: {
    ...mapGetters({
      me: 'getMe'
    })
  },
  methods: {
    toggleMenu: function(){
      this.isMenuOpened = !this.isMenuOpened;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

aside{
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .sidebar{
    &-nav{
      position: relative;
    }
    height: 100%;
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