<template>
  <div class="loading-screen">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      style="margin: auto; background: transparent none repeat scroll 0% 0%; display: block; shape-rendering: auto;"
      width="50px"
      height="50px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke="#1da1f2"
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';
.loading-screen{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 222;
  cursor: wait;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba($color: $color-light-gray, $alpha: 0.3);
}
</style>