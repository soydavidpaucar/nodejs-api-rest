const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema(
	{
		name: String,
		album: String,
		cover: {
			type: String,
			validate: {
				validator: (request) => {
					return true;
				},
				message: 'ERROR_URL'
			}
		},
		artist: {
			name: String,
			nickname: String,
			nationality: String
		},
		duration: {
			start: Number,
			end: Number
		},
		mediaId: {
			type: mongoose.Types.ObjectId
		}
	},
	{
		timestamps: true,
		versionKey: false
	}
);

module.exports = mongoose.model('Track', trackSchema);
