require('dotenv').config();
const { connect } = require('./../src/connection');
const app = require('./../src/app');

let _app;
let _db;

module.exports = {
  start() {
    return new Promise((resolve) => {
      connect(process.env.MONGO_URI_TEST).then((db) => {
        _db = db;
        _app = app.listen(process.env.TEST_PORT, () => {
          resolve(_app);
        });
      });
    });
  },

  stop() {
    _app.close();
  },

  dropDb() {
    _db.collection('providers').drop();
  },

  addToDb(list) {
    return _db.createCollection('providers').then(() => _db.collection('providers').insertMany(list));
  }
};
