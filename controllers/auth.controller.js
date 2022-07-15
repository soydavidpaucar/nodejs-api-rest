const usersModel = require('../models/nosql/users.model');
const { signToken } = require('../utils/handle-jwt.util');
const { encryptPassword } = require('../utils/handle-password.util');

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

module.exports = { registerUser };
