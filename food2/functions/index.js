const admin = require('firebase-admin');
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const line = require('@line/bot-sdk');
require('date-utils');
var bodyparser = require('body-parser');

const config = {
    channelSecret: '7a08fa7a6237d2112caf450b11f4c425', // LINE Developersでの準備②でメモったChannel Secret
    channelAccessToken: 'W/tGaGsmk6aFkJsJpOf/y7voSht4BpN/Rloi6gfo+Jzp2cEnnjc9EoCShmd6NnHOj7S7zifpLtzTatn6WY+kl+sFVhhlmivnhBEEuk9rD9x6gHbtwvjdeLyq8LH9goN1MQ91yt8jmpHtHpt62uL6VVGUYhWQfeY8sLGRXgo3xvw=' // LINE Developersでの準備②でメモったアクセストークン
};

admin.initializeApp(functions.config().firebase);
db = admin.firestore();
storage = admin.storage();

const app = express();
const linebot = express();
linebot.post('/webhook', line.middleware(config), (req, res) => {
  console.log(req.body.events);
  Promise
    .all(req.body.events.map(handleEvent))
    .then((result) => res.json(result))
    .catch((result) => console.log('error!!!'));
});

const client = new line.Client(config);


async function handleEvent(event) {
if (event.type !== 'message' || event.message.type !== 'text') {
  return Promise.resolve(null);
  
}

return client.replyMessage(event.replyToken, {
  type: 'text',
    text: event.message.text + 'を受け取りました。'

});
}

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});
exports.linebot = functions.https.onRequest(linebot);
const indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var history = require('./routes/history');
var score = require('./routes/score');
var stocklist = require('./routes/stocklist');
var input = require('./routes/input');
var eaten = require('./routes/eaten');



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
app.use('/eaten',eaten);


app.use(express.static(path.join(__dirname, 'public')));

exports.app = functions.https.onRequest(app);