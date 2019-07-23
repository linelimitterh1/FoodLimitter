//stocklistのjs
const admin = require('firebase-admin');
var express =require('express');
var router = express.Router();
/*//setup firestore
admin.initalizeApp(functions.config().firebase);
var db = admin.firestore();*/
//現在の時刻を取得・表示
window.onload = function getToday() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var you = now.getDay(); //曜日(0～6=日～土)

	//曜日の選択肢
	var youbi = new Array("日","月","火","水","木","金","土");
    //出力用
    document.getElementById("view_today").innerHTML =year + "年" + mon + "月" + day + "日 (" + youbi[you] + ")";
}

router.get('/',(req,res,next) =>{
	var data ={
		title: "登録一覧",
		now_date: now_date
	}
	/*db.collection('users').get()
		.then((snapshot) => {
			var users = new Array();
			snapshot.forEach((doc) => {
				users.push(doc.data());
			});
			res.json(users);
			
		})
		.catch((err) => {
			next(err);
		});*/
		res.render('stocklist',data);
	});
	

module.exports = router;