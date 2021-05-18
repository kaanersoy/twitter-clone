<template>
  <transition
    name="notification"
    mode="in-out"
  >
    <div
      v-if="isActive"
      class="notification"
      :class="data.type"
    >
      <div class="notification-wrapper">
        {{ data.message }}
      </div>
      <div
        class="close-icon"
        @click="isActive = false"
      >
        <base-icon icon="close" />
      </div>
    </div>
  </transition>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'Notification',
  components:{
    BaseIcon
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: 0
    }
  },
  data: function(){
    return {
      isActive: false
    }
  },
  mounted() {
    setTimeout(() => this.isActive = true, 200)
    setTimeout(() => this.isActive = false, 3000)
    setTimeout(() => this.$store.commit('deleteNotification', this.index), 3100)
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.notification{
  position: fixed;
  &.error{
    background-color: rgba($color: $tweet-action-red , $alpha: 0.8);
  }
  &.success{
    background-color: rgba($color: $tweet-action-green , $alpha: 0.8);
  }
  &.info{
    background-color: rgba($color: $tweet-action-blue , $alpha: 0.8);
  }
  top: 10px;
  left: 50%;
  padding: 1rem 2rem;
  border-radius: 8px;
  transform: translate(-50%, 0%);
  text-align: center;
  color: #fff;
  &-wrapper{
    position: relative;
  }
  .close-icon{
    position: absolute;
    right: 6px;
    top: 3px;
    width: 10px;
    height: 10px;
    cursor: pointer;
    svg{
      width: 100%;
      height: 100%;
      fill: #fff;
    }
  }
}

.notification-enter-active,
.notification-leave-active {
  transition: transform 150ms ease-in-out;
}

.notification-enter-from,
.notification-leave-to {
  transform: translate(-50%, -200%);
}
</style>