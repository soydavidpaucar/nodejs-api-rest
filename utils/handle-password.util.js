const argon2 = require('argon2');

const encryptPassword = async (plainPassword) => {
	return await argon2.hash(plainPassword);
};

const comparePassword = async (plainPassword, hashedPassword) => {
	return await argon2.verify(hashedPassword, plainPassword);
};

module.exports = { encryptPassword, comparePassword };
