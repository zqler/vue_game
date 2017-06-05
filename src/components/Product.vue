<template>
  <div class="product">
    <!--工具条-->
    <div class="game-header">
      <el-input class="inline-input" v-model="Search" icon="search" placeholder="名字"></el-input>
      <el-button type="success" @click="searchHandler">查询</el-button>
      <el-button type="info" @click="addHandler">新增</el-button>
    </div>
    <!--列表-->
  
    <el-row>
      <el-col :span="10" :offset="8">
        <div class="grid-content bg-purple">
          <table>
            <tbody>
              <tr>
                <th>管理员</th>
                <th>归还情况</th>
                <th>用户</th>
                <th>时间</th>
                <th>编辑</th>
              </tr>
              <tr v-for="(task,index) in  newslist ">
                <td>{{task.admin}}</td>
                <td>{{task.creatThing}}</td>
                <td>{{task.user}}</td>
                <td>{{task.time}}</td>
                <td>
                  <div>
  
                    <el-button type="primary" @click="editHandler(task)">修改</el-button>
                    <el-button type="warning" @click="delHandler(task)">删除</el-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!--分页-->
          <template>
                <div class="block">
                  <span class="demostration"></span>
                  <el-pagination 
                   @size-change="sizeChange"
                  @current-change="currentChange"
                  :current-page="10" 
                  :page-sizes="[5,10,20,30,]" 
                  :page-size="PageNum" 
                  :size-change="sizeChange" 
                  layout="sizes,prev,pager,next,jumper" 
                  :total="1000">
      
                  </el-pagination>
                </div>
</template>
          <!-- 编辑框 -->
          <el-dialog :title="formTitle" size="middle" v-model="isShow" @close="closeForm">
            <el-form :model="Item" ref="editForm" label-width="100px" >
              <el-form-item label="管理员" props="admin">
                <el-input v-model="Item.admin">
                </el-input>
              </el-form-item>
              <el-form-item label="归还情况" props="creatThing">
                <el-input v-model="Item.creatThing">
                </el-input>
              </el-form-item>
              <el-form-item label="用户" props="user">
                <el-input v-model="Item.user">
                </el-input>
              </el-form-item>
              <el-form-item label="时间" props="time">
                <el-date-picker type="datetime" placeholder="选择日期时间" v-model="Item.time"></el-date-picker>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="closeForm"> 取消</el-button>
              <el-button type="primary" @click="savaHandler" :loading="form.loading" :disabled="form.disabled">保存</el-button>
            </div>
          </el-dialog>
        </div>
      </el-col>
    </el-row>
  
  </div>
</template>

<script>
  import NProgress from 'nprogress'
  import * as _ from 'lodash'
  import {
    mapState,
    mapGetters
  } from 'vuex'
  import {
    GameLang,
    Crud
  } from "../store/lang"
  import {
    motion,
    formAction
  } from "../store/types"
  
  export default {
    name: 'product',
    data() {
      return {
        currentPage2: 1,
        articles: [],
        rates: [],
        isShow: false,
        formTitle: '',
        form: {
          disabled: false
        }
       
      }
    },
    created: function() {
      NProgress.start();
      var $this = this;
      this.$store.dispatch(motion.LOADING_DATA).then(() => {
        $this.loading = false;
        NProgress.done();
      })
  
    },
    computed: {
      ...mapState({
        AllCount: state => state.newlist.Page.AllCount,
        PageNum: state => state.newlist.Page.Num,
        Page: state => state.newlist.Page.Page,
        Item: state => state.newlist.Item,
        newslist: state => state.newlist.newslist,
        Search: state => state.newlist.Search
      }),
      ...mapGetters(['headers'])
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        console.log(`当前页: ${val}`);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      editHandler: function(row) {
        this.formTitle = GameLang.edit;
        this.isShow = true;
        this.row = Object.assign({}, row);
        this.$store.commit(formAction.UPDATE_FORM, row);
      },
      //删除
      delHandler: function(row) {
        var $this = this;
        this.$confirm(GameLang.tipDel, GameLang.tip, {}).then(() => {
          $this.loading = true;
          NProgress.start();
          $this.$store.dispatch(motion.DEL_DATA, row.taskId).then(() => {
            NProgress.done();
            $this.loading = false;
            $this.$notify.success({
              message: Crud.del.suc
            });
          }, (rep) => {
            $this.$notify.error({
              message: Crud.del.err
            });
            $this.loading = false;
          })
        }, () => {});
      },
      closeForm: function() {
        this.isShow = false;
        this.form.disabled = false;
      },
  
      savaHandler: function(row) {
        const $this = this;
        $this.form.loading = true;
        $this.form.disabled = true;
        NProgress.start();
        $this.$store.dispatch(motion.ADD_DATA, $this.row).then(
          () => {
            $this.form.loading = false;
            $this.form.disabled = false;
            $this.isShow = false;
            NProgress.done();
            $this.$notify.success({
              message: Crud.save.suc
            });
          }, (data) => {
            NProgress.done();
            $this.form.loading = false;
            $this.form.disabled = false;
            $this.$notify.success({
               message: data.errmsg
            });
  
          });
      },
      //显示新增页面
      addHandler: function() {
        const $this = this;
        this.formTitle = GameLang.add;
        $this.$store.commit(formAction.REST_FORM);
        this.isShow = true;
      },
      searchHandler: function() {
        const $this = this;
        $this.loading = true;
        this.$store.dispatch(motion.LOADING_DATA).then(() => {
          $this.loading = false;
        }, () => {})
      },
      sizeChange: function(size) {
        this.$store.commit(motion.NOTICE_UPDATE, {
          key: ["newslist", "Page", "Num"],
          value: size
        })
        this.searchHandler();
      },
       changeState:function(row){
       const $this = this;
       this.$store.dispatch(prefix+gameTypes.CHANGE_STATE,row.GameID).then(()=>{$this.$notify.success({message: Crud.change.suc});},(data)=>{$this.$notify.error({message: data.errmsg})});
    },
      currentChange: function(cur) {
        this.store.commit(motion.NOTICE_UPDATE, {
          key: ["newslist", "Page", "Page"],
          value: cur
        })
      }
  
    }
  
  }
</script>

<style lang="sass" scoped>
    @import "../sass/layout"
</style>
}}