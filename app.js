var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require ('mongoose');
var cors = require('cors');


var index = require('./routes/index');
var quizs = require('./api/apiQuizs');
var produits = require('./api/apiProduit');
var reporting = require('./api/apiReporting');
var review = require('./api/apiReview');
var server = require('./routes/server');
var contact =require('./routes/contactold');
var users = require('./api/userapi');
var discussion = require('./api/apidisscussion');
var mail = require('./api/apimail');
var historique = require('./api/apiHistorique');
var likereporting = require('./api/apiLikeReporting');

var app = express();
//mongoose.connect('mongodb://localhost:27017/mean')
mongoose.connect('mongodb://wemtek:wemtek@ds133670.mlab.com:33670/ridesafe')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/quiz', quizs);
app.use('/api/produit', produits);
app.use('/api/reporting', reporting);
app.use('/api/review', review);
app.use('/api/historique',historique);
app.use('/api/likereporting',likereporting);

app.use('/chat', server);
app.use('/', index);
app.use('/contact', contact);
app.use('/user', users);
app.use('/chat',discussion);
app.use('/mail',mail);

app.use('/', index);


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    if(req.method=='OPITIONS'){
        res.status==200;
    }
    next();
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
