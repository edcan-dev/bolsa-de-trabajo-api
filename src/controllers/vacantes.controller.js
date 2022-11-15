const googleSheets = require('../google-api/googleSheets-api.js'); // goo = funciones de la API de Google

// DATOS DE LA HOJA DE VACANTES
const vacantesURL = '1jWtWT8FqSZCOkhYJckZB8Rimx0P0j9FqbVOdazhY6CQ';
const vacantesRange = 'Hoja 1!A:O';

// FUNCIONES ASINCRONAS A LA API DE GOOGLE

async function getVacantes(req,res) {
    console.log("Obteniendo Vacantes");
    const resultado = await googleSheets.sheetsAutomateGet(vacantesURL,vacantesRange);
    const respuestaJSON = JSON.stringify(Object.assign({}, resultado));
    res.send(respuestaJSON);
}

async function postVacantes(req,res) {
    console.log("Posteando Vacantes");
    
    //console.log(Object.values(req.body));

    const registroAInsertaer =[];
    registroAInsertaer.push(Object.values(req.body));
    const insertEjemplo = [[
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123",
        "qwe123"
    ]];
    await googleSheets.sheetsAutomatePost(vacantesURL,vacantesRange,registroAInsertaer);
    //res.json(resultado);
    res.send(req.body)
}

// req.body es un objeto de Javascript
// Debe ser convertido a un arreglo para ser insertado al Spreadshee

module.exports = { getVacantes, postVacantes };


    //const resultado = await googleUnidadesEco.sheetsAutomatePost(insertEjemplo);
    //console.log(resultado);
    //res.json(resultado);