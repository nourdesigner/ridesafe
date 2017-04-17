var express = require('express');
var router = express.Router();
var User = require('../models/userSchema');



router.get('/', function (req, res, next) {
User.find(function(err, users){
    if(err)
        return res.json(err);
    res.json(users);
});
});

router.get('/:id', function (req, res, next) {
    User.findById(req.params.id,function (err,users) {
        if(!users)
            return res.status(404).send();

        res.status(200).send(users);
    })
});

router.post('/', function (req, res) {
    User= new User(req.body);
    User.save(function (err) {
        if(err)
            return res.json(err);
        res.json(User);
    })
});


router.delete('/:id', function (req, res, next) {
 User.findByIdAndRemove(req.params.id,function () {
     res.json({"success" : true});
 })

});
/*router.deleteAll('/',function (req,res) {
    User.remove(function () {
        res.json({"success" : true});


    })

})*/
router.put('/:id', function (req, res, next) {

    User.findByIdAndUpdate(req.params.id,req.body,function (err) {
        if(err)
           return res.json(err)
        res.json({"success" : true});
    })

});
module.exports = router;