var express = require('express');
var router = express.Router();
var Quiz = require('../models/quiSchema');
var mongoose = require('mongoose');



router.get('/', function (req, res, next) {
Quiz.find(function(err, Quizs){
    if(err)
        return res.json(err);
    res.json(Quizs);
});
});

router.get('/:id', function (req, res) {

    Quiz.find({_id:req.params.id},function (err,Quizs) {
        if(err)
            return res.json(err);
        res.json(Quizs);
    })
});

router.get('/tags/:tags', function (req, res, next) {
    Quiz.find({tags:req.params.tags}).limit(1).exec(function (err,Quizs) {
        if(err)
            return res.json(err);
        res.json(Quizs);
    })
});

router.post('/', function (req, res) {
    Quiz._id="9";
    Quiz= new Quiz(req.body);
    Quiz.save(function (err) {
        if(err)
            return res.json(err);
        res.json(Quiz);
    })
});

router.delete('/:id', function(req, res) {
    Quiz.findByIdAndRemove(req.params.id,function () {
        res.json({"success":true});
    })
});
/*router.deleteAll('/',function (req,res) {
    Quiz.remove(function () {
        res.json({"success" : true});


    })

})*/
router.put('/:id', function (req, res, next) {

    Quiz.findByIdAndUpdate(req.params.id,req.body,function (err) {
        if(err)
           return res.json(err)
        res.json({"success" : true});
    })

});
module.exports = router;