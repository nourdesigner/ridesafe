var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    _id:  { type: String , autoIncrement: true },
    username: { type: String, required: true, index: { unique: true }},
    firstname : String,
    lastname : String,
    add_date : String,
    qte: String,
    role :String,
    adress:String,
    history:String,
    score: String



},{collection:"user"});
module.exports = mongoose.model('user',userSchema);

