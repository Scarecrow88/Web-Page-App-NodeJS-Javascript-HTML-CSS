'use strict'
const express = require ('express');
const responseWeb = require ('../../web/response.js');
const router = express.Router ();
router.get ('/', (req, res) => {
    res.render ('index.html');
    responseWeb.success (req, res, 'Landing page loaded', 200);
});
module.exports = router;