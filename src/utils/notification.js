export function notification({type, message}){
  this.$store.commit('addNotification', {type, message});
}