var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient,
    client=require('socket.io').listen(8080).sockets;
mongo.connect('mongodb://wemtek:wemtek@ds133670.mlab.com:33670/ridesafe', function (err,db) {
    if(err) throw err;
    client.on('connection',function (socket) {
        var col = db.collection('messages')
        col.find().sort({_id:1}).toArray(function (err,res) {
            if(err) {throw err;}
            socket.emit('output',res);
        })
      socket.on('input',function (data) {
          var name= data.name,
           message=data.message;
          col.insert({name:name, message:message}, function () {

               client.emit('output',[data])
              console.log('inserted');
          })
      })
    });
    
})

console.log("worked");
router.get('/chat',function (req,res) {

    res.render("discussion");

});
module.exports = router;