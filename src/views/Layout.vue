<template>
  <div class="layout">
    <div class="layout-sidebar">
      <div class="layout-sidebar-fixed-container">
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
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Trends from '@/components/Trends'
import SearchBar from '@/components/SearchBar'
import BaseIcon from '@/components/BaseIcon'
import TweetPopup from '@/components/TweetPopup'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    TweetPopup,
    BaseIcon,
    Trends,
    SearchBar
  },
  computed: {
    ...mapGetters(['getMe','getTweetPopupState', 'getProfileTweetCount'])
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';
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
  }

</style>