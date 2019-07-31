const admin = require('firebase-admin');
const functions = require('firebase-functions');
var express =require('express');
var router = express.Router();


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
        'image': newData.food_image,
        'timestamp': admin.firestore.FieldValue.serverTimestamp(),
    })
    var data = {
        title: "画像を入力"
    }
    res.render('input_img',data);
});
module.exports = router;