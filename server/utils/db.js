const mongoose = require('mongoose');


//connect to db
const initDB = () => {
  mongoose.connect(process.env.MongoDB_URI, {
    useNewUrlParser: true,
  });

  //check the connection status of the DB
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'Unable to connect to MongoDB'));
  db.once('open', () => {
    console.log('Successfully connected to MongoDB');
  });
};

module.exports = initDB;