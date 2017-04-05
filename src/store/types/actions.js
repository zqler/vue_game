export default {
   ["eventdone"]({commit}, param){
      commit('EVENTDONE', { id: param });
   }
}
