import { defaultUser } from '@/services/functions'
import { setProfileInfo } from '@/services/api'
import app from '../main'

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
      const notification = app.config.globalProperties.$notification;
      notification({
        type: 'error',
        message: 'Error when dispatch action(please report the issue)'
      })
    }
  }
}