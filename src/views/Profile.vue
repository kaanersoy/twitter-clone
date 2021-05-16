<template>
  <div
    class="profile"
  >
    <profile-header />
    <profile-body />
  </div>
</template>

<script>
import ProfileBody from '@/components/Profile/ProfileBody'
import ProfileHeader from '@/components/Profile/ProfileHeader'

import { mapGetters } from 'vuex';

export default {
  name: 'ProfileView',
  components:{
    ProfileBody,
    ProfileHeader
  },
  data(){
    return{
    }
  },
  computed:{
    ...mapGetters(['getMyProfileId']),
  },
  async mounted(){
  }
}
</script>

<style lang="scss">
@import '@/assets/theme/colors.scss';

.profile{
  .profile-cover-pic{
    img{
      width: 100%;
    }
  }
  &-header{
    padding: 1rem;
    .profile{
      &-actions{
        display: flex;
        align-items: center;
        justify-content: space-between;
        &-image{
          width: 130px;
          height: 130px;
          margin-top: -80px;
          img{
            border: 1px solid $color-dark-gray;
            border-radius: 999px;
            width: 100%;
          }
        }
        &-edit{
          .edit-button{
            border-radius: 999px;
            border: 1px solid $color-blue;
            color: $color-blue;
            font-weight: bold;
            font-size: 1rem;
            padding: 1rem;
            cursor: pointer;
            transition: background-color 80ms ease;
            &:hover{
              background-color: rgba($color: $color-blue, $alpha: 0.1);
            }
          }
        }
      }
      &-info{
        margin-top: 1rem;
        &-name{
          color: #fff;
          margin: 0;
          font-weight: bold;
          font-size: 1.5rem;
        }
        &-username{
          font-size: 1.2rem;
          color: $color-dark-gray;
        }
      }
      &-description{
        margin-top: 1rem;
        color: #fff;
      }
      &-created-at{
        margin-top: 1rem;
        display: flex;
        align-items: center;
        color: $color-dark-gray;
        a{
          color: $color-blue;
          &:hover{
            text-decoration: underline;
          }
        }
        span{
          display: flex;
          align-items: center;
          & + span{
            margin-left: 2rem;
          }
          svg{
            fill: $color-dark-gray;
            margin-right: .5rem;
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }
      &-follower-counts{
        display: flex;
        color: #fff;
        cursor: pointer;
        p{
          & + p{
            margin-left: 1rem;
          }
          span{
            color: $color-dark-gray;
          }
          &:hover{
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>