const { Router } = require('express');
const router = Router();

const c = require('../controllers/unidades-eco.controller'); // FUNCIONES DEL CONTROLADOR

router.get('/unidades-eco',c.getUnidadesEco);
//slasgh
router.post('/unidades-eco',c.postUnidadesEco);

module.exports = router;