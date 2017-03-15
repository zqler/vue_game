
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);


const localStore = localStorage;
const sessionStore = sessionStorage;
const stringify = JSON.stringify;


const savaStore = store => {
    store.subscribe((mutation, state) => {
        if (mutation.type == 'MENU_CHANGE') {
          localStore.setItem("MENU_CHANGE", stringify(state.menu));
        }
    })
}

const state = {
    event: [],//event，存储所有事件

    menuState:{
      change:"/home'"
    }
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  plugins:[savaStore]
})
