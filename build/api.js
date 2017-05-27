
var express = require('express');
var router = express.Router();
var data = require('./server/data')
router.use(function(req,res,next){
      var s = "[" + Date.now() + "] :" + req.url + ";" + req.header('UserToken');
  console.info(s);
  next();
   
});
router.post('/login', function (req, res) {
    var user = {
 phone:'admin',
 password:'admin'
}
  var name = req.param('UserName');
  var password = req.param('PassWord');
  if(name == undefined && password == undefined){
  console.info("[Login] name:" + name + " password: " + password);
       res.json(data.login) 
  }

});
module.exports = router;