<template>
   <div class="header">
     <img class="logo" src="../assets/protrait.jpg">  
     <div class="panel p-content flex-item-1 flex">
      <aside class="p-menu">
        <Gnav :router="router" :mode="mode" :theme="theme" :menu="menu" @menuClose="handleClose" @menuOpen="handleOpen"
               :active="active"></Gnav>
      </aside>
    </div>
   </div>
</template>
<script>
import Gnav from 'components/nav'
 export default{
    name:'header',
    data(){
        return{
            active:'/home',
            mode:'horizontal',
            theme:'dark',
            router:true,
  menu:[
        {
          index:'/home',
          icon:'el-icon-menu',
          msg:'首页'
        },
        {
          index:'/list',
          icon:'el-icon-picture',
          msg:'回忆中心'
        },
        {
          index:'/gu',
          icon:'el-icon-setting',
          msg:'书籍管理'
        },
        {
          index:'/bar',
          icon:'el-icon-date',
          msg:'学习计划'
        },
        {
          index:'/foo',
          icon:'el-icon-document',
          msg:'每日一读'
        }
      ]
        }
    },
     methods: {
      handleClose:function(){
          console.info(11);
          this.$emit('menuClose');
        },
        handleOpen:function(){
          this.$emit('menuOpen');
        }
    },
  components: {
            Gnav
        }
}   
</script>
<style lang="sass">
      @import "../sass/common.scss"
</style>