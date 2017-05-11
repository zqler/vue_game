<template>
  <div class="home">
    <Orderlist></Orderlist>
  </div>

</template>

<script>
import Orderlist from '../components/Order';
import {mapGetters,mapState} from 'vuex';
import {login,motation} from '../store/types'
export default {
        name: 'home',
        data() {
            return {
               
            }
        },
        computed:{
            ...mapState({
                Info:state => state.User.Info,//state =>state.User.Info
                User:state => state.login
            }),
            ...mapGetters(['isAdmin'])
        },
        components:{
            Orderlist    
        }
    }
   
</script>
<style lang="scss" scoped>
    @import "../sass/layout.scss";
</style>
