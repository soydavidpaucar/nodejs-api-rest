const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: String,
		age: Number,
		email: { type: String, unique: true },
		password: String,
		role: {
			type: ['user', 'admin'],
			default: 'user'
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('User', userSchema);
