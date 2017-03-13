<template>
    <div class="selected">
       <el-time-select
  v-model="valuefirst"
  :picker-options="{
    start: '00:00',
    step: '00:15',
    end: '24:00'
  }"
  placeholder="选择时间">
</el-time-select>
<input type="button" class="radius" value="确定">
<a class="error">错误提示</a>
<ul>
    <li class="me-icon"></li>
     <li class="she-icon"></li>
      <li class="her-icon"></li>
</ul>
</template>
<script>
    export default {
        data() {
            return {
                valuefirst: ''
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../sass/layout.scss";
</style>