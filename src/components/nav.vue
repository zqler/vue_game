<template>
  <div class="nav">
   <el-menu :theme="theme" default-active="1"  :mode="mode" :router="router">
   <template v-for="item in menu">
     <el-menu-item :index="item.index">
     <i :class="item.icon"></i>{{item.msg}}
    </el-menu-item>
   </template>
   </el-menu>
  </div>
</template>
<script>
export default{
    name:'nav',
    data(){
    return{
       activeIndex: '1',
      }
    },
    props:{
    router:Boolean,
    active:String,
    mode:String,
    theme:String,
    menu:Array  
    }
}
</script>
<style lang="scss" scope>
  a{
    color: #fff;
    text-decoration:none;
  }
  .nav{
    float:left;
    margin-left: 20px;
    min-width:460px;
    margin-top: 20px;
  }
</style>