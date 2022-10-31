const { Router } = require('express');
const router = Router();
const cors = require('cors');
const bodyParser = require('body-parser');

router.use(cors()); 
// Nos permite obtener los recursos de la API
// El cors se configura en el router, porque el router llema a los callbacks de las requests.

module.exports = router;
