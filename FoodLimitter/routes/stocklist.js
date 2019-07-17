//stocklistのjs
const admin = require('firebase-admin');
const functions = require('firebase-functions');
var express =require('express');
var router = express.Router();
//setup firestore
admin.initalizeApp(functions.config().firebase);
var db = admin.firestore();
//日付の取得
require('date-utils');
var dt = new Date();
var now_date = dt.toFormat("YYYY年MM月DD日(DDD)")

router.get('/',(req,res,next) =>{
	var data ={
		title: "登録一覧",
		now_date: now_date
	}
	db.collection('users').get()
		.then((snapshot) => {
			var users = new Array();
			snapshot.forEach((doc) => {
				users.push(doc.data());
			});
			res.json(users);
			res.render('stocklist',data);
		})
		.catch((err) => {
			next(err);
		});
	});


module.exports = router;