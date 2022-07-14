const Joi = require('joi');

const validatorCreateTrack = Joi.object().keys({
	name: Joi.string().required(),
	album: Joi.string().required(),
	cover: Joi.string().required(),
	artist: {
		name: Joi.string().required(),
		nickname: Joi.string().required(),
		nationality: Joi.string().required()
	},
	duration: {
		start: Joi.number().required(),
		end: Joi.number().required()
	},
	mediaId: Joi.string().hex().length(24)
});

module.exports = { validatorCreateTrack };
