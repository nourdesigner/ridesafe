var express = require('express');
var router = express.Router();
var users = require('../models/userModel');
var request = require('request');
var ObjectID = require('mongodb').ObjectID;


router.get('/', function(req, res) {

    /* User.find().exec(function(err,data){
     res.json(data);
     });
     */
    users.find(function (err, users) {
        if (err)
            res.json(err);
        res.status(200).send(users);
    });
});

router.get('/:id', function(req, res) {

    /* User.find().exec(function(err,data){
     res.json(data);
     });
     */
    users.findById(req.params.id,function (err, users) {
        if (err)
            res.json(err);
        res.status(302).send(users);
    });
});



router.post('/', function(req, res) {

    /* User.find().exec(function(err,data){
     res.json(data);
     });
     */

    var user  = new users(req.body);
    user.save(function (err,user) {

        if(err)
            return res.json(err)
      return  res.status(201).send(user);


    });
});

router.delete('/:id', function (req, res, next) {
    users.findByIdAndRemove({_id:req.params.id}, req.body, function (err, user) {
        if (err)
            return res.json(err);
        return res.status(204).send(user);
    });
});


router.put('/:id', function(req, res) {

    /* User.find().exec(function(err,data){
     res.json(data);
     });
     */




    users.update({"_id" :req.params.id},{$set : { "username" : req.body.username}})
        .exec(function(err,data){

            if(err)
                res.json(err);
            res.status(200).json(data);
        });


});
module.exports = router;
