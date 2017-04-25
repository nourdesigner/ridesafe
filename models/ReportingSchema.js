var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ReportingSchema = new Schema ({


    subjectReporting: {type:String,default:false},
    description : {type:String,required:true, minlength:1,trim:true},
    date: {type:String},
    like: [{type:String}],
    dislike: [{type:String}],
    user: {type:String, default:false},
    signal:[{type:String}]


} , {collection : "reporting"} );

module.exports = mongoose.model('reporting', ReportingSchema);