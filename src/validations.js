const Joi = require('joi');

const querySchema = Joi.object().keys({
  max_discharges: Joi.number(),
  min_discharges: Joi.number(),
  max_average_covered_charges: Joi.number(),
  min_average_covered_charges: Joi.number(),
  max_average_medicare_payments: Joi.number(),
  min_average_medicare_payments: Joi.number(),
  state: Joi.string().length(2).regex(/[A-Z]/)
});

function validateQueryParams(req, res, next) {
  Joi.validate(req.query, querySchema, (error, value) => {
    if (error) {
      return res.status(400).json({
        name: error.name,
        message: error.details[0].message
      });
    }
    req.query = value;
    next();
  });
}

module.exports = validateQueryParams;
