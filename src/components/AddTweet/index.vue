<template>
  <div class="add-tweet">
    <div class="add-tweet-profile">
      <img src="">
    </div>
    <div class="add-tweet-content">
      <div class="text-section" />
      <div class="controls">
        <div class="controls-media">
          <div class="controls-media-item">
            <base-icon />
          </div>
        </div>
        <div class="controls-submit">
          <button>Tweet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
export default {
  name: 'AddTweet',
  components:{
    BaseIcon
  }
}
</script>

<style>

</style>