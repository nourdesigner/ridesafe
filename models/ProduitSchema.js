var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ProductSchema = new Schema ({
    _id : {type:String},
    productName: {type:String,default:false},
    price : {type:Number,default:null},
    category : {type:String,required:true, minlength:1,trim:true},
    path: {type:String,default:false},

} , {collection : "product"} );

module.exports = mongoose.model('product', ProductSchema);