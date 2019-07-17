const admin = require('firebase-admin');
const funcitions = require('firebase-functions');
var express =require('express');
var router = express.Router();

//setup firestore
admin.initializeApp(funcitions.config().firebase);
var db = admin.firestore();


router.get('/',(req,res,next) =>{
    var data = {
        title: "食品登録",

    }
    res.render('input',data);
});
//Post new users
router.post('/',(req,res,next) =>{
    var newData =req.body;
    var docRef = db.collection('users').doc(newData.name);
    docRef.set(newData).then(ref =>{
        console.log('success');
        res.send('success');
    }).catch(function(error){
        console.log(error);
        next(error);
    });
})

module.exports = router;