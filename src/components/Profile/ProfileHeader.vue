<template>
  <header v-if="me.id">
    <div class="profile-cover-pic">
      <img :src="me.profile.pic_cover">
    </div>
    <div class="profile-header">
      <div class="profile-actions">
        <div class="profile-actions-image">
          <img :src="me.profile.pic_full">
        </div>
        <div class="profile-actions-edit">
          <div
            class="edit-button"
            @click="$store.commit('setEditProfileStatus', true)"
          >
            Edit profile
          </div>
        </div>
      </div>
      <div class="profile-info">
        <p class="profile-info-name">
          {{ me.profile.name }}
        </p>
        <span class="profile-info-username">
          {{ me.profile.nickname }}
        </span>
      </div>
      <div class="profile-description">
        {{ me.profile.description }}
      </div>
      <div class="profile-created-at">
        <span>
          <base-icon icon="link" />
          <a :href="profileWebsite.full_website">{{ profileWebsite.website }}</a>
        </span>
        <span>
          <base-icon icon="calendar" />
          Joined {{ joinedAtDate }}
        </span>
      </div>
      <div class="profile-follower-counts">
        <p>
          {{ me.account.followingCount }}
          <span>Following</span>
        </p>
        <p>
          {{ me.account.followerCount }}
          <span>Followers</span>
        </p>
      </div>
    </div>
  </header>
</template>

<script>
import {mapGetters} from 'vuex'
import moment from 'moment'
import {getMe} from '@/services/api'
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'ProfileHeader',
  components:{
    BaseIcon
  },
  computed:{
    ...mapGetters({
      getMyProfileId: 'getMyProfileId',
      me: 'getMe'
    }),
    profileWebsite(){
      return {
        website: new URL(new URL(this.me.profile.website)).host,
        full_website: this.me.profile.website
      }
    },
    joinedAtDate(){
      return `${moment(this.me.createdAt).format("MMM YYYY")}`
    }
  },
  async mounted(){
    try {
      const response = await getMe({id: this.getMyProfileId});
      this.$store.commit('setMe', response.data);
      return
    } catch (err) {
      this.$notification({
        type: 'error',
        message: 'Error when fetching user data'
      })
    }
  },
  methods:{
    moment
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';
.profile{
  &-cover-pic{
    border-bottom: $border-dark;
    img{
      vertical-align: middle;
    }
  }
  &-actions{
    display: flex;
    align-items: center;
    justify-content: space-between;
    &-image{
      width: 130px;
      height: 130px;
      margin-top: -80px;
      img{
        border: 1px solid $color-dark-gray;
        border-radius: 999px;
        width: 100%;
      }
    }
    &-edit{
      .edit-button{
        border-radius: 999px;
        border: 1px solid $color-blue;
        color: $color-blue;
        font-weight: bold;
        font-size: 1rem;
        padding: 1rem;
        cursor: pointer;
        transition: background-color 80ms ease;
        &:hover{
          background-color: rgba($color: $color-blue, $alpha: 0.1);
        }
      }
    }
  }
  &-info{
    margin-top: 1rem;
    &-name{
      color: #fff;
      margin: 0;
      font-weight: bold;
      font-size: 1.5rem;
    }
    &-username{
      font-size: 1.2rem;
      color: $color-dark-gray;
    }
  }
  &-description{
    margin-top: 1rem;
    color: #fff;
  }
  &-created-at{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    color: $color-dark-gray;
    a{
      color: $color-blue;
      &:hover{
        text-decoration: underline;
      }
    }
    span{
      display: flex;
      align-items: center;
      & + span{
        margin-left: 2rem;
      }
      svg{
        fill: $color-dark-gray;
        margin-right: .5rem;
        width: 1.2rem;
        height: 1.2rem;
      }
    }
  }
  &-follower-counts{
    display: flex;
    color: #fff;
    cursor: pointer;
    margin-top: 1rem;
    p{
      margin: 0;
      & + p{
        margin-left: 1rem;
      }
      span{
        color: $color-dark-gray;
      }
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>