const Joi = require('joi');

const validatorRegisterUser = Joi.object().keys({
	name: Joi.string().required().min(2).max(99),
	age: Joi.number().integer().required(),
	email: Joi.string().email().required(),
	password: Joi.string().required().min(8).max(64)
});

const validatorLoginUser = Joi.object().keys({
	email: Joi.string().email().required(),
	password: Joi.string().required().min(8).max(64)
});

module.exports = { validatorRegisterUser, validatorLoginUser };
