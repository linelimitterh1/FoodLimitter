var express =require('express');
var router = express.Router();




router.get('/',(req,res,next) =>{

    var score = 0;
    db.collection('Score').doc("TestUserID").get()
    .then(doc => {
        if (!doc.exists) {
            console.log('No such document!');
        } else {
            score = doc.data().sum;

            //スコアの表示の分岐
            var mark = '/images/score_nomal.png';
            if(score >= 5){
            mark = '/images/score_good.png';
            }if(score < 0){
                mark = '/images/score_toobad.png'
            }
            var data = {
                title: "スコア",
                img: mark
            };
            res.render('score',data);
        }
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
    
});

module.exports = router;