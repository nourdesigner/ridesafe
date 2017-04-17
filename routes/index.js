var express = require('express');
var router = express.Router();
var request = require('request');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/quizs' ,function(req, res, next) {
    request.get("http://localhost:3003/api/quiz/",function(error, response, body){
        var l= JSON.parse(body);
        res.render('quizs',{quizs :l});
    })
});

router.get('/shop' ,function(req, res, next) {
    request.get("http://localhost:3003/api/produit/",function(error, response, body){
        var l= JSON.parse(body);
        res.render('shop',{shop :l});
    })
});
router.get('/contact',function (req,res) {

    res.render("contact");

});


router.post("/contact",function (req,res) {
    var api_key = 'key-21860b5640a52c45d64f26000dcf6532';
    var domain = 'sandboxf2c75a3eaeea451ca82329a8e3f89c7f.mailgun.org';
    var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
    var data = {
        from: 'Contact Us <postmaster@sandboxf2c75a3eaeea451ca82329a8e3f89c7f.mailgun.org>',
        to: 'mohamed.ncir@esprit.tn',
        subject: req.body.username,
        text: req.body.body
    };

    mailgun.messages().send(data, function (error, body) {
        console.log(body);
        if (!error)
            res.send("mail sent");
        else
            res.send("mail not sent");
    });


});
module.exports = router;
