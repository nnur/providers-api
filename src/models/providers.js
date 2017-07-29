const connection = require('./../config/connection');

function getProviders(params) {
  const query = _buildQuery(params);
  return new Promise((resolve, reject) => {
    connection.db.collection('providers').find(query).toArray((err, result) => {
      if (err) reject(err);

      resolve(result);
    });
  });
}

function _buildQuery(params) {
  const query = {};
  Object.keys(params).forEach(key => {
    const value = params[key];
    switch(key) {
      case 'max_discharges':
        query['Total Discharges'] = Object.assign(
          {}, query['Total Discharges'], { $lte: value }
        );
        break;
      case 'min_discharges':
        query['Total Discharges'] = Object.assign(
          {}, query['Total Discharges'], { $gte: value }
        );
        break;
      case 'max_average_covered_charges':
        query['Average Covered Charges'] = Object.assign(
          {}, query['Average Covered Charges'], { $lte: value }
        );
        break;
      case 'min_average_covered_charges':
        query['Average Covered Charges'] = Object.assign(
          {}, query['Average Covered Charges'], { $gte: value }
        );
        break;
      case 'max_average_medicare_payments':
        query['Average Medicare Payments'] = Object.assign(
          {}, query['Average Medicare Payments'], { $lte: value }
        );
        break;
      case 'min_average_medicare_payments':
        query['Average Medicare Payments'] = Object.assign(
          {}, query['Average Medicare Payments'], { $gte: value }
        );
        break;
      case 'state':
        query['Provider State'] = Object.assign(
          {}, query['Provider State'], { $eq: value }
        );
        break;
      default:
        break;
    }
  });

  return query;
}


module.exports = {
  getProviders
}