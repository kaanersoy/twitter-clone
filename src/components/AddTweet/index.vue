<template>
  <div class="add-tweet">
    <div class="add-tweet-profile">
      <img :src="me.profile.pic">
    </div>
    <div class="add-tweet-content">
      <div class="tweet-section">
        <textarea
          v-model="tweetContent.text"
          placeholder="What's happening?"
        />
        <div
          v-if="tweetContent.imageList"
          class="tweet-section-images"
        >
          <div
            v-for="(image, i) in tweetContent.imageList"
            :key="i"
            class="image-container"
          >
            <img :src="image.url">
            <div
              class="close-button"
              @click="deleteImage(i)"
            >
              <base-icon icon="close" />
            </div>
          </div>
        </div>
      </div>
      <div class="controls">
        <div class="controls-media">
          <div
            class="controls-media-item"
            @click="$refs.uploadImageInput.click()"
          >
            <base-icon icon="image" />
            <input
              ref="uploadImageInput"
              type="file"
              accept="image/*"
              hidden
              @change="showFiles"
            >
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
          <button
            :disabled="!hasTweetText()"
            @click="handleSubmit"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref , getCurrentInstance} from 'vue'
import BaseIcon from '@/components/BaseIcon'
import { mapGetters } from 'vuex'
import Tweet from '@/models/Tweet'
import User from '@/models/User'
import {uploadTweet} from '@/services/api'
import { useStore } from 'vuex'

export default {
  name: 'AddTweet',
  components:{
    BaseIcon
  },
  setup(props, context){
    const tweetContent = ref(defaultTweetContent())
    const store = useStore();

    const app = getCurrentInstance();
    const $notification = app.parent.appContext.config.globalProperties.$notification;

    function defaultTweetContent(){
      return {
        text: '',
        imageList: []
      }
    }
    
    async function handleSubmit(){
      const newTweetContent = {
        text: tweetContent.value.text,
        photos: tweetContent.value.imageList
      }
      const newTweet = new Tweet(new User(store.getters.getMe), newTweetContent);
      try{
        await uploadTweet(newTweet);
        $notification({
          type: 'info',
          message: 'Tweet sent!'
        })
      }catch(err){
        $notification({
          type: 'error',
          message: 'Error in send tweet'
        })
      }

      context.emit('submit-click')
      tweetContent.value = defaultTweetContent();
    }

    function hasTweetText(){
      return tweetContent.value.text.length > 0 && tweetContent.value.text
    }

    function showFiles(e){
      const [file] = e.target.files;
      const url = URL.createObjectURL(file);
      tweetContent.value.imageList.push({url})
    }

    function deleteImage(index){
      tweetContent.value.imageList.splice(index, 1)
    }

    return {
      tweetContent,
      handleSubmit,
      hasTweetText,
      showFiles,
      deleteImage
    }
  },
  computed:{
    ...mapGetters({
      me: 'getMe'
    }),
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
    .tweet-section{
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
      &-images{
        display: flex;
        padding: 1rem;
        .image-container{
          & + .image-container{
            margin-left: 15px;
          }
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          flex-grow: 1;
          img{
            width: 100%;
          }
          .close-button{
            position: absolute;
            background-color: rgba($color: $color-dark-gray, $alpha: 0.3);
            top: 0;
            right: 0;
            cursor: pointer;
            margin-top: 10px;
            margin-right: 10px;
            width: 2rem;
            height: 2rem;
            border-radius: 999px;
            padding: 7px;
            svg{
              width: 100%;
              height: 100%;
              fill: #fff;
            }
          }
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
          cursor: pointer;
          background-color: $color-blue;
          color: #fff;
          font-weight: bold;
          padding: 10px 16px;
          outline: none;
          border: none;
          border-radius: 9999px;
          &:disabled{
            cursor: no-drop;
            background-color: rgba($color: $color-blue, $alpha: 0.3);
            color: rgba($color: #fff, $alpha: 0.3);
          }
        }
      }
    }
  }
}
</style>