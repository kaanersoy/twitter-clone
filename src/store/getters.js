export default {
  getMe(state){
    return state.me
  },
  getTweetPopupState: (state) => {
    return state.isTweetPopupActive
  }
}