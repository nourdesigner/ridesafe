var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var userSchema = new Schema ({
    _id : Number,
    } , {collection : "quiz"} );

module.exports = mongoose.model('User',  userSchema);