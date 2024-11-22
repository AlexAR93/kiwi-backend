const express = require('express');
const router = express.Router();
const path = require('node:path');

router.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/login.html'))
});

router.get('/register', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/register.html'))
});


module.exports = router;