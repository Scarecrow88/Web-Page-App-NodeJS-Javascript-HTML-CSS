'use strict'
const express = require ('express');
const morgan = require ('morgan');
const cors = require ('cors');
const config = require ('./config/config.js');
const homeRoutes = require ('./routes/home/homeRoute.js')
const contactRoutes = require ('./routes/contact/contactRoutes.js');
const aboutRoutes = require ('./routes/about/aboutRoutes.js');
const errorRoutes = require ('./routes/error/errorRoutes.js');
let pathPublic = express.static (`${__dirname}/public`);
let viewURL = `${__dirname}\\views`;
let app = express ();
app
    // Settigs
    .set ('port', config.app.port)
    .set ('views', viewURL)
    .set ('view engine', 'ejs')
    // Static files
    .use (pathPublic)
    // Middleware
    .use (morgan ('dev'))
    .use (cors ({
        origin: '*'
    }))
    .engine ('html', require ('ejs').renderFile)
    // Routes
    .use ('/', homeRoutes)
    .use ('/', contactRoutes)
    .use ('/', aboutRoutes)
    .use ('/', errorRoutes)
module.exports = app;