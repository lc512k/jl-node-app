const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/formdb', { useNewUrlParser: true });
// the option for useNewURLParser removes the deprecation warning