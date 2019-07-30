var express =require('express');
var router = express.Router();


router.get('/',(req,res,next) =>{
    var idRef = db.collection().orderBy("timestamp",'desc').limit(5);
	idRef.get()
	.then((snapshot) => {
		 hists = new Array();
		snapshot.forEach((doc) => {
			hists.push(doc.data());
		});
		var data ={
			title: "履歴",
			collection: hists,
		}
			res.render('history',data);
	})
    .catch((err) => {
		next(err);
	});
});

module.exports = router;