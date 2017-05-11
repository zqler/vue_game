<template>
  <div id="app">
    <Headnav></Headnav>
    <transition name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Headnav from 'components/header'
    export default {
        name: 'app',
        data() {
            return {

            }
        },
        components:{
           Headnav
        },
        created(){
           try{
               let menu = JSON.parse(localStorage.getItem("MENU_CHANGE"));
               this.$store.commit('MENU_CHANGE',menu.change);
           }
           catch(e){

           }

        }
    }


</script>

<style lang="sass" scoped>
  @import "sass/common.scss"
</style>
