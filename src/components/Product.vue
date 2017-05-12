{{<template>
  <div class="product">
    <!--工具条-->
    <div class="game-header">
      <el-input class="inline-input" v-model="Search" icon="search" placeholder="游戏名称"></el-input>
      <el-button type="success">查询</el-button>
      <el-button type="info" @click="addHandler">新增</el-button>
    </div>
    <!--列表-->
  
    <el-row>
      <el-col :span="10" :offset="8">
        <div class="grid-content bg-purple">
          <!--<template>
            <el-table :data="List" highlight-current-row style="width: 100%">
              <el-table-column props="name" :context="_self" label="管理员">
              </el-table-column>
              <el-table-column props="sex" label="归还情况">
              </el-table-column>
              <el-table-column props="age" label="用户">
              </el-table-column>
              <el-table-column label="操作">
                <div>
                  <el-button type="info" size="small" @click="editHandle(row)">编辑</el-button>
                  <el-button type="danger" size="small" @click="delHandle(row)">删除</el-button>
                </div>
              </el-table-column>
            </el-table>
  
        </template>-->
  
          <table>
            <tbody>
              <tr>
                <th>管理员</th>
                <th>归还情况</th>
                <th>用户</th>
                <th>时间</th>
                <th>编辑</th>
  
              </tr>
  
              <tr v-for="(task,index) in  getNews ">
                <td>{{task.admin}}</td>
                <td>{{task.creatThing}}</td>
                <td>{{task.user}}</td>
                <td>{{task.time}}</td>
                <td>
                  <div>
  
                    <el-button type="primary" @click="editHandler(task)">修改</el-button>
                    <el-button type="warning" @click="delHandler(task.taskId)">删除</el-button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <!--分页-->
          <template>
            <div class="block">
              <span class="demostration"></span>
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage2" :page-sizes="[5,10,20,30,]" :page-size="10" :size-change="sizeChange" layout="sizes,prev,pager,next" :total="100">
  
              </el-pagination>
            </div>
  
          </template>
          <!-- 编辑框 -->
          <el-dialog :title="formTitle" size="middle" v-model="isShow" @close="closeForm">
            <el-form :model="Item" ref="editForm" label-width="100px" :rules="formRules">
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
              <el-button type="primary" @click="savaHandler">保存</el-button>
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
import { mapState, mapGetters } from 'vuex'
import { GameLang, Crud } from "../store/lang"
import { motion, formAction } from "../store/types"

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
      },
      getNews: [],
      newslist: []
    }
  },
  created: function () {
    NProgress.start();
    var $this = this;
    this.$store.dispatch(motion.LOADING_DATA).then(() => {
      $this.loading = false;
      NProgress.done();
    })

  },
  computed: {
    ...mapGetters(['getNews']),
    ...mapState({
      AllCount: state => state.Game.Page.AllCount,
      PageNum: state => state.Game.Page.Num,
      Page: state => state.newlist.Page.Page,
      Item: state => state.newlist.Item,
      newlist: state => state.newlist.newlist
    })
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
    editHandler: function (row) {
      this.formTitle = GameLang.edit;
      this.isShow = true;
      this.row = Object.assign({}, row);
      this.$store.commit(formAction.UPDATE_FORM, row);
    },
    delHandler: function (row) {
      var $this = this;
      $this.$confirm(GameLang.tipDel, GameLang.tip, {}).then(() => {
        $this.loading = true;

        $this.$store.dispatch(motion.Del_DATA, row.taskId).then(() => {

          $this.loading = false;
          $this.$notify.success({
            message: Crud.del.suc
          });
        }, (rep) => {
          $this.$notify.error({
            message: Crud.del.err
          });

        })
      }, () => {
      });
    },
    closeForm: function () {
      this.isShow = false;
      this.form.disabled = false;
    },

    savaHandler: function () {
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
            message: data.error
          });

        });
    },
    //显示新增页面
    addHandler: function () {
      const $this = this;
      this.formTitle = GameLang.add;
      $this.$store.commit(formAction.REST_FORM);
      this.isShow = true;
    },
    sizeChange: function () {
      this.$store.commit(motion.NOTICE_UPDATE, { key: ["newslist", "Page", "Num"], value: size })
      this.searchHandler();
    }

  }

}
</script>
<style lang="sass" scoped >
    @import "../sass/layout"
</style>
}}