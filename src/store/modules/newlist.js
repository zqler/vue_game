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
export default { state, getters };