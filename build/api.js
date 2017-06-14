var express = require('express');
var router = express.Router();
var bodyPaeser = require('body-parser')
var appdata = require('../mock/users.json')
var appList = require('../mock/newlist.json')
var videoList = require('../mock/videolist.json')
var data = require('./server/data')
// router.use(function(req,res,next){       var s = "[" + Date.now() + "] :" +
// req.url + ";" + req.header('UserToken');   console.info(s);   next(); });
// router.post('/login', function (req, res) {   var name =
// req.param('UserName');   var password = req.param('PassWord');
// console.info("[Login] name:" + name + " password: " + password);
// res.json(data.login) }); module.exports = router; 创建数据库连接
router.use(bodyPaeser.urlencoded({extended: false}));
//用户登录接口
router.post('/login', function (req, res) {
  //获取参数
  let login = appdata.users;
  let name = req.body.UserName;
  let passWord = req.body.PassWord;
  console.info("[Login] name:" + name + " password: " + passWord);

  // 读取账号密码数据操作  var
  // dataList=[{name:"chenjie",passWord:"陈杰"},{name:"admin",passWord:"21232f297a57a
  // 5a743894a0e4a801fc3"}] ; //获取得到的数据 判断  随便写
  var user = null;
  //根据账号 查找用户
  for (var p in login) {
    if (login[p].username == name) {
      user = login[p];
      break;
    }
  }

  //判断
  if (!user) {
    res.json("用户不存在，去注册吧！"); //用户不存在
  } else if (user.password != passWord) {
    res.json("密码错误"); //密码不正确
  } else {
    res.json(data.login); //登录成功
  }
});
router.get('/list', function (req, res) {
  res.json(appList.newList);
});

router.delete('/Dlist', function (req, res) {

  let taskID = req.query.taskId; //获取参数   delete ,get  用query；post用body;  路由传参用params
  let List = appList.newList;

  //删除元素
  for (var p in List) {
    if (List[p].taskId == taskID) {
      List.splice(List[p], 1);
      break;
    }
  }

  res.json(true); //返回成功

});
//注册接口
router.post('/register', function (req, res) {
  let login = appdata.users;
  console.log(req.body);
  if (req.body) {
    res.json({"data": "success"});
  } else {
    res.json({"error": "error"})
  }
})
router.post('/Dlist', function (req, res) {
  let List = appList.newList;
  if (req.body) {
    //得到新数据
    var newUser = req.body;
    newUser.taskId = parseInt(List[List.length - 1].taskId) + 1;
    newUser.isdeleted = false;
    List.push(newUser);
    res.json({data: List});
  } else {
    res.send({"status": "error"});
  }

});
router.put('/DList', function (req, res) {
  if (req.body) {
    res.json(true);
  }
})
//新闻列表页
router.get('/VList', function (req, res) {
  const data = videoList.video;
  res.json(data);
  res.send("success");
})
//新闻详情页
router.post('/VLists', function (req, res) {
  const data = videoList.video;
  if (req.body) {
    for (const p in data) {
      if (req.body.id == data[p].id) {
        res.json(data[p]);
      }
    }
  }

})
module.exports = router;