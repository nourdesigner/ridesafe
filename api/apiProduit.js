var express = require('express');
var router = express.Router();
var Produit = require('../models/ProduitSchema');



router.get('/', function (req, res, next) {
    Produit.find(function(err, Produits){
        if(err)
            return res.json(err);
        res.json(Produits);
    });
});

router.get('/id/:id', function (req, res, next) {
    Produit.findById(req.params.id ,function (err, Produits){
        if(err)
            return res.json(err);
        res.json(Produits);
    });
});
router.post('/', function (req,res) {
    Product= new Produit(req.body);
    Product.save(function (err,prod) {
        if(err)
            return res.json(err);
        res.json(prod);
    })
});
router.get('/find/:id', function (req, res, next) {
    Produit.findById(req.params.id ,function (err, Produits){
        if(err)
            return res.json(err);
        res.json(Produits.Question);
    });
});
router.delete('/:id', function(req, res) {
    Produit.findByIdAndRemove(req.params.id,function () {
        res.json({"success":true});
    })
});
router.put('/:id', function(req, res) {
    Produit.findByIdAndUpdate(req.params.id,req.body,function () {
        res.json({"success":true});
    })
});
router.post('/', function (req, res, next) {
    var Produit = new Produit(req.body)
    Produit.save(function (err) {

//})
        //Produit.push(req.body);
        res.json(Produit);
        res.json(req.body);

    });
});


router.delete('/:id', function (req, res, next) {

    Produit.findByIdAndRemove(req.params.id,function () {
        res.json({"success" : true});
    })

});
/*router.deleteAll('/',function (req,res) {
 Produit.remove(function () {
 res.json({"success" : true});


 })

 })*/
router.put('/:id', function (req, res, next) {

    Produit.findByIdAndUpdate(req.params.id,req.body,function (err) {
        if(err)
            return res.json(err)
        res.json({"success" : true});
    })

});
module.exports = router;

