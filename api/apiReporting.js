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

router.post('/', function (req,res) {
    Report= new Reporting(req.body);
    var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy=today.getFullYear();
    if(dd<10){
        dd='0'+dd;
        res.json(reporting);
    }
    if(mm<10){
        mm='0'+mm;
    }

    var today =dd+'/'+mm+'/'+yyyy;
    Report.date=today;
    Report.save(function (err,reporting) {
        if(err)
            return res.json(err);
    })
});
router.get('/:id', function (req, res, next) {
    Reporting.find({_id:req.params.id },function (err, Reporting){
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

