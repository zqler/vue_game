<template>
   <div class="header">
     <img class="logo" src="../assets/protrait.jpg">
     <div class="panel p-content flex-item-1 flex">
      <aside class="p-menu">
        <Gnav :router="router" :mode="mode" :theme="theme" :menu="menu" @menuClose="handleClose" @menuOpen="handleOpen"
               :active="menuState.change" @change="navchang"></Gnav>
      </aside>
    </div>
   </div>
</template>
<script>
import Gnav from 'components/Nav';
import {mapState} from "vuex"
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
          index:'/pl',
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
    computed:{
       ...mapState(['menuState'])
    },
     methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      navchang:function(active){
        this.$store.commit('MENU_CHANGE',active);
      }
    },
  components: {
            Gnav
        }
}
</script>
<style lang="sass">
      @import "../sass/common.scss";
      @import "../sass/layout.scss"
</style>
