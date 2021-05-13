<template>
  <div class="tweet">
    <div class="tweet-owner">
      <img src="https://pbs.twimg.com/profile_images/1344794962697793537/GYEm82zC_normal.jpg">
    </div>
    <div class="tweet-content">
      <div class="tweet-content-header">
        <p>
          Simon Hoiberg 
          <span class="nickname">@SimonHoiberg</span>
          <span>&#183;</span>
          <span class="created-at">2h</span>
        </p>
      </div>
      <div class="tweet-content-body">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime fugit molestiae amet quam adipisci, eius totam necessitatibus, quidem tempore saepe. Commodi maiores beatae rem rerum tenetur, voluptates fugit voluptatibus.</p>
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
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
export default {
  name: 'Tweet',
  components:{
    BaseIcon
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.tweet{
  padding: 1rem;
  display: flex;
  transition: 100ms ease background-color;
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
</style>