<template>
  <aside>
    <div class="sidebar-logo">
      <base-icon icon="twitter" />
    </div>
    <sidebar-item icon="home" />
  </aside>
</template>

<script>
import SidebarItem from '@/components/Sidebar/Item'
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'Sidebar',
  components:{
    SidebarItem,
    BaseIcon
  }
}
</script>

<style lang="scss">
aside{
  .sidebar{
    &-logo{

    }
  }
}
</style>