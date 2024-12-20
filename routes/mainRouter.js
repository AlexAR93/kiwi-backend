const express = require('express');
const path = require('node:path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});

module.exports = router;
