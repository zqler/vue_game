<template>
    <div class="productlist">
        <h3 class="p-title">
            千年红酒,精华所在
            <span class="tips" @click="clickfn">酒的历史</span>
        </h3>
        <el-row>
            <el-col :span="4" v-for="(item,index) in Vlist" :offset="index>0?1 : 0.5">
                <el-card :body-style="{padding:'0px'}">
                    <img :src="item.img" alt="列表图片" class="img">
                      <span>{{item.name}}</span>
                    <div style="padding: 14px">
                        <div class="bottom clearfix">
                            <time class="time">{{item.currentDate}}</time>
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