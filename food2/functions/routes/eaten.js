var express =require('express');
var router = express.Router();

router.get('/',(req,res,next) => {
    var data={
        title:"消費しました",
        name: "  "
    }
    res.render('eaten',data);
})

router.post('/',(req,res,next) => {
	var newData = req.body;
	var myid = 'TestUserID';
	db.collection(myid).doc(newData.id).delete();
	db.collection('Score').doc(myid).get()
	.then((snapshot) => {
		score_datas = new Array();
		snapshot.forEach((doc) => {
		score_datas.push(doc.data());
		});
	})
	.catch(err => {
		console.log('Error getting documents', err);
	});
	var sum = 0;
	if(score_datas[0].sum){
		sum = score_datas.sum;
	} 
		sum = sum + 1;
	db.collection('Score').doc(myid).set({
		sum: sum
	},{merge: true});



	var data = {
		title: "消費しました",
		name: newData.name
	}

	res.render('eaten',data);
});

module.exports = router;