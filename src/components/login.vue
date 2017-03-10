<template>
    <div class="login-page">
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
            <el-button type="primary" @click.native.prevent="loginHandler">登录</el-button>
            <el-checkbox label="记住密码"></el-checkbox>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                user: {
                    isAuto: false,
                    account: 'useradmin',
                    password: ''
                },
                rules: {
                    account: [{
                        required: true,
                        message: '请输入账号',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }]
                },
                check: true,

            };
        },
        creat: function() {
            const user = util.getStorage(constants.USER_INFO_KEY);
            if (user) {
                this.user.accout = user.UserName;
                this.user.password = util.decryAES(user.PassWord, this, aesKey);
                this.uer.isAuto = true;
            }
        },
        methods: {
            accountChange() {
                this.user.isAuto = false;
                this.user.password = "";
            },
            loginHandler(event) {
                var $this = this;
                this.refs.userLogin.validate((valid) => {
                    if (valid) {
                        var user = {};
                        user.UserName = $this.user.account;
                        user.PassWord = $this.user.isAuto ? $this.user.password : util.encryMD5($this.user.password);
                        $this.$store.dispatch(login.LOGIN, user).then((data) => {
                            user.PassWord = util.encryAES(user.PassWord, $this.aesKey);
                            util.setStorage({
                                key: constants.USER_INFO_KEY,
                                data: user
                            }, true);
                            $this.$router.replace(decodeURIComponent($this.$route.query.redirect || '/g'));
                        }, () => {
                            console.info('fail')
                        });
                    } else {
                        store.commit(login.LOGIN_FAIL, {
                            msg: '密码或者用户名不能为空'
                        })
                    }
                });
            }
        }

    }
</script>