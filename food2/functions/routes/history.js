const admin = require('firebase-admin');
const functions = require('firebase-functions');
url = require('url');
var express =require('express');
var router = express.Router();


router.get('/',(req,res,next) =>{userId=url.parse(req.url).query.slice(0,-1);
    var idRef = db.collection(userId).orderBy("timestamp",'desc').limit(5);
	idRef.get()
	.then((snapshot) => {
		 hists = new Array();
		snapshot.forEach((doc) => {
			hists.push(doc.data());
		});
		var data ={
			title: "履歴",
			collection: hists,
		}
			res.render('history',data);
	})
    .catch((err) => {
		next(err);
	});
});

module.exports = router;