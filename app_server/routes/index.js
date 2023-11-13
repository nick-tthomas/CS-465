const express = require('express');
const router = express.Router();
const ctrlMain = require('../controlers/main');

/*Get home page */
router.get('/', ctrlMain.index)

module.exports = router;
