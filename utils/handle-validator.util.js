const validator = (schema) => (req, res, next) => {
	const { error, value } = schema.validate(req.body, {
		abortEarly: false,
		errors: {
			wrap: {
				label: ''
			}
		}
	});
	if (error) {
		return res.status(400).json({ status: 400, message: error.details.map((e) => e.message), error: 'Bad Request' });
	}
	return next();
};

module.exports = validator;
