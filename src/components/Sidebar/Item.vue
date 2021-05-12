<template>
  <div class="sidebar-item">
    <div class="sidebar-item-logo">
      <base-icon
        :icon="icon"
        :icon-color="iconColor"
      />
    </div>
    <div class="sidebar-item-content" />
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon';

export default {
  name: 'SidebarItem',
  components: {
    BaseIcon
  },
  props: {
    icon:{
      type:String,
      default: "more"
    },
    iconColor:{
      type:String,
      default: "#fff"
    }
  }
}
</script>

<style lang="scss" scoped>
 .sidebar-item{
  display: flex;
  &-logo{
    width: 26px;
    height: 26px;
    svg{
      fill: #fff;
    }
  }
 }
</style>