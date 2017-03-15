import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vues);
const localStore = localStorage;
const sessionStore = sessionStorage;
const stringify = JSON.stringify;
const savaStore = store => {
    store.subscribe((mutation, state) => {
        if (mutation.type == 'UPDATE_DATA') {
            socket.emit('update', mutation.payload)
        }
    })
}
const state = {
    event: [] //event，存储所有事件
}

export default new Vuex.Store({
    state,
    actions,
    mutations
})