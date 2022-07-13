require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoDbConnect = require('./config/mongo.config');

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

/**
 * Here invocates the routes
 */
app.use('/api', require('./routes'));

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});

mongoDbConnect();
