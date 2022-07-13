const mongoose = require('mongoose');

const storageSchema = new mongoose.Schema(
	{
		url: String,
		filename: String
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('Storage', storageSchema);
