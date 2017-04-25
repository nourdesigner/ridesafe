var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    fullname : {type:String},
    email :{type:String},
    password : {type:String},
    username : {type:String,default:false},
    role : {type:String},
    kids :[Schema.Types.Mixed],
} , {collection : "user"} );
module.exports = mongoose.model('user',userSchema);

