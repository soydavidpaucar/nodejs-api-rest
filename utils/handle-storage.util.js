const crypto = require('crypto');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (request, file, callback) => {
		const storagePath = `${__dirname}/../storage`;
		callback(null, storagePath);
	},
	filename: (request, file, callback) => {
		const extension = file.originalname.split('.').pop();
		const fileName = `${crypto.randomUUID()}.${extension}`;
		callback(null, fileName);
	}
});

const uploadMiddleware = multer({ storage });

module.exports = uploadMiddleware;
