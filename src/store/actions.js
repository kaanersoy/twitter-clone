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

function defaultUser(){
  return {
    id: '',
    username: '',
    password: '',
    profile: {
      pic: '',
      nickname: '',
      name: ''
    }
  }
}