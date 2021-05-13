<template>
  <div class="add-tweet">
    <div class="add-tweet-profile">
      <img :src="me.profile.pic">
    </div>
    <div class="add-tweet-content">
      <div class="text-section">
        <textarea
          v-model="tweetContent.text"
          placeholder="What's happening?"
        />
      </div>
      <div class="controls">
        <div class="controls-media">
          <div class="controls-media-item">
            <base-icon icon="image" />
          </div>
          <div class="controls-media-item">
            <base-icon icon="gif" />
          </div>
          <div class="controls-media-item">
            <base-icon icon="graph" />
          </div>
          <div class="controls-media-item">
            <base-icon icon="schedule" />
          </div>
        </div>
        <div class="controls-submit">
          <button :disabled="!hasTweetText">
            Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import {mapGetters} from 'vuex'
export default {
  name: 'AddTweet',
  components:{
    BaseIcon
  },
  data: function() {
    return {
      tweetContent: {
        text: ''
      }
    };
  },
  computed:{
    ...mapGetters({
      me: 'getMe'
    }),
    hasTweetText(){
      return this.tweetContent.text && this.tweetContent.text.length > 0 
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/theme/colors';

.add-tweet{
  padding: 10px 1rem;
  padding-bottom: 0;
  display: flex;
  width: 100%;
  border-top: $border-dark;
  border-bottom: $border-dark;
  &-profile{
    width: 4rem;
    height: 4rem;
    img{
      border-radius: 999px;
      width: 100%;
    }
  }
  &-content{
    margin-left: 15px;
    width: 100%;
    .text-section{
      width: 100%;
      textarea{
        appearance: none;
        -webkit-appearance: none;
        display: block;
        padding: 12px;
        font-size: 1.5rem;
        resize: vertical;
        background-color: transparent;
        border: none;
        width: 100%; 
        min-height: 5rem;
        max-height: 10rem;
        border-radius: 5px;
        color: #fff;
        &:focus{
          border: none;
          outline: none;
        }
      }
    }
    .controls{
      border-top: $border-dark;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;
      &-media{
        display: flex;
        gap: 4px;
        &-item{
          width: 32px;
          height: 32px;
          border-radius: 999px;
          cursor:pointer;
          padding: 5px;
          svg{
            width: 100%;
            fill: $color-blue
          }
          &:hover{
            background-color: rgba($color: $color-blue, $alpha: 0.3);
          }
        }
      }
      &-submit{
        button{
          background-color: $color-blue;
          color: #fff;
          font-weight: bold;
          padding: 10px 16px;
          outline: none;
          border: none;
          border-radius: 9999px;
          &:disabled{
            background-color: rgba($color: $color-blue, $alpha: 0.3);
            color: rgba($color: #fff, $alpha: 0.3);
          }
        }
      }
    }
  }
}
</style>