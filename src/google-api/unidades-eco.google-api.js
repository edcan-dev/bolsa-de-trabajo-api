const fs = require('fs');
const {google} = require('googleapis');
const {GoogleAuth} = require('google-auth-library');

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

const auth = new GoogleAuth(
    {keyFile: "./src/google-api/credentials.json",
    scopes: SCOPES
});

// ESTA FUNCION LEE LA HOJA DE CALCULO
async function sheetsAutomateGet() {

    const client = await auth.getClient();
    const sheets = google.sheets({ version:"v4", auth:client });

    const getRows = await sheets.spreadsheets.values.get({
        auth,
        spreadsheetId: "1aHT-PS82AUyetqzNh8Q2Wt1BwG0fg1wYp_Jbok_DCSU",
        range:"Respuestas de formulario 1!A:K",
    });
    return getRows.data.values;
    /*
    El metodo getRows nos retorna un arreglo con las filas de nuestra hoja de calculo
    incluye la fila de encabezado (indice[0])

    Los registro comienzan en el indice[1]
    */

}

async function sheetsAutomatePost(userPostData) {

    const client = await auth.getClient();
    const sheets = google.sheets({ version:"v4", auth:client });

    const postRows = await sheets.spreadsheets.values.append({
        auth,
        spreadsheetId: "1aHT-PS82AUyetqzNh8Q2Wt1BwG0fg1wYp_Jbok_DCSU",
        range:"Respuestas de formulario 1!A:K",
        valueInputOption: 'USER_ENTERED',
        resource: {
            values: userPostData,
        },
    });
    return postRows.data.values;
    /*
    Los inserts siguen el formato
    [ 
        ["fila1 valor1","fila1 valor2","fila1 valor3"] 
        ["fila2 valor1","fila2 valor2","fila2 valor1"] 
    ]


    */
}

module.exports = { sheetsAutomateGet, sheetsAutomatePost };