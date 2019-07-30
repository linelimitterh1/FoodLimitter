var express =require('express');
var router = express.Router();

router.get('/',(req,res,next) =>{
	var data = {
		title:"続けて入力"
	}
	res.render('continue_img',data)
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
    /*
    var option = {
        url: 'https://api.line.me/v2/profile',
        method: get
    }*/


    var docRef = db.collection('TestUserID');
    docRef.add({
        'name': newData.food_name,
        'limit': ldate,
        'image': "/images/no_image.png",
        'timestamp': admin.firestore.FieldValue.serverTimestamp(),
    })
    var data = {
        title: "続けて入力",
    }
    res.render('continue_img',data);
});
module.exports = router;