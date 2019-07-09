var express =require('express');
var router = express.Router();

router.get('/',(req,res,next) =>{
    var data = {
        title: "履歴"
    }
    res.render('history',data);
});

module.exports = router;