<template>
  <div class="profile-body">
    <div class="sections">
      <div class="sections-item active">
        Tweets
      </div>
      <div class="sections-item">
        Tweets & replies
      </div>
      <div class="sections-item">
        Media
      </div>
      <div class="sections-item">
        Likes
      </div>
    </div>
    <div
      v-if="userTweets"
      class="tweets-wrapper"
    >
      <tweet
        v-for="tweet in userTweets"
        :key="tweet.id"
        :tweet-data="tweet"
      />
    </div>
  </div>
</template>

<script>
import { getMyTweets } from '@/services/api'
import Tweet from '@/components/Tweet'
import { mapGetters } from 'vuex'
export default {
  name: 'ProfileBody',
  components:{
    Tweet
  },
  data(){
    return{
      userTweets: []
    }
  },
  computed:{
    ...mapGetters(['getMyProfileId'])
  },
  async mounted(){
    try{
      const response = await getMyTweets({
        id: this.getMyProfileId
      })
      this.userTweets = response.data.tweets;
    }catch(err){
      this.$notification({
        type: 'error',
        message: 'Error when fetching tweets'
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';
.profile-body{
  .sections{
    border-bottom: $border-dark;
    display: flex;
    &-item{
      width: calc(100%/4);
      text-align: center;
      padding: 1.5rem 0;
      color: $color-dark-gray;
      font-weight: bold;
      &.active{
        border-bottom: 2px solid $color-blue;
        color: $color-blue;
      }
    }
  }
}
</style>