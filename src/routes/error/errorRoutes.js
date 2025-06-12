'use strict'
const express = require ('express');
const responseWeb = require ('../../web/response.js');
const router = express.Router ();
router.get (/(.*)/, (req, res) => {
    res.render ('errorPage.html');
    responseWeb.error (req, res, 'Page not found', 404);
});
module.exports = router;