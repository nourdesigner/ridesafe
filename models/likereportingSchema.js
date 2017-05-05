var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var LikereportingSchema = new Schema ({

    type: {type:String},
    idReporting : {type:String},
    idUser:{type:String}

} , {collection : "likereporting"} );

module.exports = mongoose.model('likereporting', LikereportingSchema);