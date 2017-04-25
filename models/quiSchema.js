var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var quizSchema = new Schema ({
    Question : {type:String,default:false},
    tags : {type:String,default:false},
    Reponses :[{type: String}],
    Reponse :{type:String,default:false},
} , {collection : "quiz"} );

module.exports = mongoose.model('quiz',  quizSchema);