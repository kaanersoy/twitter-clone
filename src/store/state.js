import {defaultUser} from '@/services/functions'

export default {
  me: defaultUser(),
  isTweetPopupActive: false,
  isLoggedIn: false,
  globalIsLoading: false,
  activeNotifications: [],
  editProfilePopup: false,
  profileTweetCount: 0,
  lightbox: {
    state: false,
    images: [] 
  },
  isMobileMenuActive: false
}