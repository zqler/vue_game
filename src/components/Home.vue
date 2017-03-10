<template>
  <div class="home">
  
    <p>2017年计划，按照既定目标前进，我相信生活是充满了学习和努力的。</p>
      <button @click="goAction()"> <!--可以简写为@click-->
                点击我跳到百度
       </button>

    <div class="link-router">
       <router-link to="/foo">Go to foo</router-link>
       <router-link to="/bar">Go to Bar</router-link>
    </div>
     <Product></Product>

  </div>

</template>

<script>
    import Product from 'components/Product'
    import Headnav from 'components/header'
    export default {
        name: 'home',
        data() {
            return {
               
            }
        },
        methods: {
            goAction: function() {
                location.href = "https://www.baidu.com/";
            }
        },
        components: {
            Product,
        }
    }
    // Vue.directive('example', { params: ['a'], paramWatchers: { a: function (val, oldVal) { console.log('a changed!') } } })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
    @import "../sass/layout.scss";
</style>
