'use strict'
const express = require ('express');
const responseWeb = require ('../../web/response.js');
const router = express.Router ();
router.get ('/about', (req, res) => {
    res.render ('about.html');
    responseWeb.success (req, res, 'About page loaded', 200);
});
module.exports = router;