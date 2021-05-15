<template>
  <div class="home">
    <add-tweet @submit-click="handleTweetSubmit" />
    <hr class="gap">
    <div
      v-if="tweetData"
      class="tweet-wrapper"
    >
      <tweet
        v-for="(tweet, i) in reversedTweetData"
        :key="i"
        :tweet-data="tweet"
      />
    </div>
  </div>
</template>

<script>
import AddTweet from '@/components/AddTweet'
import Tweet from '@/components/Tweet'
import { getTweets, uploadTweet } from '@/services/api'
import { mapGetters } from 'vuex'
import TweetModel from '@/models/Tweet'
import User from '@/models/User'

export default {
  components: {
    AddTweet,
    Tweet
  },
  data: function(){
    return{
      tweetData: []
    }
  },
  computed: {
    ...mapGetters(['getMe']),
    reversedTweetData(){
      return this.tweetData.slice().reverse()
    }
  },
  mounted: async function() {
    this.getTweets()
  },
  methods: {
    async handleTweetSubmit(data){
      const newTweet = new TweetModel(new User(this.getMe) ,data.text);
      try{
        await uploadTweet(newTweet);
        await this.getTweets();
        this.$notification({
          type: 'info',
          message: 'Tweet sended!'
        })
      }catch(err){
        this.$notification({
          type: 'error',
          message: 'Error in send tweet'
        })
      }
    },
    getTweets: async function(){
      const response = await getTweets();
      this.tweetData = response.data.tweets;
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

hr.gap{
  background-color: $hr-color;
  padding: 4px 0;
  margin: 0;
  border: none;
}
</style>