<template>
  <div class="home">
    <add-tweet />
    <hr class="gap">
    <div class="tweet-wrapper">
      <tweet />
    </div>
  </div>
</template>

<script>
import AddTweet from '@/components/AddTweet'
import Tweet from '@/components/Tweet'
export default {
  components: {
    AddTweet,
    Tweet
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