<template>
    <div class="product">
    <el-row>
      <el-col :span="10" :offset="8">
      <div class="grid-content bg-purple">
       <table>
     <Book></Book>
    </table>
    <div> {{count}}</div>
      </div>    
      </el-col>
    </el-row>
    
</div>


</template>
<script>

    import Book from 'components/Book'
    export default {
        name: 'product',
        data() {
            return {
                articles: [],
                rates:[]
            }
        },
        components:{
            Book
        }
    }
</script>
<style lang="sass" scoped >
    @import "../sass/layout"
</style>
