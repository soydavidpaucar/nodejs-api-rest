const mongoose = require('mongoose');

const databaseConnect = () => {
	const DB_URI = process.env.MONGODB_URI;
	mongoose
		.connect(DB_URI)
		.then(() => {
			console.log('Connected to MongoDB');
		})
		.catch((err) => {
			console.log('Error connecting to MongoDB: ', err);
		});
};

module.exports = databaseConnect;
