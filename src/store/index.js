import Vuex from 'vuex'
import actions from '@/store/actions'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import state from '@/store/state'

export default Vuex.createStore({
  state,
  mutations,
  getters,
  actions
})