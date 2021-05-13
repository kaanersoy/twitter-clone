<template>
  <div class="layout">
    <div class="layout-sidebar">
      <sidebar />  
    </div>
    <div class="layout-flow">
      <div class="page-header">
        <div
          v-if="true"
          class="back-button"
        />
        <h2>Home</h2>
      </div>
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
    max-width: 1050px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    &-sidebar{
      width: 100%;
      max-width: 300px;
    }
    &-flow{
      width: 100%;
      max-width: 650px;
      .page-header{
        color: #fff;
      }
    }
    &-for-you{
      width: 100%;
      max-width: 300px;
    }
  }

</style>