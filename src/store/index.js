import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import newslist from './modules/newlist';
import { constants, login, motion } from './types';
import util from "util/util";
Vue.use(Vuex);


const localStore = localStorage;
const sessionStore = sessionStorage;
const stringify = JSON.stringify;

const savaStore = store => {
    store.subscribe((mutation, state) => { //有时候插件想获取状态 “快照” 和状态的改变前后的变化。为了实现这些功能，需要对状态对象进行深拷贝：
        if (mutation.type == 'MENU_CHANGE') {
            localStore.setItem("MENU_CHANGE", stringify(state.menuState));
        }
        if (mutation.type == login.LOGIN_SUCCESS || mutation.type == motion.NOTICE_UPDATE) {
            //保存最新的state
            util.setStorage({ key: constants.SAVE_STORE_KEY, data: state }, true);
            if (mutation.type == login.LOGIN_SUCCESS) {
                // 登陆成功保存必要信息
                sessionStore.setItem(constants.IS_LOGIN_KEY, true);
                sessionStore.setItem(constants.USER_ID_KEY, state.login.AdminID);
                sessionStore.setItem(constants.USER_TOKEN, state.login.UserToken);
                Vue.http.headers.common['UserToken'] = String(state.login.UserToken);
            }
        } else if (mutation.type == login.LOGOUT_SUCCESS) {
            // 退出清空本地数据
            localStore.removeItem(constants.SAVE_STORE_KEY);
        }
    })
}
const state = {
    event: [], //event，存储所有事件
    login: {
        isLogin: false,
        SuperAdmin: false,
        UserID: '',
        AdminID: "",
        UserToken: '',
        loginTime: ''
    },
    loginInfo: {
        isSuccess: false,
        msg: ''
    },
    menuState: {
        change: "/home"
    },
    nowDate: new Date()
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    plugins: [savaStore],
    modules: {
        newslist

    },
})