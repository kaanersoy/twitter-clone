export default {
  getMe(state){
    return state.me
  },
  getTweetPopupState: (state) => {
    return state.isTweetPopupActive
  },
  getLoginStatus: (state) => {
    return state.isLoggedIn
  },
  getLoadingStatus: (state) => {
    return state.globalIsLoading
  },
  getActiveNotifications(state) {
    return state.activeNotifications;
  },
  getMyProfileId(state) {
    return state.me.id;
  },
  getEditProfileStatus(state) {
    return state.editProfilePopup
  },
  getProfileTweetCount(state) {
    return state.profileTweetCount
  },
  getLightboxState(state){
    return state.lightbox
  },
  getMobileMenuState(state){
    return state.isMobileMenuActive
  }
}