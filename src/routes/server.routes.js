const { Router } = require('express');

const router = Router();


router.post('/',(req, res) => {
    //console.log(req.body);
    //console.log(req.method);
    console.log(req.body);
    res.send(" POST - BOLSA DE TRABAJO API - CGTIE");
});

router.get('/',(req,res)=>{res.send("BOLSA DE TRABAJO API - CGTIE")});

module.exports = router;