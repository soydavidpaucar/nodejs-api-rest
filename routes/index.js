const express = require('express');
const fs = require('fs');
const router = express.Router();

const ROUTES_PATH = __dirname;

const removeExtension = (fileName) => {
	return fileName.split('.')[0];
};

const a = fs.readdirSync(ROUTES_PATH).filter((file) => {
	const name = removeExtension(file);
 
	if (name !== 'index') {
		router.use(`/${name}`, require(`./${file}`));
	}
});

module.exports = router;
