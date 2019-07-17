
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var history = require('./routes/history');
var score = require('./routes/score');
var stocklist = require('./routes/stocklist');
var input = require('./routes/input');


var firebase = require("firebase/app");
require("firebase/firestore");


var firebaseConfig = {
  apiKey: " AIzaSyDJgdd63od8RtzlR8c-vSM9pOFbUfj7zLk ",
  authDomain: "die-h1-test.firebaseapp.com",
  databaseURL: "https://die-h1-test.firebaseio.com",
  projectId: "die-h1-test",
  storageBucket: "die-h1-test.appspot.com",
  messagingSenderId: "sender-id",
};

var app = express();

app.use(express.static('images'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/history',history);
app.use('/score',score);
app.use('/stocklist',stocklist);
app.use('/input',input);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
