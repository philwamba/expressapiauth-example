const mongoose = require('mongoose');

const { MONGODB_URI } = require('../config')

mongoose.connect(MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = () => {
  const db = mongoose.connection;
  
  db.on('error', (error) => {
    console.log(error);
  });
  
  db.once('open', () => console.log('Success connecting to database!'));
}

module.exports = connect;
