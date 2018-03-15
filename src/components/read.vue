<template >
<div class="data">
  <h1 class="txt-shadow">{{ msg }}</h1>
  <el-row>
    <el-col :span="12" :offset="8"><div class="grid-content bg-purple-dark">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{path:'/'}">
      首页
    </el-breadcrumb-item>
    <el-breadcrumb-item >每日一读</el-breadcrumb-item>
  </el-breadcrumb>
  <template>
    <el-row :gutter="20" >
<el-col :xs="8" :sm="6" :md="4" :lg="3" :span="5"><div class="grid-content bg-purple">
   
</div></el-col>
<el-col :xs="4" :sm="6" :md="8" :lg="9" :span="20"><div class="grid-content bg-purple"></div></el-col>
</el-row>
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
            
              
              
          }
      },
        creat:function(){
      
      },
      computed:{
        ...mapGetters([
          'dateFormat'
          
          ])
        
      },
      methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
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
  background: #f1f1f1;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
