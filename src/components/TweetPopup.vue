<template>
  <div
    ref="popupWrapper"
    class="tweet-popup"
    @click="handleClickOutside"
  >
    <div
      ref="popup"
      class="tweet-popup-wrapper"
    >
      <div class="tweet-popup-header">
        <div
          class="close-button"
          @click="$store.commit('toggleTweetButton')"
        >
          <base-icon icon="close" />
        </div>
      </div>
      <add-tweet @submit-click="handleSubmit" />  
    </div>
  </div>
</template>

<script>
import AddTweet from '@/components/AddTweet'
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'TweetPopup',
  components: {
    AddTweet,
    BaseIcon
  },
  methods:{
    handleClickOutside: function(e) {
      const object = {
        target: e.target, 
        ref: this.$refs.popupWrapper
      }
      if(object.target !== object.ref) return
      this.$store.commit("toggleTweetButton")
    },
    handleSubmit(){
      this.$store.commit("toggleTweetButton")
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.tweet-popup{
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba($color: $color-dark-gray, $alpha: 0.3);
  &-header{
    padding: .5rem;
    .close-button{
      margin-left: auto;
      width: 2rem;
      width: 2rem;
      padding: 5px;
      cursor: pointer;
      border-radius: 999px;
      svg{
        width: 100%;
        height: 100%;
        fill: $tweet-action-red;
      }
      &:hover{
        background: rgba($color: $tweet-action-red, $alpha: 0.3);
      }
    }
  }
  &-wrapper{
    margin-top: 50px;
    border-radius: 1rem;
    min-width: 450px;
    background-color: $color-bg;
  }
}
</style>