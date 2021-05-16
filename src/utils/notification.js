import store from '@/store'

export function notification({type, message}){
  store.commit('addNotification', {type, message});
}