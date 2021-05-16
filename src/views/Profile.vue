<template>
  <div
    class="profile"
  >
    <profile-header />
    <profile-body />
  </div>
</template>

<script>
import ProfileBody from '@/components/Profile/ProfileBody'
import ProfileHeader from '@/components/Profile/ProfileHeader'

import { mapGetters } from 'vuex';

export default {
  name: 'ProfileView',
  components:{
    ProfileBody,
    ProfileHeader
  },
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters(['getMyProfileId']),
  },
  async mounted(){
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.profile{
  .profile-cover-pic{
    img{
      width: 100%;
    }
  }
  &-header{
    padding: 1rem;
  }
}
</style>