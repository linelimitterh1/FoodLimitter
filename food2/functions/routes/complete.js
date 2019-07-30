const admin = require('firebase-admin');
const functions = require('firebase-functions');
var express =require('express');
const multer = require('multer')
var router = express.Router();
const upload = multer({
    storage: multer.diskStorage()
});
const bucket = admin.storage().bucket();

router.get('/',(req,res,next) =>{
	var data = {
		title:"入力完了"
	}
	res.render('complete',data)
});
//フォームの値をfirestoreのTestUserIDに格納
router.post('/' ,upload.single("file"),async(req,res,next) =>{
    console.log(upload.single("file"));
    //画像ファイルのアップロード
    const file = bucket.file('path/in/firebase/test.png');
    try {
        // hogeはアップロードしたいファイル
        await file.save(req.file);
        // contentTypeは別でセットしないとダメ
        await file.setMetadata({ contentType: 'image/png' });
    } catch (err) {
        console.log(err);
    }
    

    var idRef = db.collection('TestUserID').orderBy("timestamp",'desc').limit(1);
	idRef.get()
	.then((snapshot) => {
		comps = new Array();
		snapshot.forEach((doc) => {
			comps.push(doc.id);
        });
        functions.storage.object().onFinalize((object) => {
        const bucketName = 'die-h1-test.appspot.com'; // ご自身の
        const filePath = object.name;
        db.collection("TestUserID").doc(comps[0]).update({
            filePath,
            image: `https://firebasestorage.googleapis.com/v0/b/${bucketName}/o/${encodeURIComponent(filePath)}?alt=media`
        }).then(() => console.log('Done')); // eslint-disable-line no-console
        });
        

		var data ={
			title: "入力完了",
		}
			res.render('complete',data);
	})
    .catch((err) => {
		next(err);
	});
});
module.exports = router;