const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const serverRoutes =  require ('./routes/server.routes.js');
const unidadesEcoRoutes = require('./routes/unidades-eco.routes.js');
const vacantesRoutes = require('./routes/vacantes.routes.js');
const canInternosRoutes = require('./routes/can-internos.routes.js');
const canExternosRoutes = require('./routes/can-externos.routes.js');

const PORT = process.env.PORT || 3000; // process.env.PORT devuelve un puerto dis

//app.use(express.json());
app.use(bodyParser.urlencoded({extended: false})); // config middleware bodyParser
app.use(serverRoutes); // config middleware serveRouter
app.use(unidadesEcoRoutes); // config middleware unidadesEcoRouter 
app.use(vacantesRoutes); // config middleware vacantesRouter
app.use(canInternosRoutes); // config middleware canInternosRouter
app.use(canExternosRoutes); // config middleware canExternosRouter


// Cualquier middleware que sea utilizdo desde el script incial es utilizado en los modulos que lo utilicen, por ejemplo, router y controller


app.listen(PORT, ()=> {
    console.log("CGTIE - Escuchando en puerto: "+ PORT)
});
