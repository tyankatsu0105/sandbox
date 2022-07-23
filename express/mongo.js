const mongoose = require('mongoose');
const DB_URI = 'mongodb://localhost:27017/local_library';
mongoose.connect(DB_URI, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.Promise = global.Promise;

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
