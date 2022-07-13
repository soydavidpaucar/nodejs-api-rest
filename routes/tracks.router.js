const express = require('express');
const { getTracks } = require('../controllers/tracks.controller');
const router = express.Router();

router.get('/', getTracks);

module.exports = router;
