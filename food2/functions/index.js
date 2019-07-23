const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
require('date-utils');
var bodyparser = require('body-parser');

admin.initializeApp(functions.config().firebase);
db = admin.firestore();

const app = express();

const indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var history = require('./routes/history');
var score = require('./routes/score');
var stocklist = require('./routes/stocklist');
var input = require('./routes/input');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'routes')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/history',history);
app.use('/score',score);
app.use('/stocklist',stocklist);
app.use('/input',input);


app.use(express.static(path.join(__dirname, 'public')));

exports.app = functions.https.onRequest(app);