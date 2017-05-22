
var express = require('express');
var router = express.Router();
router.use(function(req,res,next){
    console.log(req.param('password'));
    next();
});
router.post('/users',function(req,res){
     res.json({errcode:0,resultDate:{UserToken:'11',NIkeName:'测试',SuperAdmin:'1',AdminID:'1'}});   
});
module.exports = router;