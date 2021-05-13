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
    <div class="sidebar-profile">
      <div class="sidebar-profile-pic">
        <img
          :src="me.profile.pic"
        >
      </div>
      <div class="sidebar-profile-items">
        <div class="profile-info">
          <p>Kaan Ersoy</p>
          <p class="nickname">
            @kaanersoy
          </p>
        </div>
        <div class="more">
          <base-icon icon="more" />
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
import SidebarItem from '@/components/Sidebar/Item'
import { ROUTES } from '@/components/Sidebar/constants.js'
import BaseIcon from '@/components/BaseIcon'
import MoreMenu from '@/components/Sidebar/MoreMenu'
import { mapGetters } from 'vuex'


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
  computed: {
    ...mapGetters({
      me: 'getMe'
    })
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
    &-profile{
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0 1rem;
      border-radius: 999px;
      &:hover{
        background-color: rgba($color: $color-blue, $alpha: 0.3);
      }
      &-pic{
        width: 3rem;
        img{
          border-radius: 999px;
          width: 100%;
        }
      }
      &-items{
        margin-left: 10px;
        display: flex;
        flex-grow: 1;
        align-items: center;
        justify-content: space-between;
        .profile-info{
          p{
            color: #fff;
            &.nickname{
              color: $color-dark-gray;
            }
          }
        }
        .more{
          width: 2rem;
          height: 2rem;
          svg{
            width: 100%;
            fill: #fff;
            display: block;
          }
        }
      } 
    }
  }
}
</style>