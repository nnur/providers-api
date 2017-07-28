const MongoClient = require('mongodb').MongoClient;

let db;

function connect(mongoURL) {
  return new Promise((resolve, reject) => {
    MongoClient.connect(mongoURL, (err, _db) => {
      if (err) reject(err);
      db = _db;
      resolve(_db);
    });
  });
}

module.exports = {
  connect,
  get db() {
    return db;
  }
};
