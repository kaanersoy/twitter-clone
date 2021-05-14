export default {
  setLoginInfo({commit}, payload){
    commit('setMe', payload);
    commit('setLoginStatus', true)
  },
  setLogOut({commit}){
    // commit('setMe', {})
    commit('setLoginStatus', false)
  }
}