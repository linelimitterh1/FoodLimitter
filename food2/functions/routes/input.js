const admin = require('firebase-admin');
const functions = require('firebase-functions');
const multer = require('multer')
var express = require('express');
var router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
});
router.get('/',(req,res,next) =>{
    var name = "";
    var limit = "";
    var hisData = req.query;
    if(hisData.name != ""){
        name = hisData.name;
    }
    if(hisData.limit != ""){
        limit = hisData.limit;
    }
    var data = {
        title: "入力",
        name: name,
        limit: limit
    }
    res.render('input',data);
});


//フォームの値をfirestoreのTestUserIDに格納
router.post('/' ,(req,res,next) =>{
    var newData = req.body;  
    console.log(newData);
    var ldate;
    if(newData.limit[0] == ""){
        ldate = newData.limit[1];
    }else{
        ldate = newData.limit[0];
    }
    var docRef = db.collection(newData.UserID);
    docRef.add({
        'name': newData.food_name,
        'limit': ldate,
        'image': "/images/no_image.png",
        'timestamp': admin.firestore.FieldValue.serverTimestamp(),
    })
    var data = {
        title: "続けて登録",
        name: "",
        limit:""
    }
    res.render('input',data);
});
module.exports = router;