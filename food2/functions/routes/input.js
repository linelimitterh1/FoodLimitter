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
    /*
    var foodPicture = req.querySerector("#picture");
    foodPicture.onchange = function(event){
        var files = event.target.files,
            file;
        if(files && files.length > 0) { 
            file = files[0];
        }
    }
    var url = URL.createObjectURL(file);
    */
    const file = JSON.stringify(req.file);
    console.log(file);

    var ldate;
    if(newData.limit[1] == ""){
        ldate = newData.limit[0];
    }else{
        ldate = newData.limit[1];
    }

    var docRef = db.collection('TestUserID');
    docRef.add({
        'name': newData.name,
        'limit': ldate,
        'image': newData.picture,
        'timestamp': admin.firestore.FieldValue.serverTimestamp(),
    })
    var data = {
        title: "続けて登録",
    }
    res.render('input',data);
});
module.exports = router;