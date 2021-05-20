import { defaultUser } from '@/services/functions'
import { setProfileInfo } from '@/services/api'

export default {
  setLoginInfo({commit}, payload){
    commit('setMe', payload);
    commit('setLoginStatus', true)
  },
  setLogOut({commit}){
    commit('setMe', defaultUser())
    commit('setLoginStatus', false)
  },
  async setMyInfo({commit}, payload){
    try{
      await setProfileInfo(payload)
      commit('editProfileInfo', payload)
      commit('setEditProfileStatus', false)
    }catch(err){
      console.log(err)
    }
  },
  setLightbox({commit}, payload){
    commit('setLightboxState', true)
    commit('setLightboxImages', payload)
  },
  closeLightbox({commit}){
    commit('setLightboxState', false)
    commit('setLightboxImages', [])
  }
}