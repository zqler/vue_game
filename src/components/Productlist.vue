<template>
    <div class="productlist">
        <h3 class="p-title">
            千年红酒,精华所在
            <span class="tips">酒的历史</span>
            </h3>
    <el-row>
        <el-col :span="6" v-for="(item,index) in news" :offset="index>0?2 : 1" >
            <el-card :body-style="{padding:'0px'}" >
              <img src="../assets/pz_08.jpg" alt="列表图片" class="img">
     <div style="padding: 14px">
    <span class="img-txt">我们再次相遇在这天</span>
    <div class="bottom clearfix" >
        <time class="time">{{item.currentDate}}</time>
        <el-button type="text" @chick="clickfn"><router-link :to="{name:'Detail',params:{id:item.id}}">进入详情</router-link></el-button>
        
    </div>
       </div>
            </el-card>
        </el-col>
    </el-row>
    </div>
</template>
<script>
import moment from 'moment'
    export default {

        data() {
            return {
                news:[
                    {id:1,title:'今日新闻',currentDate: '2015-1-19 19:00',},
                    {id:2,title:'昨日新闻',currentDate: '2015-1-19 15:30',},
                    {id:3,title:'明日新闻',currentDate: '2015-1-19 18:20',}
                    ]
            }
        },
        methods: {
            clickfn: function() {
                this.$router.push({
                    path: 'g'
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
  .img{
      width:100%;
      height:auto;
  }
</style>