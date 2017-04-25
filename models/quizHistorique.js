var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var historique = new Schema ({

} , {collection : "historique"} );

module.exports = mongoose.model('historique',  historique);