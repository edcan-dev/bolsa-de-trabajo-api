const express = require('express');
const app = express();
const bodyParser = require('body-parser');
//const cors = require('cors');

const serverRouter = require('./routes/server.routes.js');
const unidadesEcoRouter = require('./routes/unidades-eco.routes');

const PORT = process.env.PORT || 3000;

app.use(serverRouter);
app.use(unidadesEcoRouter);
//app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.listen(PORT, ()=>{console.log("Corriendo es 127.0.0.1:" + PORT)});




