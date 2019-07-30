const admin = require('firebase-admin');
const functions = require('firebase-functions');
const multer = require('multer')
var express =require('express');
var router = express.Router();
const upload = multer({
    storage: multer.memoryStorage()
});

router.get('/',(req,res,next) =>{
	data = {
		title:"画像の入力"
	}
    res.render('input_image',data);
});

module.exports = router;