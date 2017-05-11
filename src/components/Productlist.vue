<template>
    <div class="productlist">
        <h3 class="p-title">
            2017年2月23号五宝镇
            <span class="tips">这是一个阳光明媚的日子</span>
            </h3>
    <el-row>
        <el-col :span="6" v-for="(o,index) in 3" :offset="index>0?2 : 1">
            <el-card :body-style="{padding:'0px'}" >
              <img src="../assets/she.jpg" alt="列表图片" class="img">
     <div style="padding: 14px">
    <span class="img-txt">我们再次相遇在这天</span>
    <div class="bottom clearfix">
        <time class="time">{{currentDate}}</time>
        <el-button type="text" @chick="clickfn"><router-link :to="{name:'Productlist',params: { id: 123 }}">进入详情</router-link></el-button>
        
    </div>
       </div>
            </el-card>
        </el-col>
    </el-row>
    </div>
</template>
<script>
    export default {

        data() {
            return {
                currentDate: new Date(),
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