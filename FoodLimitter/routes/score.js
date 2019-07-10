var express =require('express');
var router = express.Router();
var score = 20;
if(score>20)
var good = /images/good.png;



router.get('/',(req,res,next) =>{
    var data = {
        title: "スコア",
        

    };
    res.render('score',data);
});

module.exports = router;