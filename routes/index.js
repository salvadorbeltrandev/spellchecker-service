const express = require('express');
const router = express.Router();
const spellCheckerRoutes = require('./spellchecker');

router.use('/spellcheck', spellCheckerRoutes);

module.exports = router;