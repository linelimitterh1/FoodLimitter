//stocklistのjs
var express =require('express');
var router = express.Router();

require('date-utils');

var dt = new Date();
var now_date = dt.toFormat("YYYY年MM月DD日dddd")

router.get('/',(req,res,next) =>{
	var data ={
		title: "登録一覧",
		now_date: now_date

	}
	res.render('stocklist',data);
	});


module.exports = router;