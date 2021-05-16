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
          <div class="edit-button">
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
  data(){
    return{
      me: {}
    }
  },
  computed:{
    ...mapGetters(['getMyProfileId']),
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
      this.me = response.data;
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

<style>

</style>