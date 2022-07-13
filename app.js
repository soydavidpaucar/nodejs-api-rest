require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoDbConnect = require('./config/mongo.config');

const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

mongoDbConnect();
