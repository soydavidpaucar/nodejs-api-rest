const validator = (schema) => (request, response, next) => {
	const { error, value } = schema.validate(request.body, {
		abortEarly: false,
		errors: {
			wrap: {
				label: ''
			}
		}
	});
	if (error) {
		return response.status(400).json({ status: 400, message: error.details.map((e) => e.message), error: 'Bad Request' });
	}
	return next();
};

module.exports = validator;
