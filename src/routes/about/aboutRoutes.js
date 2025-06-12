'use strict'
const express = require ('express');
const responseWeb = require ('../../web/response.js');
const router = express.Router ();
router.get ('/contact', (req, res) => {
    res.render ('contact.html');
    responseWeb.success (req, res, 'Contact page loaded', 200);
})
module.exports = router;