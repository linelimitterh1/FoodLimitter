//stocklistのjs
const admin = require('firebase-admin');
const functions = require('firebase-functions');
var express =require('express');
var router = express.Router();

//現在の時刻を取得・表示
var dt = new Date();
var now_date = dt.toFormat("YYYY年MM月DD日(DDD)");

router.get('/',(req,res,next) =>{
	var idRef = db.collection('TestUserID').orderBy("limit");
	idRef.get()
	.then((snapshot) => {
		 ids = new Array();
		 docs = new Array();
		snapshot.forEach((doc) => {
			ids.push(doc.data());
			docs.push(doc.id);
		});
		var data ={
			title: "一覧",
			now_date: now_date,
			collection: ids,
			doc_id: docs
		}
			res.render('stocklist',data);
	})
	.catch((err) => {
		next(err);
	});
	
});

router.post('/',(req,res,next) =>{

	db.collection('TestUserID').doc(req.body.id).delete();
	res.redirect('/')
})
module.exports = router;