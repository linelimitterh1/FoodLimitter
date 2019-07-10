var express =require('express');
var router = express.Router();

router.get('/',(req,res,next) =>{
    var data = {
        title: "食品登録",

    }
    res.render('input',data);
});

module.exports = router;