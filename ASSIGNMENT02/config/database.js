const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://zeelrana1109:zeelrana1109@cluster0.p18pfij.mongodb.net/';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas!');
});

module.exports = db;
