<template>
  <div class="nav">
   <el-menu :theme="theme" :default-active="active"  :mode="mode" :router="router">
   <template v-for="item in menu">
     <el-menu-item :index="item.index">
     <i :class="item.icon"></i>{{item.msg}}
    </el-menu-item>
   </template>
</el-menu>
</div>
</template>
<script>
    export default {
        name: 'nav',
        data() {
            return {
                activeIndex: '/',
            }
        },
        props: {
            router: Boolean,
            active: String,
            mode: String,
            theme: String,
            menu: Array
        }
    }
</script>
<style lang="sass" scope>
</style>