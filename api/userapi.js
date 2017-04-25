var express = require('express');
var router = express.Router();
var users = require('../models/userModel');
var request = require('request');
var ObjectID = require('mongodb').ObjectID;


router.get('/', function(req, res) {

    users.find(function (err, users) {
        if (err)
            res.json(err);
        res.status(200).send(users);
    });
});

router.get('/:id', function (req, res) {
    users.find({_id:req.params.id},function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});
router.get('/name/:id', function (req, res) {
    users.find({username:req.params.id},function (err,users) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});
router.get('/:username/:password', function(req, res) {

    users.find({username:req.params.username,password:req.params.password},function (err, users) {
        if (err)
            res.json(err);
        res.status(200).send(users);
    });
});
router.post('/', function (req, res) {
    users= new users(req.body);
    users.save(function (err) {
        if(err)
            return res.json(err);
        res.json(users);
    })
});


router.delete('/:id', function (req, res, next) {
    users.findByIdAndRemove({_id:req.params.id}, req.body, function (err, user) {
        if (err)
            return res.json(err);
        return res.status(200).send(user);
    });
});


router.put('/:id', function(req, res) {
    users.findByIdAndUpdate(req.params.id,req.body,function () {
        res.json({"success":true});
    })
});
module.exports = router;
