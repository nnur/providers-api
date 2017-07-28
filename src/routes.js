const express = require('express');
const connection = require('./connection');
const validateQueryParams = require('./validations');

const router = express.Router();

router.get('/providers', validateQueryParams, (req, res) => {
  const { 
    max_discharges, 
    min_discharges, 
    max_average_covered_charges, 
    min_average_covered_charges,
    max_average_medicare_payments,
    min_average_medicare_payments,
    state
  } = req.query;

  const query = {
    "Total Discharges": { 
      $gte: min_discharges,
      $lte: max_discharges
    },
    "Average Covered Charges": { 
      $gte: min_average_covered_charges,
      $lte: max_average_covered_charges
    },
    "Average Medicare Payments": { 
      $gte: min_average_medicare_payments,
      $lte: max_average_medicare_payments
    },
    "Provider State": {
      $eq: state
    }
  }

  Object.keys(query).forEach(key => {
    Object.keys(query[key]).forEach((innerKey) => {
      if (query[key][innerKey] === undefined) {
        delete query[key][innerKey];
      }
    });
    if (Object.keys(query[key]).length === 0) {
      delete query[key];
    }
  });

  connection.db.collection('providers').find(query).toArray((err, result) => {
    if (err) console.log(err)

    res.send(result);
  })

});

module.exports = router;
