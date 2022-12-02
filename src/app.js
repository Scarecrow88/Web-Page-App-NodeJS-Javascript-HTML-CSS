'use strict'
const express = require ('express');
const morgan = require ('morgan');
let pathRoutes = require ('./routes/index.js');
let pathPublic = express.static (`${__dirname}/public`);
let viewURL = `${__dirname}/views`;
let port = (process.env.PORT || 3000);
let app = express ();
app
    // Configuracion
    .set ('port', port)
    .set ('views', viewURL)
    .set ('view engine', 'ejs')
    .engine ('html', require ('ejs').renderFile)
    // Rutas
    .use ('/', pathRoutes)
    // Archivos estaticos
    .use (pathPublic)
    .listen (port, () => {
        console.clear ();
        console.log ('Server on port ' + port);
    });