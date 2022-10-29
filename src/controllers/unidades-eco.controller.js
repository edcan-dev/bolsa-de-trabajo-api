const googleUnidadesEco = require('../google-api/unidades-eco.google-api'); // goo = funciones de la API de Google

// FUNCIONES ASINCRONAS A LA API DE GOOGLE

async function getUnidadesEco(req,res) {
    console.log("obteniendo");

    const resultado = await googleUnidadesEco.sheetsAutomateGet();

    const respuestaJSON = JSON.stringify(Object.assign({}, resultado))

    res.send(respuestaJSON);
    console.log(respuestaJSON);

}

async function postUnidadesEco(req,res) {
    console.log("posteando");

    // const insertEjemplo = [[
    //     "25/10/2022 10:10:59",
    //     "Ejemplo_3",
    //     "Ejemplo_3",
    //     "Ejemplo_3",
    //     "Ejemplo_3",
    //     "030303",
    //     "030303",
    //     "Ejemplo_3",
    //     "Ejemplo_3",
    //     "Ejemplo_3",
    //     "Ejemplo_3"
    //   ]];
    //const resultado = await googleUnidadesEco.sheetsAutomatePost(insertEjemplo);
    //console.log(resultado);
    //res.json(resultado);
}

module.exports = { getUnidadesEco, postUnidadesEco};