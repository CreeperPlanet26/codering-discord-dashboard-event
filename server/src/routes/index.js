const express = require('express');

const router = express.Router();

router.use('/prefix', require('./prefix'));

module.exports = router;
