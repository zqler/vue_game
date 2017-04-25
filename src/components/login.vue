<template>
    <div class="login-page">
     <el-row :gutter="20">
     <el-col :span="4" :offset="10">
     <div class="grid-content bg-purple">
        <el-form :model="user" :rules="rules" ref="userLogin" class="card-box login-form">
        <h3 class="login-title">登录系统</h3>
        <span class="login-tips">登录成功</span>
        <el-form-item prop="account">
            <el-input type="text" v-model="user.account" auto-complete="off" placeholder="账号" @change="accountChange"></el-input>
        </el-form-item>
        <el-form-item prop="password">
             <el-input type="text"  v-model="user.password" el-autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
         <el-checkbox v-model="checked" checked class="login-check">记住密码</el-checkbox>
          </el-form-item>
           <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="loginHandler">登录</el-button>
      </el-form-item>
        </el-form>
        </div>
        </el-col>
        </el-row>
    </div>
</template>
<script>
import {login,constants} from '../store/types';
import {mapState} from 'vuex';
import Vue from 'vue';
import util from 'util/util'
export default {
    data() {
      return {
        user: {
          isAuto:false,
          account: '',
          password: ''
        },
        rules: {
          account: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        },
        checked: true,
      };
    },
    created:function(){
       const user = util.getStorage(constants.USER_INFO_KEY);
       if(user){
         this.user.account = user.UserName;
         this.user.password = util.decryAES(user.PassWord,this.aesKey);
         this.user.isAuto = true;
       }
    },
    computed:{
      ...mapState(['loginInfo','aesKey'])
    },
    methods: {
      accountChange(){
         this.user.isAuto = false;
         this.user.password = "";
      },
      loginHandler(ev) {
        var $this= this;
        this.$refs.userLogin.validate((valid) => {
          if (valid) {
             var user = {};
             user.UserName =  $this.user.account;
             user.PassWord = $this.user.isAuto?$this.user.password:util.encryMD5($this.user.password);
             $this.$store.dispatch(login.LOGIN, user).then((data)=>{
                user.PassWord = util.encryAES(user.PassWord, $this.aesKey);
                util.setStorage({key:constants.USER_INFO_KEY,data:user}, true);
                $this.$router.replace(decodeURIComponent($this.$route.query.redirect ||'/home'));
             },()=>{console.info('fail')});
          }
          else{
             store.commit(login.LOGIN_FAIL,{msg:'密码或用户名不能为空'})
          }
        });
      }
    }
  }
</script>
