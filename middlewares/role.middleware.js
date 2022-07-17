const checkRole = (roles) => (request, response, next) => {
	const { user } = request;
	const { role: userRole } = user;

	const checkUserRoles = roles.some((role) => userRole.includes(role));

	if (checkUserRoles) {
		next();
	} else {
		return response.status(401).send({ status: 401, message: 'You are not authorized to access this resource', error: 'Unauthorized' });
	}
};

module.exports = checkRole;
