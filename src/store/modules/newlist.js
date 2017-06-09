import Vue from 'vue';
import * as _ from "lodash";
import {motion, constants, formAction} from "../types";
import {ListApi, DeleteApi } from '../api';
import util from "util/util";
import http from '../http';
const state = {
    InitItem: {
        taskId: "",
        admin: "",
        creatThing: "",
        user: "",
        time: ""
    },
    Page: {
        Num: 10,
        Page: 1,
        AllCount: 1,
        AllPage: 0
    },
    Item: {},
    newslist: [],
    Search: ""

}
const getters = {
    gLength(state) {
        return state.newslist.length || 0;
    },
    gGetPage: (state) => {
        return {Num: state.Page.Num, Page: state.Page.Page, Status: state.Status, Search: state.Search}
    }
}
//异步操作
const actions = {
    [motion.LOADING_DATA]({
        commit,
        state
    }, payload) {
        if (state.newslist.length == 0) {
            Vue.http.get(ListApi, getters.gGetPage)
                .then(function (res) { //成功
                    state.Page.AllCount = res.data.length;
                    state.Page.Num = 10;
                    state.Page.AllPage = 2;
                    state.Page.Page = 1;
                    commit(motion.LOADING_DATA, res.data);
                }, function (res) {
                    //失败
                })
        }
    },
    [motion.DEL_DATA]({commit}, payload) {        
         //请求接口
        Vue.http.delete(DeleteApi, {params:{ taskId: payload }}).then(function(res){
            //接口请求成功操作
            console.log(res.data)
            if(res.data==true)
            {
                //刷新页面
            }
            else
            {
            }
        },
        function(res){
            //接口请求失败处理

        });
    },
    [motion.ADD_DATA]({commit,state}, payload) {
        if (state.Item.taskId) { //id存在，编辑
            var List = state.Item;
            if (!_.isEqual(List, payload || {})) {
                List.time = util
                    .formatDate
                    .format(List.time);
                return http.put("http://localhost:3000/newlist", List, () => {
                    commit(motion.EDIT_DATA, List);
                });
            }
            return new Promise((resolve, reject) => {
                reject({errorCode: constants.NO_MODIFY})
            })
        }
        state.Item.time = util
            .formatDate
            .format(List.time);
        return http.post("http://localhost:3000/newlist", state.Item, (data) => {
            commit(motion.ADD_DATA, data);
        })
    },
    [motion.CHANGE_STATE]({commit}, payload) {
        return http.put("http://localhost:3000/newlist", {
            "taskId": payload
        }, (data) => {
            commit(motion.CHANGE_STATE, Object.assign({
                "taskId": payload
            }, data));
        });
    }
}
//mutations  同步操作
const mutations = {
    [motion.LOADING_DATA](state, payload) {
        state.Page.AllCount = payload.length;
        state.Page.Num = 10;
        state.Page.AllPage = 2;
        state.Page.Page = 1;
        state.newslist = payload;
    },
    //同步页面页面删除数组
    [motion.DEL_DATA](state, payload) {
        state.newslist.splice(util.findIndex(state.newslist, 'taskId', payload), 1);
    },
    //同步页面页面编辑
    [motion.EDIT_DATA](state, payload) {
        state.newslist.splice(util.findIndex(state.newslist, 'taskId', payload.taskId), 1, payload);
    },
    [motion.INIT_DATA](state, payload) {
        state.Item = payload;
    },
    [motion.ADD_DATA](state, payload) {
        state.Item.TaskId = payload.taskId;
        state.newslist.unshift(state.Item);
    },
    [formAction.UPDATE_FORM](state, payload) {
        state.Item = _.cloneDeep(payload);
    },
    [formAction.REST_FORM](state, payload) {
        state.Item = _.cloneDeep(state.InitItem);
    },
    [motion.NOTICE_UPDATE](state, payload) {
        state.Item = payload;
    },
    [motion.CHANGE_STATE](state, payload) {
        const Item = util.find(state.newslist, 'taskId', payload.taskId);
        Item.State = payload.state;
    }
}
export default {
    state,
    getters,
    actions,
    mutations
};
