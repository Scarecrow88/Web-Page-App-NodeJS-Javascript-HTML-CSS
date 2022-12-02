'use strict'
const express = require ('express');
const router = express.Router ();
router.get ('/', (req, res) => {
    res.render ('index.html');
});
router.get ('/about', (req, res) => {
    res.render ('about.html');
});
router.get ('/contact', (req, res) => {
    res.render ('contact.html');
})
module.exports = router;