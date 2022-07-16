const usersModel = require('../models/nosql/users.model');
const { signToken } = require('../utils/handle-jwt.util');
const { encryptPassword, comparePassword } = require('../utils/handle-password.util');

const registerUser = async (request, response) => {
	const { password } = request.body;
	const hashedPassword = await encryptPassword(password);

	const body = { ...request.body, password: hashedPassword };
	const userData = await usersModel.create(body);
	userData.set('password', undefined);

	const data = {
		token: signToken(userData),
		user: userData
	};

	return response.send(data);
};

const loginUser = async (request, response) => {
	const user = await usersModel.findOne({ email: request.body.email }).select('+password');

	if (!user) {
		return response.status(401).send({ message: 'User not found' });
	}
	const hashPassword = user.password;

	const comparePasswords = await comparePassword(request.body.password, hashPassword);

	if (!comparePasswords) {
		return response.status(401).send({ message: 'Password incorrect' });
	}

	user.set('password', undefined);

	const data = {
		token: signToken(user),
		user: user
	};

	return response.send(data);
};

module.exports = { registerUser, loginUser };
