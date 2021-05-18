<template>
  <div
    ref="popupWrapper"
    class="edit-profile-popup"
    @click="handleClickOutside"
    @keydown.esc="$store.commit('setEditProfileStatus', false)"
  >
    <div
      class="edit-profile-wrapper"
    >
      <div class="edit-profile-popup-header">
        <div
          class="close-button"
          @click="$store.commit('setEditProfileStatus', false)"
        >
          <BaseIcon icon="close" />
        </div>
        <div class="heading">
          <h3>Edit profile</h3>
        </div>
        <div class="submit-button">
          <button
            :disabled="!IsStringsValid || !IsURLValid"
            @click="submitHandler"
          >
            Save
          </button>
        </div>
      </div>
      <div class="edit-form">
        <div class="edit-form-item">
          <label for="name">Name</label>
          <input
            id="name"
            v-model="userData.name"
            type="text"
            required
          >
        </div>
        <div class="edit-form-item">
          <label for="description">Description</label>
          <input
            id="description"
            v-model="userData.description"
            type="text"
            required
          >
        </div>
        <div class="edit-form-item">
          <label for="website">Website</label>
          <input
            id="website"
            v-model="userData.website"
            type="url"
            required
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import { mapGetters } from 'vuex'

export default {
  name :'EditProfilePopup',
  components:{
    BaseIcon
  },
  data(){
    return {
      userData: {
        name: '',
        description: '',
        website: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getMe']),
    IsStringsValid(){
      return this.userData.name.length > 1 && this.userData.description.length > 2 
    },
    IsURLValid(){
      try{
        new URL(this.userData.website)
        return true
      } 
      catch{ return false }
    }
  },
  created() {
    this.userData = {
      name: this.getMe.profile.name,
      description: this.getMe.profile.description,
      website: this.getMe.profile.website
    }
  },
  methods:{
    async submitHandler(){
      try{
        await this.$store.dispatch('setMyInfo', {...this.userData})
      }catch(err){
        this.$notification({
          type: 'error',
          message: 'Error when editing profile'
        })
      }
    },
    handleClickOutside: function(e) {
      const object = {
        target: e.target, 
        ref: this.$refs.popupWrapper
      }
      if(object.target !== object.ref) return
      this.$store.commit('setEditProfileStatus', false)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/theme/colors.scss';

.edit-profile-popup{
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 111;
  background-color: rgba($color: $color-light-gray, $alpha: 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  .edit-profile-wrapper{
    width: 100%;
    max-width: 450px;
    background-color: rgba($color: $color-bg, $alpha: 1.0);
    border-radius: 1rem;
  }
  &-header{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: $border-dark;
    .close-button{
      padding: .5rem;
      border-radius: 999px;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
      &:hover{
        background-color: rgba($color: $color-blue, $alpha: 0.3);
      }
      svg{
        width: 100%;
        height: 100%;
        fill: $color-blue;
      }
    }
    .heading{
      color: #fff;
      margin-left: 10px;
      flex-grow: 1;
      h3{
        margin: 0;
      }
    }
    .submit-button{
      button{
        margin: 0;
        padding: 8px 18px;
        font-weight: bold;
        color: #fff;
        border-radius: 999px;
        border: none;
        outline: none;
        background-color: $color-blue;
        &:disabled{
          background-color: rgba($color: $color-blue, $alpha: 0.2);
          color: rgba($color: #fff, $alpha: 0.2);
        }
      }
    }
  }
  .edit-form{
    padding: 1rem;
    &-item{
      border: $border-dark;
      color: #fff;
      border-radius: .3rem;
      padding: .5rem;
      & + .edit-form-item{
        margin-top: 1rem;
      }
      label{
        color: $color-dark-gray;
        margin-bottom: 4px;
      }
      input{
        color: #fff;
        font-weight: bold;
        font-size: 1.2rem;
        display: block;
        width: 100%;
        border: none;
        outline: none;
        background-color: transparent;
      }
    }
  }
}
</style>