const { Router } = require('express');

const router = Router();

router.post('/',(req, res) => {
    res.send("Bolsa de Trabajo API - CGTIE - TESE ->    " + req.method);
});

router.get('/',(req,res)=> {
    res.send("Bolsa de Trabajo API - CGTIE - TESE ->    " + req.method);
});

module.exports = router;