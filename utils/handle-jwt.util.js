const jwt = require('jsonwebtoken');

const signToken = (user) => {
	const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '5h' });
	return token;
};

const verifyToken = (token) => {
	const decoded = jwt.verify(token, process.env.JWT_SECRET);
	return decoded;
};

module.exports = { signToken, verifyToken };
