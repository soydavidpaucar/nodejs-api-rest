const Joi = require('joi');

const validatorGetStorageById = Joi.object().keys({
	id: Joi.string().hex().length(24).required()
});

module.exports = { validatorGetStorageById };
