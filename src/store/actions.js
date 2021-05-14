import {defaultUser} from '@/services/functions'

export default {
  setLoginInfo({commit}, payload){
    commit('setMe', payload);
    commit('setLoginStatus', true)
  },
  setLogOut({commit}){
    commit('setMe', defaultUser())
    commit('setLoginStatus', false)
  }
}