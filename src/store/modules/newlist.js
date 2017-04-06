import Vue from 'vue'
const GET_DATA = "GET_DATA"
const state = {
    newslist: []
}
const getters = {
    getNews: state => {
        return state.newslist.filter(function(news) {
            return !news.isdeleted;
        })
    }
}
const actions = {
    [GET_DATA]({ commit, state }, payload) {
        if (state.newslist.length == 0) {
            Vue.http.get("http://localhost:3000/newList").then(function(res) {
                //成功
                commit(GET_DATA, res.body);
            }, function(res) {
                //失败
            })
        }
    }
}

const mutations = {
    [GET_DATA](state, payload) {
        state.newslist = payload;
    }
}
export default { state, getters, actions, mutations };