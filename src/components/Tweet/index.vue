<template>
  <div class="tweet">
    <div class="tweet-owner">
      <img src="https://pbs.twimg.com/profile_images/1344794962697793537/GYEm82zC_normal.jpg">
    </div>
    <div class="tweet-content">
      <div class="tweet-content-header">
        <p>
          {{ tweetData.author.profile.name }}
          <span class="nickname">{{ tweetData.author.profile.nickname }}</span>
          <span>&#183;</span>
          <span class="created-at">{{ moment(tweetData.createdAt).fromNow() }}</span>
        </p>
      </div>
      <div class="tweet-content-body">
        <p>{{ tweetData.content }}</p>
        <div
          v-if="tweetData.photos.length > 0"
          class="tweet-content-body-images"
        >
          <div class="tweet-content-body-images-wrapper">
            <div
              v-for="(tweetPhoto, i) in tweetData.photos"
              :key="i"
              class="tweet-content-image-item"
            >
              <img
                :src="tweetPhoto.url"
                @click="$store.dispatch('setLightbox', tweetImages)"
              >
            </div>
          </div>
        </div>
      </div>
      <div class="tweet-content-actions">
        <div class="action-item comment">
          <base-icon icon="comment" />
          <span>5</span>
        </div>
        <div class="action-item retweet">
          <base-icon icon="retweet" />
          <span>5</span>
        </div>
        <div class="action-item like">
          <base-icon icon="like" />
          <span>5</span>
        </div>
        <div class="action-item comment">
          <base-icon icon="share" />
        </div>
      </div>
    </div>
    <div class="tweet-edit-button">
      <div
        class="tweet-edit-button-icon"
        @click="isEditMenuOpened = !isEditMenuOpened"
      >
        <BaseIcon icon="editTweet" />
      </div>
      <EditTweetPopup
        v-if="isEditMenuOpened"
        :tweet-id="tweetData.id"
        @delete-tweet="handleDelete"
      />
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import EditTweetPopup from '@/components/Tweet/EditTweetPopup'
import moment from 'moment'

export default {
  name: 'Tweet',
  components:{
    BaseIcon,
    EditTweetPopup
  },
  props: {
    tweetData: {
      type: Object,
      default: () => {}
    }
  },
  data(){
    return {
      isEditMenuOpened: false,
    }
  },
  computed:{
    tweetImages(){
      return this.tweetData.photos.map(photo => photo.url)
    }
  },
  mounted(){
    console.log(this.tweetImages);
  },
  methods:{
    moment,
    handleDelete(){
      this.$emit('delete-tweet')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';
@import '@/assets/variables.scss';

.tweet{
  padding: 1rem;
  display: flex;
  transition: 100ms ease background-color;
  &-edit-button{
    position: relative;
    &-icon{
      width: 2rem;
      height: 2rem;
      border-radius: 999px;
      padding: 4px;
      cursor: pointer;
      svg{
        fill: $color-dark-gray;
      }
      &:hover{
        background-color: rgba($color: $color-blue, $alpha: 0.3);
        svg{
          fill: $color-blue
        }
      }
    }
  }
  &:hover{
    background-color: rgba($color: $color-dark-gray, $alpha: 0.2);
  }
  &-owner{
    min-width: 3rem;
    min-height: 3rem;
    img{
      width: 100%;
      border-radius: 999px;
    }
  }
  &-content{
    margin-left: 10px;
    flex-grow: 1;
    &-header{
      p{
        margin: 8px 0;
        font-weight: bold;
        color: #fff;
        span{
          color: $color-dark-gray;
          & + span{
            margin-left: 8px;
          }
          &.nickname{
          }
          &.created-at{

          }
        }
      }
    }
    &-body{
      color: #fff;
      &-images{
        &-wrapper{
          border-radius: 10px;
          overflow: hidden;
          border: $border-light;
          display: flex;
          .tweet-content-image-item{
            cursor: zoom-in;
            & + .tweet-content-image-item{
              border-left: $border-light;
            }
            flex-grow: 1;
            img{
              vertical-align: middle;
              width: 100%;
            }
          }
        }
      }
    }
    &-actions{
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 450px;
      width: 100%;
      .action-item{
        display: flex;
        align-items: center;
        cursor: pointer;
        svg{
          padding: 8px;
          border-radius: 999px;
          display: block;
          width: 36px;
          height: 36px;
          fill: $color-light-gray;
        }
        span{
          color: $color-light-gray;
        }
        &:hover{
          &.comment{
            svg{
              fill: $tweet-action-blue;
              background-color: rgba($color: $tweet-action-blue, $alpha: 0.2);
            }
            span{
              color: $tweet-action-blue;
            }
          }
          &.retweet{
            svg{
              fill: $tweet-action-green;
              background-color: rgba($color: $tweet-action-green, $alpha: 0.2);
            }
            span{
              color: $tweet-action-green;
            }
          }
          &.like{
            svg{
              fill: $tweet-action-red;
              background-color: rgba($color: $tweet-action-red, $alpha: 0.2);
            }
            span{
              color: $tweet-action-red;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: $phone) {
  .tweet{
    &-content{
      &-header{
        span{
          display: none;
        }
        .created-at{
          margin-left: unset;
          display: block;
          color: rgba($color: $color-dark-gray, $alpha: 0.5);
          margin: 5px 0;
        }
        .nickname{
          display: unset;
          color: $color-dark-gray;
        }
      }
      &-actions{
        max-width: unset;
      }
    }
  }
}
</style>