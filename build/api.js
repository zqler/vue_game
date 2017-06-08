
var express = require('express');
var router = express.Router();
var bodyPaeser =require('body-parser')
var mongoose = require('mongoose')
var User = require('./models/user')
var data = require('./server/data')
// router.use(function(req,res,next){
//       var s = "[" + Date.now() + "] :" + req.url + ";" + req.header('UserToken');
//   console.info(s);
//   next();
   
// });
// router.post('/login', function (req, res) {
//   var name = req.param('UserName');
//   var password = req.param('PassWord');
//   console.info("[Login] name:" + name + " password: " + password);
//   res.json(data.login)
// });
// module.exports = router;

//创建数据库连接
mongoose.connect('mongodb://localhost/vue_game');
router.use(bodyPaeser.urlencoded({ extended: false }));  
router.post('/login', function (req, res) {
//   //获取参数
//   var name=req.body.UserName;
//    var passWord=req.body.PassWord;
 
//   console.info("[Login] name:" + name + " password: " + passWord);
 
//  //读取账号密码数据操作
//  var dataList=[{name:"chenjie",passWord:"陈杰"},{name:"admin",passWord:"21232f297a57a5a743894a0e4a801fc3"}] ; //获取得到的数据

// //判断  随便写
// var user=null;
// //根据账号 查找用户
// for(var p in dataList)
// {
//   if(dataList[p].name==name)
//   {
// user=dataList[p];
// break;
//   }
// }

// //判断
// if(!user)
// {
//   res.json("用户不存在");   //用户不存在
// }
// else if(user.passWord!=passWord)
// {
// res.json("密码错误");   //密码不正确
// }
// else
// {
// res.json(data.login);   //登录成功
// }


 
  var query_doc = {userid:req.body.UserName, password: req.body.PassWord};

    (function(){

        user.count(query_doc, function(err, doc){

            if(doc == 1){

                console.log(query_doc.userid + ": login success in " + new Date());

                res.render('home', { title: 'homepage' });

            }else{

                console.log(query_doc.userid + ": login failed in " + new Date());

                res.redirect('/');

            }

        });

    })(query_doc);
});
module.exports = router;