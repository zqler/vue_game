import {login} from './types';
import http from './http';
import {loginApi} from './api';
export default {
    [login.LOGIN]({
        commit
    }, user) {
    //     return http.post(loginApi, user, function (data) {
    //   commit(login.LOGIN_SUCCESS, data);
    // }, function (data) {
    //   commit(login.LOGIN_FAIL, data);
    // });
        return http.get(loginApi, user, function (data) {

            commit(login.LOGIN_FAIL, data);
        }, function (data) {
            for(var p in data){
                    console.log(user.UserName,data[p].username,user.PassWord,data[p].password);
            if (data[p].username == user.UserName && data[p].password == user.PassWord) {
                alert("登陆成功");
                commit(login.LOGIN_SUCCESS, data);
            } else {
                alert("登陆失败");
                commit(login.LOGIN_FAIL, data);
            }
            }
           

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