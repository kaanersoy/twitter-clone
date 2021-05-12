<template>
  <router-link :to="to">
    <div class="sidebar-item">
      <div class="sidebar-item-logo">
        <base-icon
          :icon="icon"
          :icon-color="iconColor"
        />
      </div>
      <div class="sidebar-item-content">
        <slot />
      </div>
    </div>
  </router-link>
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
    },
    to: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';
a{
  display: block;
  text-decoration: none;
}

.sidebar-item{
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 12px;
  border-radius: 999px;
  transition: 200ms ease-in-out;
  &-logo{
    width: 2rem;
    height: 2rem;
    svg{
      fill: #fff;
    }
  }
  &-content{
    margin: 0 20px;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
  }
  &:hover{
    background-color: rgba($color: $color-blue, $alpha: 0.2);
    &-logo{
      svg{
        fill: #fff;
      }
    }
    &-content{
    }
  }
}

.router-link-active, .router-link-exact-active{
  .sidebar-item{
    &-logo{
      svg{
        fill: $color-blue;
      }
    }
    &-content{
      color: $color-blue;
    }
  }
}
</style>