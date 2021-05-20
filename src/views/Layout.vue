<template>
  <div class="layout">
    <div class="layout-sidebar">
      <div
        class="layout-sidebar-fixed-container"
        :class="{active: getMobileMenuState}"
      >
        <sidebar />
      </div>
    </div>
    <div class="layout-flow">
      <div class="page-header">
        <div
          v-if="$route.path != '/'"
          class="back-button"
          @click="$router.push('/')"
        >
          <base-icon icon="back" />
        </div>
        <template v-if="$route.name == 'Profile'">
          <div class="profile-info">
            <h2>
              {{ getMe.profile.name }}
            </h2>
            <span>{{ getProfileTweetCount }} tweets</span>
          </div>
        </template>
        <template v-else>
          <h2>{{ $route.name }}</h2>
        </template>
      </div>
      <slot />
    </div>
    <div class="layout-for-you">
      <div class="layout-for-you-fixed">
        <SearchBar />
        <Trends />
      </div>
    </div>
    <tweet-popup v-if="getTweetPopupState" />
    <Lightbox
      v-if="getLightboxState.state"
      :images="getLightboxState.images"
    />
    <div
      class="mobile-menu-toggler"
      @click="$store.commit('setMobileMenuState', !getMobileMenuState)"
    >
      <BaseIcon icon="hamburger" />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Trends from '@/components/Trends'
import SearchBar from '@/components/SearchBar'
import BaseIcon from '@/components/BaseIcon'
import TweetPopup from '@/components/TweetPopup'
import Lightbox from '@/components/Lightbox'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    TweetPopup,
    BaseIcon,
    Trends,
    SearchBar,
    Lightbox
  },
  computed: {
    ...mapGetters([
      'getMe',
      'getTweetPopupState',
      'getProfileTweetCount', 
      'getLightboxState',
      'getMobileMenuState'
    ])
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';
@import '@/assets/variables.scss';

.layout{
  min-height: 100%;
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  &-sidebar{
      width: 100%;
      max-width: 300px;
    &-fixed-container{
      position: fixed;
      width: 100%;
      max-width: inherit;
    }
  }
  &-flow{
    border-right: $border-dark;
    border-left: $border-dark;
    width: 100%;
    max-width: 660px;
    min-height: 100vh;
    .page-header{
      border-bottom: $border-dark;
      padding: .5rem;
      color: #fff;
      display: flex;
      align-items: center;
      h2{
        margin: 1rem 0;
      }
      .back-button{
        width: 2.5rem;
        height: 2.5rem;
        margin-right: 20px;
        padding: 6px;
        border-radius: 999px;
        cursor: pointer;
        &:hover{
          background-color: rgba($color: $color-blue, $alpha: 0.3);
        }
        svg{
          width: 100%;
          height: 100%;
          transform: translateX(-3px);
          fill: $color-blue;
        }
      }
      .profile-info{
        h2{
          margin: 0;
          margin-bottom: 3px;
        }
        span{
          color: $color-dark-gray;
          font-size: 12px;
        }
      }
    }
  }
  &-for-you{
    width: 100%;
    max-width: 330px;
    margin-left: 1rem;
    margin-top: 1rem;
    &-fixed{
      position: fixed;
      width: 100%;
      max-width: inherit;
    }
  }
  .mobile-menu-toggler{
    display: none;
  }
}

@media screen and (max-width: $phone) {
  .layout-sidebar-fixed-container{
    background-color: $color-bg;
    transform: translateX(-100%);
    box-shadow: $shadow-white;
    transition: 200ms ease;
    padding-left: 20px;
    &.active{
      transform: translateX(0%);
      z-index: 666;
    }
  }
  .layout-for-you{
    &-fixed{
      display: none;
    }
  }

  .layout{
    &-for-you{
      display: none;
      max-width: unset;
    }
    &-sidebar{
      max-width: 300px;
      width: unset;
    }
    .mobile-menu-toggler{
      display: unset;
      position: fixed;
      bottom: 1rem;
      left: 1rem;
      width: 3rem;
      height: 3rem;
      padding: 8px;
      border-radius: 999px;
      background-color: $color-blue;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 555;
      svg{
        width: 100%;
        height: 100%;
        fill: #fff;
      }
    }
  }
}
</style>