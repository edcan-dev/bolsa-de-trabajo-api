const googleSheets = require('../google-api/googleSheets-api.js'); // goo = funciones de la API de Google

// DATOS DE LA HOJA DE VACANTES
const vacantesURL = '1jWtWT8FqSZCOkhYJckZB8Rimx0P0j9FqbVOdazhY6CQ';
const vacantesRange = 'Hoja 1!A:Q';

// FUNCIONES ASINCRONAS A LA API DE GOOGLE

async function getVacantes(req,res) {
    console.log("Obteniendo Vacantes");
    const resultado = await googleSheets.sheetsAutomateGet(vacantesURL,vacantesRange);
    const respuestaJSON = JSON.stringify(Object.assign({}, resultado));
    res.send(respuestaJSON);
}

async function postVacantes(req,res) {
    console.log("Posteando Vacantes");


    const fila = Object.values(req.body);
    const fecha = new Date().toLocaleDateString();
    fila.push(fecha);
    const registroAInsertar =[];
    registroAInsertar.push(fila);        
    //await googleSheets.sheetsAutomatePost(vacantesURL,vacantesRange,registroAInsertar);    
    
    console.log(req.body);
    res.json(req.body);


    // Aquí verificamos si existen comas en alguno de los valores del body
    // Object.values(req.body).forEach(value => {
    //     if(value.includes(',')) {
    //         coma = true;
    //     }
    // });

    // if(coma) {
    //     console.log("Se encontró una coma");
    //     res.redirect(`${req.headers.origin}/coma`);
    //     res.end();
    // } else {
    // }
}

// req.body es un objeto de Javascript
// Debe ser convertido a un arreglo para ser insertado al Spreadshee

module.exports = { getVacantes, postVacantes };


    //const resultado = await googleUnidadesEco.sheetsAutomatePost(insertEjemplo);
    //console.log(resultado);
    //res.json(resultado);