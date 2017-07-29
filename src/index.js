require('dotenv').config();

const { connect } = require('./config/connection');
const app = require('./app');

const MONGO_URI = process.env.MONGO_URI;

const port = process.env.PORT || 8000;

connect(MONGO_URI).then(() => {
  app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
});
