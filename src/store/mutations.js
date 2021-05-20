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
  },
  deleteNotification(state, payload){
    const oldState = state.activeNotifications;
    state.activeNotifications = oldState.filter(item => item.index != payload);
  },
  editProfileInfo(state, payload){
    Object.keys(payload).map(key => {
      state.me.profile[key] = payload[key]
    })
  },
  setEditProfileStatus(state, payload){
    state.editProfilePopup = payload  
  },
  setProfileTweetCount(state, payload){
    state.profileTweetCount = payload
  },
  setLightboxState(state, payload){
    state.lightbox.state = payload
  },
  setLightboxImages(state, payload){
    state.lightbox.images = payload
  },
  setMobileMenuState(state, payload){
    state.isMobileMenuActive = payload
  }
}