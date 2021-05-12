<template>
  <div class="layout">
    <div class="layout-sidebar">
      <sidebar />  
    </div>
    <div class="layout-flow">
      <slot />
    </div>
    <div class="layout-for-you">
      some-for-you-bar-goes-there
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'

export default {
  name: 'Layout',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss">
  .layout{
    max-width: 1320px;
    display: flex;
    &-sidebar{
      width: 275px;
    }
    &-flow{
      width: 650px;
    }
    &-for-you{
      width: 300px;
    }
  }

</style>