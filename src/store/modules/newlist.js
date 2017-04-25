
import Vue from 'vue';
import * as _ from "lodash";
import {motion} from "../types";
const GET_DATA = "GET_DATA";
const DEl_DATA = "DEl_DATA";
const UPDATE_FORM = "UPDATE_FORM";
import util from "util/util";
import http from '../http';
const state = {
    Initnewslist:{
       taskId:''
    },
     Page:{
    Num:10,
    Page:1,
    AllCount:0,
    AllPage:0
  },
    Item:{},
    newslist: []

}
const getters = {
    getNews: state => {
        return state.newslist.filter(function(news) {
            return !news.isdeleted;
        })
         },
   gGetPage: (state)=>{
       return{
         Num:state.Page.Num,
         Page:state.Page.Page,
         Status:state.Status,
         Search:state.Search
       } 
    }
}
//异步操作
const actions = {
    [motion.LOADING_DATA]({ commit, state }, payload) {
        if (state.newslist.length == 0) {
            Vue.http.get("http://localhost:3000/newList").then(function(res) {
                //成功
                commit(motion.LOADING_DATA, res.body);
            }, function(res) {
                //失败
            })
        }
    },
//       [GET_DATA]({commit,getters}){
//     return http.get("http://localhost:3000/newList",getters.gGetPage,function (data) {
//       commit(GET_DATA,data);
//     });
//   },
    //删除异步操作传个后台
    [DEl_DATA]({commit},payload){
      return http.delete("http://localhost:3000/newList",{taskId:[payload]},()=>{
          commit(DEl_DATA,payload);
      });
    },
    [motion.ADD_DATA]({commit,state},payload){
        if(state.Item.taskId){//id存在，编辑
           const newslist=state.Item;
           if(!_.isEqual(newslist,payload||{})){
             newslist.time =util.formatDate.format(newslist.time);
              return http.put("http://localhost:3000/newList",newslist,()=>{
                  commit(motion.EDIT_DATA,newslist);
              });
           }
         return new Promise((resolve, reject)=> {
          reject({errorCode: constants.NO_MODIFY})
      })
        }
       state.Item =util.formatDate.format(newslist.time);
        return http.post("http://localhost:3000/newList",state.Item,(data)=>{
            commit(motion.ADD_DATA,data);
        })
    }
}
//mutations  同步操作
const mutations = {
    [motion.LOADING_DATA](state, payload) {
        state.newslist = payload;
    },
    //同步页面页面删除数组
    [DEl_DATA](state,payload){
        state.newslist.splice(util.findIndex(state.newslist,'taskId',payload),1)
    },
    [motion.EDIT_DATA](state,payload){
        state.newslist.splice(util.findIndex(state.newsList,'taskId',payload.taskId),1,payload);

    },
    [motion.ADD_DATA](state,payload){
        state.Item.TaskId=payload.taskId;
        state.newslist.unshift(state.Item);
    },
    [UPDATE_FORM](state,payload){
        state.Item = _.cloneDeep(payload);
    },
    [motion.NOTICE_UPDATE](state,payload){
        state.Item = payload;
    }
}
export default { state, getters, actions, mutations };


