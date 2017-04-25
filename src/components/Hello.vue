<template >
  <div class="data">
    <h1 class="txt-shadow">{{ msg }}</h1>
    <time>现在时间是：{{dateFormat}}</time>
    <el-row>
      <el-col :span="10" :offset="8"><div class="grid-content bg-purple-dark">
    <el-breadcrumb separator="/">
     <el-breadcrumb-item :to="{path:'/home'}">
       首页
     </el-breadcrumb-item>
     <el-breadcrumb-item >每日一读</el-breadcrumb-item>
 
    </el-breadcrumb>
    <template>
     
    </template>
    
    </div>
    </el-col>
</el-row>
</div>
</template>

<script>
  import {mapState,mapGetters} from 'vuex'
    export default {
        name: 'data',
        data() {
            return {
                msg: '未来还是要有规划的，一步步实现小目标',
                nowDate:'',
               
               
            }
        },
          creat:function(){
          setTimeout(this.dateFormat,1000)
        },
        computed:{
          ...mapGetters([
            'dateFormat'
           
            ])
          
        },
        methods:{
          
        } 
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
        font-size: 20px;
        color: #ff5100;
    }
    .txt-shadow{
        text-shadow: 5px 5px 20px #333;
    }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
