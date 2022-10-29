const express = require('express');
const app = express();

const serverRouter = require('./routes/server.routes.js');
const unidadesEcoRouter = require('./routes/unidades-eco.routes');

const PORT = process.env.PORT || 3000;

app.use(serverRouter);
app.use(unidadesEcoRouter);

app.listen(PORT, ()=>{console.log("Corriendo es 127.0.0.1:" + PORT)});