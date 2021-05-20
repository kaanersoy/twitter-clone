<template>
  <div
    ref="lightboxWrapper"
    class="lightbox"
    @click="handleClickOutside"
  >
    <div class="lightbox-wrapper">
      <div
        class="lightbox-wrapper-item"
      >
        <img
          :src="images[currentImage]"
          alt=""
        >
      </div>
    </div>
    <div
      class="lightbox-close-icon"
      @click="$store.dispatch('closeLightbox')"
    >
      <BaseIcon icon="close" />
    </div>
    <div
      v-if="hasMultipleImages"
      class="lightbox-controls"
    >
      <div
        class="lightbox-controls-left"
        @click="decreaseImageState"
      >
        <BaseIcon icon="left" />
      </div>
      <div
        class="lightbox-controls-right"
        @click="increaseImageState"
      >
        <BaseIcon icon="right" />
      </div>
    </div>
    <div
      v-if="hasMultipleImages"
      class="lightbox-current-image"
    >
      {{ `${currentImage+1} / ${images.length}` }}
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'Lightbox',
  components: {
    BaseIcon
  },
  props:{
    images: {
      type: Array,
      default: () => []
    }
  },
  data(){
    return {
      currentImage: 0,
    }
  },
  computed:{
    hasMultipleImages(){
      return this.images.length > 1
    }
  },
  methods: {
    increaseImageState(){
      if(this.currentImage == this.images.length - 1){
        return this.currentImage = 0
      }
      this.currentImage++;
    },
    decreaseImageState(){
      if(this.currentImage == 0){
        return this.currentImage = this.images.length - 1
      }
      this.currentImage--;
    },
    handleClickOutside: function(e) {
      const object = {
        target: e.target, 
        ref: this.$refs.lightboxWrapper
      }
      if(object.target !== object.ref) return
      this.$store.dispatch("closeLightbox")
    },
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.lightbox{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba($color: $color-dark-gray, $alpha: 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  &-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 80vh;
    max-width: 65%;
    &-item{
      max-height: 80%;
      max-width: 80%;
      img{
        max-height: 100%;
        max-width: 100%;
        -webkit-user-select: none;
        user-select: none;
      }
    }
  }
  &-close-icon{
    width: 2.5rem;
    height: 2.5rem;
    padding: 8px;
    position: absolute;
    right: 0;
    top: 0;
    svg{
      width: 100%;
      height: 100%;
      fill: rgba($color: $tweet-action-red, $alpha: 1.0);
    }
  }
  &-controls{
    & > *{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      svg{
        fill: #fff;
      }
    }
    &-left{
      left: 10px;
    }
    &-right{
      right: 10px;
    }
  }
  &-current-image{
    width: 100%;
    position: absolute;
    bottom: 10px;
    left: 0;
    text-align: center;
    font-weight: bold;
    color: #fff;
    font-weight: bold;
    z-index: 5;
    -webkit-user-select: none;
    user-select: none;
  }
}
</style>