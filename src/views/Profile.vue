<template>
  <div class="profile">
    <div class="profile-wrapper">
      <h1>{{ $route.params.profileId ? $route.params.profileId : 'yok' }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileView'
}
</script>

<style>

</style>