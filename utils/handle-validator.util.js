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
	}
	request.body = value;
	return next();
};

module.exports = validator;
