export default {
  toggleTweetButton(state){
    state.isTweetPopupActive = !state.isTweetPopupActive
  },
  setLoadingStatus(state, payload){
    state.globalIsLoading = payload
  },
  setMe(state, payload){
    state.me = payload
  },
  setLoginStatus(state, payload){
    state.isLoggedIn = payload
  }
}