const admin = require('firebase-admin');
const functions = require('firebase-functions');
var express =require('express');
var router = express.Router();


router.get('/',(req,res,next) =>{
    var data = {
        title: "登録",
    }
    res.render('input',data);
});


//フォームの値をfirestoreのTestUserIDに格納
router.post('/',(req,res,next) =>{
    var newData =req.body;
    var docRef = db.collection('TestUserID');
    docRef.add({
        'name': newData.name,
        'limit': newData.limit,
        //'timestamp': db.FieldValue.serverTimestamp(),
    })
    var data = {
        title: "続けて登録",
    }
    res.render('input',data);
});
module.exports = router;