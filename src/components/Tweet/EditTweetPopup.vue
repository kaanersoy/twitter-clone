<template>
  <div class="edit-tweet-popup">
    <div
      class="edit-tweet-popup-item edit"
      @click="handleEdit"
    >
      <div class="icon">
        <BaseIcon icon="pen" />
      </div>
      <span>Edit Tweet</span>
    </div>
    <div
      class="edit-tweet-popup-item delete"
      @click="handleDelete"
    >
      <div class="icon">
        <BaseIcon icon="trash" />
      </div>
      <span>Delete Tweet</span>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import { deleteTweet } from '@/services/api'

export default {
  name: 'EditTweetPopup',
  components:{
    BaseIcon
  },
  props: {
    tweetId: {
      type: String,
      default: ''
    }
  },
  methods:{
    async handleDelete(){
      try{
        await deleteTweet({
          tweetId: this.tweetId
        });
        this.$notification({
          type: 'success',
          message: `Tweet deleted.`
        })
        this.$emit('delete-tweet')
      }catch(err){
        this.$notification({
          type: 'error',
          message: 'Error when delete tweet'
        })
      }
    },
    handleEdit(){
      this.$emit('edit-tweet')
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.edit-tweet-popup{
  position: absolute;
  right: 0;
  top: 2rem;
  border-radius: 1rem;
  box-shadow: $shadow-white;
  &-item{
    display: flex;
    align-items: center;
    width: 180px;
    cursor: pointer;
    padding: 1rem;
    border-radius: .5rem;
    background-color: $color-bg;
    &:hover{
      background-color: rgba($color: $hr-color, $alpha: 1);
    }
    .icon{
      width: 1.2rem;
      height: 1.2rem;
      svg{
        width: 100%;
        height: 100%;
      }
    }
    span{
      line-height: 1.5rem;
      margin-left: 1rem;
      color: #fff;
    }
    &.delete{
      svg{
        fill: rgba($color: $tweet-action-red, $alpha: 1);
      }
      span{
        color: $tweet-action-red;
      }
    }
    &.edit{
      svg{
        fill: $color-blue 
      }
      span{
        color: $color-blue;
      }
    }
  }
}
</style>