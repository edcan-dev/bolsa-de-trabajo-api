const { Router } = require('express');
const router = Router();
const cors = require('cors');

router.use(cors()); 
// Nos permite obtener los recursos de la API
// El cors se configura en el router, porque el router llema a los callbacks de las requests.

const c = require('../controllers/unidades-eco.controller'); // FUNCIONES DEL CONTROLADOR

router.get('/unidades-eco',c.getUnidadesEco);
//slasgh
router.post('/unidades-eco',c.postUnidadesEco);

module.exports = router;