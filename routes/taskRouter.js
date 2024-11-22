const express = require('express');
const router = express.Router();
const path = require('node:path');

router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname, '../views/tareas.html'))
});


module.exports = router;