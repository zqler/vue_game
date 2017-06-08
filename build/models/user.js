var mongoose = require("mongoose"); 

var Schema = mongoose.Schema;   

var userScheMa = new Schema({

    name: String,

    password: String

});


exports.user = mongoose.model('users', userScheMa); 