<template>
<tbody>
<tr v-for="task in list">
<td>{{task.taskId}}</td>
<td>{{task.creator}}</td>
<td>{{task.creatThing}}</td>
<td>{{task.modifyInfo.user}}</td>
<td>{{task.modifyInfo.time}}</td>
<td> <el-button type="primary" >修改</el-button></td>
<td> <el-button type="primary" @click="open">删除</el-button></td>
</tr>
</tbody>
</template>
<script>
    export default{
        data(){
            return{
                list:[
                    {
                        "taskId":"0001",
                        "creator":"张权",
                        "creatThing":"归还书籍",
                        "modifyInfo":{
                            "user":"张权",
                            "time":"2017-3-10  10:30"
                        }
                    },
                     {
                        "taskId":"0002",
                        "creator":"赵奕欢",
                        "creatThing":"周末安排",
                        "modifyInfo":{
                            "user":"赵奕欢",
                            "time":"2017-3-12  10:00"
                        }
                    },
                     {
                        "taskId":"0003",
                        "creator":"陈杰",
                        "creatThing":"回家",
                        "modifyInfo":{
                            "user":"陈杰",
                            "time":"2017-3-11  9:00"
                        }
                    }
                ]
            }
        },
        methods:{
            open(){
                this.$confirm("确定删除？","删除提示",{
                  confirmButtonText:'确定',
                  cancelButtonText:'取消',
                  type:'warning'
                }).then(()=>{
                    this.$message({
                       type:'success',
                        message:'删除成功'
                    });
                   
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
