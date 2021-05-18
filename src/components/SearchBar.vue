<template>
  <div
    class="searchbar"
    :class="{focused: isFocused}"
  >    
    <div class="searchbar-wrapper">
      <div class="searchbar-icon">
        <BaseIcon icon="search" />
      </div>
      <div class="searchbar-input">
        <input
          type="text"
          placeholder="Search Twitter"
          @focus="toggleFocus"
          @blur="toggleFocus"
        >
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'SearchBar',
  components: {
    BaseIcon,
  },
  data(){
    return {
      isFocused: false
    }
  },
  methods: {
    toggleFocus(){
      this.isFocused = !this.isFocused
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/theme/colors';

.searchbar{
  background-color: rgba($color: $color-dark-gray, $alpha: 0.3);
  padding: 1rem;
  border-radius: 999px;
  margin: 1rem 0;
  margin-top: 0;
  border: 1px solid rgba($color: $color-dark-gray, $alpha: 0);
  transition: border 150ms ease;
  &-wrapper{
    display: flex;
    align-items: center;
  }
  &-icon{
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 1rem;
    svg{
      width: 100%;
      height: 100%;
      fill: #fff;
      transition: border 150ms ease;
    }
  }
  &-input{
    flex-grow: 1;
    input{
      background: transparent;
      color: #fff;
      border: none;
      width: 100%;
      display: block;
      &:focus{
        border: none;
        outline: none;
      }
    }
  }
  &.focused{
    border: 1px solid rgba($color: $color-blue, $alpha: 1);
    svg{
      fill: $color-blue;
    }
  }
}
</style>