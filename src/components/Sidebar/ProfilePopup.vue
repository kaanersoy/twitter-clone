<template>
  <div
    class="sidebar-profile-wrapper"
  >
    <div
      class="sidebar-profile"
      @click="toggleMenu"
    >
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
    </div>
    <div
      v-if="isMenuOpened"
      class="sidebar-profile-popup"
    >
      <div class="popup-header">
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
            <base-icon icon="tick" />
          </div>
        </div>
      </div>
      <hr class="popup-spacing">
      <div class="popup-body">
        <div class="popup-body-item">
          <p>Add an existing account</p>
        </div>
        <hr class="popup-spacing">
        <div
          class="popup-body-item"
          @click="handleLogOut"
        >
          <p>Logout from <span>{{ me.profile.nickname }}</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import BaseIcon from '../BaseIcon/index'

export default {
  name: 'ProfilePopup',
  components: {
    BaseIcon
  },
  data: function(){
    return {
      isMenuOpened: false
    }
  },
  computed: {
    ...mapGetters({
      me: 'getMe'
    })
  },
  methods:{
    toggleMenu: function(){
      this.isMenuOpened = !this.isMenuOpened
    },
    handleLogOut(){
      this.$store.dispatch('setLogOut');
      this.$router.push('/login');
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.sidebar-profile{
  display: flex;
  align-items: center;
  width: 100%;
  padding: 4px 1rem;
  margin-bottom: 10px;
  cursor: pointer;
  border-radius: 999px;
  &-wrapper{
    position: relative;
  }
  &:hover{
    background-color: rgba($color: $color-blue, $alpha: 0.3);
  }
  &-pic{
    width: 3rem;
    height: 3rem;
    margin: 6px 0;
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
      user-select: none;
      p{
        margin: 0;
        & + p {
          margin-top: 5px;
        }
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
  &-popup{
    position: absolute;
    z-index: 3;
    width: 105%;
    bottom: calc(100% + 20px);
    left: 0;
    border-radius: 1rem;
    padding: 10px;
    background-color: $color-bg;
    box-shadow: $shadow-white;
    & .popup-spacing{
      border: none;
      background-color: rgba($color: $color-dark-gray, $alpha: 0.2);
      padding-top: 2px;
      margin: 3px;
    }
    .popup-header{
      display: flex;
      width: 100%;
      padding: 8px;
      .more{
        width: 1.5rem;
        height: 1.5rem;
        svg{
          fill: $color-blue;
          width: 100%;
        }
      }
    }
    .popup-body{
      &-item{
        color: #fff;
        font-size: 1.1rem;
        padding: 1rem;
        cursor: pointer;
        &:hover{
          background-color: rgba($color: $color-dark-gray, $alpha: 0.3);
        }
        p{
          margin: 0;
          padding: 0;
        }
        span{
          color: $color-blue;
        }
      }
    }
  }
}
</style>