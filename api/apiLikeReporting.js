var express = require('express');
var router = express.Router();
var Reporting = require('../models/likereportingSchema');



router.get('/', function (req, res, next) {
    Reporting.find(function(err, Reporting){
        if(err)
            return res.json(err);
        res.json(Reporting);
    });
});

router.post('/', function (req,res) {
    Report= new Reporting(req.body);
       Report.save(function (err,reporting) {
        if(err)
            return res.json(err);
    })
});
router.get('/:idr/:idu', function (req, res, next) {
    Reporting.findOne({'idReporting':req.params.idr,'idUser':req.params.idu},function (err, Reporting){
        if(err)
            return res.json(err);
        res.json(Reporting);
    });
});
router.delete('/:id', function(req, res) {
    Reporting.findByIdAndRemove(req.params.id,function () {
        res.json({"success":true});
    })
});
router.put('/:id', function(req, res) {
    Reporting.findByIdAndUpdate(req.params.id,req.body,function () {
        res.json({"success":true});
    })
});
router.post('/', function (req, res, next) {
    var Reporting = new Reporting(req.body)
    Reporting.save(function (err) {

        res.json(Reporting);
        res.json(req.body);

    });
});



module.exports = router;

