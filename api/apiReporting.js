var express = require('express');
var router = express.Router();
var Reporting = require('../models/ReportingSchema');



router.get('/', function (req, res, next) {
    Reporting.find(function(err, Reporting){
        if(err)
            return res.json(err);
        res.json(Reporting);
    });
});

router.get('/:id', function (req, res, next) {
    Reporting.findById({_id:req.params.id} ,function (err, Reporting){
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
        res.json(reporting);
    })
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

module.exports = router;

