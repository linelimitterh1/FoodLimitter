var express =require('express');
var router = express.Router();

router.get('/',(req,res,next) =>{
    var data = {
        title: "スコア",

    };
    res.render('score',data);
});

module.exports = router;