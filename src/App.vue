<template>
  <div id="app">
  <Headnav></Headnav>
    <router-view></router-view>
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
}
    }
</script>

<style lang="sass" scoped>
    @import "sass/common.scss"
</style>
