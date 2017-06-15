<template>
    <div class="productlist">
        <h3 class="p-title">
            千年红酒,精华所在
            <span class="tips" @click="clickfn">酒的历史</span>
        </h3>
        <el-row>
            <el-col style="width: 350px;heigth: 200px;margin-top: 10px" :span="4" v-for="(item,index) in Vlist" :offset="1">
                <el-card :body-style="{padding:'0px'}">
                    <img :src="item.img" alt="列表图片" class="img">
                      <span>{{item.name}}</span>
                    <div style="padding: 14px">
                        <div class="bottom clearfix">
                            <time class="time">{{item.currentDate}}</time>
                            <el-button type="text" >
                                <router-link :to="{name:'Detail',params:{id:item.id}}">观看视频</router-link>
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
    .productlist{margin: 0 auto;}
    .img {
        width: 100%;
        height: auto;
    }
</style>