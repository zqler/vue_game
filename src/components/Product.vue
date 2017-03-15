<template>
    <div class="product">
    <el-row>
      <el-col :span="10" :offset="8">
      <div class="grid-content bg-purple">
       <table>
     <Book></Book>
    </table>
      </div>    
      </el-col>
    </el-row>
        <el-row>
        <el-col :span="10" :offset="8">
        <div class="grid-content">
      <el-card class="box-card">
      <div slot="header" class="clearfix">
        <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行榜</h1>
      </div>
      <div v-for="article in articles" class="text item">
        <h3>{{article.title}}</h3>
        <span>{{article.subtype}}</span>
        <p>这是一个开端</p>
        <div class="con">
           <img  :src="article.directors"  >
        </div>
      </div>
      </el-card>
      </div>
      </el-col>
      </el-row>
</div>


</template>
<script>
    import Book from 'components/Book'
    export default {
        name: 'product',
        data() {
            return {
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
        },
         watch: {
		   '$route' (to, from) {//
			    this.active = to.path;
		   }
	  },
        components:{
            Book
        }
    }
</script>
<style lang="sass" scoped >
    @import "../sass/layout"
</style>
