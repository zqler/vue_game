import {login} from './types';
import http from './http';
import {loginApi} from './api';
export default {
    // [login.LOGIN]({ commit }, user) {
    //     return http.post(loginApi, function(data) {
    //         commit(login.LOGIN_SUCCESS, data);
    //     }, function(data) {
    //         commit(login.LOGIN_FAIL, data);
    //     commit(login.LOGIN_SUCCESS, {UserToken:'11', NikeName:'测试', SuperAdmin:1, AdminID:1});
    //     });
    // },
      [login.LOGIN]({commit}, user){
    return http.post(loginApi, user, function (data) {
      commit(login.LOGIN_SUCCESS, data);
    }, function (data) {
      commit(login.LOGIN_FAIL, data);
    });
  },
    [login.LOGOUT]({commit}) {
        return http.get(logoutApi, {}, function (data) {
            commit(login.LOGOUT_SUCCESS, data);
        }, function () {}) 
    },
    [login.REST_STATE]({commit}) {
        commit(login.REST_STATE);
    },
    [login.CHECK_TOKEN]() {
        return http.get(checkToken);
    }
};