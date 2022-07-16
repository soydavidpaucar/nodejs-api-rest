const usersModel = require('../models/nosql/users.model');
const { verifyToken } = require('../utils/handle-jwt.util');

const sessionMiddleware = async (request, response, next) => {
	if (!request.headers.authorization) {
		return response.status(401).send({ message: 'No token provided' });
	}

	const token = request.headers.authorization.split(' ')[1];
	const decoded = verifyToken(token);

	if (!decoded._id) {
		return response.status(401).send({ message: 'Token invalid' });
	}

	const user = await usersModel.findById(decoded._id);

	request.user = user;

	next();
};

module.exports = sessionMiddleware;
