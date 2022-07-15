const validator = (schema) => (request, response, next) => {
	const { error, value } = schema.validate(request.body, {
		abortEarly: false,
		stripUnknown: {
			objects: true,
			arrays: true
		},
		convert: false,
		errors: {
			wrap: {
				label: ''
			}
		}
	});
	if (error) {
		return response.status(400).json({ status: 400, message: error.details.map((e) => e.message), error: 'Bad Request' });
	} else {
		request.body = value;
		return next();
	}
};

const validatorParamId = (schema) => (request, response, next) => {
	const { error, value } = schema.validate(request.params, {
		abortEarly: false,
		stripUnknown: {
			objects: true,
			arrays: true
		},
		convert: false,
		errors: {
			wrap: {
				label: ''
			}
		}
	});
	if (error) {
		return response.status(400).json({ status: 400, message: error.details.map((e) => e.message), error: 'Bad Request' });
	} else {
		request.params = value;
		return next();
	}
};

module.exports = { validator, validatorParamId };
