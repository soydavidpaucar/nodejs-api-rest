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
		response.status(400).send({ error: error.details.map(({ message }) => message) });
	} else {
		request.body = value;
		next();
	}
};

module.exports = validator;
