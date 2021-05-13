<template>
  <div class="sidebar-profile">
    <div class="sidebar-profile-pic">
      <img
        :src="me.profile.pic"
      >
    </div>
    <div class="sidebar-profile-items">
      <div class="profile-info">
        <p>{{ me.profile.name }}</p>
        <p class="nickname">
          {{ me.profile.nickname }}
        </p>
      </div>
      <div class="more">
        <base-icon icon="more" />
      </div>
    </div>
    <div class="sidebar-profile-popup" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'ProfilePopup',
  components: [
    BaseIcon
  ],
  computed: {
    ...mapGetters({
      me: 'getMe'
    })
  },
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.sidebar-profile{
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
</style>