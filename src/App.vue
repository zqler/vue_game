<template>
  <div id="app">
    <Headnav v-show="$route.meta.navShow"></Headnav><!--根据路由显示导航栏-->
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
  methods:{
     
  },
  components: {
    Headnav
  },
  created() {
    try {
      let menu = JSON.parse(localStorage.getItem("MENU_CHANGE"));
      this.$store.commit('MENU_CHANGE', menu.change);
    }
    catch (e) {

    }
  }
}


</script>

<style lang="sass" scoped>
  @import "sass/common.scss"
</style>
