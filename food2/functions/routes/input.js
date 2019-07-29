const admin = require('firebase-admin');
const functions = require('firebase-functions');
const multer = require('multer')
var express =require('express');
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
    console.log(hisData);
    var data = {
        title: "入力",
        name: name,
        limit: limit
    }
    res.render('input',data);
});


//フォームの値をfirestoreのTestUserIDに格納
router.post('/' ,(req,res,next) =>{
    var newData =req.body;  
    var ldate;
    if(newData.limit[0] == ""){
        ldate = newData.limit[1];
    }else{
        ldate = newData.limit[0];
    }
    var option = {
        url: 'https://api.line.me/v2/profile',
        method: get
    }


    var docRef = db.collection('TestUserID');
    docRef.add({
        'name': newData.food_name,
        'limit': ldate,
        'image': "写真",
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