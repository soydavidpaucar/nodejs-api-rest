const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
	{
		name: String,
		age: Number,
		email: { type: String, unique: true },
		password: { type: String, select: false },
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
