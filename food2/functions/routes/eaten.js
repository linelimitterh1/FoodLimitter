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
	db.collection('Score').doc(myid).set({
		sum: 0
	},{merge: true});
	db.collection('Score').doc(myid).get()
	.then(doc => {
		if (!doc.exists) {
			console.log('No such document!');
		} else {
			var dt = new Date();
			var lidt = new Date(newData.limit)
			var sum = 0;
			sum = doc.data().sum;
			if(lidt >= dt){
				sum = sum + 1;
			}else if(lidt < dt){
				sum = sum - 1; 
			}
			
			db.collection('Score').doc(myid).set({
				sum: sum
			});
		}
	})
	.catch(err => {
		console.log('Error getting documents', err);
	});
	
	var data = {
		title: "消費しました",
		name: newData.name
	}

	res.render('eaten',data);
});

module.exports = router;