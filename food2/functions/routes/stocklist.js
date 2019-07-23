//stocklistのjs
const admin = require('firebase-admin');
const functions = require('firebase-functions');
var express =require('express');
var router = express.Router();
//setup firestore
/*admin.initializeApp(functions.config().firebase);
var db = admin.firestore();*/
//現在の時刻を取得・表示
var dt = new Date();
var now_date = dt.toFormat("YYYY年MM月DD日(DDD)");

router.get('/',(req,res,next) =>{
	//var idRef = db.collection('TestUserID').get();
	//var records = idRef.docs.map(elem => elem.data())
	
	var data ={
		title: "一覧",
		now_date: now_date,
		//collection: records,
	}

		res.render('stocklist',data);
	});
	

module.exports = router;