<template>
  <div class="home">
  <p>2017年计划，按照既定目标前进，我相信生活是充满了学习和努力的。</p>

    <Orderlist></Orderlist>
  </div>

</template>

<script>
import Orderlist from '../components/Order'
export default {
        name: 'home',
        data() {
            return {
               
            }
        },
        components:{
            Orderlist    
        }
    }
   
</script>
<style lang="scss" scoped>
    @import "../sass/layout.scss";
</style>
