const { Router } = require ('express');
const cors = require('cors');
const router = Router();

router.use(cors());

// Nos permite obtener los recursos de la API
// El cors se configura en el router, porque el router llema a los callbacks de las requests. 
const c = require('../controllers/can-internos.controller');

router.get('/api/can-internos',c.getCanInternos);


module.exports = router;