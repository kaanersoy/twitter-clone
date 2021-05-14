<template>
  <div class="layout">
    <div class="layout-sidebar">
      <sidebar />  
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
        <h2>Home</h2>
      </div>
      <slot />
    </div>
    <div class="layout-for-you">
      some-for-you-bar-goes-there
    </div>
    <tweet-popup v-if="getTweetPopupState" />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import BaseIcon from '@/components/BaseIcon'
import TweetPopup from '@/components/TweetPopup'
import { mapGetters } from 'vuex'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    TweetPopup,
    BaseIcon
  },
  computed: {
    ...mapGetters(['getTweetPopupState'])
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
    }
    &-flow{
      border-right: $border-dark;
      border-left: $border-dark;
      width: 100%;
      max-width: 660px;
      .page-header{
        padding: 0 1rem;
        color: #fff;
      }
    }
    &-for-you{
      width: 100%;
      max-width: 330px;
    }
  }

</style>