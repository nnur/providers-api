const express = require('express');
const providerController = require('./providers');
const router = express.Router();


router.use('/providers', providerController);

module.exports = router;