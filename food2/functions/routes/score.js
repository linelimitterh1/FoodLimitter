var express =require('express');
var router = express.Router();

var score = 0;

//スコアの表示の分岐
var mark = '/images/score_nomal.png';
if(score >= 5){
    mark = '/images/score_good.png';
}if(score < 0){
    mark = '/images/score_toobad.png'
}


router.get('/',(req,res,next) =>{
    var data = {
        title: "スコア",
        img: mark
    };
    res.render('score',data);
});

module.exports = router;