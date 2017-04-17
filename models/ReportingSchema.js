var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ReportingSchema = new Schema ({

    _id : Number,
    subjectReporting: {type:String,default:false},
    description : {type:String,required:true, minlength:1,trim:true},


} , {collection : "reporting"} );

module.exports = mongoose.model('reporting', ReportingSchema);