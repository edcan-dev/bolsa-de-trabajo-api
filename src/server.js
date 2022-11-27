const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const serverRouter =  require ('./routes/server.routes.js');
const unidadesEcoRoutes = require('./routes/unidades-eco.routes.js');
const vacantesRouter = require('./routes/vacantes.routes.js');

const PORT = process.env.PORT || 3000; // process.env.PORT devuelve un puerto dis

//app.use(express.json());
app.use(bodyParser.urlencoded({extended: false})); // config middleware bodyParser
app.use(serverRouter); // config middleware serveRouter
app.use(unidadesEcoRoutes); // config middleware unidadesEcoRouter 
app.use(vacantesRouter); // config middleware vacantesRouter


// Cualquier middleware que sea utilizdo desde el script incial es utilizado en los modulos que lo utilicen, por ejemplo, router y controller


app.listen(PORT, ()=> {
    console.log("CGTIE - Escuchando en puerto: "+ PORT)

});
