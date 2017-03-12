<template>
    <div class="product">
        <a class="author" href="">writen by:{{author}}</a>
        <p>{{txt}}</p>
      <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="article in articles" class="text item">
        {{article.title}}
      </div>
      </el-card>


    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>
 <router-link to="/se">Home</router-link>
   <router-link to="./list">列表页</router-link>

</div>



</template>
<script>
    import Product from 'components/Product'
    export default {
        name: 'product',
        data() {
            return {
                author: "我们是web前端开发工程师。我们在前行的道路中。",
                txt: "vue模块加载，这是在黑暗中摸索前行",
                articles: [],

            }
        },
        // methods:{
        // clickfn:function(){
        //      this.$router.push({path:'/list'});
        // }
        // },
        mounted: function() {
            this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=10', {}, {
                headers: {

                },
                emulateJSON: true
            }).then(function(response) {
                // 这里是处理正确的回调

                this.articles = response.data.subjects

                // this.articles = response.data["subjects"] 也可以

            }, function(response) {
                // 这里是处理错误的回调
                console.log(response)
            });
        }
    }
</script>
<style lang="sass" scoped >
    @import "../sass/layout"
</style>
