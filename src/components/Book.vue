<template>
<tbody>
<tr>
<th>编号</th>
<th>管理员</th>
<th>归还情况</th>
<th>用户</th>
<th>时间</th>
<th>修改</th>
<th>删除</th>
</tr>
<tr v-for="task in  getNews ">
<td>{{task.taskId}}</td>
<td>{{task.creator}}</td>
<td>{{task.creatThing}}</td>
<td>{{task.modifyInfo.user}}</td>
<td>{{task.modifyInfo.time}}</td>
<td> <el-button type="primary">修改</el-button></td>
<td> <el-button type="warning" @click="open($index)">删除</el-button></td>
</tr>
</tbody>
</template>
<script>
import {mapGetters} from 'vuex'
    export default{
        data(){
            return{
            }
        },
        created:function(){
             this.$store.dispatch("GET_DATA");
        },
        computed:{
            ...mapGetters(['getNews'])
        },
        methods:{
            open:function(index){
                const _this=this;
                this.$confirm("确定删除？","删除提示",{
                  confirmButtonText:'确定',
                  cancelButtonText:'取消',
                  type:'warning'
                }).then(()=>{
                    this.$message({
                       type:'success',
                        message:'删除成功'
                    },this.list.splice(index, 1));
                   
                }).catch(()=>{
                     this.$message({
                         type: 'info',
                         message: '已取消删除'
                       });          
                });
            }
        }
    }
</script>
<style lang="scss" scoped>
    @import "../sass/layout"
</style>