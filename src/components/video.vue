<template>
    <div class="productlist">
        <h3 class="p-title">
            千年红酒,精华所在
            <span class="tips" @click="clickfn">酒的历史</span>
        </h3>
        <el-row>
            <el-col :span="3" v-for="(item,index) in Vlist" :offset="index>0?1 : 0.5">
                <el-card :body-style="{padding:'0px'}">
                    <img :src="item.img" alt="列表图片" class="img">
                    <div style="padding: 14px">
                        <div class="bottom clearfix">
                            <time class="time">{{item.currentDate}}</time>
                            <span>{{item.name}}</span>
                            <el-button type="text" >
                                <router-link :to="{name:'Detail',params:{id:item.id}}">进入详情</router-link>
                            </el-button>
    
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
    
        data() {
            return {
                Vlist:[]
            }
        },
        created: function(){
            this.$http.get('api/VList').then( (res) =>{
                 this.Vlist = res.data;
                  console.log(this.Vlist[1]);     
            })
        },
        methods: {
            clickfn: function() {
                   
            }
        }
    }
</script>

<style lang="scss" scoped>
    .img {
        width: 100%;
        height: auto;
    }
</style>