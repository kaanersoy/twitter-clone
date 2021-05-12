<template>
  <component :is="iconComponent" />
</template>

<script>

const icons = {
  home: require('./icons/home').default,
  bookmarks: require('./icons/bookmarks').default,
  explore: require('./icons/explore').default,
  lists: require('./icons/lists').default,
  messages: require('./icons/messages').default,
  more: require('./icons/more').default,
  notifications: require('./icons/notifications').default,
  profile: require('./icons/profile').default,
}

export default {
  name: 'BaseIcon',
  components: {
    ...icons
  },
  props: {
    icon: {
      type: String,
      default: 'home'
    }
  },
  computed: {
    iconComponent(){
      return icons[this.icon]
    }
  }
}
</script>

<style>

</style>