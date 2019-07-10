var express =require('express');
var router = express.Router();

var score = 20;

//スコアの表示の分岐
var mark = '/images/nomal.png';
if(score>=20){
    mark = '/images/good.png';
}


router.get('/',(req,res,next) =>{
    var data = {
        title: "スコア",
        img: mark
    };
    res.render('score',data);
});

module.exports = router;