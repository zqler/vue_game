<template>
  <div class="home">
  <p>2017年计划，按照既定目标前进，我相信生活是充满了学习和努力的。</p>

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
