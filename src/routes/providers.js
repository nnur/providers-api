const express = require('express');
const { getProviders } = require('./../models/providers');
const validateQueryParams = require('./../middleware/validations');

const router = express.Router();

router.get('/', validateQueryParams, (req, res) => {

  getProviders(req.query)
    .then(result => res.send(result))
    .catch(error => res.status(500).send(error));
});

module.exports = router;
