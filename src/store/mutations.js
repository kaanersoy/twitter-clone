let index = 0;

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
  },
  addNotification(state, payload){
    state.activeNotifications.push({...payload, index})
    console.log(state.activeNotifications);
  },
  deleteNotification(state, payload){
    const oldState = state.activeNotifications;
    state.activeNotifications = oldState.filter(item => item.index != payload);
  }
}