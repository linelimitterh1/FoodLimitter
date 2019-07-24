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
    var foodPicture = document.querySerector("#picture");
    foodPicture.onchange = function(event){
        var files = event.target.files,
            file;
        if(files && files.length > 0) { 
            file = files[0];
        }
    }
    var url = URL.createObjectURL(file);


    var newData =req.body;
    var docRef = db.collection('TestUserID');
    docRef.add({
        'name': newData.name,
        'limit': newData.limit,
        'image': url,
        'timestamp': admin.firestore.FieldValue.serverTimestamp(),
    })
    var data = {
        title: "続けて登録",
    }
    res.render('input',data);
});
module.exports = router;