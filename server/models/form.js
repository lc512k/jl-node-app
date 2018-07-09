const mongoose = require('mongoose');

const formSchema = mongoose.Schema({
	name: String,
	email: {
		type: String,
		unique: true
	},
	country: String,
	gdpr: String
});

module.exports = mongoose.model('Form', formSchema);