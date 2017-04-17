var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema ({
    _id : Number,
} , {collection : "review"} );

module.exports = mongoose.model('review', ReviewSchema);