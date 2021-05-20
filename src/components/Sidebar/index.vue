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
        :required="route.req"        
      >
        {{ route.name }}
      </sidebar-item>
      <sidebar-item
        icon="profile"
        :to="`/${me.username}`"
        required
      >
        Profile
      </sidebar-item>
      <sidebar-item
        icon="more"
        @click="toggleMenu"
      >
        More
        <more-menu v-if="isMenuOpened" />
      </sidebar-item>
      <div
        class="sidebar-tweet-button"
        @click="$store.commit('toggleTweetButton')"
      >
        Tweet
      </div>
    </div>
    <profile-popup />
    <div
      class="mobile-close-menu-button"
      @click="$store.commit('setMobileMenuState', false)"
    >
      <div class="icon">
        <BaseIcon icon="left" />
      </div>
      <span>Close</span>
    </div>
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
@import '@/assets/variables.scss';

aside{
  position: relative;
  width: 100%;
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
    &-tweet-button{
      width: 80%;
      text-align: center;
      padding: 1rem 0;
      cursor: pointer;
      background-color: $color-blue;
      color: #fff;
      font-weight: bold;
      font-size: 1.2rem;
      border-radius: 999px;
      margin-top: 20px;
    }
  }
  .mobile-close-menu-button{
    display: none;
  }
}

@media screen and (max-width: $phone) {
  aside{
    .mobile-close-menu-button{
      position: absolute;
      right: 10px;
      top: 10px;
      display: flex;
      align-items: center;
      padding: 6px;
      border-radius: 999px;
      background-color: $color-blue;
      .icon{
        width: 1.2rem;
        height: 1.2rem;
        svg{
          fill: #fff;
          width: 100%;
          height: 100%;
        }
      }
      span{
        color: #fff;
        font-weight: bold;
        margin-left: 8px;
      }
    }
  }
}
</style>