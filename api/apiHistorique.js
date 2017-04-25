var express = require('express');
var router = express.Router();
var Historique = require('../models/quizHistorique');



router.get('/', function (req, res, next) {
    Historique.find(function(err, Historique){
        if(err)
            return res.json(err);
        res.json(Historique);
    });
});

router.get('/user/:id', function (req, res, next) {
    Historique.find({userId:req.params.id} ,function (err, Historique){
        if(err)
            return res.json(err);
        res.json(Historique);
    });
});
router.post('/', function (req,res) {
    Historique= new Historique(req.body);
    Historique.save(function (err,Historique) {
        if(err)
            return res.json(err);
        res.json(Historique);
    })
});
router.get('/find/:id', function (req, res, next) {
    Historique.findById(req.params.id ,function (err, Historique){
        if(err)
            return res.json(err);
        res.json(Historique.Question);
    });
});
router.delete('/:id', function(req, res) {
    Historique.findByIdAndRemove(req.params.id,function () {
        res.json({"success":true});
    })
});
router.put('/:id', function(req, res) {
    Historique.findByIdAndUpdate(req.params.id,req.body,function () {
        res.json({"success":true});
    })
});
router.delete('/:id', function (req, res, next) {

    Historique.findByIdAndRemove(req.params.id,function () {
        res.json({"success" : true});
    })

});
/*router.deleteAll('/',function (req,res) {
 Produit.remove(function () {
 res.json({"success" : true});


 })

 })*/
router.put('/:id', function (req, res, next) {

    Historique.findByIdAndUpdate(req.params.id,req.body,function (err) {
        if(err)
            return res.json(err)
        res.json({"success" : true});
    })

});
module.exports = router;

